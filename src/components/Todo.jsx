import React from 'react'
import todo from "../assets/requirement.png"
import { FaPlus } from "react-icons/fa";

const Todo = () => {
  return (
    <>
    <div className="maindiv  grid place-content-center m-[100px] text-center">
        <div className="childdiv">
            <figure>
                <img src={todo} alt="" width={100} className='ms-10'/>
            </figure>
          
            <h5 className=' mt-3 font-serif text-lg'>Add Your Task</h5>
        </div>
        <form >
            <input className='border-2 relative border-black rounded-md px-6' type="text" placeholder='✍ Add Item' />
         <br />   <FaPlus className='absolute' title='add title' style={{marginTop: "-20px", marginLeft:"210px"}}/>
         
        </form>
        <div className="shwoitem">
            <div className="eachitem">
                <h3>apple</h3>
            </div>
        </div>
        
    </div>
      
    </>
  )
}

export default Todo
