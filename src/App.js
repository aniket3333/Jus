import React,{useState} from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);

  
  const handleStepChange = (steps) => {
    setCurrentStep((prevStep) => prevStep + parseInt(steps, 10));
  };

  return (
    
    <div className="bg-blue-100 pt-6 font-sans">
         <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar   onStepChange={handleStepChange} /> <MidArea />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea   step={currentStep}/>
        </div>
      </div>
    </div>
    
  );
}



