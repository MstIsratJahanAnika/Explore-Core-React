// import kora hocche ekhane
import './App.css'

import ToDo from './Todo'; //ToDo nam er function import koro Todo file theke

import { EatAndSleep } from './EatAndSleep';

// import Actor from './Actor';

import Singer from './Singer';


import Library from './Library';

function App() {

  // const oloshLifeStyle = {
  //   border: '2px solid purple',
  //   padding: '5px',
  //   margin: '5px',
  //   borderRadius: '10px'
  // }

  // const pathano 
  const time = 50;

  const sleep = "feeling sleepy";

  const actors = ['Bappa Raj', 'Omar Sani', 'Salman Shah', 'Dipjol', 'Ananta Jalil'];

  const singers = [
    {id:1, name: 'selena gomez', age: 32},
    {id:2, name: 'charlie puth', age: 38},
    {id:3, name: 'ellie golding', age: 29}
  ]


  const Books = [
    {id: 1, subject: 'Physics', price: 250},
    {id: 2, subject: 'Chemistry', price: 280},
    {id: 3, subject: 'Geography', price: 320},
    {id: 4, subject: 'History', price: 170},
    {id: 5, subject: 'English', price: 220}
  ]
  return (

    <>
      <h1>React Core Concepts</h1>

      {/* Library component use */}
      <Library collection = {Books}></Library> 
      {/* ei collection ta props hishebe LIbrary function a receive hobe  */}

    {/* array er proti ta element paoar jonno map, forEach use kora hoy*/}
    
    {/* JSX er moddhe pure javascript likhte curly braces diye moddhe likhte hobe */}

    {/* singers der jonno */}
    {
      singers.map( singer => <Singer key={singer.id} serial={singer}></Singer>) // ek ek ta element object 
      // react chay proti ta element er unique id thakuk, na thakle problem nei(error dekhay just) but deya better
    }

    {/* {
      //actors.map( actor => actor.toUpperCase()) //ekhane upparcase korar jaygay component call

      // component call er maddhome same jinish
      actors.map( actor => <Actor nayok = {actor}></Actor>) // Actor-> component, nayok->props er nam, actor-> loop variable

    } */}



      {/* <ToDo task="learn React" isDone={true} time={time}></ToDo> */}
      {/* <ToDo task="learn React" isDone={true} time=""></ToDo>
      <ToDo task="Revise JS" isDone={false}></ToDo>
      <ToDo task="Take a shower" isDone={true}></ToDo> */}


      {/* practice function part */}
      {/* <EatAndSleep
        eat="pasta"
        diet={false}
        sleepy={sleep}>
      </EatAndSleep> */}

      {/* <EatAndSleep
        eat="no eating" 
        diet={true}>         
      </EatAndSleep> */}

      {/* <EatAndSleep eat="green tea" diet={true} sleepy={sleep}></EatAndSleep> */}
      {/* isDone ekta property */}

      {/* <Student name="Anika" dept="CSE" sem="4th"></Student>
      <Student name="Sabrina" dept="Textile" sem="2nd"></Student>
      <Person name="Jolil" mood="sad" age="21"></Person>
      <Person name="Kamil" mood="happy" age="17"></Person>
      <Person name="Piyash" mood="angry" age="26"></Person>

      {/* egula shob function er parameter a receive hobe, proti ta property object er property */}

      {/*<Developer name="mojumdar" technology="javascript"></Developer>
      <Developer name="rajon" technology="python"></Developer>
      <Developer name="shabana" technology="java"></Developer>
      <Players name="tamim" runs="76"></Players>
      <Players name="mushi" runs="89"></Players>
      <Salami event="Rojar Eid" amount="1000"></Salami>
      <Salami event="Graduation" amount="5000"></Salami> */}

    </>
  )
}

// destructuring example 
// const {name, technology} = {name: 'Mozumdar', technology: 'javascript'};

// destructuring use kora function
const props = {};
function Players({ name, runs }) {
  console.log(props);
  return (
    <div className='student'>
      <h3>Player: {name}</h3>
      <p>Runs: {runs}</p>
    </div>
  )
}

// ekshathe internal CSS use and destructuring
function Salami({ event, amount = 0 }) { //eta default man 

  // variabel type style set
  const salamiStyle = {
    color: 'cyan',
    border: '3px solid orange',
    padding: '4px',
    margin: '2px',
    borderRadius: '15px',
  }

  return (
    <div style={salamiStyle}>
      <h3>Salami for: {event}</h3>
      <p>Amount: {amount}</p>
    </div>
  )
}
// another option of using style, without using variable, direct object
function Developer(props) { //parameter receive korbe 
  console.log(props); //eta ekta object jar key-name value name a ja ase (mojumdar, rajon, shabana)

  return (
    <div style={{
      border: '2px solid green',
      borderRadius: '20px'
    }}>
      {/* dynamic vabe objcet theke name set kora  */}
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.technology}</p>
    </div>
  )
}

//eta ekta component - ek ek kaj a use kora hoy
function Person(aboutPerson) {

  // const name = 'Jolil';
  // const age = 21;

  // const diye style likho 
  const PersonStyle = {
    color: 'red',
    textAlign: 'center',
  }

  return (
    // internal vabe apply koro
    <p style={PersonStyle}>I am a {aboutPerson.mood} Person named {aboutPerson.name}, age {aboutPerson.age}</p>
  )
}


function Student(aboutStudent) {
  return (
    <div className='student'>
      <p>Name: {aboutStudent.name}</p>
      <p>Dept: {aboutStudent.dept}</p>
      <p>She is in {aboutStudent.sem} semester</p>
    </div>
  )
}

function Pet() {

  return (
    <p>Pet Cat</p>
  )
}

function Sports() {
  return (
    <div>
      <ul>
        <li>Kola</li>
        <li>Komola</li>
      </ul>
      <h3>Playing Cricket</h3>
      <p>Playing and winning</p>
    </div>

  )
}
export default App
