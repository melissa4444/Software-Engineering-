import React, {Component} from 'react';
import axios from 'axios';
class landingPage extends Component {
    constructor(){
        super();
        this.state={
            form: {
                searchValue: '',
                firstName: '',
                lastName: '',
                email: ''
            }
        };
    }
   
    onChange=(event)=>{
        this.setState({[event.target.name]: event.target.value});
        console.log(event.target.value)
    }
    
    onSubmit=(event)=>{
        event.preventDefault();
        //get our form data
        const {searchValue,firstName,lastName,email}=this.state;
        axios.get('/api/search?search='+searchValue,{searchValue,firstName,lastName,email})
            .then((result)=>{
                //access the results here
                console.log(result.data)
                this.setState({
                    firstName: result.data[0].firstName,
                    lastName: result.data[0].lastName,
                    email: result.data[0].email
                })
                console.log(this.state.firstName)
                
            })
    }
    
    render(){
        const{searchValue}=this.state;
        const first = <p>First Name: {this.state.firstName}</p>;
         const last = <p>Last Name: {this.state.lastName} </p>;
        const email = <p>Email: {this.state.email}</p>;
        return(
            <div >
                
                        <div className="wrap">
                        <form onSubmit={this.onSubmit}>
                            <input 
                            type="text"
                            id="defaultFormCardNameEx"
                            className="form-control"
                            data-parse={"uppercase"}
                            name={"searchValue"}
                            value={searchValue}
                            onChange={event => this.onChange(event)}
                            />
                            <button type="submit" > search 
                            </button>
                            </form>
                        </div>
                <div>
                    <h1> landing page </h1>
                    
                    <p>{this.state.firstName ? first : ''}</p>
                    <p>{this.state.lastName ? last : ''}</p>
                    <p>{this.state.email ? email : ''}</p>
             
                  
                </div>
            </div>
        )
    }
}
export default landingPage;