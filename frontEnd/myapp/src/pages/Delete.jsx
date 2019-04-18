import React from 'react';
import { Link } from "react-router-dom";
import Header from "./Header"
class Delete extends React.Component {
    constructor(){
        var dtt= new Date().toISOString()
        super()
        this.state={
         email:"",
         showEmail:"",
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
        method:'Delete',
        headers,
        body:JSON.stringify(this.state)
      };
      var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
       targetUrl = 'https://coraltest.herokuapp.com/delete'
          
      const request = new Request(proxyUrl + targetUrl,options);
      const res= await fetch(request)
      .then(response => response.json())
      .then((responseData) =>{
        //alert(responseData.msg.toString());
        this.setState({msg:responseData.msg.toString(),showEmail:this.state.email,email:""})
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
    {this.state.msg==="Something went wrong" &&
        <div style={alertStyle} class="alert alert-danger" role="alert">
       {this.state.msg}
      </div>
    }
    { this.state.msg==="0" &&
        <div style={alertStyle} class="alert alert-danger" role="alert">
  No record with Email: <strong> {this.state.showEmail}</strong> exist
</div>
    }
    { this.state.msg==="1" &&
        <div style={alertStyle} class="alert alert-success" role="alert">
             Record with Email: <strong>{this.state.showEmail}</strong> deleted sucessfully
</div>
    }
<div class="row"> 
<div  style={divStyle}>
<center><h1>Delete</h1></center>
<form onSubmit={this.submitForm}>
   <div class="form-group">
       <input class="form-control" value={this.state.email}  type="email" name="email" placeholder="Email Id"  onChange={this.handelChange} required></input>
    </div>
   
    <div class="form-group">
        <button class="btn btn-primary btn-large btn-block">Delete</button>    
    </div>
</form>
    </div>
    </div>
        </div>

    );}
};
export default Delete;