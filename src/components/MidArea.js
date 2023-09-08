import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeStep,turnDegrees,turnDeg } from "../Actions/actions";

export default function MidArea() {
  const [numb, setNumb] = useState(10);
 const dispatch = useDispatch(); //

  useEffect(() => {
    dispatch(changeStep(numb));
  }, [numb]);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedItemId = e.dataTransfer.getData("text/plain");
    const droppedItem = document.getElementById(droppedItemId);
    const id = droppedItem.id;

    const clonedItem = droppedItem.cloneNode(true);
    const newItemId = `copy-${Date.now()}`;
    clonedItem.id = newItemId;

    const x = e.clientX - e.target.getBoundingClientRect().left;
    const y = e.clientY - e.target.getBoundingClientRect().top;

    clonedItem.style.position = "absolute";
    clonedItem.style.left = x + "px";
    clonedItem.style.top = y + "px";

   
    const clonedInput = clonedItem.querySelector("input");
    console.log(clonedInput);
    if (clonedInput) {
      clonedInput.value = numb;
      clonedInput.addEventListener("change", (e) => {
        debugger;
        const newValue = parseInt(e.target.value, 10);

        setNumb(newValue);
      });
    }

    e.target.appendChild(clonedItem);
    clonedItem.addEventListener("click", () => {
      
      switch(id){
        case 'item1':
 dispatch(changeStep(numb));
 break;
        case 'item2':
          dispatch(turnDegrees(numb));
          break;
        case 'item3':
          dispatch(turnDeg(numb))
          break;

          default:

      }
      
    
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        className="flex-1 h-full overflow-auto"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {"mid area"}{" "}
      </div>
      ;
    </>
  );
}
