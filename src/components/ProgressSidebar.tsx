import BackgroundSidebarDesktop from "../assets/images/bg-sidebar-desktop.svg";
import StepNumber from "./StepNumber";

export default function ProgressSidebar(props: { step: number }) {
  const stepList = [
    { title: "STEP 1", description: "YOUR INFO" },
    { title: "STEP 2", description: "SELECT PLAN" },
    { title: "STEP 3", description: "ADD-ONS" },
    { title: "STEP 4", description: "SUMMARY" },
  ];
  return (
    <div className="p-4 hidden md:flex">
      <div className="overflow-hidden rounded-lg relative flex md:min-w-[200px] md:max-w-[200px] lg:min-w-[300px] lg:max-w-[300px] h-full max-h-[600px]">
        <img
          className="object-cover"
          src={BackgroundSidebarDesktop}
          alt="bg-sidebar-desktop"
        />
        <div className="flex flex-col gap-8 z-10 px-6 py-10 absolute w-full">
          {stepList.map((step, index) => (
            <div className="flex gap-4 items-center">
              <StepNumber number={index + 1} step={props.step} />
              <div className="flex flex-col">
                <span className="text-preset-5-regular text-blue-300">
                  {step.title}
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
