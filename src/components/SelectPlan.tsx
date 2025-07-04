import IconArcade from "../assets/images/icon-arcade.svg";
import IconAdvanced from "../assets/images/icon-advanced.svg";
import IconPro from "../assets/images/icon-pro.svg";
import { useState } from "react";

export default function SelectPlan() {
  const plans = [
    { name: "Arcade", price: 9, icon: IconArcade },
    { name: "Advanced", price: 12, icon: IconAdvanced },
    { name: "Pro", price: 15, icon: IconPro },
  ];

  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const toggleBillingCycle = () => {
    if (billingCycle == "monthly") {
      setBillingCycle("yearly");
    } else {
      setBillingCycle("monthly");
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full md:max-w-[350px] lg:max-w-[450px] md:">
      <div className="flex flex-col gap-2">
        <h2 className="text-preset-1 text-blue-950">Select Your Plan</h2>
        <p className="text-preset-3-regular text-grey-500">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="flex flex-col gap-2 lg:gap-4 lg:flex-row">
        {plans.map((plan, index) => (
          // Card
          <div
            key={index}
            className="flex lg:flex-col justify-start items-center lg:items-start lg:justify-between p-4 gap-2 h-[80px] lg:h-[160px] w-full lg:max-w-[140px] border border-purple-200 rounded-lg hover:cursor-pointer hover:bg-blue-50 hover:border-purple-600"
          >
            <img
              className="w-[40px] h-[40px]"
              src={plan.icon}
              alt="icon-arcade"
            />
            <div className="flex flex-col">
              <span className="text-preset-3-medium text-blue-950">
                {plan.name}
              </span>
              <span className="text-preset-4-regular text-grey-500">
                {billingCycle == "monthly"
                  ? `$${plan.price}/mo`
                  : `$${plan.price * 10}/yr`}
              </span>

              {/* 2 months free */}
              {billingCycle == "yearly" ? (
                <span className="text-preset-5 text-blue-950 mt-1 md:hidden lg:block">
                  2 months free
                </span>
              ) : (
                ""
              )}
            </div>

            {/* 2 months free */}
            {billingCycle == "yearly" ? (
              <span className="text-preset-5 text-blue-950 ml-auto hidden md:block lg:hidden">
                2 months free
              </span>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>

      {/* Toggle */}
      <div className="flex justify-center items-center bg-blue-50 rounded-lg w-full min-h-[50px] gap-8">
        <span
          className={`${billingCycle == "monthly" ? "text-blue-950" : "text-grey-500"} text-preset-4-medium lg:font-bold`}
        >
          Monthly
        </span>
        <div
          className={`${billingCycle == "monthly" ? "justify-start" : "justify-end"} flex p-1 bg-blue-950 rounded-full w-[40px] transition-all duration-300 cursor-pointer active:bg-blue-700`}
          onClick={() => toggleBillingCycle()}
        >
          <div className="bg-white w-[12px] h-[12px] rounded-full"></div>
        </div>
        <span
          className={`${billingCycle == "yearly" ? "text-blue-950" : "text-grey-500"} text-preset-4-medium lg:font-bold`}
        >
          Yearly
        </span>
      </div>
    </div>
  );
}
