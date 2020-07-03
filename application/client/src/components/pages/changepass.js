import React, {Component} from 'react'
import Container from "react-bootstrap/Container";
import Header from "semantic-ui-react/dist/commonjs/elements/Header";


import axios from "axios";
import queryString from 'query-string'


class changepass extends Component{
    state = {
        oldpass: '',
        newpass: '',
        error: ''
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
        console.log(e.target.name)
        console.log(e.target.value)
    }

    onSubmit = (e) => {
        e.preventDefault()
        let values = queryString.parse(this.props.location.search) 
        console.log(values)
        axios.post('/api/changePassword',{user: values.user, type:values.type, oldpass: this.state.oldpass, newpass: this.state.newpass}).then((result) => {
            if(result.data.error === undefined){
                
                alert('Wrong Password')
            }
            this.setState({error: result.data})
            alert('Password Changed')
            if(values.type === "Client"){
                this.props.history.push(`/clientprof?user=${values.user}`)
            }else{
                this.props.history.push(`/sitterpro?user=${values.user}`)
            }
        })
        

    }

  


    render(){
        

        return(
            <div>
                <div className={"header-text"}>
                    <Container fluid >
                        <Header  as='h1' textAlign={'center'} >Change Password </Header>
                        
                        <form onChange={this.onChange} onSubmit={this.onSubmit}>
                            Old Password:
                            <input name = "oldpass" type="password" placeholder="Old Password"></input>
                           <br></br><br></br> New Password:
                            <input name = "newpass" type="password"  placeholder="New Password"></input>
                            
                            
                            <br></br><br></br><button>Change Password</button>
                        </form>
                     

                    </Container>
                   
                </div>
            </div>
        )
    }
}
export default changepass;