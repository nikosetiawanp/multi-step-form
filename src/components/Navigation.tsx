import type {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
} from "react-hook-form";
import type { PersonalInfo } from "../types/personalInfo";

export default function Navigation(props: {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  errors: FieldErrors<PersonalInfo>;
  handleSubmit: UseFormHandleSubmit<PersonalInfo>;
  submitPersonalInfo: SubmitHandler<PersonalInfo>;
}) {
  const next = () => {
    if (props.currentStep >= 5) {
      return;
    } else if (props.currentStep == 1) {
      props.handleSubmit(props.submitPersonalInfo)();
    } else {
      props.setCurrentStep(props.currentStep + 1);
    }
  };

  const previous = () => {
    if (props.currentStep <= 1) {
      return;
    } else {
      props.setCurrentStep(props.currentStep - 1);
    }
  };
  return (
    <div className="flex w-full justify-between items-center max-w-[345px] md:max-w-[450px]">
      {props.currentStep >= 2 ? (
        <button className="button-additional" onClick={() => previous()}>
          Go back
        </button>
      ) : (
        ""
      )}
      {props.currentStep == 4 ? (
        <button className="button-secondary ml-auto" onClick={() => next()}>
          Confirm
        </button>
      ) : (
        <button className="button-primary ml-auto" onClick={() => next()}>
          Next Step
        </button>
      )}
    </div>
  );
}
