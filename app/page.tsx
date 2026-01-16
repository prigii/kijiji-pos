import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, ShoppingCart, Users, CheckCircle2 } from "lucide-react";
import { login } from "./actions/auth";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Navbar */}
      <nav className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                <Image src="/icon.png" alt="Kijiji POS" width={32} height={32} className="rounded-md" />
                <span className="text-xl">Kijiji POS</span>
            </div>
            <div className="flex items-center gap-4">
                <a href="#features" className="text-sm font-medium text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 hidden md:block">Features</a>
                <a href="#about" className="text-sm font-medium text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 hidden md:block">About</a>
                <ModeToggle />
            </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
         {/* Hero Content */}
         <div className="space-y-8">
             <div className="space-y-4">
                 <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                     Empower Your <span className="text-emerald-600">Biashara</span> Today.
                 </h1>
                 <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl">
                     The all-in-one Point of Sale system designed for Kenyan small businesses. Manage sales, inventory, and staff with ease.
                 </p>
             </div>
             
             <div className="space-y-4">
                 <div className="flex items-center gap-3">
                     <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                     <span className="text-slate-700 dark:text-slate-200">Integrated M-PESA Payments</span>
                 </div>
                 <div className="flex items-center gap-3">
                     <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                     <span className="text-slate-700 dark:text-slate-200">Real-time Stock Tracking</span>
                 </div>
                 <div className="flex items-center gap-3">
                     <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                     <span className="text-slate-700 dark:text-slate-200">Detailed Financial Reports</span>
                 </div>
             </div>

             <div className="grid grid-cols-3 gap-6 pt-8">
                 <div className="space-y-2">
                     <ShoppingCart className="h-8 w-8 text-emerald-600" />
                     <h3 className="font-bold text-slate-900 dark:text-white">Point of Sale</h3>
                     <p className="text-sm text-slate-500 dark:text-slate-400">Fast checkout for high volume.</p>
                 </div>
                 <div className="space-y-2">
                     <BarChart3 className="h-8 w-8 text-emerald-600" />
                     <h3 className="font-bold text-slate-900 dark:text-white">Analytics</h3>
                     <p className="text-sm text-slate-500 dark:text-slate-400">Know your top sellers.</p>
                 </div>
                 <div className="space-y-2">
                     <Users className="h-8 w-8 text-emerald-600" />
                     <h3 className="font-bold text-slate-900 dark:text-white">Staff</h3>
                     <p className="text-sm text-slate-500 dark:text-slate-400">Manage access & roles.</p>
                 </div>
             </div>
         </div>

         {/* Login Form */}
         <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md border-slate-200 dark:border-slate-800 shadow-2xl dark:bg-slate-900">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-semibold text-center">Karibu!</CardTitle>
                    <CardDescription className="text-center">
                    Enter your credentials to access the workspace
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={login} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="name@business.ke" required className="dark:bg-slate-950" />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <a href="#" className="text-sm font-medium text-emerald-600 hover:text-emerald-500">
                            Forgot password?
                        </a>
                        </div>
                        <Input id="password" name="password" type="password" required className="dark:bg-slate-950" />
                    </div>
                    <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-6">
                        Sign In
                    </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4 text-center">
                    <p className="text-sm text-slate-500">
                      New to Kijiji POS?{" "}
                      <a href="#" className="font-semibold text-emerald-600 hover:text-emerald-500">
                        Request Demo
                      </a>
                    </p>
                </CardFooter>
            </Card>
         </div>
      </div>
      
      <footer className="border-t bg-white dark:bg-slate-900 py-6">
          <div className="container mx-auto px-6 text-center text-sm text-slate-500 dark:text-slate-400">
              <p>&copy; 2024 Kijiji Systems Ltd. Nairobi, Kenya. All rights reserved.</p>
          </div>
      </footer>
    </div>
  );
}
