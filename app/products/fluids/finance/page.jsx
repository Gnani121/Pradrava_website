import OwnerPage from "@/components/OwnerPage";
import { ownerPages } from "@/data/ownerPages";

export const metadata = {
  title: "Billing & GST | Fluids",
  description:
    "GST-correct invoices from the delivery, rent on cylinders billed when it is due and never twice, customer payments, returns and credit limits, handed to the accounts package you already use.",
  keywords: [
    "GST invoicing software for gas plants",
    "cylinder rental and demurrage billing",
    "gas cylinder billing software",
    "accounts receivable ageing software",
    "gapless invoice numbering",
  ],
  alternates: {
    canonical: "/products/fluids/finance",
  },
};

export default function Page() {
  return <OwnerPage page={ownerPages.finance} current="/products/fluids/finance" />;
}
