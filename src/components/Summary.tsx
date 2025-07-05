import StepHeader from "./StepHeader";

export default function Summary(props: {
  billingCycle: "monthly" | "yearly";
  setBillingCycle: React.Dispatch<React.SetStateAction<"monthly" | "yearly">>;
}) {
  return (
    <div className="flex flex-col gap-6 w-full md:max-w-[350px] lg:max-w-[450px]">
      <StepHeader
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
      />
      <div className="flex flex-col gap-8">
        {/* Table */}
        <div className="flex flex-col bg-blue-50 gap-4 px-6 py-4 rounded-lg">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-start gap-0 md:gap-2">
              <span className="text-preset-3-medium text-blue-950">
                Arcade{" "}
                {props.billingCycle == "monthly" ? "(Monthly)" : "(Yearly)"}
              </span>
              <button className="text-preset-4-regular text-grey-500 hover:text-purple-600 hover:cursor-pointer">
                Change
              </button>
            </div>
            <span className="text-preset-3-regular font-bold text-blue-950">
              $9 {props.billingCycle == "monthly" ? "/mo" : "/yr"}
            </span>
          </div>
          <hr className="h-0.25 border-grey-500/20" />
          {/* Addons */}
          <div className="flex justify-between">
            <span className="text-preset-4-regular text-grey-500">
              Online service
            </span>
            <span className="text-preset-4-regular text-blue-950">
              +$1{props.billingCycle == "monthly" ? "/mo" : "/yr"}
            </span>
          </div>
        </div>
        {/* Totals */}
        <div className="flex justify-between items-center px-4">
          <span className="text-preset-4-regular text-grey-500">
            Total (per month)
          </span>
          <span className="text-preset-3-regular font-bold text-purple-600">
            +$12 {props.billingCycle == "monthly" ? "/mo" : "/yr"}
          </span>
        </div>
      </div>
    </div>
  );
}
