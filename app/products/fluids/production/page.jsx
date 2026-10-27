import OwnerPage from "@/components/OwnerPage";
import { ownerPages } from "@/data/ownerPages";

export const metadata = {
  title: "Production & Machines | Fluids",
  description:
    "Filling from cylinders, tanks or an on-site plant, with what each fill used and cost recorded, plus machine breakdowns, servicing on run hours and calibration.",
  keywords: [
    "cylinder filling management software",
    "gas filling plant software",
    "preventive maintenance run hours software",
    "OEE MTBF MTTR software",
    "bulk liquid gas tank software",
  ],
  alternates: {
    canonical: "/products/fluids/production",
  },
};

export default function Page() {
  return <OwnerPage page={ownerPages.production} current="/products/fluids/production" />;
}
