"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { UploadCloud } from "lucide-react";

export function ProductForm() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-emerald-600 hover:bg-emerald-700">Add New Product</Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Add New Product</SheetTitle>
          <SheetDescription>
            Create a new item in your inventory.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Product Name</Label>
            <Input id="name" placeholder="e.g. Maize Flour 2kg" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="sku">SKU</Label>
                <Input id="sku" placeholder="SKU-XXXX" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Categories</SelectLabel>
                            <SelectItem value="grains">Grains</SelectItem>
                            <SelectItem value="dairy">Dairy</SelectItem>
                            <SelectItem value="beverages">Beverages</SelectItem>
                            <SelectItem value="essentials">Essentials</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
          </div>

          <div className="space-y-2">
             <Label className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Pricing & Stock</Label>
             <div className="p-4 bg-slate-50 rounded-lg space-y-4 border border-slate-100">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="cost">Cost Price (KES)</Label>
                        <Input id="cost" placeholder="0.00" type="number" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="selling">Selling Price (KES)</Label>
                        <Input id="selling" placeholder="0.00" type="number" />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="quantity">Initial Quantity</Label>
                    <Input id="quantity" placeholder="0" type="number" />
                </div>
             </div>
          </div>

          <div className="space-y-2">
            <Label>Product Image</Label>
            <div className="border-2 border-dashed border-slate-200 rounded-lg p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer">
                <div className="p-3 bg-slate-100 rounded-full mb-3">
                    <UploadCloud className="h-6 w-6 text-slate-400" />
                </div>
                <p className="text-sm font-medium text-slate-900">Click to upload or drag & drop</p>
                <p className="text-xs text-slate-500 mt-1">SVG, PNG, JPG (max. 2MB)</p>
            </div>
          </div>

        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">Save Product</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
