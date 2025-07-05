import IconArcade from "../assets/images/icon-arcade.svg";
import IconAdvanced from "../assets/images/icon-advanced.svg";
import IconPro from "../assets/images/icon-pro.svg";

export const plans = [
  {
    id: 1,
    name: "Arcade",
    price: { monthly: 9, yearly: 90 },
    icon: IconArcade,
  },
  {
    id: 2,
    name: "Advanced",
    price: { monthly: 12, yearly: 120 },
    icon: IconAdvanced,
  },
  { id: 3, name: "Pro", price: { monthly: 15, yearly: 150 }, icon: IconPro },
];
