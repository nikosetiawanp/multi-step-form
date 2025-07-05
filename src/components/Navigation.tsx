export default function Navigation(props: {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const next = () => {
    if (props.currentStep >= 5) {
      return;
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
