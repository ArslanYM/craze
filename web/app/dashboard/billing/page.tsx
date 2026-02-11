import { DashboardLayout } from "@/components/dashboard-layout";

export default function BillingPage() {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 mb-3">
          Billing
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
          Manage your billing and subscription.
        </p>
      </div>
    </DashboardLayout>
  );
}
