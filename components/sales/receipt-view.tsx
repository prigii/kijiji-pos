"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Mail, Printer, Share2 } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ReceiptViewProps {
  onNewSale: () => void;
}

export function ReceiptView({ onNewSale }: ReceiptViewProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-slate-50/50 p-6 animate-in fade-in zoom-in duration-300">
      <div className="flex flex-col items-center mb-8 space-y-2">
        <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="h-6 w-6 text-emerald-600" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Transaction Successful</h2>
        <p className="text-slate-500">Sale #TRX-9402 has been processed and recorded.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center w-full max-w-5xl">
         {/* Receipt Paper */}
         <div className="bg-white p-8 w-full max-w-sm shadow-xl drop-shadow-2xl relative">
            {/* Top Zigzag */}
            <div className="absolute top-0 left-0 right-0 h-4 bg-[linear-gradient(135deg,white_8px,transparent_0),linear-gradient(-135deg,white_8px,transparent_0)] bg-[length:16px_16px] bg-repeat-x -mt-2"></div>
            
            <div className="text-center space-y-1 mb-6 border-b pb-6 border-dashed border-slate-200">
                <h3 className="font-bold text-lg uppercase tracking-wider">Kijiji POS Ltd.</h3>
                <p className="text-xs text-slate-500 uppercase">Original Receipt</p>
                <div className="text-xs text-slate-400 mt-2 space-y-0.5">
                    <p>P.O. Box 1234, Nairobi, Kenya</p>
                    <p>PIN: P051234567Z</p>
                    <p>Tel: +254 700 000000</p>
                </div>
            </div>

            <div className="flex justify-between text-xs font-mono mb-6 text-slate-500">
                <div className="space-y-1">
                    <p>DATE: 24 OCT 2023</p>
                    <p>TIME: 14:30:12</p>
                </div>
                <div className="space-y-1 text-right">
                    <p>ID: TRX-9402</p>
                    <p>CASHIER: J. KAMAU</p>
                </div>
            </div>

            <div className="space-y-3 mb-6 font-mono text-sm border-b pb-6 border-dashed border-slate-200">
                <div className="flex justify-between">
                    <span>Kenyatta Tea 500g</span>
                    <div className="flex gap-4">
                        <span className="text-slate-400">x2</span>
                        <span>900.00</span>
                    </div>
                </div>
                <div className="flex justify-between">
                    <span>White Sugar 1kg</span>
                    <div className="flex gap-4">
                        <span className="text-slate-400">x1</span>
                        <span>210.00</span>
                    </div>
                </div>
                <div className="flex justify-between">
                    <span>UHT Milk 1L</span>
                    <div className="flex gap-4">
                        <span className="text-slate-400">x3</span>
                        <span>360.00</span>
                    </div>
                </div>
            </div>

            <div className="space-y-2 mb-6 text-sm">
                <div className="flex justify-between text-slate-500">
                    <span>Subtotal</span>
                    <span>KES 1,470.00</span>
                </div>
                <div className="flex justify-between text-slate-500">
                    <span>VAT (16%)</span>
                    <span>KES 235.20</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-slate-100 mt-2">
                    <span>TOTAL</span>
                    <span>KES 1,705.20</span>
                </div>
            </div>

            <div className="bg-emerald-50 p-4 rounded-md text-center mb-6">
                <p className="text-xs font-bold text-emerald-700 uppercase">Paid via M-PESA</p>
                <p className="text-xs font-mono text-emerald-600">REF: RKJ45X90P2</p>
            </div>

            <div className="text-center space-y-2">
                <div className="flex justify-center">
                    {/* Barcode Mock */}
                    <div className="h-8 w-48 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/UPC-A-036000291452.svg/1200px-UPC-A-036000291452.svg.png')] bg-cover opacity-50 grayscale"></div>
                </div>
                <p className="text-[10px] text-slate-400">Thank you for supporting local business!</p>
            </div>
             {/* Bottom Zigzag */}
             <div className="absolute bottom-0 left-0 right-0 h-4 bg-[linear-gradient(135deg,white_8px,transparent_0),linear-gradient(-135deg,white_8px,transparent_0)] bg-[length:16px_16px] bg-repeat-x rotate-180 -mb-2"></div>
         </div>

         {/* Actions */}
         <div className="w-full max-w-xs space-y-4">
            <Card className="p-4 bg-white border-0 shadow-lg">
                 <h4 className="text-sm font-semibold mb-3">Post-Sale Actions</h4>
                 <Button onClick={onNewSale} className="w-full bg-emerald-600 hover:bg-emerald-700 mb-2">
                    <ShoppingCartIcon className="mr-2 h-4 w-4" /> New Sale
                 </Button>
                 <Button variant="secondary" className="w-full bg-slate-100 hover:bg-slate-200">
                    <Printer className="mr-2 h-4 w-4" /> Print Receipt
                 </Button>
            </Card>

            <Card className="p-4 bg-white border-0 shadow-lg">
                <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                        <Mail className="mr-2 h-4 w-4" /> Email to Customer
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                         <Share2 className="mr-2 h-4 w-4" /> SMS Confirmation
                    </Button>
                </div>
            </Card>
            
            <Card className="p-4 bg-emerald-50 border-emerald-100">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-emerald-200 flex items-center justify-center">
                        <span className="text-emerald-700 text-xs font-bold">AL</span>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-emerald-900">Alice Wangari</p>
                        <p className="text-xs text-emerald-600">Loyalty Level: Silver</p>
                    </div>
                    <div className="ml-auto">
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-200 px-2 py-1 rounded-full">+74 pts</span>
                    </div>
                </div>
            </Card>
         </div>
      </div>
    </div>
  );
}

function ShoppingCartIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    )
  }
