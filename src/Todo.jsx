// export default function ToDo({task, isDone}){

//     return(
//         <li>Task: {task}</li>
//     )
// }


// conditional way
// export default function ToDo({task, isDone}){

//     if(isDone){
//         return(
//             <li>Done: {task}</li>
//         )
//     }
//     else{
//         return(
//             <li>Do now: {task}</li>
//         )
//     }
// }


// export default function ToDo({task, isDone, time=0}){

//     if(isDone){
//         return(
//             <li>Done: {task} Duration: {time}</li>
//         )
//     }
//     return(
//         <li>To be done: {task}</li>
//     )

// }


//conditional rendering: 3, using ternary

// export default function ToDo ({task, isDone, time=0}){
//     return isDone? <li>Done: {task}, time: {time}</li>: <li>Not Done: {task}, time: {time}</li>
// }


// conditional rendering: 4, using && operator 

// export default function ToDo({task, isDone, time=0}){
//     return isDone && <li>Task Done: {task}, time needed: {time}</li>
// }


// conditional rendering: 5, using || operator
// jokhon isDone false hobe tokhon dekhabe 
// export default function ToDo({task, isDone, time=0}){
//     return isDone || <li>Task Not Done: {task}, time was required: {time}</li>
// }




// return a null set kora 
// export default function ToDo({task, isDone, time=0}){
//     if(isDone){
//         return null;
//     }
//     else{
//         return <li>Pending: {task}</li>
//     }
// }



// method: 6, variable set kore shetake return kora 
export default function ToDo({task, isDone, time=0}){

    let listItem;

    let displayTime = time? time: 100;
    if(isDone){

        // ei vabe deya jay 
        // listItem = <li>Done: {task}, time required: {displayTime}</li>

        // eita time thakle ekta text show korbe shei method - conditional rendering 
        listItem= <li>Done: {task}, time require: {time? 'I am done' : 'I am not done yet'}</li>
    }else{
        listItem = <li>Pending: {task}, time required: {displayTime}</li>
    }
    return listItem;
}