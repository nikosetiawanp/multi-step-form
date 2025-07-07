import "./App.css";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

import StepIndicator from "./components/StepIndicator";
import ProgressSidebar from "./components/ProgressSidebar";
import Navigation from "./components/Navigation";

import PersonalInfoForm from "./components/PersonalInfoForm";
import SelectPlan from "./components/SelectPlan";
import SelectAddons from "./components/SelectAddons";
import Summary from "./components/Summary";
import ThankYou from "./components/Thankyou";

import { plans } from "./data/plans";
import type { Addon } from "./types/addon";
import type { PersonalInfo } from "./types/personalInfo";
import type { Plan } from "./types/plan";

import { zodResolver } from "@hookform/resolvers/zod";

import { PersonalInfoSchema } from "./schemas/personalInfoSchema";

function App() {
  // Forms
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
  });
  const submitPersonalInfo: SubmitHandler<PersonalInfo> = (data) =>
    alert(JSON.stringify(data));

  const [currentStep, setCurrentStep] = useState(1);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const [selectedPlan, setSelectedPlan] = useState<Plan>(plans[0]);
  const [selectedAddons, setSelectedAddons] = useState<Addon[]>([]);
  return (
    <>
      <StepIndicator currentStep={currentStep} />
      {/* White card */}
      <div className="z-50 flex md:gap-8 bg-white rounded-[15px] w-screen max-w-[345px] md:max-w-[685px] lg:max-w-[940px] md:h-screen h-fit md:max-h-[600px] py-8 px-6 md:p-0 drop-shadow-xl">
        <ProgressSidebar currentStep={currentStep} />
        {/* Section Contianer */}
        <div className="w-full flex flex-col items-center md:py-8">
          {currentStep == 1 ? (
            <PersonalInfoForm
              register={register}
              errors={errors}
              handleSubmit={handleSubmit}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              submitPersonalInfo={submitPersonalInfo}
            />
          ) : currentStep == 2 ? (
            <SelectPlan
              billingCycle={billingCycle}
              setBillingCycle={setBillingCycle}
              selectedPlan={selectedPlan}
              setSelectedPlan={setSelectedPlan}
            />
          ) : currentStep == 3 ? (
            <SelectAddons
              billingCycle={billingCycle}
              setBillingCycle={setBillingCycle}
              selectedAddons={selectedAddons}
              setSelectedAddons={setSelectedAddons}
            />
          ) : currentStep == 4 ? (
            <Summary
              billingCycle={billingCycle}
              setBillingCycle={setBillingCycle}
              selectedPlan={selectedPlan}
              selectedAddons={selectedAddons}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          ) : (
            <ThankYou />
          )}

          {/* Navigation tablet & desktop */}
          {currentStep <= 4 && (
            <div className="hidden md:block mt-auto w-full md:max-w-[350px] lg:max-w-[450px]">
              <Navigation
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                submitPersonalInfo={submitPersonalInfo}
              />
            </div>
          )}
        </div>
      </div>

      {currentStep <= 4 && (
        <div className="md:hidden flex items-center justify-center bg-white h-fit w-screen p-4 absolute bottom-0 left-0">
          <Navigation
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            submitPersonalInfo={submitPersonalInfo}
          />
        </div>
      )}
    </>
  );
}

export default App;
