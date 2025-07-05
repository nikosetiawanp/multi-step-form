import type { FieldErrors, UseFormRegister } from "react-hook-form";
import StepHeader from "./StepHeader";
import type { PersonalInfo } from "../types/personalInfo";

export default function PersonalInfoForm(props: {
  register: UseFormRegister<PersonalInfo>;
  errors: FieldErrors<PersonalInfo>;
}) {
  return (
    <>
      <form action="">
        <div className="flex flex-col gap-6 w-full md:max-w-[350px] lg:max-w-[450px]">
          <StepHeader
            title="Personal info"
            description="Please provide your name, email address, and phone number."
          />
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-preset-5 md:text-preset-4-regular text-blue-950"
            >
              Name
            </label>
            <input
              type="text"
              defaultValue=""
              {...props.register("name")}
              placeholder="e.g. Stephen King"
              className="h-[40px] md:h-[48px] px-4 py-2 rounded-sm md:rounded-lg border text-preset-4 font-medium md:text-preset-3-medium text-blue-950 border-purple-200 hover:cursor-pointer hover:border-purple-600 active:border-purple-600 placeholder:text-preset-3-regular placeholder:text-grey-500"
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-preset-5 md:text-preset-4-regular text-blue-950"
            >
              Email Address
            </label>
            <input
              type="email"
              defaultValue=""
              {...props.register("email")}
              placeholder="e.g. stephenking@lorem.com"
              className="h-[40px] md:h-[48px] px-4 py-2 rounded-sm md:rounded-lg border text-preset-4 font-medium md:text-preset-3-medium text-blue-950 border-purple-200 hover:cursor-pointer hover:border-purple-600 active:border-purple-600 placeholder:text-preset-3-regular placeholder:text-grey-500"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="text-preset-5 md:text-preset-4-regular text-blue-950"
            >
              Phone Number
            </label>
            <input
              type="phone"
              defaultValue=""
              {...props.register("phone")}
              placeholder="e.g. +1 234 567 890"
              className="h-[40px] md:h-[48px] px-4 py-2 rounded-sm md:rounded-lg border text-preset-4 font-medium md:text-preset-3-medium text-blue-950 border-purple-200 hover:cursor-pointer hover:border-purple-600 active:border-purple-600 placeholder:text-preset-3-regular placeholder:text-grey-500"
            />
          </div>
        </div>
      </form>
    </>
  );
}
