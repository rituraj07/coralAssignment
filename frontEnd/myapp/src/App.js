import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router,Link,Switch,Route,Redirect} from 'react-router-dom'
import './App.css';
import Ddata from './Ddata';
import Sshow from './Sshow.js'
import MainPage from "./pages/index"
import Search from "./pages/Search"
import NotFound from "./pages/NotFound"
import Delete from "./pages/Delete"
class App extends React.Component {
 // const comp=data.map(i => <show p={i} />)
 constructor(){
   super()
   this.state={
     //v:Ddata
   }
  // this.handelChange = this.handelChange.bind(this);
 }
 /*handelChange(id){
   //alert(id);
   this.setState(prevState =>{
     const udata = prevState.v.map(item=>{
       if(item.id===id){
         item.completed=!item.completed
       }
       return item
     })
     return{
       v:udata
     }
   })
 }*/
 componentDidMount(){
 }
  render() {
    //const comp=this.state.v.map(i => <Sshow p={i} handelChange={this.handelChange} />)
    return (
      <Router>
        <Switch>
       <Route exact path="/" component={MainPage} />
       <Route exact path="/search" component={Search} />
       <Route exact path="/delete" component={Delete} />
       <Route exact path="/404" component={NotFound} />
       <Redirect to="/404" /> 
       </Switch>
     </Router>
    );
  }
}

export default App;
