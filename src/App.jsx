import './App.css'

function App() {

  return (
    <>
      <h1>React Core Concepts</h1>
      <Student name="Anika" dept="CSE" sem="4th"></Student>
      <Student name="Sabrina" dept="Textile" sem="2nd"></Student>
      <Person name="Jolil" mood="sad" age="21"></Person>
      <Person name="Kamil" mood="happy" age="17"></Person>
      <Person name="Piyash" mood="angry" age="26"></Person>

      {/* egula shob function er parameter a receive hobe, proti ta property object er property */}
      <Developer name="mojumdar" technology="javascript"></Developer>
      <Developer name="rajon" technology="python"></Developer>
      <Developer name="shabana" technology="java"></Developer>
    </>
  )
}

// another option of using style, without using variable, direct object
function Developer(props){ //parameter receive korbe 
  console.log(props); //eta ekta object jar key-name value name a ja ase (mojumdar, rajon, shabana)

  return(
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
function Person(aboutPerson){

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


function Student(aboutStudent){
  return(
    <div className='student'>
      <p>Name: {aboutStudent.name}</p>
      <p>Dept: {aboutStudent.dept}</p>
      <p>She is in {aboutStudent.sem} semester</p>
    </div>
  )
}

function Pet(){

  return(
      <p>Pet Cat</p>
  )
}

function Sports(){
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
