import { addons } from "../data/addons";
import type { Addon } from "../types/addon";
import StepHeader from "./StepHeader";
import IconCheckmark from "../assets/images/icon-checkmark.svg";

export default function SelectAddons(props: {
  billingCycle: "monthly" | "yearly";
  setBillingCycle: React.Dispatch<React.SetStateAction<"monthly" | "yearly">>;
  selectedAddons: Addon[];
  setSelectedAddons: React.Dispatch<React.SetStateAction<Addon[]>>;
}) {
  const toggleSelect = (id: number, addon: Addon) => {
    const found = props.selectedAddons.find((item) => item.id == id);
    if (found) {
      props.setSelectedAddons(
        props.selectedAddons.filter((item) => item.id !== id)
      );
    } else {
      props.setSelectedAddons([...props.selectedAddons, addon]);
    }
  };
  return (
    <>
      <div className="flex flex-col gap-6 w-full md:max-w-[350px] lg:max-w-[450px]">
        <StepHeader
          title="Pick add-ons"
          description="Add-ons help enhance your gaming experience."
        />
        <div className="flex flex-col gap-2 md:gap-4">
          {addons.map((addon: Addon) => (
            <div
              key={addon.id}
              className={`${props.selectedAddons.find((item) => item.id == addon.id) ? "bg-blue-50 border-purple-600" : "bg-white border-purple-200"} flex items-center p-4 md:px-6 md:py-4 gap-4 md:gap-6 border rounded-lg hover:cursor-pointer`}
              onClick={() => toggleSelect(addon.id, addon)}
            >
              {/* Checkbox */}
              <div
                className={`${props.selectedAddons.find((item) => item.id == addon.id) ? "bg-purple-600 border-purple-600" : "bg-none border-purple-200"} border min-w-[20px] min-h-[20px] flex justify-center items-center rounded-sm`}
              >
                {props.selectedAddons.find((item) => item.id == addon.id) ? (
                  <img src={IconCheckmark} alt="icon-checkmark" />
                ) : (
                  ""
                )}
              </div>
              {/* Name and description */}
              <div className="flex flex-col gap-0 md:gap-2">
                <span className="text-preset-4-medium md:text-[16px] text-blue-950">
                  {addon.name}
                </span>
                <span className="text-preset-5 md:text-[14px] text-grey-500">
                  {addon.description}
                </span>
              </div>
              {/* Price */}
              <span className="text-preset-5 md:text-[14px] text-purple-600 ml-auto">
                +$
                {props.billingCycle == "monthly"
                  ? addon.price.monthly + "/mo"
                  : addon.price.yearly + "/yr"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
