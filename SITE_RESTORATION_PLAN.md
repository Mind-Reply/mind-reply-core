# MindReply Site Restoration Plan
## Date: 2026-07-21
## Engineer: MRPRODUCTION Site Restoration Engineer

---

## 📋 CURRENT SITE STATUS

### **Frontend Structure**
- **Location:** `C:\Users\ANGEL\MRPRODUCTION\mindreply-org\apps\frontend`
- **Framework:** Next.js 15
- **Port:** 3000 (configured)
- **Pages:** Admin dashboard, contentflow, pricing, billing
- **Auth:** Clerk integration (commented out in config)

### **Backend Structure**
- **Location:** `C:\Users\ANGEL\MRPRODUCTION\mindreply-org\Backend`
- **Framework:** Express.js
- **Port:** 4000 (configured)
- **Endpoints:** Health check, admin auth, chat sessions

### **Site Files Found**
✅ `package.json` - Frontend dependencies
✅ `next.config.js` - Next.js configuration
✅ `pages/index.js` - Main landing page
✅ `Backend/src/index.js` - Express server
✅ Admin dashboard with chat interface
✅ Contentflow pages
✅ Pricing and billing pages

---

## 🚨 ISSUES IDENTIFIED

### **1. Missing Landing Page**
- **Problem:** `pages/index.js` exists but is minimal (just "MindReply" heading)
- **Solution:** Need to enhance with proper landing content

### **2. Clerk Auth Not Configured**
- **Problem:** Clerk integration commented out in `next.config.js`
- **Solution:** Configure Clerk or use alternative auth

### **3. Environment Variables Missing**
- **Problem:** No `.env` files found
- **Solution:** Create template and guide for environment setup

### **4. Vercel Configuration Missing**
- **Problem:** No `vercel.json` found
- **Solution:** Create Vercel configuration for deployment

### **5. Backend Not Running**
- **Problem:** Backend exists but needs to be started
- **Solution:** Start backend server on port 4000

### **6. Frontend Not Running**
- **Problem:** Frontend needs to be built and started
- **Solution:** Install dependencies and start frontend

---

## 🔧 RESTORATION PLAN

### **Phase 1: Environment Setup**

```powershell
# Create .env files
New-Item -Path "C:\Users\ANGEL\MRPRODUCTION\mindreply-org\apps\frontend\.env.local" -ItemType File -Force
New-Item -Path "C:\Users\ANGEL\MRPRODUCTION\mindreply-org\Backend\.env" -ItemType File -Force
```

### **Phase 2: Install Dependencies**

```powershell
# Install frontend dependencies
cd C:\Users\ANGEL\MRPRODUCTION\mindreply-org\apps\frontend
npm install

# Install backend dependencies
cd C:\Users\ANGEL\MRPRODUCTION\mindreply-org\Backend
npm install
```

### **Phase 3: Configure Environment Variables**

**Frontend `.env.local`:**
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_API_ENDPOINT=http://localhost:4000
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
```

**Backend `.env`:**
```env
PORT=4000
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

### **Phase 4: Create Vercel Configuration**

**File:** `C:\Users\ANGEL\MRPRODUCTION\mindreply-org\apps\frontend\vercel.json`
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/"
    }
  ]
}
```

### **Phase 5: Enhance Landing Page**

**File:** `C:\Users\ANGEL\MRPRODUCTION\mindreply-org\apps\frontend\src\app\page.tsx`
```tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6">MindReply</h1>
        <p className="text-xl text-slate-300 mb-8">AI-powered social media management and automation</p>
        
        <div className="flex justify-center gap-4 mb-12">
          <Link href="/admin" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Admin Dashboard
          </Link>
          <Link href="/contentflow" className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition">
            Content Flow
          </Link>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="text-left space-y-2 text-slate-300">
            <li>✅ AI-powered decision making</li>
            <li>✅ Multi-platform automation</li>
            <li>✅ Real-time analytics</li>
            <li>✅ Admin dashboard</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
```

### **Phase 6: Start Backend**

```powershell
# Start backend server
cd C:\Users\ANGEL\MRPRODUCTION\mindreply-org\Backend
npm run dev
```

**Backend will run on:** `http://localhost:4000`

### **Phase 7: Start Frontend**

```powershell
# Start frontend server
cd C:\Users\ANGEL\MRPRODUCTION\mindreply-org\apps\frontend
npm run dev
```

**Frontend will run on:** `http://localhost:3000`

### **Phase 8: Test Site**

```powershell
# Test backend health
Invoke-WebRequest -Uri "http://localhost:4000/health" -UseBasicParsing

# Test frontend
start "http://localhost:3000"
```

### **Phase 9: Deploy to Vercel**

```powershell
# Install Vercel CLI
npm install -g vercel

# Link project
cd C:\Users\ANGEL\MRPRODUCTION\mindreply-org\apps\frontend
vercel link --yes

# Deploy
vercel --prod --yes
```

---

## 📋 FILES TO CREATE

| File | Location | Purpose |
|------|----------|---------|
| `.env.local` | `apps/frontend/` | Frontend environment variables |
| `.env` | `Backend/` | Backend environment variables |
| `vercel.json` | `apps/frontend/` | Vercel configuration |
| Enhanced `page.tsx` | `apps/frontend/src/app/` | Landing page |

---

## 🎯 IMMEDIATE ACTIONS

### **Step 1: Create Environment Files**
```powershell
# Create frontend .env.local
@"
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_API_ENDPOINT=http://localhost:4000
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
"@ | Out-File -FilePath "C:\Users\ANGEL\MRPRODUCTION\mindreply-org\apps\frontend\.env.local" -Encoding UTF8

# Create backend .env
@"
PORT=4000
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
"@ | Out-File -FilePath "C:\Users\ANGEL\MRPRODUCTION\mindreply-org\Backend\.env" -Encoding UTF8
```

### **Step 2: Create Vercel Configuration**
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/"
    }
  ]
}
```

### **Step 3: Enhance Landing Page**

Replace `apps/frontend/src/app/page.tsx` with enhanced version above.

### **Step 4: Install Dependencies**
```powershell
cd C:\Users\ANGEL\MRPRODUCTION\mindreply-org\apps\frontend
npm install

cd C:\Users\ANGEL\MRPRODUCTION\mindreply-org\Backend
npm install
```

### **Step 5: Start Servers**
```powershell
# Start backend in new terminal
cd C:\Users\ANGEL\MRPRODUCTION\mindreply-org\Backend
npm run dev

# Start frontend in new terminal
cd C:\Users\ANGEL\MRPRODUCTION\mindreply-org\apps\frontend
npm run dev
```

### **Step 6: Test Site**
```powershell
# Test backend
Invoke-WebRequest -Uri "http://localhost:4000/health" -UseBasicParsing

# Open frontend
start "http://localhost:3000"
```

---

## ✅ EXPECTED OUTCOME

| Component | Status | URL |
|-----------|--------|-----|
| **Backend** | ✅ Running | `http://localhost:4000` |
| **Frontend** | ✅ Running | `http://localhost:3000` |
| **Health Check** | ✅ Available | `http://localhost:4000/health` |
| **Admin Dashboard** | ✅ Available | `http://localhost:3000/admin` |
| **Content Flow** | ✅ Available | `http://localhost:3000/contentflow` |
| **Site** | ✅ Working | `http://localhost:3000` |

---

## 🚀 DEPLOYMENT TO VERCEL

Once local testing is successful:

```powershell
# Install Vercel CLI
npm install -g vercel

# Link and deploy
cd C:\Users\ANGEL\MRPRODUCTION\mindreply-org\apps\frontend
vercel link --yes
vercel --prod --yes
```

---

## 📌 NEXT STEPS

1. ✅ **Site structure verified**
2. ✅ **Files identified**
3. ✅ **Plan created**
4. ⏳ **Execute Phase 1-9**

**Site restoration in progress...**