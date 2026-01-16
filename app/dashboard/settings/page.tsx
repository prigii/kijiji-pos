"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Building, Percent, Users, Sliders, CreditCard, Upload, ArrowLeft, Plus, Pencil } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState } from "react";

const settingsNav = [
  { id: "profile", label: "Business Profile", icon: Building },
  { id: "tax", label: "Tax Rates", icon: Percent },
  { id: "users", label: "Users", icon: Users },
  { id: "integrations", label: "Integrations", icon: Sliders },
  { id: "billing", label: "Billing", icon: CreditCard },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="flex h-[calc(100vh-6rem)] gap-0 -m-6 md:-m-8">
      {/* Left Sidebar Navigation */}
      <aside className="w-64 bg-white dark:bg-slate-950 border-r dark:border-slate-800 flex flex-col">
        <div className="p-6 border-b dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-950 rounded-lg">
              <Building className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">POS Admin</h3>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">KES Currency</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {settingsNav.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border-l-4 border-emerald-600"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t dark:border-slate-800">
          <Link href="/dashboard">
            <Button variant="outline" className="w-full justify-start dark:bg-slate-900 dark:border-slate-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-900">
        <div className="p-8 max-w-5xl">
          {activeTab === "profile" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Business Settings</h1>
                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  Manage your business identity, tax compliance, and local regulatory settings for Kenya.
                </p>
              </div>

              {/* Business Profile Section */}
              <Card className="dark:bg-slate-800 dark:border-slate-700">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    <CardTitle>Business Profile</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Logo Upload */}
                    <div className="flex-shrink-0">
                      <div className="h-40 w-40 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg flex flex-col items-center justify-center text-center p-4 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer transition-colors">
                        <Upload className="h-8 w-8 text-slate-400 dark:text-slate-500 mb-2" />
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Upload Logo</span>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1">SVG, PNG, JPG (Max 2MB)</span>
                      </div>
                      <p className="text-[10px] text-center text-slate-400 dark:text-slate-500 mt-2">Business Branding</p>
                      <p className="text-[10px] text-center text-slate-400 dark:text-slate-500">Used for receipts and invoices</p>
                    </div>

                    {/* Form Fields */}
                    <div className="flex-1 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Business Name</Label>
                          <Input placeholder="e.g. Nairobi Coffee House" className="dark:bg-slate-900 dark:border-slate-600" />
                        </div>
                        <div className="space-y-2">
                          <Label>KRA PIN Number</Label>
                          <Input placeholder="P051234567X" className="dark:bg-slate-900 dark:border-slate-600" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Physical Address</Label>
                        <Textarea 
                          placeholder="Mama Ngina St, Nairobi, Kenya" 
                          className="resize-none dark:bg-slate-900 dark:border-slate-600" 
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">Save Profile Changes</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Tax Configuration Section */}
              <Card className="dark:bg-slate-800 dark:border-slate-700">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Percent className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      <CardTitle>Tax Configuration</CardTitle>
                    </div>
                    <CardDescription>
                      Configure VAT and other statutory levies applied to sales.
                    </CardDescription>
                  </div>
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Tax Rule
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Standard VAT */}
                  <div className="flex items-center justify-between p-4 rounded-lg border dark:border-slate-700 bg-white dark:bg-slate-900">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-emerald-100 dark:bg-emerald-950 rounded-lg">
                        <Percent className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">Standard VAT (16%)</span>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Default tax for most products and services
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase">Status</p>
                        <Badge className="bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-200">
                          Active globally
                        </Badge>
                      </div>
                      <Switch checked={true} />
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Catering Levy */}
                  <div className="flex items-center justify-between p-4 rounded-lg border dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-orange-100 dark:bg-orange-950 rounded-lg">
                        <Percent className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">Catering Levy (2%)</span>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Applied to hotel and restaurant bills
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase">Status</p>
                        <Badge variant="secondary" className="dark:bg-slate-700">
                          Disabled
                        </Badge>
                      </div>
                      <Switch checked={false} />
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Zero Rated */}
                  <div className="flex items-center justify-between p-4 rounded-lg border dark:border-slate-700 bg-white dark:bg-slate-900">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-950 rounded-lg">
                        <Percent className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">Zero Rated (0%)</span>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          For exempt exports and basic commodities
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase">Status</p>
                        <Badge className="bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-200">
                          Active globally
                        </Badge>
                      </div>
                      <Switch checked={true} />
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-3 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg mt-4">
                    <div className="p-1 bg-blue-100 dark:bg-blue-900 rounded-full mt-0.5">
                      <svg className="h-3 w-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-xs text-blue-700 dark:text-blue-300">
                      Tax changes will be reflected in all new receipts immediately. Past transactions will remain unchanged.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "tax" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Tax Rates</h1>
                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  Manage tax rates and compliance settings.
                </p>
              </div>
              <Card className="dark:bg-slate-800 dark:border-slate-700">
                <CardContent className="p-12 text-center">
                  <p className="text-slate-500 dark:text-slate-400">Tax rates configuration coming soon...</p>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "users" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Users</h1>
                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  Manage user access and permissions.
                </p>
              </div>
              <Card className="dark:bg-slate-800 dark:border-slate-700">
                <CardContent className="p-12 text-center">
                  <p className="text-slate-500 dark:text-slate-400">User management coming soon...</p>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "integrations" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Integrations</h1>
                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  Connect with third-party services.
                </p>
              </div>
              <Card className="dark:bg-slate-800 dark:border-slate-700">
                <CardContent className="p-12 text-center">
                  <p className="text-slate-500 dark:text-slate-400">Integrations coming soon...</p>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "billing" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Billing</h1>
                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  Manage your subscription and billing information.
                </p>
              </div>
              <Card className="dark:bg-slate-800 dark:border-slate-700">
                <CardContent className="p-12 text-center">
                  <p className="text-slate-500 dark:text-slate-400">Billing settings coming soon...</p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
