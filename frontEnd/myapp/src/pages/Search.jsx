import React from 'react';
import { Link } from "react-router-dom";
import Header from "./Header"
class Search extends React.Component {
    constructor(){
        var dtt= new Date().toISOString()
        super()
        this.state={
         email:"",
         username:"",
         password:"",
         phone:"",
         dateTime:"",
         msg:"",
         result:[]
         }
        this.handelChange = this.handelChange.bind(this);
      }

    handelChange(event){
        const {name,value}=event.target
        this.setState({
          [name]:value
        })
      }

    search =async (e) => {
        this.setState({msg:"Please wait..."})
        e.preventDefault();
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://coraltest.herokuapp.com/search/?q='+this.state.email
        fetch(proxyUrl + targetUrl)
        .then(res => res.json())
        .then(data => {
          this.setState({
            msg:data.msg,
            result:data
          },function(){
              console.log(data.length);
            if(data.length==0)
            {this.setState({msg:"No"})
            }
            else{
                this.setState({msg:"Yes",email:""})
            }
            //for (var key in data) {
             //this.state.t.push(data[key].Title)
          // console.log(this.state.t)
           //}
          })
        })
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
        const resultStyle={
            paddingTop: '40px',
    fontSize: '18px'
        }
        const SubresultStyle={
            paddingTop: '20px',
    fontSize: '18px'
        }
        var userName,email,password,phone,dateTime
        for (var key in this.state.result) {
            //ta.push(this.state.todo[key].Title)
          //  this.setState({
             userName =this.state.result[key].userName;
             email =this.state.result[key].emailId;
             password =this.state.result[key].password;
             phone =this.state.result[key].phoneNo;
             dateTime =this.state.result[key].dateTime;
       // })
          }
    return(
        <div class="container">
            <Header/>



    
    {this.state.msg==="Please wait..." &&
        <div style={alertStyle} class="alert alert-danger" role="alert">
       {this.state.msg}
      </div>
    }
    { this.state.msg === "No" &&
        <div style={alertStyle} class="alert alert-danger" role="alert">
  No Record with Email Id: <strong>{this.state.email}</strong> was found
</div>
    }
    { this.state.msg === "Yes" &&
        <div style={alertStyle} class="alert alert-success" role="alert">
  record Founnd
</div>
    }
<div class="row"> 
<div  style={divStyle}>
<center><h1>Search</h1></center>
<form onSubmit={this.search}>
   <div class="form-group">
       <input class="form-control" value={this.state.email}  type="email" name="email" placeholder="Email"  onChange={this.handelChange} required></input>
    </div>
    
    <div class="form-group">
        <button class="btn btn-primary btn-large btn-block">Search</button>    
    </div>
</form>
{ this.state.msg === "Yes" &&
<div style={resultStyle}>
<center><h1>Result</h1></center>
<div style={SubresultStyle}>
    <p><strong>username: </strong>{userName}</p>
    <p><strong>email: </strong>{email}</p>
    <p><strong>phone: </strong>{phone}</p>
    <p><strong>Date Time: </strong>{dateTime}</p>
</div>
</div>
}
    </div>
    </div>
  
        </div>

    );}
};
export default Search;