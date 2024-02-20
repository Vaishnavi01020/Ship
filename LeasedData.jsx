// JSX code for LeasedData webpage

import React from 'react';
import { Card, Button } from 'antd';
import "./LeasedData.css"
import image1 from './Image1.jpeg';
import image2 from './Image2.jpeg';
import image3 from './Image3.jpeg';
//import SideBar from './SideBar';
const LeasedData = () => {
  return (
    <div className="leased-data">
      
      {/* <SideBar> */}
      <div className="main-content">
        <h2 style={{color:"black"}}>Leased Data</h2>
        <p>You currently have 3 active leases</p>
        <Button type="primary">New Lease</Button>
        <div className="active-leases">
          <Card title="Active Lease" bordered={false}>
            <img src={image1} alt="CryptoKitties" />
            <p><strong>CryptoKitties</strong></p>
            <p>Lease expires in 5 days</p>
            <Button type="default" style={{backgroundColor:"#c9b0c9",width:"20%"}}>Manage Lease</Button>
          </Card>
          <Card title="Active Lease" bordered={false}>
            <img src={image2} alt="Etherscan" />
            <p><strong>Etherscan</strong></p>
            <p>Lease expires in 10 days</p>
            <Button type="default" style={{backgroundColor:"#c9b0c9",width:"20%"}}>Manage Lease</Button>
          </Card>
          <Card title="Active Lease" bordered={false}>
            <img src={image3} alt="Uniswap" />
            <p><strong>Uniswap</strong></p>
            <p>Lease expires in 15 days</p>
            <Button type="default" style={{backgroundColor:"#c9b0c9",width:"20%"}}>Manage Lease</Button>
          </Card>
        </div>
      </div>
      {/* </SideBar> */}
    </div>
  );
};

export default LeasedData;
