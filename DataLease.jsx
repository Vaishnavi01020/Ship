// Import React and CSS file
import React from 'react';
import './DataLease.css';

// Define a component for the interface
class DataLease extends React.Component {
  // Define the state for the lease duration
  constructor(props) {
    super(props);
    this.state = {
      duration: '1 day'
    };
  }

  // Define a handler for changing the lease duration
  handleDurationChange = (event) => {
    this.setState({
      duration: event.target.value
    });
  }

  // Define a handler for leasing the data
  handleLeaseClick = () => {
    // Add your logic for leasing the data here
    alert('You have leased the data for ' + this.state.duration);
  }

  // Define a handler for canceling the lease
  handleCancelClick = () => {
    // Add your logic for canceling the lease here
    alert('You have canceled the lease');
  }

  // Define the render method for the component
  render() {
    // Define the options for the lease duration
    const options = ['1 day', '7 days', '30 days', 'Custom'];

    // Return the JSX for the interface
    return (
      <div className="container">
        <div className="nav-bar">
        <h1>DataLeasing</h1>
        <ul>
          <li>Browse Datasets</li>
          <li>Host the Datasets</li>
         <button style={{backgroundColor:"dodgerblue"}}> <li>Connect Wallet</li></button>
          
        </ul>
      </div>
        <h2>Historical Ethereum Transactions</h2>
        <p>This dataset contains historical data for all Ethereum transactions, including timestamp, value, and gas. The dataset is updated hourly.</p>
        <div className="section">
          <h3>Description</h3>
          <p>The dataset is designed for analytical purposes. It includes historical data for all Ethereum transactions, including timestamp value and gas. The dataset is updated hourly. The data is presented in a CSV format which can be easily imported into most analytical tools.</p>
        </div>
        <div className="section">
          <h3>Price</h3>
          <p>The price is based on the amount of data leased. The minimum lease duration is 1 day. The price is $0.01 per GB per day.</p>
        </div>
        <div className="section">
          <h3>Lease Duration</h3>
          <div className="options">
            { // Use the map method to create a list of radio buttons from the options array
              options.map(option => (
                <div className="option" key={option}>
                  <input type="radio" id={option} name="duration" value={option} checked={this.state.duration === option} onChange={this.handleDurationChange} />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))
            }
          </div>
        </div>
        <div className="buttons">
          <button className="cancel" onClick={this.handleCancelClick}>Cancel</button>
          <button className="lease" onClick={this.handleLeaseClick}>Lease Now</button>
        </div>
      </div>
    );
  }
}

// Export the component
export default DataLease;
