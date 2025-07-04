export default function Navigation(props: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const next = () => {
    if (props.step >= 4) {
      return;
    } else {
      props.setStep(props.step + 1);
    }
  };
  const previous = () => {
    if (props.step <= 1) {
      return;
    } else {
      props.setStep(props.step - 1);
    }
  };
  return (
    <div className="flex w-full justify-between items-center">
      {props.step >= 2 ? (
        <button className="button-additional" onClick={() => previous()}>
          Go back
        </button>
      ) : (
        ""
      )}
      <button className="button-primary ml-auto" onClick={() => next()}>
        Next Step
      </button>
    </div>
  );
}
