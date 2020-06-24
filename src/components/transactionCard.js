import React from "react";

const TransactionCard = () => {
  return (
    <div className="util-item flex-box">
      <div className="left-div flex-box" >
        <img src="../images/zomato.svg" style={{marginRight:15}}/>
       <div>
        <p className="name">Zomato</p>
        <p className="details">
          <span style={{color:'#333'}}>May 24,</span> <span> 6:12 pm</span> <span> | </span>
          <span>Simpl pay later</span>
        </p>
       </div>
      </div>
      <div className="right-div">
        <span>250</span>
      </div>
    </div>
  );
};

export default TransactionCard;
