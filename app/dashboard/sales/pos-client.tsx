"use client";

import { useState } from "react";
import { products, categories } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Plus, Minus, Trash2, Smartphone, Banknote, CreditCard, ChevronRight } from "lucide-react";
import { 
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { ReceiptView } from "@/components/sales/receipt-view";
import { Badge } from "@/components/ui/badge";

export default function POSClient() {
  const [cart, setCart] = useState<{ product: any; quantity: number }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [view, setView] = useState<"pos" | "receipt">("pos");
  const [paymentStep, setPaymentStep] = useState<"method" | "mpesa-prompt">("method");

  const addToCart = (product: any) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.product.id === productId) {
          return { ...item, quantity: Math.max(0, item.quantity + delta) };
        }
        return item;
      }).filter((item) => item.quantity > 0)
    );
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const tax = subtotal * 0.16; // 16% VAT
  const total = subtotal + tax;

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
        selectedCategory === "All Products" || product.category === selectedCategory;
    const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        product.sku.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCheckout = () => {
    setIsCheckoutOpen(true);
    setPaymentStep("method");
  };

  const processPayment = () => {
    if (paymentStep === "method") {
        // Just go to "success" immediately for cash, or show prompt for mpesa
        // For demo, we just simulate success after a loading state
        setIsCheckoutOpen(false);
        setView("receipt");
        setCart([]);
    }
  };

  if (view === "receipt") {
      return <ReceiptView onNewSale={() => setView("pos")} />;
  }

  return (
    <div className="flex h-[calc(100vh-6rem)] gap-6">
      {/* Left: Product Grid */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Filters */}
        <div className="flex items-center justify-between gap-4">
            <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                    placeholder="Search products (Press F1)..." 
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="flex items-center gap-2">
                 <Badge variant="outline" className="px-3 py-1 bg-emerald-50 text-emerald-700 border-emerald-200">
                    STATION 01
                 </Badge>
                 <div className="text-right">
                    <p className="text-xs font-bold text-slate-800">Main Terminal</p>
                    <p className="text-[10px] text-slate-500">May 24, 2024 • 14:52</p>
                 </div>
            </div>
        </div>

        {/* Categories */}
        <ScrollArea className="w-full whitespace-nowrap pb-2">
            <div className="flex w-max space-x-2 p-1">
                {categories.map((cat) => (
                    <Button
                        key={cat}
                        variant={selectedCategory === cat ? "default" : "secondary"}
                        className={`rounded-full ${selectedCategory === cat ? "bg-emerald-800 hover:bg-emerald-900" : "bg-white text-slate-600 hover:bg-slate-100"}`}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat}
                    </Button>
                ))}
            </div>
        </ScrollArea>

        {/* Grid */}
        <ScrollArea className="flex-1 pr-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-4">
                {filteredProducts.map((product) => (
                    <Card 
                        key={product.id} 
                        className="cursor-pointer hover:shadow-lg transition-all border-slate-200 active:scale-95 group overflow-hidden"
                        onClick={() => addToCart(product)}
                    >
                        <CardContent className="p-4 flex flex-col items-center text-center space-y-3">
                            <div className="h-24 w-24 bg-slate-100 rounded-lg flex items-center justify-center mb-2 group-hover:bg-emerald-50 transition-colors">
                                {/* Placeholder Image */}
                                <div className="text-2xl font-bold text-slate-300 group-hover:text-emerald-300">
                                    {product.name.charAt(0)}
                                </div>
                            </div>
                            <div className="space-y-1 w-full">
                                <h3 className="font-semibold text-sm truncate w-full" title={product.name}>{product.name}</h3>
                                <p className="text-emerald-700 font-bold">KES {product.price.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between w-full text-[10px] text-slate-400">
                                <span>Stock: {product.stock}</span>
                                <span>{product.sku}</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </ScrollArea>
      </div>

      {/* Right: Cart Sidebar */}
      <div className="w-96 flex flex-col bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden h-full">
         <div className="p-4 border-b flex items-center justify-between">
            <h3 className="font-bold text-lg">Current Order</h3>
            <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 text-xs h-auto py-1" onClick={() => setCart([])}>
                CLEAR ALL
            </Button>
         </div>

         <ScrollArea className="flex-1 p-4">
             <div className="space-y-4">
                {cart.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-40 text-slate-400 space-y-2">
                        <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center">
                            <ShoppingCartIcon className="h-6 w-6" />
                        </div>
                        <p className="text-sm">Cart is empty</p>
                    </div>
                )}
                {cart.map((item) => (
                    <div key={item.product.id} className="flex items-center justify-between bg-slate-50/50 p-2 rounded-lg">
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold truncate">{item.product.name}</p>
                            <p className="text-xs text-muted-foreground">KES {item.product.price} each</p>
                        </div>
                        <div className="flex items-center gap-3 ml-2">
                             <div className="flex items-center bg-white rounded-md border border-slate-200 shadow-sm">
                                <button className="px-2 py-1 text-slate-600 hover:bg-slate-50" onClick={() => updateQuantity(item.product.id, -1)}><Minus className="h-3 w-3" /></button>
                                <span className="px-2 text-xs font-mono font-medium min-w-[1.5rem] text-center">{item.quantity}</span>
                                <button className="px-2 py-1 text-slate-600 hover:bg-slate-50" onClick={() => updateQuantity(item.product.id, 1)}><Plus className="h-3 w-3" /></button>
                             </div>
                             <div className="font-bold text-sm min-w-[4rem] text-right">
                                {Math.ceil(item.product.price * item.quantity).toLocaleString()}
                             </div>
                        </div>
                    </div>
                ))}
             </div>
         </ScrollArea>

         {/* Summary & Checkout */}
         <div className="p-4 bg-slate-50 space-y-4 border-t">
            <div className="space-y-2 text-sm">
                <div className="flex justify-between text-slate-500">
                    <span>Subtotal</span>
                    <span>KES {subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                    <span>VAT (16%)</span>
                    <span>KES {tax.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-emerald-900 pt-2 border-t border-slate-200">
                    <span>Total</span>
                    <span>KES {total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
                 <Button variant="outline" className="w-full bg-white">
                    Hold Order
                 </Button>
                 <Button variant="outline" className="w-full bg-white">
                    Add Disc.
                 </Button>
            </div>

            <Button 
                className="w-full bg-emerald-700 hover:bg-emerald-800 py-6 text-lg shadow-lg shadow-emerald-900/10" 
                onClick={handleCheckout}
                disabled={cart.length === 0}
            >
                Checkout <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            
            <p className="text-[10px] text-center text-slate-400 uppercase tracking-widest">Quick Key: Space to Pay</p>
         </div>

         {/* Checkout Modal */}
         <Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Payment Method</DialogTitle>
                    <DialogDescription>
                        Select how the customer is paying. Total: <span className="font-bold text-emerald-600">KES {total.toLocaleString()}</span>
                    </DialogDescription>
                </DialogHeader>
                
                {paymentStep === "method" && (
                    <div className="grid grid-cols-2 gap-4 py-4">
                        <Button 
                            variant="outline" 
                            className="h-24 flex flex-col gap-2 hover:bg-emerald-50 hover:border-emerald-600 hover:text-emerald-700"
                            onClick={() => setPaymentStep("mpesa-prompt")}
                        >
                            <Smartphone className="h-8 w-8" />
                            <span className="font-bold">M-PESA</span>
                        </Button>
                        <Button 
                            variant="outline"
                            className="h-24 flex flex-col gap-2 hover:bg-emerald-50 hover:border-emerald-600 hover:text-emerald-700"
                            onClick={processPayment}
                        >
                            <Banknote className="h-8 w-8" />
                            <span className="font-bold">Cash</span>
                        </Button>
                        <Button variant="outline" className="h-24 flex flex-col gap-2 opacity-50 cursor-not-allowed">
                            <CreditCard className="h-8 w-8" />
                            <span className="font-bold">Card</span>
                        </Button>
                         <Button variant="outline" className="h-24 flex flex-col gap-2 opacity-50 cursor-not-allowed">
                            <span className="text-xl font-bold">...</span>
                            <span className="font-bold">Other</span>
                        </Button>
                    </div>
                )}

                {paymentStep === "mpesa-prompt" && (
                     <div className="py-4 space-y-4">
                         <div className="space-y-2">
                             <label className="text-xs font-bold uppercase text-slate-500">Customer Phone Number</label>
                             <div className="flex gap-2">
                                <div className="flex items-center px-3 bg-slate-100 border border-slate-200 rounded-md text-slate-500 font-medium">+254</div>
                                <Input autoFocus placeholder="712 345 678" className="font-mono text-lg" defaultValue="712 345 678" />
                             </div>
                         </div>
                         <div className="p-4 bg-yellow-50 text-yellow-800 rounded-md text-sm border border-yellow-200 flex items-center gap-2">
                             <span className="animate-pulse h-2 w-2 rounded-full bg-yellow-600"></span>
                             Waiting for customer PIN...
                         </div>
                         <Button className="w-full bg-emerald-600 hover:bg-emerald-700 py-6" onClick={processPayment}>
                            Request Payment
                         </Button>
                         <div className="text-center">
                            <button className="text-xs text-slate-400 hover:underline" onClick={() => setPaymentStep("method")}>
                                Or confirm manually
                            </button>
                         </div>
                     </div>
                )}

                {paymentStep === "method" && (
                    <DialogFooter className="sm:justify-start">
                        <Button type="button" variant="secondary" onClick={() => setIsCheckoutOpen(false)}>
                            Cancel
                        </Button>
                    </DialogFooter>
                )}
            </DialogContent>
         </Dialog>
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
