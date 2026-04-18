// css import
import './App.css';

export default function Singer({serial}){
    console.log(serial);
    return (
        <div className='singer'>
            <h2>ID no.: {serial.id}</h2>
            <p>Singer: {serial.name}</p>
            <p>Age: {serial.age}</p>
        </div>
    )
}