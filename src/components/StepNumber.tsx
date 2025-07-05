export default function StepNumber(props: {
  number: number;
  currentStep: number;
}) {
  const active =
    props.number == props.currentStep ||
    (props.number >= 4 && props.currentStep >= 4);
  return (
    <div
      className={`${active ? "border-blue-200 bg-blue-200" : "border-white bg-none"} rounded-full border w-[33px] h-[33px] flex justify-center items-center`}
    >
      <span
        className={`text-preset-4-bold ${active ? "text-blue-950" : "text-white"}`}
      >
        {props.number}
      </span>
    </div>
  );
}
