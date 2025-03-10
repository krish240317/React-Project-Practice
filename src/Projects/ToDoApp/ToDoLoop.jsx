import { MdCheck, MdDeleteForever } from "react-icons/md";



export const TodoLoop = (props) => {
   const {key,CurTask,handelDelete}=props;
 
    return (
        <>
            <li key={props.key} className='todo-item'>
                <span>{CurTask}</span>
                <button className='check-btn'> <MdCheck /> </button>
                <button className='delete-btn' onClick={() => handelDelete(CurTask)}> <MdDeleteForever /> </button>
            </li>
        </>
    )
}