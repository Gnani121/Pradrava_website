import OwnerPage from "@/components/OwnerPage";
import { ownerPages } from "@/data/ownerPages";

export const metadata = {
  title: "Security & Branches | Fluids",
  description:
    "Each branch sees only its own data, each person only the screens their role needs, every change recorded, and nothing to install. Hosted in India.",
  keywords: [
    "multi branch ERP for gas distribution",
    "role based access control software",
    "audit trail software",
    "secure cloud ERP India",
    "gas plant software for multiple branches",
  ],
  alternates: {
    canonical: "/products/fluids/platform",
  },
};

export default function Page() {
  return <OwnerPage page={ownerPages.platform} current="/products/fluids/platform" />;
}
