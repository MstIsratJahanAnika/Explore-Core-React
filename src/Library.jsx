// Library component er moddhe Book component use 
import Book from "./Book";

export default function Library({collection}){
    return (
        <div>
            <h2>My National Central Library</h2>

            {/* array er length, koto gula element ache */}
            <p>Number of Books in collection: {collection.length}</p>
            <p>Address: </p>

            {/* jsx er maddhome array elements er moddhe loop through */}
            <ul>

                {/* js likhar jonno */}
                {
                    // proti ta element er jonno Book component kaj korbe 
                    collection.map(book => <Book key={book.id} bookInfo ={book}></Book>)
                    // Book component receive
                    //Book component er moddhe book info props jacche jeta oi function a receive hobe 
                    //bookInfo ta object pass hobe, proti ta boi arki
                }
            </ul>
        </div>
    )
}