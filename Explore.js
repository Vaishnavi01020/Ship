// JSX code for DataLeasing webpage

import React from 'react';
import { Card, Row, Col } from 'antd';
import "./Explore.css"
import image11 from './Image11.jpeg';
import image10 from './Image10.jpeg';
import image9 from './Image9.jpeg';
import image8 from './Image8.jpeg';
import image7 from './Image7.jpeg';
import image6 from './Image6.jpeg';
//import SideBar from './SideBar';

const Explore = () => {
  return (
    <div className="data-leasing">
        {/* <SideBar/> */}
      <div className="nav-bar">
        <h1 style={{color:"black"}}>DataLeasing</h1>
        <ul>
          <li>All</li>
          <li>Geospatial</li>
          <li>Health</li>
          <li>Finance</li>
          <li>Retail</li>
        </ul>
      </div>
      <div className="page-title">
        <h2 style={{color:"black"}}>Explore Datasets</h2>
      </div>
      <div className="newest-datasets">
        <h3>Newest Datasets</h3>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Global population data" bordered={false}>
              <img src={image6} alt="Global population data" />
              <p>$10,000 per month</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Cancer rates in the US" bordered={false}>
              <img src={image7} alt="Cancer rates in the US" />
              <p>$5,000 per month</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Retail sales by product category" bordered={false}>
              <img src={image8} alt="Retail sales by product category" />
              <p>$7,000 per month</p>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="most-popular">
        <h3>Most Popular</h3>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="US household income by zip code" bordered={false}>
              <img src={image9} alt="US household income by zip code" />
              <p>$15,000 per month</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Real-time stock prices" bordered={false}>
              <img src={image10} alt="Real-time stock prices" />
              <p>$12,000 per month</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Global weather patterns" bordered={false}>
              <img src={image11} alt="Global weather patterns" />
              <p>$8,000 per month</p>
            </Card>
          </Col>
        </Row>
        </div>
        {/* </SideBar> */}
    </div> 
  );
};

export default Explore;
