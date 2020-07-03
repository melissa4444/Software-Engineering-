import React, {Component} from 'react'
import Container from "react-bootstrap/Container";
import Header from "semantic-ui-react/dist/commonjs/elements/Header";


import axios from "axios";

class adminpage extends Component{
    state = {
        user: '',
        type: '',
        info: [],
        pop: ''
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
        console.log(e.target.name)
        console.log(e.target.value)
    }

    onSubmit = (e) => {
        e.preventDefault()
        e.target.user.value = ''
        axios.post('/api/adminSearch',this.state).then((result) => {
            console.log(result.status)
            if(result.status === 200){
            this.setState({
                info: result.data[0],
                pop: ''
            })
        }else if (result.status === 204){
            this.setState({
                pop: 'User Not Found',
                info: []
            })
        }
        }).catch((e) => {
           
        })

    }

    onBan = (e) => {
        e.preventDefault()
        axios.post('/api/removeuser', this.state).then((result) => {
            this.setState({
                info: [],
                pop: result.data
            })
            console.log(result.data)
        })
    }


    render(){
        const found = <Container>
                    <h3><br></br><br></br>Result : </h3>
    <h5>Username: {this.state.info.user}</h5>
    <p>Name: {this.state.info.firstName + this.state.info.lastName}</p>
    <p>Contact: {this.state.info.email}</p>
    <p>City and Zipcode: {this.state.info.City} and {this.state.info.ZipCode} </p>
    <br></br><button onClick={this.onBan}>Block</button>
                    </Container>

        return(
            <div>
                <div className={"header-text"}>
                    <Container fluid >
                        <Header  as='h1' textAlign={'center'} >Admin Services </Header>
                        <h3>Search for Client or Worker and Ban Them</h3>
                        <form onChange={this.onChange} onSubmit={this.onSubmit}>
                            Username:
                            <input name = "user" placeholder="Username to Search"></input>
                            <br></br><br></br>Type of User: 
                            <select name="type"><option>Choose a Option</option>
                            <option value="client">Client</option>
                            <option value="worker">Sitter</option>
                            </select>
                            <br></br><br></br><button>Search</button>
                        </form>
                        <h3>{this.state.pop ? this.state.pop :  ''}</h3>

                    </Container>
                    {this.state.info.length != 0 ? found : ''}
                   
                </div>
            </div>
        )
    }
}
export default adminpage;