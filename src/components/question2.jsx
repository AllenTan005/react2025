import React from 'react'
 import "../styles.css";
import {  Link } from 'react-router-dom';

const question2 = () => {
  return (
<div class="container">
 <div class="header">5/8 外出確認表</div>
 <div class="content">
 <ol id="list1" class="shop-list">
 <li class="item">麵包</li>
 <li class="item">短袖衣服</li>
 <li class="item">飲用水</li>
 <li class="item">帳篷</li>
 </ol>
 <ul  id="list2" class="shop-list">
 <li class="item">暈車藥</li>
 <li class="item">感冒藥</li>
 <li class="item">丹木斯</li>
 <li class="item">咳嗽糖漿</li>
 </ul>
 </div>
 <div class="footer">以上僅共參考</div>

      <div style={{ display:"flex", justifyContent:"space-between" }} >
        
              <Link to="/Q1">Previous</Link>
           
              <Link to="/Q3">Next</Link>
            
         </div>
 </div>

 
  )
}

export default question2
