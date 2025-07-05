import IconThankYou from "../assets/images/icon-thank-you.svg";

export default function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full md:max-w-[350px] lg:max-w-[450px] py-20">
      <img src={IconThankYou} alt="icon-thank-you" />
      <span className="text-preset-1 text-blue-950 text-center">
        Thank you!
      </span>
      <p className="text-preset-3-regular text-grey-500 text-center">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
