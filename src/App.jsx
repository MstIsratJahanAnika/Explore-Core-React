import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Pet></Pet>
      <Person></Person>
      <Sports></Sports>
      <Person></Person>
      <Person></Person>
      <Sports></Sports>
    </>
  )
}


//eta ekta component - ek ek kaj a use kora hoy
function Person(){
  const name = 'Jolil';
  const age = 21;
   return (
    <p>I am a sad Person named {name}, age {age}</p>
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
