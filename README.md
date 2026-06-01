# ♛ Crown Coffee Website

A full-stack coffee shop website built with **Next.js**, **Sanity.io**, and deployed on **Vercel**.

---

## 🚀 Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Sanity (Admin Panel)
1. Go to https://sanity.io and create a free account
2. Create a new project called "Crown Coffee"
3. Copy your **Project ID** from the Sanity dashboard
4. In `sanity/sanity.config.js`, replace `YOUR_PROJECT_ID` with your actual Project ID
5. Install Sanity CLI: `npm install -g @sanity/cli`
6. Navigate to the sanity folder: `cd sanity`
7. Run: `npm install && sanity init --project-id YOUR_PROJECT_ID`

### 3. Add Environment Variables
1. Copy `.env.local.example` to `.env.local`
2. Fill in your Sanity Project ID and API token

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token_here
```

### 4. Run Locally
```bash
# Run the website
npm run dev

# Run Sanity Studio (admin panel) in a separate terminal
cd sanity && npm run start
```

- Website: http://localhost:3000
- Admin Panel: http://localhost:3333

---

## 📦 Deploy to Vercel

1. Push your code to GitHub
2. Go to https://vercel.com → Import your GitHub repo
3. Add your environment variables in Vercel project settings
4. Deploy!

---

## 🔧 Admin Panel Usage

Go to `yoursite.com/admin` (Sanity Studio) to:
- ✅ Add/edit menu items with images
- ✅ Create categories (Coffee, Tea, Pastries, etc.)
- ✅ Upload and crop images
- ✅ Mark items as available/unavailable
- ✅ Add price, description, tags

---

## 📱 QR Code for Tables
Generate a QR code pointing to `https://yoursite.com/menu` using:
- https://qr-code-generator.com
- Print and place on each table

---

## 📁 Project Structure

```
crown-coffee/
├── pages/
│   ├── index.js        ← Homepage
│   ├── menu.js         ← Menu page
│   └── about.js        ← About page
├── components/
│   ├── Header.js
│   ├── Footer.js
│   └── MenuItem.js
├── styles/
│   ├── globals.css
│   ├── Home.module.css
│   ├── Menu.module.css
│   └── About.module.css
├── lib/
│   └── sanity.js       ← Sanity client
└── sanity/
    ├── schemas/
    │   ├── menuItem.js  ← Menu item schema
    │   ├── category.js  ← Category schema
    │   └── siteSettings.js
    └── sanity.config.js
```
