import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import { UserNav } from "@/components/dashboard/user-nav";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-900">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r bg-white dark:bg-slate-950 dark:border-slate-800 md:flex">
        <div className="flex h-16 items-center border-b dark:border-slate-800 px-6">
          <Link className="flex items-center gap-2 font-bold text-slate-900 dark:text-white" href="/dashboard">
            <Image src="/icon.png" alt="Kijiji POS" width={32} height={32} className="rounded-md" />
            <span className="text-lg">Kijiji POS</span>
          </Link>
        </div>
        <div className="flex-1 overflow-y-auto py-6 px-4">
          <DashboardNav />
        </div>
        <div className="p-4 border-t dark:border-slate-800">
             <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Status</p>
                <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    System Operational
                </div>
             </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 items-center justify-between border-b dark:border-slate-800 bg-white dark:bg-slate-950 px-6">
            <div className="w-full max-w-sm">
                <Input 
                    type="search" 
                    placeholder="Search query (Press '/')..." 
                    className="h-9 md:w-[300px] lg:w-[300px] dark:bg-slate-900 dark:border-slate-700"
                />
            </div>
            <div className="flex items-center gap-4">
                <UserNav />
            </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
            {children}
        </main>
      </div>
    </div>
  );
}
