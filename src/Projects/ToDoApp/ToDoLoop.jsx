import { MdCheck, MdDeleteForever } from "react-icons/md";



export const TodoLoop = (props) => {
   const {content,handelDelete,check,handelCheck}=props;
    return (
        <>
            <li className='todo-item'>
                <span className={check?"checkList":"notCheckList"}>{content}</span>
                <button className='check-btn' onClick={()=>handelCheck(content)} > <MdCheck /> </button>
                <button className='delete-btn' onClick={() => handelDelete(content)}> <MdDeleteForever /> </button>
            </li>
        </>
    )
}