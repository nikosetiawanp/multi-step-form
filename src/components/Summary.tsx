import type { Addon } from "../types/addon";
import type { Plan } from "../types/plan";
import StepHeader from "./StepHeader";

export default function Summary(props: {
  billingCycle: "monthly" | "yearly";
  setBillingCycle: React.Dispatch<React.SetStateAction<"monthly" | "yearly">>;
  selectedPlan: Plan | undefined;
  selectedAddons: Addon[];
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const totalMonthly =
    props.selectedPlan &&
    props.selectedAddons
      .map((addon: Addon) => addon.price.monthly)
      .reduce((a, b) => a + b, 0) + props.selectedPlan?.price.monthly;
  const totalYearly =
    props.selectedPlan &&
    props.selectedAddons
      .map((addon: Addon) => addon.price.yearly)
      .reduce((a, b) => a + b, 0) + props.selectedPlan?.price.yearly;

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
                {props.selectedPlan?.name}{" "}
                {props.billingCycle == "monthly" ? "(Monthly)" : "(Yearly)"}
              </span>
              <button
                onClick={() => props.setCurrentStep(props.currentStep - 2)}
                className="text-preset-4-regular text-grey-500 hover:text-purple-600 hover:cursor-pointer"
              >
                Change
              </button>
            </div>
            <span className="text-preset-3-regular font-bold text-blue-950">
              $
              {props.billingCycle == "monthly"
                ? `${props.selectedPlan?.price.monthly}/mo`
                : `${props.selectedPlan?.price.yearly}/yr`}
            </span>
          </div>
          {props.selectedAddons.length > 0 && (
            <hr className="h-0.25 border-grey-500/20" />
          )}

          {/* Addons */}
          {props.selectedAddons
            .sort((a, b) => a.id - b.id)
            .map((addon: Addon) => (
              <div key={addon.id} className="flex justify-between">
                <span className="text-preset-4-regular text-grey-500">
                  {addon.name}
                </span>
                <span className="text-preset-4-regular text-blue-950">
                  +$
                  {props.billingCycle == "monthly"
                    ? `${addon.price.monthly}/mo`
                    : `${addon.price.yearly}/yr`}
                </span>
              </div>
            ))}
        </div>
        {/* Totals */}
        <div className="flex justify-between items-center px-4">
          <span className="text-preset-4-regular text-grey-500">
            Total (per month)
          </span>
          <span className="text-preset-3-regular font-bold text-purple-600">
            +$
            {props.billingCycle == "monthly"
              ? `${totalMonthly}/mo`
              : `${totalYearly}/yr`}
          </span>
        </div>
      </div>
    </div>
  );
}
