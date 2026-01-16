# Kijiji POS

**Kijiji POS** is a modern, efficient, and easy-to-use Point of Sale system designed specifically for Kenyan businesses. "Kijiji" means "Village" in Swahili, reflecting our commitment to empowering local communities and small businesses.

## Features

-   **Dashboard**: Real-time overview of your business performance with sales analytics and insights.
-   **Point of Sale**: Fast and intuitive checkout interface for seamless transactions.
-   **Inventory Management**: Track stock levels, low stock alerts, and product categories.
-   **Sales History**: Comprehensive logs of all transactions with detailed reporting.
-   **Business Settings**: Manage profile, taxes (VAT, Catering Levy), and user accounts.
-   **Responsive Design**: Works seamlessly on tablets, laptops, and desktops.

## Tech Stack

-   **Framework**: [Next.js](https://nextjs.org) 15 (App Router)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com) & [shadcn/ui](https://ui.shadcn.com)
-   **Database**: [PostgreSQL](https://www.postgresql.org/) via [Neon](https://neon.tech)
-   **ORM**: [Prisma](https://prisma.io)
-   **Authentication**: Custom Auth with secure session management
-   **File Upload**: [UploadThing](https://uploadthing.com)

## Getting Started

### Prerequisites

-   Node.js 18+ installed
-   PostgreSQL database (Neon recommended)
-   UploadThing account for image uploads

### Installation

1. Clone the repository:
```bash
git clone https://github.com/prigii/kijiji-pos.git
cd kijiji-pos
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (copy `.env.example` to `.env` and fill in your values):
```bash
cp .env.example .env
```

4. Run database migrations:
```bash
npx prisma migrate dev
```

5. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Learn More

To learn more about the technologies used:

-   [Next.js Documentation](https://nextjs.org/docs)
-   [Tailwind CSS Docs](https://tailwindcss.com/docs)
-   [Prisma Docs](https://www.prisma.io/docs)
-   [shadcn/ui Components](https://ui.shadcn.com)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

MIT

---

Built with ❤️ for Kenyan businesses
