// initialization

const RESPONSIVE_WIDTH = 1024

let headerWhiteBg = false
let isHeaderCollapsed = window.innerWidth < RESPONSIVE_WIDTH
const collapseBtn = document.getElementById("collapse-btn")
const collapseHeaderItems = document.getElementById("collapsed-header-items")



function onHeaderClickOutside(e) {

    if (!collapseHeaderItems.contains(e.target)) {
        toggleHeader()
    }

}


function toggleHeader() {
    if (isHeaderCollapsed) {
        // collapseHeaderItems.classList.remove("max-md:tw-opacity-0")
        collapseHeaderItems.classList.add("opacity-100",)
        collapseHeaderItems.style.width = "60vw"
        collapseBtn.classList.remove("bi-list")
        collapseBtn.classList.add("bi-x", "max-lg:tw-fixed")
        isHeaderCollapsed = false

        setTimeout(() => window.addEventListener("click", onHeaderClickOutside), 1)

    } else {
        collapseHeaderItems.classList.remove("opacity-100")
        collapseHeaderItems.style.width = "0vw"
        collapseBtn.classList.remove("bi-x", "max-lg:tw-fixed")
        collapseBtn.classList.add("bi-list")
        isHeaderCollapsed = true
        window.removeEventListener("click", onHeaderClickOutside)

    }
}

function responsive() {
    if (window.innerWidth > RESPONSIVE_WIDTH) {
        collapseHeaderItems.style.width = ""

    } else {
        isHeaderCollapsed = true
    }
}

window.addEventListener("resize", responsive)


/**
 * Animations
 */

gsap.registerPlugin(ScrollTrigger)


gsap.to(".reveal-up", {
    opacity: 0,
    y: "100%",
})

gsap.to("#dashboard", {
    boxShadow: "0px 15px 25px -5px rgba(170,49,233,0.44021358543417366)",
    duration: 0.3,
    scrollTrigger: {
        trigger: "#hero-section",
        start: "60% 60%",
        end: "80% 80%",
        // markers: true
    }

})


// ------------- reveal section animations ---------------

const sections = gsap.utils.toArray("section")

sections.forEach((sec) => {

    const revealUptimeline = gsap.timeline({paused: true, 
                                            scrollTrigger: {
                                                            trigger: sec,
                                                            start: "10% 80%", // top of trigger hits the top of viewport
                                                            end: "20% 90%",
                                                            // markers: true,
                                                            // scrub: 1,
                                                        }})

    revealUptimeline.to(sec.querySelectorAll(".reveal-up"), {
        opacity: 1,
        duration: 0.8,
        y: "0%",
        stagger: 0.2,
    })


})


document.addEventListener('DOMContentLoaded', function() {
    // Carousel data
    const items = [
        {
            title: "Energia Solar",
            url: "/landing-pages/apps/others/solaris/index.html",
            icon: "fas fa-solar-panel card-icon",
            desc: "Revolucionário solução de energia solar"
        },
        {
            title: "IA Vendas",
            url: "./landing-pages/apps/AISales/index.html",
            icon: "fas fa-robot",
            desc: "Revolutionary AI-powered sales solution"
        },
        {
            title: "Origens",
            url: "./landing-pages/apps/chatorigin/index.html",
            icon: "fas fa-comments",
            desc: "Next-generation chat application"
        },
        {
            title: "Navegações",
            url: "./landing-pages/apps/navigator/index.html",
            icon: "fas fa-compass",
            desc: "Advanced navigation solution"
        },
        {
            title: "Viagens",
            url: "./landing-pages/apps/traveler/index.html",
            icon: "fas fa-plane",
            desc: "Your ultimate travel companion"
        },
        {
            title: "Advogados",
            url: "./landing-pages/apps/law/lawfire/index.html",
            icon: "fas fa-gavel",
            desc: "Aggressive legal representation"
        },
        {
            title: "Grupo de Advogados",
            url: "./landing-pages/apps/law/lawgroup/index.html",
            icon: "fas fa-balance-scale",
            desc: "Comprehensive legal services"
        },
        {
            title: "Projeto Africa",
            url: "./landing-pages/apps/ngo/project-africa/index.html",
            icon: "fas fa-globe-africa",
            desc: "Humanitarian efforts in Africa"
        },
        {
            title: "Lavagens de veículos",
            url: "./landing-pages/apps/others/carwash/index.html",
            icon: "fas fa-car",
            desc: "Premium car cleaning services"
        },
        {
            title: "Bella Portifólio",
            url: "./landing-pages/apps/portfolio/bella/index.html",
            icon: "fas fa-user-tie",
            desc: "Creative professional portfolio"
        },
        {
            title: "Jamie Portfolio",
            url: "./landing-pages/apps/portfolio/Jamie-portfolio/index.html",
            icon: "fas fa-paint-brush",
            desc: "Designer portfolio showcase"
        },
        {
            title: "Movimento",
            url: "./landing-pages/apps/portfolio/notion/index.html",
            icon: "fas fa-sticky-note",
            desc: "Minimalist portfolio design"
        },
        {
            title: "Motos",
            url: "./landing-pages/apps/products/scooter/index.html",
            icon: "fas fa-motorcycle",
            desc: "Electric scooter product page"
        },
        {
            title: "Imobiliárias",
            url: "./landing-pages/apps/realestate/brickproperty/index.html",
            icon: "fas fa-building",
            desc: "Premium property listings"
        },
        {
            title: "Bistro",
            url: "./landing-pages/apps/restaurant/bistro/index.html",
            icon: "fas fa-utensils",
            desc: "Charming neighborhood bistro"
        },
        {
            title: "Nutrição",
            url: "./landing-pages/apps/restaurant/nutrio/index.html",
            icon: "fas fa-leaf",
            desc: "Healthy, nutritious meals"
        },
        {
            title: "Celestial SaaS",
            url: "./landing-pages/apps/saas/CelestialSaaS/index.html",
            icon: "fas fa-cloud",
            desc: "Cloud-based business solutions"
        },
        {
            title: "Financeiro",
            url: "./landing-pages/apps/saas/finance/index.html",
            icon: "fas fa-chart-line",
            desc: "Financial management software"
        },
        {
            title: "PixaAI",
            url: "./landing-pages/apps/saas/pixaai/index.html",
            icon: "fas fa-image",
            desc: "AI-powered image processing"
        },
        {
            title: "SaaSyDark",
            url: "./landing-pages/apps/saas/SaaSyDark/index.html",
            icon: "fas fa-moon",
            desc: "Dark mode SaaS platform"
        },
        {
            title: "Fitness",
            url: "./landing-pages/apps/fitness/index.html",
            icon: "fas fa-leaf",
            desc: "Healthy lifestyle and fitness solutions"
        },
    ];
    
    const carousel = document.getElementById('carousel');
    const dotsContainer = document.getElementById('dots');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentIndex = 0;
    let interval;
    
    // Create carousel items
    function createCarouselItems() {
        carousel.innerHTML = '';
        dotsContainer.innerHTML = '';
        
        items.forEach((item, index) => {
            // Create carousel item
            const carouselItem = document.createElement('div');
            carouselItem.className = 'carousel-item';
            
            carouselItem.innerHTML = `
                <i class="${item.icon} carousel-icon"></i>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                <a href="${item.url}" target="_blank" rel="noreferrer noopener" class="carousel-link">
                    Visite a página<i class="fas fa-external-link-alt"></i>
                </a>
            `;
            
            carousel.appendChild(carouselItem);
            
            // Create dot
            const dot = document.createElement('div');
            dot.className = 'dot';
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
    }
    
    // Go to specific slide
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
        resetInterval();
    }
    
    // Update carousel position
    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update active dot
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }
    
    // Previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    }
    
    // Auto slide
    function startInterval() {
        interval = setInterval(nextSlide, 5000);
    }
    
    // Reset interval
    function resetInterval() {
        clearInterval(interval);
        startInterval();
    }
    
    // Initialize
    createCarouselItems();
    startInterval();
    
    // Event listeners
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });
    
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });
    
    // Pause on hover
    carousel.addEventListener('mouseenter', () => {
        clearInterval(interval);
    });
    
    carousel.addEventListener('mouseleave', () => {
        startInterval();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextSlide();
            resetInterval();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
            resetInterval();
        }
    });
    
    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(interval);
    });
    
    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startInterval();
    });
    
    function handleSwipe() {
        const threshold = 50;
        if (touchEndX < touchStartX - threshold) {
            nextSlide();
        } else if (touchEndX > touchStartX + threshold) {
            prevSlide();
        }
    }
});
