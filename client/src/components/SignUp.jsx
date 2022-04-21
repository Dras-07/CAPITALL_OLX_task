import React, {Component} from 'react';
import '../Stylesheet/SignUp.css';
import axios from 'axios';
export default class SignUp extends Component {

constructor(props) {
    super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            verifyPassword: '',
        }

        this.submit = this.submit.bind(this);
        this.handleForm = this.handleForm.bind(this);
    };


handleForm=(e)=>{
    this.setState({
        [e.target.id]:e.target.value
    }); 
}



submit(e){
    e.preventDefault();
    const data = new FormData();
    data.append('email',this.state.email);
    data.append('password',this.state.password);
    data.append('name',this.state.name);
    data.append('verifiedPassword',this.state.verifiedPassword);
    console.log(this.state);
  axios
    .post('http://localhost:5000/api/user-signup',data)
        .then((response) => {
        alert(response.data.msg);
    })
        .catch(error=>{
            console.log(error);
         alert(error.response.data.msg);
    });
}
render() {
    return (
    <div className="SignUp_Container">
            <form className="SignUp_form">
                <label>Name</label>
                <input 
                type="text" 
                placeholder="Enter your name"
                id="name"   
                onChange={this.handleForm} 
                />
                <label>Email</label>
                <input 
                type="email" 
                placeholder="Enter your email"
                id="email"
                onChange={this.handleForm}
                />
                <label>Password</label>
                <input 
                type="password"
                 placeholder="Enter your password"
                    id="password"
                    onChange={this.handleForm}
                 />
                <label>Verify Password</label>
                <input 
                type="password" 
                placeholder="Verify your password"
                id="verifyPassword"
                onChange={this.handleForm}
                />


                <button 
                type="submit"
                onClick={this.submit}
                >Sign Up</button>
            </form>
        </div>
    );
}
}
    

