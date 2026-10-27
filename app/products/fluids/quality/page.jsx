import OwnerPage from "@/components/OwnerPage";
import { ownerPages } from "@/data/ownerPages";

export const metadata = {
  title: "Quality & Lab | Fluids",
  description:
    "Gas tests that decide what happens next, certificates of analysis printed from the real result, instruments kept in calibration, and pressure-test and shelf-life dates watched for you.",
  keywords: [
    "ISO 6141 certificate of analysis software",
    "ISO 17025 calibration register software",
    "LIMS for gas quality testing",
    "AQL sampling plan ISO 2859-1 software",
    "gas cylinder hydro test due alert",
  ],
  alternates: {
    canonical: "/products/fluids/quality",
  },
};

export default function Page() {
  return <OwnerPage page={ownerPages.quality} current="/products/fluids/quality" />;
}
