import BackgroundSidebarMobile from "../assets/images/bg-sidebar-mobile.svg";
import { steps } from "../data/steps";
import StepNumber from "./StepNumber";

export default function StepIndicator(props: { currentStep: number }) {
  return (
    <div className="flex justify-center gap-4 w-full my-8 md:hidden">
      {steps.map((step) => (
        <StepNumber
          key={step.number}
          number={step.number}
          currentStep={props.currentStep}
        />
      ))}
    </div>
  );
}
