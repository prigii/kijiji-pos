"use client";

import { AlertOctagon, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { products } from "@/lib/data";
import { ProductForm } from "@/components/inventory/product-form";

export default function InventoryPage() {
  return (
    <div className="space-y-6">
       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
         <div>
            <h2 className="text-3xl font-bold tracking-tight">Inventory</h2>
            <p className="text-muted-foreground">Manage your products and stock levels.</p>
         </div>
         <ProductForm />
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
            <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-100 rounded-full">
                        <Package className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">Total Items</p>
                        <h3 className="text-2xl font-bold">1,240</h3>
                    </div>
                </div>
                <div className="text-emerald-600 font-medium text-sm">+5% last month</div>
            </CardContent>
        </Card>
        <Card>
            <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                     <div className="p-3 bg-red-100 rounded-full">
                        <AlertOctagon className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">Low Stock Alerts</p>
                        <h3 className="text-2xl font-bold text-red-600">12</h3>
                    </div>
                </div>
                <div className="text-red-600 font-medium text-sm">Action Needed</div>
            </CardContent>
        </Card>
      </div>

      <div className="flex items-center gap-2 max-w-sm">
         <Input placeholder="Search by product name or SKU..." />
      </div>

      <div className="rounded-md border bg-white">
          <Table>
            <TableHeader>
                <TableRow>
                     <TableHead>Product</TableHead>
                     <TableHead>SKU</TableHead>
                     <TableHead>Category</TableHead>
                     <TableHead>Stock Level</TableHead>
                     <TableHead>Price</TableHead>
                     <TableHead className="text-right">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products.map((product) => (
                    <TableRow key={product.id}>
                        <TableCell>
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-md bg-slate-100 border border-slate-200" />
                                <div className="font-medium">
                                    {product.name}
                                    <span className="block text-xs text-muted-foreground">Premium Grade</span>
                                </div>
                            </div>
                        </TableCell>
                        <TableCell className="font-mono text-xs">{product.sku}</TableCell>
                        <TableCell>
                             <Badge variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                                {product.category}
                             </Badge>
                        </TableCell>
                        <TableCell>
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-24 bg-slate-100 rounded-full overflow-hidden">
                                    <div 
                                        className={`h-full rounded-full ${product.stock < 20 ? "bg-red-500" : "bg-emerald-500"}`} 
                                        style={{ width: `${Math.min(product.stock, 100)}%` }}
                                    />
                                </div>
                                <span className="text-xs text-muted-foreground">{product.stock} units</span>
                            </div>
                        </TableCell>
                        <TableCell>KES {product.price.toLocaleString()}</TableCell>
                        <TableCell className="text-right text-emerald-600 font-medium cursor-pointer hover:underline">
                            Edit
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
          </Table>
      </div>
    </div>
  );
}
