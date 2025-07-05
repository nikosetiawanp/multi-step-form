export type Addon = {
  id: number;
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
};
