import { useState, useEffect, useRef } from "react";
import woody from "../assets/woody-x.png";
import jogumen from "../assets/jogumen-o.png";
import { io } from "socket.io-client";
import IdDialog from "./IdDialog";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { FaCopy } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';

const BACKEND_URL ='https://tictoe-express-node.onrender.com' || 'http://localhost:5000'

// const BACKEND_URL = "http://localhost:5000";

const tictoe = () => {
  // self code
  const [boards, setboards] = useState([
    // {
    //   id: 1,
    //   value: "",
    // },
    // {
    //   id: 2,
    //   value: "",
    // },
    // {
    //   id: 3,
    //   value: "",
    // },
    // {
    //   id: 4,
    //   value: "",
    // },
    // {
    //   id: 5,
    //   value: "",
    // },
    // {
    //   id: 6,
    //   value: "",
    // },
    // {
    //   id: 7,
    //   value: "",
    // },
    // {
    //   id: 8,
    //   value: "",
    // },
    // {
    //   id: 9,
    //   value: "",
    // },
  ]);
  const [currentPlayer, setCurrentplayer] = useState("");
  const [winningMsg, setWinningMsg] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);

  //gemini code
  const [playerId, setPlayerId] = useState(
    localStorage.getItem("ticTacToePlayerId") || null
  );
  const [gameStatus, setGameStatus] = useState("waiting"); // 'waiting', 'active', 'X_wins', 'O_wins', 'draw'
  const [gameMessage, setGameMessage] = useState("Waiting for players...");
  const [gameId, setGameId] = useState(null); // The ID of the current game room
  const [inputGameId, setInputGameId] = useState("");
  const socketRef = useRef(null);
  const [gameMode, setGameMode] = useState("");
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const hasCopiedText = Boolean(copiedText);
  const isInitialMount = useRef(true);
  const [winningLine, setWinningLine] = useState([]);

  // gemini code

  useEffect(() => {
    // Initialize player ID if it doesn't exist
    if (!playerId) {
      const newPlayerId = `player_${Date.now()}_${Math.random()
        .toString(36)
        .substring(2, 9)}`;
      setPlayerId(newPlayerId);
      localStorage.setItem("ticTacToePlayerId", newPlayerId);
    }

    // Connect to the Socket.IO server
    socketRef.current = io(BACKEND_URL);

    // --- Socket Event Listeners ---

    // On successful connection
    //   socketRef.current.on('connect', () => {

    //       // Once connected, attempt to join a game or create one
    //       // In a real app, you'd have a lobby where players choose/create games
    //       // For now, let's just try to join a predefined game or create one.
    //       const storedGameId = localStorage.getItem('ticTacToeGameId');
    //         console.log('Connected to Socket.IO server!', socketRef.current.id, storedGameId);
    //       if (storedGameId) {
    //           socketRef.current.emit('joinGame', { gameId: storedGameId, playerId: playerId });
    //       } else {
    //           // If no stored game ID, create a new game
    //           socketRef.current.emit('joinGame', { playerId: playerId });
    //       }
    //   });

    //  // Event for when a new game is created (backend sends the ID)
    //   socketRef.current.on('gameCreated', ({ gameId: newGameId }) => {
    //       setGameId(newGameId);
    //       console.log('newGameId',newGameId)
    //       localStorage.setItem('ticTacToeGameId', newGameId); // Store for future sessions
    //       console.log(`New game created with ID: ${newGameId}`);
    //       setGameMessage(`Game created! Share ID: ${newGameId} to invite another player.`);
    //   });

    // Listen for game state updates from the server
    socketRef.current.on("gameStateUpdate", (game) => {
      console.log("Game state updated:", game);
      setboards(game.board);
      setCurrentplayer(game.currentPlayer);
      setGameStatus(game.status);
      setGameId(game._id); // Use custom gameId or MongoDB _id
      setWinningLine(game.winningLine || []);

      // Update message based on status
      if (game.status === "active") {
        setGameMessage(`Player ${game.currentPlayer}'s Turn`);
      } else if (game.status === "waiting") {
        setGameMessage(`Waiting for another player...${game._id}`);
      } else if (game.status.endsWith("_wins")) {
        setGameMessage(`Player ${game.winner} Wins!`);
      } else if (game.status === "draw") {
        setGameMessage("It's a Draw!");
      }
    });

    socketRef.current.on("invalidMove", ({ message }) => {
      console.warn("Invalid move:", message);
      // Optionally display a temporary error message to the user
      setGameMessage(`Invalid Move: ${message}`);
      setTimeout(() => {
        // Revert message after a short delay
        setGameMessage(`Player ${currentPlayer}'s Turn`);
      }, 2000);
    });

    socketRef.current.on("gameNotFound", ({ message }) => {
      console.error("Game Not Found:", message);
      setGameMessage(`Error: ${message}. Try creating a new game.`);
      localStorage.removeItem("ticTacToeGameId"); // Clear invalid ID
    });

    socketRef.current.on("gameError", ({ message }) => {
      console.error("Game Error:", message);
      setGameMessage(`Game Error: ${message}`);
    });

    // On disconnection
    socketRef.current.on(
      "disconnect",
      ({ gameId: gameId, playerId: playerId }) => {
        // localStorage.removeItem('ticTacToeGameId')
        // socketRef.current.emit('leaveGame', { gameId: gameId, playerId: playerId });
        console.log("Disconnected from Socket.IO server.");
        setGameMessage("Disconnected from game. Please refresh.");
      }
    );

    // --- Cleanup function (runs when component unmounts) ---
    // return () => {

    //       if (socketRef.current) {
    //         //socketRef.current.emit('leaveGame', { gameId: storedGameId, playerId: playerId });
    //         console.log('Disconnecting socket...');
    //         socketRef.current.disconnect({ gameId: gameId, playerId:playerId });

    //     }
    // };
  }, [playerId]);



  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false; // Set to false after the first render
      return; // Skip the effect for the initial render
    }

    const checkLocalId = localStorage.getItem("ticTacToeGameId");
  

    socketRef.current.emit("joinGame", { gameId: gameId, playerId: playerId });
  }, [gameId]);

  // --- Event handler for cell clicks ---
  const handleCellClick = (index) => {
    console.log("indexaa", gameId, index, boards);
    if (!gameId || gameStatus !== "active" || boards[index] !== "") {
      console.log(
        "Cannot make move: game not active, no game ID, or cell taken."
      );
      return;
    }
    // Emit 'makeMove' event to the server
    socketRef.current.emit("makeMove", { gameId, playerId, cellIndex: index });
  };

  // --- Event handler for reset button ---
  const handleResetGame = () => {
    if (gameId) {
      socketRef.current.emit("resetGame", { gameId, playerId });
    }
  };

  const enterId = (id) => {
    console.log("id", id);
    setGameId(id);
  };



  // self code
  const clickboards = (txt, id) => {
    console.log("cilcked", txt);
    setboards((prevboards) => [
      ...prevboards.map((cell) => {
        if (cell.id === id && cell.value === "") {
          return { ...cell, value: currentPlayer };
        }
        return cell;
      }),
    ]);
    setCurrentplayer(currentPlayer === "X" ? "0" : "X");
  };

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const checkWinner = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let winnerFound = false;

    winningCombos.forEach((array) => {
      let woodyWins = array.every((cell) => boards[cell].value === "X");
      console.log("Woody wins", woodyWins, array, boards);
      if (woodyWins) {
        setWinningMsg("Woody Wins!");
        winnerFound = true;
        setIsGameOver(true);
        return;
      }
    });
    // console.log('here')

    winningCombos.forEach((array) => {
      let brachioWins = array.every((cell) => boards[cell].value === "0");
      console.log("Brachio wins", brachioWins, array, boards);
      if (brachioWins) {
        setWinningMsg("Brachio Wins!");
        winnerFound = true;
        setIsGameOver(true);
        return;
      }
    });

    if (!winnerFound && boards.every((cell) => cell.value !== "")) {
      setWinningMsg("It's a Draw!");
      setIsGameOver(true);
    }
  };

  const idEmit = (data) => {
    console.log("idEmit", data);
    setGameMode("id");
    setGameId(data);
    localStorage.setItem("ticTacToeGameId", data);
  };

  const startGameWith = (isNewGame) => {
   
    if (isNewGame === "Load") {
      console.log("start Load game", isNewGame);
      const storedGameId = localStorage.getItem("ticTacToeGameId");
      console.log(
        "Connected to Socket.IO server!",
        socketRef.current.id,
        storedGameId
      );
      socketRef.current.emit("joinGame", {
        gameId: storedGameId,
        playerId: playerId,
      });
    } else if (isNewGame === "New") {
      console.log("start new game", isNewGame);
      // localStorage.removeItem('ticTacToeGameId');
      socketRef.current.emit("joinGame", { playerId: playerId });
    }

    socketRef.current.on("gameCreated", ({ gameId: newGameId }) => {
      setGameId(newGameId);
      console.log("newGameId", newGameId);
      localStorage.setItem("ticTacToeGameId", newGameId); // Store for future sessions
      console.log(`New game created with ID: ${newGameId}`);
      setGameMessage(
        `Game created! Share ID: ${newGameId} to invite another player.`
      );
    });
  };

 const notify = (id) => toast(`Copied id  ${id}`,{
  position: "top-right",
autoClose: 2500,
hideProgressBar: false,

 });

 const clickCopy = (id) => {
    notify(id)
    copyToClipboard(id)
 }

  return (


    <div className="game-container rounded-2xl bg-blue-200 p-3">
      <IdDialog idEmit={idEmit} startGameWith={startGameWith} />

      <h1 className="text-4xl font-bold mb-6 text-slate-50">Tic-Tac-Toe</h1>
      {gameId && (
        <div className="flex justify-center items-center">
          <div>
            <p className="text-sm text-gray-600 ">
              Game ID: <span className="font-semibold">{gameId} &nbsp; </span>{" "}
            </p>
          </div>
          <div className="cursor-pointer" onClick={() => clickCopy(gameId)}>
            <ToastContainer
      
            />
            <FaCopy />
          </div>
          <div>&nbsp; (Share this with opponent)</div>
        </div>
      )}
      <div className="flex justify-center">
   
      </div>
      <div className="player-info">
        <div
          className={`player ${
            currentPlayer === "X" ? "active text-red-400" : ""
          } flex justify-center`}
        >
          Player X
          <span
            className={`player ${currentPlayer === "X" ? "block" : "hidden"} `}
          >
            &nbsp; turn
          </span>
        </div>
        <div
          className={`player ${
            currentPlayer === "O" ? "active text-red-400" : ""
          } flex justify-center`}
        >
          Player O
          <span
            className={`player ${currentPlayer === "O" ? "block" : "hidden"}`}
          >
            {" "}
            &nbsp; turn
          </span>
        </div>
      </div>
      <div className="flex justify-center mt-3 ">
        <div
          className="flex mt-3 flex-wrap justify-center w-[10rem] bg-red-300 rounded-2xl border-dotted border-amber-200 border-2 " 
          id="gameBoard"
        >
          {boards.map((cell, index) => (
            <div
              key={index}
              className={`cell ${
                cell === "X" ? "x" : cell === "O" ? "o" : ""
              }  ${winningLine.includes(index) ? 'bg-blue-300' : ''} w-1/3 p-4 h-[50px] border border-amber-300 cursor-pointer text-white`}
              data-cell-index={index}
              onClick={() => handleCellClick(index)}
            >
              {cell}
            </div>
          ))}
        </div>
      </div>

      <div className="message mt-5" id="gameMessage">
        {gameMessage}
      </div>
      <button
        className="reset-button rounded p-2 bg-blue-300 text-white mt-5 cursor-pointer"
        id="resetButton"
        onClick={handleResetGame}
      >
        Reset Game
      </button>
    </div>
  );
};

export default tictoe;
