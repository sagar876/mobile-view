import React from "react";
import PrimaryButton from "./primaryButton";

const Bill = () => {
  return (
    <div className="bill">
      <div className="flex-box">
        <div>
          <img src="../images/logo.svg" />
        </div>
        <div>
          <p className="warning-text">
            <span>BILL OVERDUE</span>
          </p>
        </div>
      </div>
      <div className="flex-box">
        <div>
          <p className="grey-txt">spent till now</p>
          <p className="amount">1800</p>
        </div>
        <div>
          <p className="grey-txt">due date</p>
          <p className="date">15 aug</p>
        </div>
      </div>
      <div className="" style={{ display: "flex" }}>
        <PrimaryButton
          className="bill-btn"
          label="PAY ₹1500"
          style={{
            background: "linear-gradient(90deg, #00D1C1 0%, #00D1DC 100%)",
            borderRadius: 4,
            border: 0,
            color: "#fff",
            width: "100%",
            padding: "10px 35px",
            cursor:'pointer'
          }}
        />
      </div>
    </div>
  );
};
export default Bill;
