export default function StepHeader(props: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-preset-1 text-blue-950">{props.title}</h2>
      <p className="text-preset-3-regular text-grey-500">{props.description}</p>
    </div>
  );
}
