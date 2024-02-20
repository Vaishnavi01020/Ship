import React from 'react';
import { Input, Button, Steps } from 'antd';
import "./UploadDataset.css";
import{Link} from "react-router-dom";
const { Step } = Steps;

const UploadDataset = () => {
  return (
    <div className="upload-dataset">
      <div className="header">
        <h1>Data Lease</h1>
        <ul className="nav">
        <Link to="/Explore" ><li>Explore</li></Link> 
          <li>How it works</li>
          <li>Docs</li>
        </ul>
        <div className="search">
          <Input placeholder="Search" />
          <div className="icons">
            <i className="fas fa-user-circle"></i>
            <i className="fas fa-bell"></i>
          </div>
        </div>
      </div>
      <div className="content">
        <h2>Upload a new dataset</h2>
        <Steps current={0}>
          <Step title="Step 1" />
          <Step title="Step 2" />
          <Step title="Step 3" />
        </Steps>
        <form>
          <label>Title</label>
          <Input placeholder="Enter a title for your dataset" />
          <label>Description</label>
          <Input placeholder="Enter a description for your dataset" />
          <label>Price (per month)</label>
          <Input placeholder="Enter a price" />
          <label>Lease duration (months)</label>
          <Input placeholder="Enter duration" />
          <div className="buttons">
            <Button type="default">Back</Button>
            <Button type="primary">Continue</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadDataset;
