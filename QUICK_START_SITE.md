# MindReply Site - Quick Start Guide
## For Angel

---

## 🚀 QUICK START (Local Development)

### **Step 1: Start Backend**
```powershell
cd C:\Users\ANGEL\MRPRODUCTION\mindreply-org\Backend
npm install
npm run dev
```

**Backend runs on:** `http://localhost:4000`

### **Step 2: Start Frontend**
```powershell
cd C:\Users\ANGEL\MRPRODUCTION\mindreply-org\apps\frontend
npm install
npm run dev
```

**Frontend runs on:** `http://localhost:3000`

### **Step 3: Open Site**
```powershell
start "http://localhost:3000"
```

---

## 🌐 SITE FEATURES

| Page | URL | Description |
|------|-----|-------------|
| **Home** | `/` | Landing page with features |
| **Admin Dashboard** | `/admin` | Secure admin interface |
| **Content Flow** | `/contentflow` | Content creation workflow |
| **Pricing** | `/pricing` | Pricing plans |
| **Billing** | `/dashboard/billing` | Billing dashboard |

---

## 🔧 ENVIRONMENT VARIABLES

### **Frontend** (`.env.local`)
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_API_ENDPOINT=http://localhost:4000
```

### **Backend** (`.env`)
```env
PORT=4000
FRONTEND_URL=http://localhost:3000
```

---

## 📋 FILES CREATED

✅ `.env.local` - Frontend environment
✅ `.env` - Backend environment  
✅ `vercel.json` - Vercel configuration
✅ Enhanced `page.tsx` - Landing page
✅ `SITE_RESTORATION_PLAN.md` - Full plan

---

## 🎯 NEXT STEPS

1. **Start backend:** `npm run dev` in Backend folder
2. **Start frontend:** `npm run dev` in apps/frontend folder
3. **Open site:** `http://localhost:3000`
4. **Test:** Check `http://localhost:4000/health`

---

## 🚨 TROUBLESHOOTING

**If npm install fails:**
```powershell
# Try with pnpm
pnpm install
```

**If ports are busy:**
```powershell
# Change ports in .env files
# Backend: PORT=5000
# Frontend: NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## ✅ SITE STATUS

- ✅ Frontend structure verified
- ✅ Backend structure verified
- ✅ Environment files created
- ✅ Landing page enhanced
- ✅ Vercel config created
- ✅ Ready for local testing

---

**Site restoration in progress...**

**Need help?** Run the commands above in order.

**Site will be live at:** `http://localhost:3000`