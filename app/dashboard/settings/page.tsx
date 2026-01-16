"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, CreditCard, FileText, Globe, Upload, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Settings</h3>
        <p className="text-sm text-muted-foreground">
          Manage your business identity, tax compliance, and local regulatory settings.
        </p>
      </div>
      <Separator />
      
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
             <Button variant="secondary" className="justify-start">
                <Building className="mr-2 h-4 w-4" />
                Business Profile
             </Button>
             <Button variant="ghost" className="justify-start text-muted-foreground hover:bg-slate-50">
                <FileText className="mr-2 h-4 w-4" />
                Tax Rates
             </Button>
             <Button variant="ghost" className="justify-start text-muted-foreground hover:bg-slate-50">
                <Users className="mr-2 h-4 w-4" />
                Users
             </Button>
             <Button variant="ghost" className="justify-start text-muted-foreground hover:bg-slate-50">
                <Globe className="mr-2 h-4 w-4" />
                Integrations
             </Button>
             <Button variant="ghost" className="justify-start text-muted-foreground hover:bg-slate-50">
                <CreditCard className="mr-2 h-4 w-4" />
                Billing
             </Button>
          </nav>
        </aside>
        
        <div className="flex-1 lg:max-w-4xl space-y-6">
           {/* Business Profile Card */}
           <Card>
               <CardHeader>
                   <CardTitle className="flex items-center gap-2">
                       <Building className="h-5 w-5 text-emerald-600" />
                       Business Profile
                   </CardTitle>
               </CardHeader>
               <CardContent className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Logo Upload */}
                        <div className="flex-shrink-0">
                            <div className="h-40 w-40 border-2 border-dashed border-slate-200 rounded-lg flex flex-col items-center justify-center text-center p-4 hover:bg-slate-50 cursor-pointer transition-colors">
                                <Upload className="h-8 w-8 text-slate-300 mb-2" />
                                <span className="text-xs font-medium text-slate-600">Upload Logo</span>
                                <span className="text-[10px] text-slate-400 mt-1">SVG, PNG, JPG (Max 2MB)</span>
                            </div>
                            <p className="text-[10px] text-center text-slate-400 mt-2">Business Branding</p>
                        </div>

                        {/* Form Fields */}
                        <div className="flex-1 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Business Name</Label>
                                    <Input placeholder="e.g. Nairobi Coffee House" />
                                </div>
                                <div className="space-y-2">
                                    <Label>KRA PIN Number</Label>
                                    <Input placeholder="P051234567Z" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>Physical Address</Label>
                                <Textarea placeholder="Mama Ngina St, Nairobi, Kenya" className="resize-none" />
                            </div>
                            <div className="flex justify-end">
                                <Button className="bg-emerald-600 hover:bg-emerald-700">Save Profile Changes</Button>
                            </div>
                        </div>
                    </div>
               </CardContent>
           </Card>

           {/* Tax Config */}
           <Card>
               <CardHeader className="flex flex-row items-center justify-between">
                   <div className="space-y-0.5">
                       <CardTitle className="flex items-center gap-2 text-base">
                           <FileText className="h-5 w-5 text-emerald-600" />
                           Tax Configuration
                       </CardTitle>
                       <CardDescription>
                           Configure VAT and other statutory levies applied to sales.
                       </CardDescription>
                   </div>
                   <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50">
                       + Add New Tax Rule
                   </Button>
               </CardHeader>
               <CardContent className="space-y-6">
                   <div className="flex items-center justify-between rounded-lg border p-4">
                       <div className="space-y-0.5">
                           <div className="flex items-center gap-2">
                                <div className="p-2 bg-emerald-100 rounded-md">
                                    <FileText className="h-4 w-4 text-emerald-600" />
                                </div>
                                <span className="font-medium">Standard VAT (16%)</span>
                           </div>
                           <p className="text-sm text-muted-foreground pl-10">
                               Default tax for most products and services
                           </p>
                       </div>
                       <div className="flex items-center gap-4">
                           <span className="text-xs font-medium text-emerald-600">Active globally</span>
                           <Switch checked={true} />
                       </div>
                   </div>

                   <div className="flex items-center justify-between rounded-lg border p-4 bg-slate-50/50">
                       <div className="space-y-0.5">
                           <div className="flex items-center gap-2">
                                <div className="p-2 bg-orange-100 rounded-md">
                                    <FileText className="h-4 w-4 text-orange-600" />
                                </div>
                                <span className="font-medium">Catering Levy (2%)</span>
                           </div>
                           <p className="text-sm text-muted-foreground pl-10">
                               Applied to hotel and restaurant bills
                           </p>
                       </div>
                       <div className="flex items-center gap-4">
                           <span className="text-xs font-medium text-slate-500">Disabled</span>
                           <Switch checked={false} />
                       </div>
                   </div>

                   <div className="flex items-center justify-between rounded-lg border p-4">
                       <div className="space-y-0.5">
                           <div className="flex items-center gap-2">
                                <div className="p-2 bg-blue-100 rounded-md">
                                    <FileText className="h-4 w-4 text-blue-600" />
                                </div>
                                <span className="font-medium">Zero Rated (0%)</span>
                           </div>
                           <p className="text-sm text-muted-foreground pl-10">
                               For exempt exports and basic commodities
                           </p>
                       </div>
                       <div className="flex items-center gap-4">
                           <span className="text-xs font-medium text-emerald-600">Active globally</span>
                           <Switch checked={true} />
                       </div>
                   </div>
               </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
