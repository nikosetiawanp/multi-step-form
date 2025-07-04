import { useState } from "react";
import "./App.css";
import StepIndicator from "./components/StepIndicator";
import ProgressSidebar from "./components/ProgressSidebar";
import SelectPlan from "./components/SelectPlan";
import Navigation from "./components/Navigation";

function App() {
  const [step, setStep] = useState(1);
  return (
    <>
      <StepIndicator step={step} />
      {/* White card */}
      <div className="z-50 flex md:gap-8 bg-white rounded-[15px] w-screen max-w-[345px] md:max-w-[685px] lg:max-w-[940px] md:h-screen h-fit md:max-h-[600px] py-8 px-6 md:p-0 drop-shadow-xl">
        <ProgressSidebar step={step} />
        {/* Section Contianer */}
        <div className="w-full flex flex-col items-center md:py-8">
          <SelectPlan />
          {/* Navigation tablet & desktop */}
          <div className="hidden md:block mt-auto w-full md:max-w-[350px] lg:max-w-[450px]">
            <Navigation step={step} setStep={setStep} />
          </div>
        </div>
      </div>

      <div className="md:hidden flex items-center bg-white h-fit w-screen p-4 absolute bottom-0 left-0">
        <Navigation step={step} setStep={setStep} />
      </div>
    </>
  );
}

export default App;
