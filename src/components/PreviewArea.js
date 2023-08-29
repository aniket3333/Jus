import React from "react";
import CatSprite from "./CatSprite";
import { useSelector } from "react-redux";

export default function PreviewArea() {
  const currentStep = useSelector((state) => state.currentStep);

  return (
    // <div className="flex-none h-full overflow-y-auto p-2">
    //   <CatSprite step={currentStep} />
    // </div>
    <CatSprite step={currentStep} />
  );
}
