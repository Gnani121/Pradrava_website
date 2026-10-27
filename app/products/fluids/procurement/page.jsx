import OwnerPage from "@/components/OwnerPage";
import { ownerPages } from "@/data/ownerPages";

export const metadata = {
  title: "Purchasing & Stock | Fluids",
  description:
    "From a request to buy to the supplier's bill, with goods checked on arrival, the bill checked against what you accepted, landed cost, budgets, reorder levels and supplier scorecards.",
  keywords: [
    "three way match purchase invoice software",
    "landed cost software",
    "vendor scorecard software",
    "reorder point safety stock software",
    "procurement budget control software",
  ],
  alternates: {
    canonical: "/products/fluids/procurement",
  },
};

export default function Page() {
  return <OwnerPage page={ownerPages.procurement} current="/products/fluids/procurement" />;
}
