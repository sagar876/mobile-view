import React, { Component } from "react";
import Banner from "./banner";
import Bill from "./bill";
import TransactionCard from "./transactionCard";

export default class Dashboard extends Component {
  getBills = () => {
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push(<Bill />);
    }
    return data;
  };

  getUtilities = () => {
    const data = [];
    for (let i = 0; i < 8; i++) {
      data.push(
        <div className="util-item">
          <img src="../images/util.svg" />
          <p className="smallgreytxt">Prepaid</p>
        </div>
      );
    }
    return data;
  };

  getPartners = () => {
    const data = [];
    for (let i = 0; i < 8; i++) {
      data.push(
        <div className="util-item">
          <img src="../images/partner.svg" />
          <p className="smallgreytxt">Dunzo</p>
        </div>
      );
    }
    return data;
  };

  render() {
    return (
      <div className="dashboard-view">
        <Banner />
        <div className="bills-showcase">{this.getBills()}</div>

        <div className="page-section utlities-section">
          <h3 className="section-header">Rechare and pay bills.</h3>
          <div className="white-box flex-box">{this.getUtilities()}</div>
        </div>

        <div className="page-section partners-section">
          <h3 className="section-header">You can also use simpl on</h3>
          <div className="white-box flex-box">{this.getPartners()}</div>
        </div>

        <div className="page-section transactions-section">
          <h3 className="section-header">Recent transactions</h3>
          <div className="white-box flex-box">
            <TransactionCard />
          </div>
        </div>
        
      </div>
    );
  }
}
