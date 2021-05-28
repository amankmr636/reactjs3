
import React, { Component } from 'react';
import './Form.css';


class Form extends Component{

    constructor(props){
     super(props);
    
     this.state = {  fullname: "Name",
         email: "amankmr756@xmail.com",
         phone : "98700344",
         feedback : "Write your Feedback"
     
      }
    }
    
    
    handlechangeall = (event) =>{
     this.setState ( { [event.target.name] :event.target.value  } )
    }
    
    handlesubmit = (event) => {
      if(this.state.fullname==("Name"))
      alert('Enter Name before Submit');
      else if(this.state.email==("amankmr756@xmail.com"))
      alert('Enter Email before Submit');
      else if(this.state.phone==("98700344"))
      alert('Enter PhoneNo before Submit');
   
      else if(this.state.feedback==("Write your Feedback"))
      alert('Enter Feedback before Submit');
   
      else{
     alert (`My name is ${this.state.fullname},
      My email id is ${this.state.email},
      My mobile number is ${this.state.phone},
      My feedback to your company is ${this.state.feedback}
      `);
}
     event.preventDefault();
    }
    
    render(){
     return(
      <div>
       <form onSubmit = {this.handlesubmit} >
        <label> fullname </label><br/>
        <input  type="text" name="fullname"  value={this.state.fullname}  
          onChange={this.handlechangeall} /> <br/>
    
        <label> Email </label><br/>
        <input  type="email" name="email" value= {this.state.email} 
          onChange={this.handlechangeall} /> <br/>
    
        <label> Mobile </label><br/>
        <input  type="number" name="phone" value= {this.state.phone} 
                onChange={this.handlechangeall} /> <br/>
    
        <label> Feedback </label><br/>
        <textarea  value= {this.state.feedback}  name="feedback"
                onChange={this.handlechangeall} />   <br/>
    
        <input type="submit" value="Submit"  />
       </form>
      </div>
     )
    }
    
    }
    
    export default Form;
    
    
