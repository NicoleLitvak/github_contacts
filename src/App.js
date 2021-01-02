import React, { Component } from 'react';

import gitHubLogo from './gitHubLogo.png';
import Contacts from './components/contacts';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    state = {
        allContacts: [],
        contacts: [],
        currContacts: [],
        ifEmpty: true,
        userInput: ''
    }
    
    componentDidMount() {
        fetch('https://api.github.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({ allContacts: data })
            })
            .catch(console.log)
    }
    

    handleSearch(e) {
        
        this.setState({ userInput: e.target.value })
        this.state.userInput = e.target.value;
        this.state.currContacts.length = [];
        this.state.contacts.length = [];

        if (e.target.value == '')
            this.state.ifEmpty = true;
        
        else
            this.state.ifEmpty = false;
    }

    handleSubmit() {

        for (let i = 0; i < this.state.allContacts.length; i++) {
            if (this.state.allContacts[i].login.includes(this.state.userInput) && this.state.userInput  != '') 
                this.state.currContacts.push(this.state.allContacts[i]);
        }
        this.setState({ contacts: this.state.currContacts })
     }

    

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p className="headline">
                        Welcome to Usertrone!
                    </p>
                    <img src={gitHubLogo} className="App-logo" alt="logo" />

                    <div className="searchDiv">
                        <form className="search" noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Enter user query" onChange={this.handleSearch} />
                            <Button className="buttonStyle"  disabled={this.state.ifEmpty} onClick={this.handleSubmit}>
                                Search
                             </Button>
                        </form>
                    </div>
                    <center><h6 className="contactListStyle">{this.state.contacts.length} users found</h6></center>
                    <div className="contactStyle">
                        <Contacts contacts={this.state.contacts} />
                    </div>
                </header>
            </div>
        )
    }

}

export default App;
