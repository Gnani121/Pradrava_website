import OwnerPage from "@/components/OwnerPage";
import { ownerPages } from "@/data/ownerPages";

export const metadata = {
  title: "Alerts & Reminders | Fluids",
  description:
    "Every step in a gas plant has an owner and a time to be done by. When work waits too long the owner is told, then their manager, and reminders chase unpaid invoices, test dates and calibration.",
  keywords: [
    "workflow escalation software",
    "automated reminders for manufacturing",
    "overdue invoice reminder software",
    "cylinder hydro test due alert",
    "calibration expiry alert software",
  ],
  alternates: {
    canonical: "/products/fluids/notifications",
  },
};

export default function Page() {
  return <OwnerPage page={ownerPages.notifications} current="/products/fluids/notifications" />;
}
