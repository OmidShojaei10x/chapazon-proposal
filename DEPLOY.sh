#!/bin/bash

# اسکریپت راه‌اندازی سریع GitHub Pages
# استفاده: ./DEPLOY.sh

echo "🚀 راه‌اندازی GitHub Pages برای پروپوزال چاپازون"
echo ""

# بررسی وجود Git
if ! command -v git &> /dev/null; then
    echo "❌ Git نصب نیست. لطفاً Git را نصب کنید."
    exit 1
fi

# بررسی وجود repository
if [ ! -d ".git" ]; then
    echo "📦 Initialize کردن Git repository..."
    git init
    echo "✅ Git repository ایجاد شد"
fi

# اضافه کردن فایل‌ها
echo "📝 اضافه کردن فایل‌ها..."
git add .

# Commit
echo "💾 ایجاد commit..."
read -p "پیام commit را وارد کنید (یا Enter برای پیام پیش‌فرض): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Update Chapazon Proposal"
fi

git commit -m "$commit_msg"

# بررسی remote
if ! git remote | grep -q "origin"; then
    echo ""
    echo "⚠️  Remote repository تنظیم نشده است."
    echo "لطفاً URL repository GitHub خود را وارد کنید:"
    read -p "GitHub Repository URL: " repo_url
    git remote add origin "$repo_url"
    echo "✅ Remote repository اضافه شد"
fi

# Push
echo ""
echo "📤 Push کردن به GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✅ فایل‌ها به GitHub push شدند!"
echo ""
echo "📋 مراحل بعدی:"
echo "1. به repository خود در GitHub بروید"
echo "2. Settings > Pages را باز کنید"
echo "3. Source را روی 'main' و '/ (root)' تنظیم کنید"
echo "4. Save را کلیک کنید"
echo ""
echo "🌐 سایت شما در آدرس زیر در دسترس خواهد بود:"
echo "https://YOUR_USERNAME.github.io/chapazon-proposal/"
echo ""

