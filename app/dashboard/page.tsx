"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { salesStats, transactions } from "@/lib/data";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ArrowUpRight, CreditCard, DollarSign, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const chartData = [
  { name: "Mon", total: 12000 },
  { name: "Tue", total: 18500 },
  { name: "Wed", total: 15200 },
  { name: "Thu", total: 24000 },
  { name: "Fri", total: 21000 },
  { name: "Sat", total: 32000 },
  { name: "Sun", total: 38000 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Dashboard</h2>
        <div className="flex items-center space-x-2">
           <span className="text-sm text-slate-500 dark:text-slate-400">Last updated: Today, 12:00 PM</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="dark:bg-slate-800 dark:border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-slate-500 dark:text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">KES {salesStats.totalSales.toLocaleString()}</div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="dark:bg-slate-800 dark:border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Transactions</CardTitle>
            <CreditCard className="h-4 w-4 text-slate-500 dark:text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{salesStats.transactions}</div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="dark:bg-slate-800 dark:border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
             <CardTitle className="text-sm font-medium">Avg. Order Value</CardTitle>
             <Activity className="h-4 w-4 text-slate-500 dark:text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">KES {salesStats.avgOrderValue.toLocaleString()}</div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="dark:bg-slate-800 dark:border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Product</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-slate-500 dark:text-slate-400" />
          </CardHeader>
          <CardContent>
             <div className="text-2xl font-bold truncate">{salesStats.topProduct}</div>
             <p className="text-xs text-slate-500 dark:text-slate-400">
               32 units sold this week
             </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Chart */}
        <Card className="col-span-4 dark:bg-slate-800 dark:border-slate-700">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>
                Weekly sales performance in KES.
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                    <defs>
                        <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#059669" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#059669" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis 
                        dataKey="name" 
                        stroke="#888888" 
                        fontSize={12} 
                        tickLine={false} 
                        axisLine={false} 
                    />
                    <YAxis 
                        stroke="#888888" 
                        fontSize={12} 
                        tickLine={false} 
                        axisLine={false}
                        tickFormatter={(value) => `K${value}`} 
                    />
                    <Tooltip 
                        contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
                        formatter={(value: number) => [`KES ${value.toLocaleString()}`, "Revenue"]}
                    />
                    <Area 
                        type="monotone" 
                        dataKey="total" 
                        stroke="#059669" 
                        strokeWidth={2}
                        fillOpacity={1} 
                        fill="url(#colorTotal)" 
                    />
                </AreaChart>
                </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Transactions */}
        <Card className="col-span-3 dark:bg-slate-800 dark:border-slate-700">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>
              Latest 4 sales from your shop.
            </CardDescription>
          </CardHeader>
          <CardContent>
             <div className="space-y-8">
                {transactions.map((trx) => (
                    <div key={trx.id} className="flex items-center">
                        <div className="h-9 w-9 rounded-full bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center border border-emerald-100 dark:border-emerald-900">
                             <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                                {trx.customer.charAt(0)}
                             </span>
                        </div>
                        <div className="ml-4 space-y-1">
                            <p className="text-sm font-medium leading-none">{trx.customer}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{trx.method} • {trx.time}</p>
                        </div>
                        <div className="ml-auto font-medium">
                            +KES {trx.amount.toLocaleString()}
                        </div>
                    </div>
                ))}
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
