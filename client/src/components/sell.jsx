import React, {Component} from 'react';
import '../Stylesheet/SignUp.css';
import axios from 'axios';
export default class Upload extends Component {

constructor(props) {
    super(props);
        this.state = {
            name: '',
            image: '',
            owner: '',
            email: '',
        }

        this.submit = this.submit.bind(this);
        this.handleForm = this.handleForm.bind(this);
    };


handleForm=(e)=>{
    this.setState({
        [e.target.id]:e.target.files? e.target.files[0]:e.target.value
    }); 
}



submit(e){
    e.preventDefault();
    const data = new FormData();
    data.append('email',this.state.email);
    data.append('product',this.state.product);
    data.append('owner',this.state.owner);
    data.append('image',this.state.image);
    console.log(this.state);
  axios
    .post('http://localhost:5000/api/upload',data)
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
                <label>Owner</label>
                <input 
                type="text" 
                placeholder="Enter your name"
                id="owner"   
                onChange={this.handleForm} 
                />
                <label>Email</label>
                <input 
                type="text" 
                placeholder="Enter your email"
                id="email"   
                onChange={this.handleForm} 
                />
                <label>Photo</label>
                <input 
                type="file" 
                placeholder="Enter your photo"
                id="image"
                onChange={this.handleForm}
                />
                <label>Product Name</label>
                <input 
                type="text"
                placeholder="Product Name"
                id="product"
                onChange={this.handleForm}
                 />
                


                <button 
                type="submit"
                onClick={this.submit}
                >Submit</button>
            </form>
        </div>
    );
}
}
    

