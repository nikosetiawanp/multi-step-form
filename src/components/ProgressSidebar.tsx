import BackgroundSidebarDesktop from "../assets/images/bg-sidebar-desktop.svg";
import StepNumber from "./StepNumber";
import { steps } from "../data/steps";
import type { Step } from "../types/step";

export default function ProgressSidebar(props: { currentStep: number }) {
  return (
    <div className="p-4 hidden md:flex">
      <div className="overflow-hidden rounded-lg relative flex md:min-w-[200px] md:max-w-[200px] lg:min-w-[300px] lg:max-w-[300px] h-full max-h-[600px]">
        <img
          className="object-cover"
          src={BackgroundSidebarDesktop}
          alt="bg-sidebar-desktop"
        />
        <div className="flex flex-col gap-8 z-10 px-6 py-10 absolute w-full">
          {steps.map((step: Step) => (
            <div className="flex gap-4 items-center">
              <StepNumber
                number={step.number}
                currentStep={props.currentStep}
              />
              <div className="flex flex-col">
                <span className="text-preset-5-regular text-blue-300">
                  {step.name}
                </span>
                <span className="text-preset-4-bold text-white">
                  {step.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
