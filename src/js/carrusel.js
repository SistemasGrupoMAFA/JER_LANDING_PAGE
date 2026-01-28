        // Automatic Carousel Logic
        document.addEventListener('DOMContentLoaded', () => {
            const carousel = document.getElementById('hero-carousel');
            const slides = carousel.querySelectorAll('.carousel-slide');
            const indicators = carousel.querySelectorAll('.carousel-indicator');
            let currentSlide = 0;
            const slideCount = slides.length;
            const intervalTime = 2000; // 2 seconds per slide

            function updateCarousel(index) {
                // Update slides opacity and z-index
                slides.forEach((slide, i) => {
                    if (i === index) {
                        slide.classList.remove('opacity-0', 'z-0');
                        slide.classList.add('opacity-100', 'z-10');
                    } else {
                        slide.classList.remove('opacity-100', 'z-10');
                        slide.classList.add('opacity-0', 'z-0');
                    }
                });

                // Update indicators
                indicators.forEach((dot, i) => {
                    if (i === index) {
                        dot.classList.remove('w-3', 'bg-white/40');
                        dot.classList.add('w-8', 'bg-primary');
                    } else {
                        dot.classList.remove('w-8', 'bg-primary');
                        dot.classList.add('w-3', 'bg-white/40');
                    }
                });
            }

            function nextSlide() {
                currentSlide = (currentSlide + 1) % slideCount;
                updateCarousel(currentSlide);
            }

            // Start Auto-play
            let slideInterval = setInterval(nextSlide, intervalTime);

            // Manual Indicator Clicks
            indicators.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    clearInterval(slideInterval);
                    currentSlide = index;
                    updateCarousel(currentSlide);
                    // Restart interval
                    slideInterval = setInterval(nextSlide, intervalTime);
                });
            });

            // Pause on Hover
            carousel.addEventListener('mouseenter', () => clearInterval(slideInterval));
            carousel.addEventListener('mouseleave', () => slideInterval = setInterval(nextSlide, intervalTime));
        });