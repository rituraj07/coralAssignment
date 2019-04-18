import React from 'react';
import { Link } from "react-router-dom";
import Header from "./Header"
class MainPage extends React.Component {
    constructor(){
        var dtt= new Date().toISOString()
        super()
        this.state={
         username:"",
         password:"",
         email:"",
         phone:"",
         dt: new Date().toISOString(),
         msg:""
         }
        this.handelChange = this.handelChange.bind(this);
      }

    handelChange(event){
        const {name,value}=event.target
        this.setState({
          [name]:value
        })
      }

    submitForm =async (e) => {
        this.setState({msg:"Please wait..."})
        e.preventDefault();
        const headers = new Headers()
      headers.append('Content-Type','application/json')
      const options={
        method:'POST',
        headers,
        body:JSON.stringify(this.state)
      };
      var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
       targetUrl = 'https://coraltest.herokuapp.com/insert'
          
      const request = new Request(proxyUrl + targetUrl,options);
      const res= await fetch(request)
      .then(response => response.json())
      .then((responseData) =>{
        //alert(responseData.msg);
        this.setState({msg:responseData.msg,username:"",email:"",password:"",phone:""})
      });
      }

    render(){
        const divStyle={
            width: '30%', margin: '40px auto',
        }
        const alertStyle={
            textAlign: 'center'
        }
        const containerStyle={
            paddingLeft: '0px'
        }
    return(
        <div class="container">
          <Header/>



    
    {this.state.msg==="Please wait..." &&
        <div style={alertStyle} class="alert alert-danger" role="alert">
       {this.state.msg}
      </div>
    }
    { this.state.msg==="Record added sucessfully" &&
        <div style={alertStyle} class="alert alert-success" role="alert">
  {this.state.msg}
</div>
    }
<div class="row"> 
<div   style={divStyle}>
<center><h1>Login</h1></center>
<form onSubmit={this.submitForm}>
   <div class="form-group">
       <input class="form-control" value={this.state.username}  type="text" name="username" placeholder="Username"  onChange={this.handelChange} required></input>
    </div>
    <div  class="form-group">
        <input class="form-control" value={this.state.password} type="password" name="password" placeholder="Password"  onChange={this.handelChange} required></input>
    </div>
    <div class="form-group">
       <input class="form-control" value={this.state.email}  type="email" name="email" placeholder="Email Id"  onChange={this.handelChange} required></input>
    </div>
    <div class="form-group">
       <input class="form-control" value={this.state.phone}  type="tel" pattern="^\d{10}$" name="phone" placeholder="Phone Number"  onChange={this.handelChange} required></input>
    </div>
    <div class="form-group">
        <button class="btn btn-primary btn-large btn-block">Insert</button>    
    </div>
</form>
    </div>
    </div>
        </div>

    );}
};
export default MainPage;