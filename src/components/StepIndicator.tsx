import BackgroundSidebarMobile from "../assets/images/bg-sidebar-mobile.svg";
import StepNumber from "./StepNumber";

export default function StepIndicator(props: { step: number }) {
  return (
    <div className="absolute md:hidden w-full top-0 left-0 -z-50">
      <img
        className="absolute z-0 w-full h-auto"
        src={BackgroundSidebarMobile}
        alt="bg-sidebar-mobile"
      />
      <div className="flex justify-center absolute z-10 top-10 gap-4 w-full">
        {Array.from({ length: 4 }).map((_, index) => (
          <StepNumber key={index + 1} number={index + 1} step={props.step} />
        ))}
      </div>
    </div>
  );
}
