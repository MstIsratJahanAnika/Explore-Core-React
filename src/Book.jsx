export default function Book ({bookInfo}){
    console.log('Each Book Information', bookInfo);//success

    return <li>Name: {bookInfo.subject}, price: {bookInfo.price}</li>
}