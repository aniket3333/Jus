import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeStep,turnDegrees,turnDeg,directionToMove ,showMessage } from "../Actions/actions";

export default function Sidebar() {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(10);
  const [number1, setNumber1] = useState(5);
  const [selectedValue, setSelectedValue] = useState('');
// look section
const [hellow, setHellow] = useState('Hellow');
  const [sec, setSec] = useState(2);

  const handleSelectChange = (event) => {
   
    setSelectedValue(event.target.value);
  };
  

  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
    

   
      <div className="font-bold"> {"Motion"} </div>
      
      <button
       id="item1"
        draggable="true"
        onDragStart={(e) => {
          e.dataTransfer.setData('text/plain', e.target.id);
        }}
        onClick={()=>dispatch(changeStep(number))}
        className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >Move 
      <input  className='text-black w-6 h-6 rounded-full text-center mx-1' type='text' value={number}  onChange={(e)=>setNumber(e.target.value)} onClick={(e) => e.stopPropagation()}/>
        Steps
      </button>
      
  <button
          id="item2"
        draggable="true"
        onDragStart={(e) => {
          e.dataTransfer.setData('text/plain', e.target.id);
        }}
        onClick={()=>dispatch(turnDegrees(number1))}
        className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >Turn R
      <input  className='text-black w-6 h-6 rounded-full text-center mx-1' type='text' value={number1}  onChange={(e)=>setNumber1(e.target.value)} onClick={(e) => e.stopPropagation()}/>
        degrees
      </button>



      

      <button
       id="item3"
        draggable="true"
        onDragStart={(e) => {
          e.dataTransfer.setData('text/plain', e.target.id);
        }}
        onClick={()=>dispatch(turnDeg(number1))}
        className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >Turn L
      <input  className='text-black w-6 h-6 rounded-full text-center mx-1' type='text' value={number1}  onChange={(e)=>setNumber1(e.target.value)} onClick={(e) => e.stopPropagation()}/>
        degrees
      </button>




      <button
       id="item4"
        draggable="true"
        onDragStart={(e) => {
          e.dataTransfer.setData('text/plain', e.target.id);
        }}
        className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >Turn 


        <select
        className='bg-blue text-black mx-1 p-2 rounded appearance-none'
        onChange={handleSelectChange}  onClick={()=>dispatch(directionToMove(selectedValue))}
        value={selectedValue} >
        <option value="random">random position</option>
        <option value="mousepointer">mouse-pointer</option>
      </select>


        degrees
      </button>

      {/* looks section */}

      <div className="font-bold"> {"Looks"} </div>

      
      <button
        onClick={()=>dispatch(showMessage(hellow))}
        className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >Say 
      <input  className='text-black w-12 h-6 rounded-full text-center mx-1' type='text' value={hellow}  onChange={(e)=>setHellow(e.target.value)} onClick={(e) => e.stopPropagation()}/>
        for
        <input  className='text-black w-6 h-6 rounded-full text-center mx-1' type='text' value={sec}  onChange={(e)=>setSec(e.target.value)} onClick={(e) => e.stopPropagation()}/>
        seconds
      </button>
    
    </div>
  );
}





