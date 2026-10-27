import OwnerPage from "@/components/OwnerPage";
import { ownerPages } from "@/data/ownerPages";

export const metadata = {
  title: "Cylinder Operations | Fluids",
  description:
    "Know every cylinder: whose it is, where it is standing, which customer has it and when it is due for test. Stops wrong-gas fills, double booking and out-of-test dispatch.",
  keywords: [
    "gas cylinder tracking software",
    "cylinder lifecycle management software",
    "cylinder rental and demurrage billing",
    "hydro test tracking software",
    "gas cylinder allocation software",
  ],
  alternates: {
    canonical: "/products/fluids/cylinder-operations",
  },
};

export default function Page() {
  return <OwnerPage page={ownerPages.cylinders} current="/products/fluids/cylinder-operations" />;
}
