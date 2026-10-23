# 🗺️ Master Development Plan & Execution Phases
## Taimur Real Estate — Dynamic Portal & Admin Platform

> **Project Rules & Workflow:**
> 1. Har phase ko step-by-step complete kiya jayega.
> 2. Har phase complete hone ke baad execution **STOP** hoga taaki user test aur review kar sake.
> 3. User ke "Continue / Next Phase" bolne par hi next phase shuru hoga.
> 4. Kisi bhi phase ko start karne se pehle is document ko re-read kiya jayega taaki execution 100% accurate rahe.

---

## 🛠️ Complete Tech Stack
- **Framework:** Next.js 16 (App Router, Turbopack, SSR + ISR)
- **Deployment Target:** Vercel
- **Database:** MongoDB (Atlas Cluster)
- **ORM:** Prisma ORM (`prisma` + `@prisma/client` with mongodb provider)
- **Validation:** Zod (`zod`) for client & server-side validation
- **Image Storage:** Cloudflare R2 (S3-compatible, Zero Egress Fees) with local upload fallback
- **Authentication:** Custom Secure JWT (HttpOnly Cookies) + Bcrypt password hashing
- **Notifications / Popups:** Toaster (`react-hot-toast` / `sonner`)
- **SEO Engine:** JSON-LD Schema.org Structured Data, Dynamic `sitemap.ts`, Dynamic `robots.ts`, OpenGraph metadata

---

## 📌 Phase Overview & Status Tracker

| Phase | Title | Key Objective | Status |
| :---: | :--- | :--- | :---: |
| **Phase 1** | **Database & Prisma ORM Setup** | MongoDB schema, Prisma client, models (User, Property, Lead), seed data | ✅ Completed |
| **Phase 2** | **Validation & Toast Notification Engine** | Zod schemas for auth & properties, global toast notification provider | ✅ Completed |
| **Phase 3** | **Secure Admin Auth & Route Guarding** | Login API, JWT HttpOnly cookie, middleware protection for `/admin`, login UI | ✅ Completed |
| **Phase 4** | **Cloudflare R2 Image Upload Pipeline** | S3-compatible R2 upload API, pre-signed URLs, local storage dev fallback | ✅ Completed |
| **Phase 5** | **Complete CRUD Admin Dashboard** | Properties API (GET/POST/PUT/DELETE), Admin table, Add & Edit forms with toasts | ✅ Completed |
| **Phase 6** | **Dynamic Frontend & Dynamic Dropdowns** | Dynamic header dropdown with live counts, SSR/ISR properties listing & search | ⏳ Pending |
| **Phase 7** | **Next-Level SEO Engine (Rank #1)** | Schema.org JSON-LD snippets, dynamic `sitemap.ts`, dynamic `robots.ts`, meta tags | ⏳ Pending |

---

## 📋 Detailed Phase Breakdown

---

### 🔹 Phase 1: Database & Prisma ORM Setup (MongoDB)
**Goal:** MongoDB Atlas cluster se connection establish karna aur type-safe Prisma schema banana.
- [x] Dependencies install karna: `prisma@6.4.1`, `@prisma/client@6.4.1`.
- [x] `prisma/schema.prisma` configure karna:
  - Provider: `mongodb`
  - Model `User` (Admin): `id`, `name`, `email`, `passwordHash`, `role`, `createdAt`
  - Model `Property`: `id`, `slug`, `title`, `type`, `dealType`, `price`, `priceNumeric`, `priceLabel`, `locality`, `city`, `carpetArea`, `superArea`, `bedrooms`, `bathrooms`, `balconies`, `floor`, `furnishing`, `waterSupply`, `possessionStatus`, `loanAvailable`, `featured`, `published`, `image`, `gallery`, `description`, `highlights`, `nearbyLandmarks`, `viewsCount`, `inquiriesCount`, `createdAt`, `updatedAt`
  - Model `Lead`: `id`, `name`, `phone`, `propertyId`, `locality`, `type`, `message`, `status`, `createdAt`
- [x] `src/lib/prisma.ts` singleton client helper setup karna (hot-reload friendly).
- [x] `.env.example` & `.env` ready karna with `DATABASE_URL` placeholder.
- [x] `prisma/seed.ts` script banana jo current 6 properties ko DB me auto-seed kare.
- [x] Build verification (`npm run build` — 28/28 pages static & partial prerender generated cleanly, exit code 0).

---

### 🔹 Phase 2: Zod Validation & Toast Notification Engine
**Goal:** Strict runtime type safety aur sleek user feedback popups configure karna.
- [x] Dependencies install karna: `zod@4.6.7`, `react-hot-toast@2.6.1`.
- [x] `src/components/ToastProvider.tsx` banakar root `layout.tsx` me register karna.
- [x] `src/lib/validations/auth.ts`:
  - `loginSchema`: Email validation + Password min length (6 chars).
- [x] `src/lib/validations/property.ts`:
  - `propertyInputSchema`: Title, slug, price, carpet area, dealType, locality, required image URL validation.
  - `leadInputSchema`: Name, 10-digit mobile number, property inquiry message validation.
- [x] Build & type check (`npx tsc --noEmit` & `npm run build` completed with 0 errors).

---

### 🔹 Phase 3: Secure Admin Authentication & Route Protection
**Goal:** 100% secure login system jo unauthorized users ko admin panel se bahar rakhe.
- [x] Dependencies install karna: `bcryptjs`, `@types/bcryptjs`, `jose` (Edge-compatible).
- [x] `src/lib/auth.ts`:
  - `createSessionToken`, `verifySessionToken` using `jose` with HS256 algorithm.
  - `hashPassword`, `comparePassword` using `bcryptjs`.
- [x] API Routes:
  - `POST /api/auth/login`: Email/password check with Zod validation, bcrypt compare, dev fallback admin, and issue secure HttpOnly JWT cookie (`taimur_admin_session`).
  - `POST /api/auth/logout`: Clears session cookie and redirects.
  - `GET /api/auth/me`: Returns current logged-in admin profile.
- [x] Next.js Edge Middleware (`src/middleware.ts`):
  - Protects `/admin` and `/admin/*`.
  - Missing/invalid cookie -> Auto-redirects to `/login?redirect=/admin`.
  - Already logged in user visiting `/login` -> Auto-redirects to `/admin`.
- [x] Updated [src/app/login/page.tsx](file:///d:/Users/Blue%20Diamond_3/abu%20Salim/uniland-main/uniland-main/multi-version/bhiwandi-estate/src/app/login/page.tsx) & [LoginFormCard.tsx](file:///d:/Users/Blue%20Diamond_3/abu%20Salim/uniland-main/uniland-main/multi-version/bhiwandi-estate/src/components/auth/LoginFormCard.tsx):
  - Real `/api/auth/login` fetch integration with `useSearchParams` in `<Suspense>`.
  - Interactive toast notifications (`toast.loading`, `toast.success`, `toast.error`).
  - Pre-filled authorized demo credentials: `admin@taimurrealestate.com` / `Taimur@2026`.
  - Logout button added to [AdminHeader.tsx](file:///d:/Users/Blue%20Diamond_3/abu%20Salim/uniland-main/uniland-main/multi-version/bhiwandi-estate/src/components/admin/AdminHeader.tsx).
- [x] Build verification (`npm run build` — 31/31 routes + Edge proxy passed with code 0).

---

### 🔹 Phase 4: Cloudflare R2 / Hybrid Image Upload Pipeline
**Goal:** High-resolution property photos upload engine with Cloudflare R2 + seamless local disk fallback.
- [x] Dependencies install: `@aws-sdk/client-s3`.
- [x] `src/lib/r2.ts`:
  - S3 client initialized with Cloudflare R2 endpoint (`https://<account_id>.r2.cloudflarestorage.com`).
  - `isR2Configured()` detector helper (checks if keys are active and non-placeholder).
  - `uploadToR2(buffer, key, contentType)` function.
- [x] `src/lib/localUpload.ts`:
  - `uploadToLocalDisk(buffer, filename, subDir)` fallback engine saving directly to `public/uploads/properties/`.
- [x] API Route `POST /api/upload`:
  - Multipart form upload with session authentication check.
  - Image MIME type validation (JPG, PNG, WebP, AVIF) & size limit (10MB).
  - Automatic routing: Cloudflare R2 if configured, otherwise instant Local Disk Fallback.
- [x] Interactive UI Component [ImageUploadDropzone.tsx](file:///d:/Users/Blue%20Diamond_3/abu%20Salim/uniland-main/uniland-main/multi-version/bhiwandi-estate/src/components/admin/ImageUploadDropzone.tsx):
  - Drag-and-drop / file selector with live preview, upload spinner, toast notifications, storage badge, change & delete controls.
- [x] Build verification (`npm run build` — 32/32 routes passed with code 0).

---

### 🔹 Phase 5: Complete CRUD Operations & Admin Dashboard
**Goal:** Taimur Real Estate properties ko dashboard se add, edit, delete aur manage karne ki poori power.
- [x] API Routes:
  - `GET /api/properties`: Fetch properties with filters (`type`, `dealType`, `locality`, `featured`, `search`), database priority with curated memory fallback.
  - `POST /api/properties`: Create new property with Zod runtime validation & admin session check.
  - `GET /api/properties/[id]`: Single property detail lookup by ID or slug.
  - `PUT /api/properties/[id]`: Update existing property specs, pricing, or photos.
  - `DELETE /api/properties/[id]`: Delete property with session verification.
  - `GET /api/leads` & `POST /api/leads`: Customer inquiries and site visit lead management.
- [x] Admin Portal Pages:
  - `/admin` ([page.tsx](file:///d:/Users/Blue%20Diamond_3/abu%20Salim/uniland-main/uniland-main/multi-version/bhiwandi-estate/src/app/admin/page.tsx)): Live KPI stats, filterable table by Deal Type (All, For Sale, Heavy Deposit, For Rent, Low Downpayment), real DELETE action with confirmation & toast notifications.
  - `/admin/add-property` ([AddPropertyForm.tsx](file:///d:/Users/Blue%20Diamond_3/abu%20Salim/uniland-main/uniland-main/multi-version/bhiwandi-estate/src/components/admin/AddPropertyForm.tsx)): Full publishing form with auto-slug generator, [ImageUploadDropzone.tsx](file:///d:/Users/Blue%20Diamond_3/abu%20Salim/uniland-main/uniland-main/multi-version/bhiwandi-estate/src/components/admin/ImageUploadDropzone.tsx) integration, and `POST /api/properties`.
  - `/admin/edit/[id]` ([EditPropertyClient.tsx](file:///d:/Users/Blue%20Diamond_3/abu%20Salim/uniland-main/uniland-main/multi-version/bhiwandi-estate/src/app/admin/edit/[id]/EditPropertyClient.tsx)): Pre-populated editor with live photo change, specs update, and `PUT /api/properties/[id]`.
- [x] Build verification (`npm run build` — 41/41 routes passed with code 0).

---

### 🔹 Phase 6: Dynamic Frontend Integration & Dynamic Dropdowns
**Goal:** Header dropdown aur poora frontend database se live dynamic connect ho jaye.
- [ ] Header Dropdown:
  - Screenshot me dikhaye gaye items (`1 BHK`, `2 BHK`, `3 BHK`, `Heavy Deposit`, `Commercial Gala`, etc.) database se live property counts fetch karenge.
  - Zero count wale types cleanly handle honge.
- [ ] Properties Listing Page (`/properties`):
  - Database se live properties load karega (SSR with ISR caching for fast speed).
  - Search, Locality filter, Type filter, Deal filter live query execute karenge.
- [ ] Property Single Page (`/properties/[slug]`):
  - Database se live dynamic fetch with `generateStaticParams` + dynamic fallback.

---

### 🔹 Phase 7: Next-Level SEO Engine (Rank #1 on Google)
**Goal:** Bhiwandi ke property keywords par Google search ke top par aana.
- [ ] **JSON-LD Schema.org Structured Data:**
  - Embed `RealEstateListing` schema on every property page (Price, Currency, Address, Number of Rooms, Geo-coordinates, Images).
  - Embed `RealEstateAgent` schema for Taimur Real Estate on Home and About pages.
- [ ] **Dynamic Sitemap (`src/app/sitemap.ts`):**
  - Database se all property slugs, locality pages, and blog posts auto-generate honge.
- [ ] **Dynamic Robots (`src/app/robots.ts`):**
  - Search engine crawlers allow public pages aur disallow `/admin` & `/api/`.
- [ ] **Dynamic OpenGraph & Twitter Cards:**
  - WhatsApp ya social media pe share karte hi exact property photo, price aur title show hoga.

---

## 📌 Development Protocol
- **Phase 1 se shuru karenge.**
- Har phase ke end me build test verify hoga (`npm run build`).
- Agent turn finish karke user ko report dega aur user ke approval ka wait karega.
- User review karke bolega: *"Phase 1 done, ab Phase 2 continue kar"* — tabhi next phase start hoga!
