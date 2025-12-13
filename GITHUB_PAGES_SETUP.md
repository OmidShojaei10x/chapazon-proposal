# راهنمای راه‌اندازی GitHub Pages

این راهنما به شما کمک می‌کند تا پروپوزال را روی GitHub Pages به صورت لایو قرار دهید.

## 📋 مراحل راه‌اندازی

### مرحله 1: ایجاد Repository در GitHub

1. به [GitHub.com](https://github.com) بروید و وارد حساب کاربری خود شوید
2. روی دکمه **"New"** یا **"+"** کلیک کنید
3. یک repository جدید ایجاد کنید:
   - **Repository name**: `chapazon-proposal` (یا هر نام دیگری)
   - **Description**: "پروپوزال تبلیغاتی چاپازون - یکتانت"
   - **Visibility**: Public (برای GitHub Pages رایگان)
   - ✅ **Add a README file** را تیک نزنید (فایل‌های ما را داریم)
   - روی **"Create repository"** کلیک کنید

### مرحله 2: راه‌اندازی Git در پروژه

در ترمینال، دستورات زیر را اجرا کنید:

```bash
# رفتن به پوشه پروژه
cd /Users/omid/Downloads/Omid_Shojaei/Proposal/Chapazon

# Initialize Git repository
git init

# اضافه کردن تمام فایل‌ها
git add .

# Commit اولیه
git commit -m "Initial commit: Chapazon Proposal"

# اضافه کردن remote repository (URL را از GitHub کپی کنید)
git remote add origin https://github.com/YOUR_USERNAME/chapazon-proposal.git

# Push به GitHub
git branch -M main
git push -u origin main
```

**نکته**: `YOUR_USERNAME` را با نام کاربری GitHub خود جایگزین کنید.

### مرحله 3: فعال‌سازی GitHub Pages (جزئیات کامل)

1. به repository خود در GitHub بروید
2. روی تب **Settings** (در بالای صفحه) کلیک کنید
3. در منوی سمت چپ، به پایین اسکرول کنید و **Pages** را انتخاب کنید
4. در بخش **"Build and deployment"**:
   
   **الف) Source (منبع):**
   - روی dropdown کنار "Source" کلیک کنید
   - گزینه **"Deploy from a branch"** را انتخاب کنید
   
   **ب) Branch (شاخه):**
   - یک dropdown جدید با عنوان "Branch" ظاهر می‌شود
   - روی این dropdown کلیک کنید
   - **Branch**: `main` را انتخاب کنید
   - **Folder**: `/ (root)` را انتخاب کنید
   
   **ج) Save (ذخیره):**
   - روی دکمه **"Save"** کلیک کنید

**📖 برای راهنمای تصویری کامل، فایل `GITHUB_PAGES_STEP_BY_STEP.md` را مطالعه کنید.**

### مرحله 4: دسترسی به سایت

پس از چند دقیقه، سایت شما در آدرس زیر در دسترس خواهد بود:

```
https://YOUR_USERNAME.github.io/chapazon-proposal/
```

**نکته**: GitHub Pages ممکن است 1-10 دقیقه طول بکشد تا فعال شود.

---

## 🔄 به‌روزرسانی پروپوزال

هر زمان که تغییراتی در پروپوزال ایجاد کردید:

```bash
# اضافه کردن تغییرات
git add .

# Commit تغییرات
git commit -m "Update proposal"

# Push به GitHub
git push
```

تغییرات به صورت خودکار در GitHub Pages اعمال می‌شوند (معمولاً 1-2 دقیقه).

---

## 📝 نکات مهم

### 1. فایل‌های حساس
- ✅ فایل‌های لوگو و تصاویر را commit کنید
- ✅ فایل‌های CSS و JS را commit کنید
- ❌ فایل‌های موقت را commit نکنید (در .gitignore هستند)

### 2. مسیرهای فایل
- تمام مسیرهای فایل‌ها نسبی هستند و در GitHub Pages کار می‌کنند
- اگر مشکلی در لود تصاویر یا فایل‌ها داشتید، مسیرها را بررسی کنید

### 3. HTTPS
- GitHub Pages به صورت خودکار HTTPS را فعال می‌کند
- لینک‌های `mailto:` و `tel:` در تمام مرورگرها کار می‌کنند

### 4. Custom Domain (اختیاری)
اگر می‌خواهید از دامنه اختصاصی استفاده کنید:
1. در Settings > Pages
2. Custom domain را وارد کنید
3. DNS records را تنظیم کنید

---

## 🐛 رفع مشکلات

### تصاویر لود نمی‌شوند
- بررسی کنید که فایل‌ها در مسیر `assets/images/` هستند
- نام فایل‌ها را بررسی کنید (حساس به حروف بزرگ/کوچک)

### استایل‌ها اعمال نمی‌شوند
- بررسی کنید که فایل‌های CSS در مسیر `css/` هستند
- Cache مرورگر را پاک کنید (Ctrl/Cmd + Shift + R)

### فونت‌ها لود نمی‌شوند
- بررسی کنید که فایل‌های فونت در `assets/fonts/` هستند
- در Console مرورگر خطاها را بررسی کنید

---

## 📞 پشتیبانی

اگر مشکلی داشتید:
- **ایمیل**: shojaei@yektanet.ir
- **تلفن**: 09193619161

---

**موفق باشید! 🚀**

