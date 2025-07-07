import {
  type FieldErrors,
  type SubmitHandler,
  type UseFormHandleSubmit,
  type UseFormRegister,
} from "react-hook-form";
import StepHeader from "./StepHeader";
import type { PersonalInfo } from "../types/personalInfo";

export default function PersonalInfoForm(props: {
  register: UseFormRegister<PersonalInfo>;
  errors: FieldErrors<PersonalInfo>;
  handleSubmit: UseFormHandleSubmit<PersonalInfo, PersonalInfo>;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  submitPersonalInfo: SubmitHandler<PersonalInfo>;
}) {
  return (
    <form onSubmit={props.handleSubmit(props.submitPersonalInfo)}>
      <div className="flex flex-col gap-6 w-full md:max-w-[350px] lg:max-w-[450px]">
        <StepHeader
          title="Personal info"
          description="Please provide your name, email address, and phone number."
        />
        {/* Name */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-end">
            <label
              htmlFor="name"
              className="text-preset-5 md:text-preset-4-regular text-blue-950"
            >
              Name
            </label>
            {props.errors.name && (
              <span className="text-preset-5 font-bold md:text-preset-4-bold text-red-500">
                {props.errors.name?.message}
              </span>
            )}
          </div>
          <input
            type="text"
            defaultValue=""
            {...props.register("name")}
            placeholder="e.g. Stephen King"
            className={`${props.errors.name && "border-red-500"} h-[40px] md:h-[48px] px-4 py-2 rounded-sm md:rounded-lg border text-preset-4 font-medium md:text-preset-3-medium text-blue-950 border-purple-200 hover:cursor-pointer hover:border-purple-600 active:border-purple-600 placeholder:text-preset-3-regular placeholder:text-grey-500`}
          />
        </div>

        {/* Email Address */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-end">
            <label
              htmlFor="email"
              className="text-preset-5 md:text-preset-4-regular text-blue-950"
            >
              Email Address
            </label>
            {props.errors.email && (
              <span className="text-preset-5 font-bold md:text-preset-4-bold text-red-500">
                {props.errors.email?.message}
              </span>
            )}
          </div>
          <input
            type="email"
            defaultValue=""
            {...props.register("email")}
            placeholder="e.g. stephenking@lorem.com"
            className={`${props.errors.email && "border-red-500"} h-[40px] md:h-[48px] px-4 py-2 rounded-sm md:rounded-lg border text-preset-4 font-medium md:text-preset-3-medium text-blue-950 border-purple-200 hover:cursor-pointer hover:border-purple-600 active:border-purple-600 placeholder:text-preset-3-regular placeholder:text-grey-500`}
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-end">
            <label
              htmlFor="phone"
              className="text-preset-5 md:text-preset-4-regular text-blue-950"
            >
              Phone Number
            </label>
            {props.errors.phone && (
              <span className="text-preset-5 font-bold md:text-preset-4-bold text-red-500">
                {props.errors.phone?.message}
              </span>
            )}
          </div>
          <input
            type="tel"
            defaultValue=""
            {...props.register("phone")}
            placeholder="e.g. +1 234 567 890"
            className={`${props.errors.phone && "border-red-500"} h-[40px] md:h-[48px] px-4 py-2 rounded-sm md:rounded-lg border text-preset-4 font-medium md:text-preset-3-medium text-blue-950 border-purple-200 hover:cursor-pointer hover:border-purple-600 active:border-purple-600 placeholder:text-preset-3-regular placeholder:text-grey-500`}
          />
        </div>

        <button type="submit" className="button-primary">
          Submit
        </button>
      </div>
    </form>
  );
}
