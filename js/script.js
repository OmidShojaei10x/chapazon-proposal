// ========================================
// CHAPAZON PROPOSAL - MAIN JAVASCRIPT
// By: Omid Shojaei | Yektanet
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // 1. PROGRESS BAR
    // ========================================
    
    const progressBar = document.getElementById('progress-bar');
    
    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;
        
        progressBar.style.width = progress + '%';
    });
    
    
    // ========================================
    // 2. STICKY NAVIGATION
    // ========================================
    
    const navbar = document.getElementById('navbar');
    const navbarOffset = navbar.offsetTop;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > navbarOffset) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });
    
    
    // ========================================
    // 3. SMOOTH SCROLL
    // ========================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    
    // ========================================
    // 4. COUNTER ANIMATION
    // ========================================
    
    const counters = document.querySelectorAll('.stat-number');
    const animationDuration = 2000; // 2 seconds
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-count'));
        const increment = target / (animationDuration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current).toLocaleString('fa-IR');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString('fa-IR');
            }
        };
        
        updateCounter();
    };
    
    // Intersection Observer for counters
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
    
    
    // ========================================
    // 5. CHART.JS - BUDGET DONUT CHART
    // ========================================
    
    const budgetChartCanvas = document.getElementById('budgetChart');
    
    if (budgetChartCanvas) {
        const ctx = budgetChartCanvas.getContext('2d');
        
        const budgetChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [
                    'ویدیو (پری‌رول + همسان)',
                    'پیامک (LBA + SBA)',
                    'تبلیغات همسان',
                    'پوش نوتیفیکیشن',
                    'تبلیغ در روبیکا',
                    'تبلیغ در دیوار',
                    'تبلیغات بنری'
                ],
                datasets: [{
                    data: [30, 25, 15, 10, 10, 5, 5],
                    backgroundColor: [
                        '#FF6B35',
                        '#F77F00',
                        '#004E89',
                        '#06D6A0',
                        '#FFD23F',
                        '#EE4266',
                        '#9B5DE5'
                    ],
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        rtl: true,
                        labels: {
                            font: {
                                family: 'Vazirmatn',
                                size: 12
                            },
                            padding: 15,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        rtl: true,
                        titleFont: {
                            family: 'Vazirmatn',
                            size: 14
                        },
                        bodyFont: {
                            family: 'Vazirmatn',
                            size: 12
                        },
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.parsed + '٪';
                            }
                        }
                    }
                }
            }
        });
    }
    
    
    // ========================================
    // 6. KPI PROGRESS BARS ANIMATION
    // ========================================
    
    const kpiProgressBars = document.querySelectorAll('.kpi-progress-bar');
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.width = progress + '%';
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.5 });
    
    kpiProgressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
    
    
    // ========================================
    // 7. DEVICE DISTRIBUTION BARS
    // ========================================
    
    const deviceBars = document.querySelectorAll('.device-fill');
    
    const deviceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                // Already has inline width, just add animation class
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.5 });
    
    deviceBars.forEach(bar => {
        deviceObserver.observe(bar);
    });
    
    
    // ========================================
    // 8. FAQ ACCORDION
    // ========================================
    
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
    
    
    // ========================================
    // 9. BACK TO TOP BUTTON
    // ========================================
    
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    
    // ========================================
    // 10. AOS (ANIMATE ON SCROLL) INITIALIZATION
    // ========================================
    
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
    
    
    // ========================================
    // 11. GANTT CHART PROGRESS ANIMATION
    // ========================================
    
    const ganttBars = document.querySelectorAll('.gantt-progress');
    
    const ganttObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                // Already has inline width, just trigger animation
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.5 });
    
    ganttBars.forEach(bar => {
        ganttObserver.observe(bar);
    });
    
    
    // ========================================
    // 12. LAZY LOADING IMAGES (if needed)
    // ========================================
    
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
    
    
    // ========================================
    // 13. CONSOLE BRANDING
    // ========================================
    
    console.log('%c پروپوزال تبلیغاتی چاپازون ', 'background: linear-gradient(135deg, #FF6B35, #F77F00); color: white; font-size: 20px; font-weight: bold; padding: 10px;');
    console.log('%c توسعه توسط: امید شجاعی | یکتانت ', 'background: #004E89; color: white; font-size: 14px; padding: 5px;');
    console.log('%c yektanet.com ', 'color: #FF6B35; font-size: 12px;');
    
});

// ========================================
// END OF JAVASCRIPT
// ========================================