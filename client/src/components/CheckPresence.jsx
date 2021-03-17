import React from 'react';
import helpers from '../helpers/helpers.jsx'
import api from '../helpers/api.jsx'

class CheckPresence extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      linkedInLink: '',
      bad_formatting: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }



  handleChange(event) {
    this.setState({
      linkedInLink: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    
    let linkedInName = helpers.cleanLinkedIn(this.state.linkedInLink);

    if(!linkedInName) {
      this.setState({
        bad_formatting: true
      })
      return;
    } else {
      this.setState({
        bad_formatting: false
      })
    }

    api.getUserByLinkedIn(linkedInName, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        if (data.length === 0) {
          data = {empty: true}
        }
        this.props.setPersonData(data);
      }
    })

  }

  render() {

    return (
      <div>
        {/* <div>
          <h3>Welcome to the Endorsement Train</h3>
          Lets me check your ticket:
        </div> */}

        <form onSubmit={this.handleSubmit}>
          <label>
            Please Paste Linkedin Profile Link:
            <input type="text" value={this.state.linkedInLink} onChange={this.handleChange} />
          </label>
          {this.state.bad_formatting &&
            <span className="warning">Not a valid Linkedin url! Navigate to your Linkedin profile and copy the link directly from the browser.</span>
          }
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CheckPresence;
