import React, {Component} from 'react'
import './clientaap.css'

import {Container} from "react-bootstrap";
import {MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBMedia, MDBRow} from "mdbreact";
import boarding from '../images/boarding.png';
import sitting from '../images/sitting.png';
import daycare from '../images/daycare.png';
import { Divider, Header, Image, Segment, Grid } from 'semantic-ui-react';
import Message from "semantic-ui-react/dist/commonjs/collections/Message";
import { Rating } from 'semantic-ui-react';
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import Card from "semantic-ui-react/dist/commonjs/views/Card";
import review from '../images/reviewone.png';
import reviewtwo from '../images/reviewtwo.png';
import reviewthree from '../images/reviewthree.png';
import sitterone from '../images/sitterone.png';
import sittertwo from '../images/sittertwo.png';
import sitterthree from '../images/sitterthree.png';
import sitterfour from '../images/sitterfour.png';
import logo from '../images/logo.png';
import Label from "semantic-ui-react/dist/commonjs/elements/Label";


const showw = () => {
    console.log("Showww is here")
}
const variables = [{
    "user" : ""
}]

console.log(variables[0].user)

class clientApp extends Component{
    constructor(props) {
        super(props);

        this.state = {
            success: false
        };
    }

   cardState = {

   }


    



    render(){
        // console.log("Hi from client app render")
        showw()
        variables[0].user = "Amir"
        console.log(variables[0].user)
        return(


   <div>
    <div className={"header-text"}>
        <Container fluid >
            <h1 textAlign={'center'} >Services for Every Cat and Dog </h1>
            <Icon name={'heart outline'}/>

            <h2>
                WE KNOW THAT YOUR FUR BABIES ARE MORE THEN JUST PETS

            </h2>
        </Container>
        <MDBBtn color="yellow" href={"SignUp"}>
            <MDBIcon icon="hourglass start" /> Start
        </MDBBtn>
    </div>




       <Container style={{padding:'5em 5m'}}>
           <Grid  cell centered>
               <Grid.Row columns={3}>
                   <Grid.Column floated='left' width={8}>
                       <Segment>
                           <Header as='h2' textAlign='center' icon>
                               <Icon name={' handshake outline'} className={'icon-color'}/>

                               Our Services
                           </Header>

                           <MDBMedia>
                               <MDBMedia left top className="mr-5">
                                   <Image className={"head-image "} size={'small'} circular object src={boarding} alt="Generic placeholder image" />
                               </MDBMedia>
                               <MDBMedia body>
                                   <MDBMedia heading>
                                       <Message
                                           icon={'moon'}
                                           header='Dog and Cat Boarding'
                                           content='Our sitters offer a secure boarding services making sure your pet receives the proper treatment'
                                       />
                                   </MDBMedia>
                               </MDBMedia>
                           </MDBMedia>

                           {/*  daycare  */}
                           <MDBMedia>
                               <MDBMedia left top className="mr-5">
                                   <Image className={"head-image "} size='small' circular object src={sitting} alt="Generic placeholder image" />
                               </MDBMedia>
                               <MDBMedia body>
                                   <MDBMedia heading>
                                       <Message
                                           icon={'home'}
                                           header=' House Sitting '
                                           content='Our sitters offer a secure boarding services making sure your pet receives the proper treatment'
                                       />
                                   </MDBMedia>
                               </MDBMedia>
                           </MDBMedia>

                           <MDBMedia>

                               <MDBMedia left top className="mr-5">
                                   <Image className={"head-image"} size='small' circular object src={daycare}  alt="Generic placeholder image" />
                               </MDBMedia>

                               <MDBMedia body>
                                   <MDBMedia heading>
                                       <Message
                                           icon={'sun'}
                                           header='Day Care'
                                           content='Our sitters offer a secure boarding services to make you happy'
                                       />
                                   </MDBMedia>
                               </MDBMedia>

                           </MDBMedia>
                       </Segment>
                   </Grid.Column>


                   <Grid.Column floated='right' width={8}>
                       <Segment>

                           <Header as='h2' textAlign='center' icon>
                               <Icon name={'shield alternate'} className={'icon-color'}/>
                               Book with our trusted Sitters
                           </Header>

                           <Segment.Group raised >
                               <Segment icon textAlign='center'>
                                   <Icon name={' large check circle outline'} className={'check-color'}/>
                                   Background Checks
                               </Segment>

                               <Segment icon textAlign='center'>
                                   <Icon name={' large check circle outline'} className={'check-color'}/>
                                   Certified Pet Sitters

                               </Segment>
                               <Segment textAlign='center'>
                                   <Icon  name={'large check circle outline'} className={'check-color'}/>
                                   Approved by our Team
                               </Segment>

                               <Segment textAlign='center'>
                                   <Icon  name={'large check circle outline'} className={'check-color'}/>
                                   Reservation Protected                        </Segment>
                               <Segment textAlign='center'>
                                   <Icon  name={'large check circle outline'} className={'check-color'}/>
                                   All services are backed by  CatDog 24/7
                               </Segment>
                               <Segment textAlign='center'>
                                   <Icon  name={'heart'} className={"heart"}/>
                                   Endless amount of Love
                               </Segment>
                               <Segment textAlign='center'>
                                   <Icon  name={'heart'} className={'heart'}/>
                                   Endless amount of FUN
                               </Segment>

                           </Segment.Group>

                       </Segment>
                   </Grid.Column>




               </Grid.Row>



           </Grid>
       </Container>








       <div className={"header-text"}>
           <Container fluid >
               <Header  as='h1' textAlign={'center'} >Just Read the Reviews! </Header>
               <Icon name={'heart outline'}/>

               <p>
                   So many have trusted our services

               </p>
           </Container>
       </div>




       <Container style={{padding:'2em 0m'}}>
       <Grid  cell centered>
           <Grid.Row >
               <Grid.Column width={5}>
                   <Segment>
                       <Card >
                           <Image src={review}  />
                           <Card.Content>
                               <Card.Header>Susan Smith</Card.Header>
                               <Card.Meta>Joined in 2016</Card.Meta>
                               <Card.Description>
                                   " The CatDog Sitters sent me updates throughout my cats stay! I would highly recommend"
                               </Card.Description>
                           </Card.Content>
                           <Card.Content extra>
                               <a>
                                   <Rating icon='star' defaultRating={4} maxRating={5} />
                                   Rating
                               </a>
                           </Card.Content>
                       </Card>
                   </Segment>
               </Grid.Column>


                   <Grid.Column width={5}>
                       <Segment>
                           <Card>
                           <Image src={reviewtwo} wrapped ui={false} />
                           <Card.Content>
                               <Card.Header>Maria Smith</Card.Header>
                               <Card.Meta>Joined in 2017</Card.Meta>
                               <Card.Description>
                                   " The CatDog Sitters made sure my dog recives exercise on time!
                                   I told all my friends about it and now they've signed up as well.
                                   I was so happy with everything I became a regular! Now were super close to our sitter.
                                   "
                               </Card.Description>
                           </Card.Content>
                           <Card.Content extra>
                               <a>
                                   <Rating icon='star' defaultRating={4} maxRating={5} />
                                   Rating
                               </a>
                           </Card.Content>
                       </Card>
                       </Segment>
                   </Grid.Column>

               <Grid.Column width={5}>
                   <Segment>
                       <Card>
                       <Image src={reviewthree} wrapped ui={false} />
                       <Card.Content>
                           <Card.Header>Susan Smith</Card.Header>
                           <Card.Meta>Joined in 2016</Card.Meta>
                           <Card.Description>
                               " CatDog has everything I have always looked for! I used
                               to be so hesitant but the service was so quick and streamline.
                               I would highly recommend!"
                           </Card.Description>
                       </Card.Content>
                       <Card.Content extra>
                           <a>
                               <Rating icon='star' defaultRating={4} maxRating={5} />
                               Rating
                           </a>
                       </Card.Content>
                   </Card>
                   </Segment>
               </Grid.Column>


           </Grid.Row>



       </Grid>
       </Container>


       {/*sitters*/}
       <div className={"header-text"} >
           <Container fluid >
               <Header  as='h1' textAlign={'center'} >Services for Every Cat and Dog </Header>
               <Icon name={'heart outline'}/>

               <p>
                   Everything your best FurFriend needs! Just check out our highly rated sitters!

               </p>
           </Container>
       </div>



       <Container>
           <Grid>
               <Grid.Row >
                   <Grid.Column>
                       <Segment>
                           <Grid celled centered>
                               <Grid.Row>
                                   <Grid.Column width={3}>
                                       <Card>
                                           <Image src={sitterone} wrapped ui={false} />
                                           <Card.Content>
                                               <Card.Meta>Joined in 2019</Card.Meta>
                                               <Card.Description icon>
                                                   Megan is a comedian living in Nashville
                                                   <Icon name={'map pin'}/>
                                               </Card.Description>
                                           </Card.Content>
                                       </Card>
                                   </Grid.Column>
                                   <Grid.Column width={13}>
                                       <Segment as={'h1'} textAlign={'center'} icon>
                                           Megan Smith
                                           <Rating icon='star' defaultRating={4} maxRating={5} />
                                       </Segment>
                                       <Segment>
                                           <Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
                                       </Segment>
                                   </Grid.Column>
                               </Grid.Row>
                           </Grid>
                       </Segment>
                   </Grid.Column>
               </Grid.Row>
               <Grid.Row >
                   <Grid.Column>
                       <Segment>
                           <Grid celled>
                               <Grid.Row>
                                   <Grid.Column width={3}>
                                       <Card>
                                           <Image src={sittertwo} wrapped ui={false} />
                                           <Card.Content>
                                               <Card.Meta>Joined in 2019</Card.Meta>
                                               <Card.Description>
                                                   Joan is a student living in Orange County
                                               </Card.Description>
                                           </Card.Content>
                                       </Card>                   </Grid.Column>
                                   <Grid.Column width={13}>
                                       <Segment as={'h1'} textAlign={'center'} icon>
                                           Joan Cruz
                                           <Rating icon='star' defaultRating={4} maxRating={5} />
                                       </Segment>
                                       <Segment>
                                           <Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
                                       </Segment>                   </Grid.Column>
                               </Grid.Row>
                           </Grid>
                       </Segment>
                   </Grid.Column>
               </Grid.Row>
               <Grid.Row >
                   <Grid.Column>
                       <Segment>
                           <Grid celled>
                               <Grid.Row>
                                   <Grid.Column width={3}>
                                       <Card>
                                           <Image src={sitterthree} wrapped ui={false} />
                                           <Card.Content>
                                               <Card.Meta>Joined in 2019</Card.Meta>
                                               <Card.Description>
                                                   Jenny Sanchez is a mom living in the Mission SF
                                               </Card.Description>
                                           </Card.Content>
                                       </Card>                   </Grid.Column>
                                   <Grid.Column width={13}>
                                       <Segment as={'h1'} textAlign={'center'} icon>
                                           Jenny Sanchez
                                           <Rating icon='star' defaultRating={4} maxRating={5} />
                                       </Segment>
                                       <Segment>
                                           <Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
                                       </Segment>                   </Grid.Column>
                               </Grid.Row>
                           </Grid>
                       </Segment>
                   </Grid.Column>
               </Grid.Row>
               <Grid.Row >
                   <Grid.Column>
                       <Segment>
                           <Grid celled>
                               <Grid.Row>
                                   <Grid.Column width={3}>
                                       <Card>
                                           <Image src={sitterfour} wrapped ui={false} />
                                           <Card.Content>
                                               <Card.Meta>Joined in 2019</Card.Meta>
                                               <Card.Description>
                                                   John is a student living in the Tenderloin SF
                                               </Card.Description>
                                           </Card.Content>
                                       </Card>
                                   </Grid.Column>
                                   <Grid.Column width={13}>
                                       <Segment as={'h1'} textAlign={'center'} icon>
                                           John Warken
                                           <Rating icon='star' defaultRating={4} maxRating={5} />
                                       </Segment>
                                       <Segment>
                                           <Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
                                       </Segment>                   </Grid.Column>
                               </Grid.Row>
                           </Grid>
                       </Segment>
                   </Grid.Column>
               </Grid.Row>
           </Grid>
       </Container>








       <div className={"header-text"}>
           <Container fluid>
               <Header as='h1' icon textAlign='center' >
                   <Image
                       centered
                       size='large'
                       src={logo}
                       circular />
                   <Header as='h1' >
                       So what are you waiting For?
                   </Header>
                   <h3> Its Time to Take your Pets Care To the Next Level </h3>
                   <MDBBtn color="yellow" href={"SignUp"}>
                       <MDBIcon icon="hourglass start" /> Start
                   </MDBBtn>
               </Header>
           </Container>

           </div>




















</div>
        )
    }
}
export default clientApp;