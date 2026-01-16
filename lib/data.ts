export const products = [
  {
    id: "1",
    name: "Kenyatta Tea 500g",
    sku: "BV-001",
    category: "Beverages",
    price: 450,
    stock: 42,
    image: "/images/tea.png", // specific image paths will need placeholders or next/image to handle missing
  },
  {
    id: "2",
    name: "White Sugar 1kg",
    sku: "ST-001",
    category: "Staples",
    price: 210,
    stock: 18,
    image: "/images/sugar.png",
  },
  {
    id: "3",
    name: "UHT Milk 1L",
    sku: "DY-001",
    category: "Dairy",
    price: 120,
    stock: 65,
    image: "/images/milk.png",
  },
  {
    id: "4",
    name: "Bottled Water 500ml",
    sku: "BV-002",
    category: "Beverages",
    price: 60,
    stock: 120,
    image: "/images/water.png",
  },
  {
    id: "5",
    name: "Cooking Oil 1L",
    sku: "ST-002",
    category: "Staples",
    price: 320,
    stock: 24,
    image: "/images/oil.png",
  },
  {
    id: "6",
    name: "Maize Flour 2kg",
    sku: "ST-003",
    category: "Staples",
    price: 195,
    stock: 89,
    image: "/images/flour.png",
  },
];

export const staff = [
  {
    id: "1",
    name: "Juma Bakari",
    email: "j.bakari@pos.ke",
    role: "Admin",
    status: "Active",
    lastActive: "Today, 10:45 AM",
  },
  {
    id: "2",
    name: "Sarah Wanjiku",
    email: "s.wanjiku@pos.ke",
    role: "Manager",
    status: "Active",
    lastActive: "Yesterday, 5:20 PM",
  },
  {
    id: "3",
    name: "David Omondi",
    email: "d.omondi@pos.ke",
    role: "Cashier",
    status: "Pending Invite",
    lastActive: "Never",
  },
  {
    id: "4",
    name: "Faith Mutua",
    email: "f.mutua@pos.ke",
    role: "Cashier",
    status: "Inactive",
    lastActive: "Oct 12, 2023",
  },
];

export const salesStats = {
  totalSales: 142500,
  transactions: 84,
  avgOrderValue: 1696,
  topProduct: "Whole Tilapia",
};

export const categories = ["All Products", "Beverages", "Snacks", "Household", "Personal Care", "Bakery", "Dairy & Eggs"];

export const transactions = [
    {
      id: "TRX-9402",
      customer: "Alice Wangari",
      amount: 2400,
      status: "Completed", 
      method: "M-PESA",
      time: "2 mins ago"
    },
    {
      id: "TRX-9401", 
      customer: "Walk-in Customer",
      amount: 850,
      status: "Completed",
      method: "Cash",
      time: "15 mins ago"
    },
    {
      id: "TRX-9400",
      customer: "John Kamau",
      amount: 4100,
      status: "Completed",
      method: "M-PESA",
      time: "1 hour ago"
    },
    {
        id: "TRX-9399",
        customer: "Walk-in Customer",
        amount: 1200,
        status: "Completed",
        method: "M-PESA",
        time: "3 hours ago"
    },
  ];

