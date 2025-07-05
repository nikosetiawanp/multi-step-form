export type Plan = {
  id: number;
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  icon: string;
};
