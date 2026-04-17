export function EatAndSleep({eat, diet, sleepy='not sleepy'}){ //destructuring used 
    const oloshLifeStyle = {
    border: '2px solid purple',
    padding: '5px',
    margin: '5px',
    borderRadius: '10px'
  }
    if(diet){
        return(
            <p style={oloshLifeStyle}>I am on Diet, method {eat} feeling {sleepy}</p>
        )
    }
    else{
        return(
            <p style={oloshLifeStyle}>I was on diet, but I am eating {eat} and feeling {sleepy}</p>
        )
    }

}