import React from 'react';
import axios from 'axios';
import './email.css';


class Email extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      sent: false
    };
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    axios.post('http://137.74.198.167/email/', {'email': this.state.mail})
      .then(res => {
        console.log(res.data);
      })
    this.setState({sent: true, mail: ''})
  }

  render() {
    let msg;
    if (this.state.sent) {
      msg = <div class='success'><p align="center" id='su'>Mail enregistré avec succés</p></div>;
    }

    return(
      <div>

          {msg}
          <div className='central'>
            <form onSubmit={this.mySubmitHandler}>
            <div className='email'>
                <div className='title'>Votre mail</div>
                <input className='emailbody'type="email" name="mail" value={this.state.mail} onChange={this.myChangeHandler}></input>
                <input className='submitbutton' type="submit" value="Envoyer"></input>
            </div>
            </form>
          </div>
      </div>
    );
  }
}

export default Email;
