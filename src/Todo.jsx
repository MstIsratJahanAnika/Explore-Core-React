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


export default function ToDo({task, isDone, time=0}){

    if(isDone){
        return(
            <li>Done: {task} Duration: {time}</li>
        )
    }
    return(
        <li>To be done: {task}</li>
    )

}
