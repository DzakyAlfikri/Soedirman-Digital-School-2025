      // Interactive effects
        document.addEventListener('DOMContentLoaded', function() {
            // Navbar scroll effect
            const navbar = document.getElementById('main-navbar');
            const navbarContainer = navbar.querySelector('div > div');
 
            // Hamburger menu functionality
            const hamburgerButton = document.getElementById('hamburger-button');
            const mobileMenu = document.getElementById('mobile-menu');
            
            if (hamburgerButton && mobileMenu) {
                hamburgerButton.addEventListener('click', function() {
                    // Toggle hamburger icon animation
                    this.classList.toggle('hamburger-active');
                    
                    // Toggle mobile menu visibility with slide animation
                    if (mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.remove('hidden');
                        mobileMenu.classList.add('block');
                        
                        // Small delay to allow the hidden class to be removed first
                        setTimeout(() => {
                            mobileMenu.style.opacity = '1';
                            mobileMenu.style.transform = 'translateY(0)';
                            
                            // Animate menu items sequentially
                            const menuItems = mobileMenu.querySelectorAll('a, button');
                            menuItems.forEach((item, index) => {
                                item.style.opacity = '0';
                                item.style.transform = 'translateY(-10px)';
                                setTimeout(() => {
                                    item.style.transition = 'all 0.3s ease-out';
                                    item.style.opacity = '1';
                                    item.style.transform = 'translateY(0)';
                                }, 75 * index);
                            });
                        }, 10);
                    } else {
                        // Animate menu items out in reverse order
                        const menuItems = mobileMenu.querySelectorAll('a, button');
                        menuItems.forEach((item, index) => {
                            setTimeout(() => {
                                item.style.opacity = '0';
                                item.style.transform = 'translateY(-10px)';
                            }, 50 * (menuItems.length - index - 1));
                        });
                        
                        setTimeout(() => {
                            mobileMenu.style.opacity = '0';
                            mobileMenu.style.transform = 'translateY(-10px)';
                            
                            // Wait for animation to complete before hiding
                            setTimeout(() => {
                                mobileMenu.classList.remove('block');
                                mobileMenu.classList.add('hidden');
                                
                                // Reset styles for next opening
                                menuItems.forEach(item => {
                                    item.style.transition = '';
                                    item.style.opacity = '';
                                    item.style.transform = '';
                                });
                            }, 300);
                        }, 200);
                    }
                });
                
                // Close mobile menu when clicking menu items
                const mobileMenuItems = mobileMenu.querySelectorAll('a, button');
                mobileMenuItems.forEach(item => {
                    item.addEventListener('click', function() {
                        hamburgerButton.classList.remove('hamburger-active');
                        
                        // Animate menu items out in reverse order
                        const menuItems = mobileMenu.querySelectorAll('a, button');
                        menuItems.forEach((menuItem, index) => {
                            setTimeout(() => {
                                menuItem.style.opacity = '0';
                                menuItem.style.transform = 'translateY(-10px)';
                            }, 50 * (menuItems.length - index - 1));
                        });
                        
                        setTimeout(() => {
                            mobileMenu.style.opacity = '0';
                            mobileMenu.style.transform = 'translateY(-10px)';
                            
                            setTimeout(() => {
                                mobileMenu.classList.remove('block');
                                mobileMenu.classList.add('hidden');
                                
                                // Reset styles for next opening
                                menuItems.forEach(menuItem => {
                                    menuItem.style.transition = '';
                                    menuItem.style.opacity = '';
                                    menuItem.style.transform = '';
                                });
                            }, 300);
                        }, 200);
                    });
                });
            }
            
            const mascotContainer = document.querySelector('.mascot-container');
            const ctaButton = document.querySelector('.cta-button');
            
            // Mascot interaction
            mascotContainer.addEventListener('mouseenter', function() {
                const mascotImg = this.querySelector('.mascot-img');
                if (mascotImg) {
                    mascotImg.style.transform = 'scale(1.05) rotate(5deg)';
                    mascotImg.style.transition = 'transform 0.3s ease';
                }
            });
            
            mascotContainer.addEventListener('mouseleave', function() {
                const mascotImg = this.querySelector('.mascot-img');
                if (mascotImg) {
                    mascotImg.style.transform = 'scale(1)';
                }
            });
            
            // Button pulse effect
            ctaButton.addEventListener('mouseenter', function() {
                this.classList.add('animate-pulse');
            });
            
            ctaButton.addEventListener('mouseleave', function() {
                this.classList.remove('animate-pulse');
            });

            // Benefit cards animation
            const observeCards = () => {
                const cards = document.querySelectorAll('.benefit-card');
                
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animate');
                        }
                    });
                }, {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                });

                cards.forEach((card) => {
                    observer.observe(card);
                });
            };

            // Initialize benefit cards animation
            setTimeout(() => {
                observeCards();
                
                // Trigger animation if cards already visible on load
                const cards = document.querySelectorAll('.benefit-card');
                cards.forEach((card, index) => {
                    const rect = card.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        setTimeout(() => {
                            card.classList.add('animate');
                        }, index * 150);
                    }
                });
            }, 100);
            
            // Timeline animation
            const observeTimelineItems = () => {
                const timelineItems = document.querySelectorAll('.timeline-item');
                
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animate-timeline');
                        }
                    });
                }, {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                });

                timelineItems.forEach((item) => {
                    observer.observe(item);
                });
            };
            
            // Initialize timeline animation
            setTimeout(() => {
                observeTimelineItems();
            }, 100);
            
            // Learning Path cards animation
            const observeLearningPathCards = () => {
                const lpCards = document.querySelectorAll('.lp-card');
                
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animate-lp');
                        }
                    });
                }, {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                });

                lpCards.forEach((card) => {
                    observer.observe(card);
                });
            };
            
            // Initialize Learning Path cards animation
            setTimeout(() => {
                observeLearningPathCards();
                
                // Trigger animation if cards already visible on load
                const lpCards = document.querySelectorAll('.lp-card');
                lpCards.forEach((card, index) => {
                    const rect = card.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        setTimeout(() => {
                            card.classList.add('animate-lp');
                        }, index * 150);
                    }
                });
            }, 100);
            
            // FAQ functionality
            const faqButtons = document.querySelectorAll('.faq-button');

            faqButtons.forEach(button => {
                button.addEventListener('click', (event) => {
                    const faqItem = event.target.closest('.faq-item');
                    const answer = faqItem?.querySelector('.faq-answer');
                    
                    if (answer) {
                        // Toggle current answer
                        answer.classList.toggle('hidden');
                        
                        // Close other answers
                        faqButtons.forEach(otherButton => {
                            const otherItem = otherButton.closest('.faq-item');
                            const otherAnswer = otherItem?.querySelector('.faq-answer');
                            if (otherAnswer && otherAnswer !== answer) {
                                otherAnswer.classList.add('hidden');
                            }
                        });
                    }
                });
            });
        });

        function toggleChatInfo() {
            const chatInfo = document.getElementById('chatInfo');
            if (chatInfo.classList.contains('scale-0')) {
                chatInfo.classList.remove('scale-0', 'opacity-0');
                chatInfo.classList.add('scale-100', 'opacity-100');
            } else {
                chatInfo.classList.remove('scale-100', 'opacity-100');
                chatInfo.classList.add('scale-0', 'opacity-0');
            }
        }
        
        // Syllabus Scrolling Functionality
        document.addEventListener('DOMContentLoaded', function() {
            // Set max height for UI/UX Design syllabus
            const syllabusScroll = document.getElementById('syllabus-scroll');
            if (syllabusScroll) {
                const cards = syllabusScroll.querySelectorAll('.bg-gradient-to-r');
                
                if (cards.length > 0) {
                    const cardHeight = cards[0].offsetHeight;
                    const cardMargin = 32; // 8 * 4 = 32px (space-y-8)
                    syllabusScroll.style.maxHeight = `${(cardHeight + cardMargin) * 3 - cardMargin}px`;
                }
                
                // Scroll buttons
                const scrollLeftBtn = document.getElementById('scroll-left');
                const scrollRightBtn = document.getElementById('scroll-right');
                const scrollDots = document.querySelectorAll('.scroll-dot');
                
                if (scrollLeftBtn && scrollRightBtn) {
                    scrollLeftBtn.addEventListener('click', function() {
                        syllabusScroll.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                        updateScrollDots(0, scrollDots, 'D62C2C');
                    });
                    
                    scrollRightBtn.addEventListener('click', function() {
                        syllabusScroll.scrollTo({
                            top: syllabusScroll.scrollHeight,
                            behavior: 'smooth'
                        });
                        updateScrollDots(1, scrollDots, 'D62C2C');
                    });
                    
                    // Update scroll indicator
                    syllabusScroll.addEventListener('scroll', function() {
                        const scrollPosition = syllabusScroll.scrollTop;
                        const maxScroll = syllabusScroll.scrollHeight - syllabusScroll.clientHeight;
                        const scrollRatio = scrollPosition / maxScroll;
                        
                        if (scrollRatio < 0.5) {
                            updateScrollDots(0, scrollDots, 'D62C2C');
                        } else {
                            updateScrollDots(1, scrollDots, 'D62C2C');
                        }
                    });
                    
                    // Dot click functionality
                    scrollDots.forEach(dot => {
                        dot.addEventListener('click', function() {
                            const index = parseInt(this.dataset.index);
                            if (index === 0) {
                                syllabusScroll.scrollTo({
                                    top: 0,
                                    behavior: 'smooth'
                                });
                            } else {
                                syllabusScroll.scrollTo({
                                    top: syllabusScroll.scrollHeight,
                                    behavior: 'smooth'
                                });
                            }
                            updateScrollDots(index, scrollDots, 'D62C2C');
                        });
                    });
                }
            }
            
            // Set max height for Web Development syllabus
            const webdevSyllabusScroll = document.getElementById('syllabus-scroll-webdev');
            if (webdevSyllabusScroll) {
                const webdevCards = webdevSyllabusScroll.querySelectorAll('.bg-gradient-to-r');
                
                if (webdevCards.length > 0) {
                    const cardHeight = webdevCards[0].offsetHeight;
                    const cardMargin = 32; // 8 * 4 = 32px (space-y-8)
                    webdevSyllabusScroll.style.maxHeight = `${(cardHeight + cardMargin) * 3 - cardMargin}px`;
                }
                
                // Get scroll dots for webdev section
                const webdevSection = document.getElementById('website-dev');
                if (webdevSection) {
                    const webdevScrollDots = webdevSection.querySelectorAll('.scroll-dot');
                    
                    // Update scroll indicator for webdev
                    webdevSyllabusScroll.addEventListener('scroll', function() {
                        const scrollPosition = webdevSyllabusScroll.scrollTop;
                        const maxScroll = webdevSyllabusScroll.scrollHeight - webdevSyllabusScroll.clientHeight;
                        const scrollRatio = scrollPosition / maxScroll;
                        
                        if (scrollRatio < 0.5) {
                            updateScrollDots(0, webdevScrollDots, '1E40AF');
                        } else {
                            updateScrollDots(1, webdevScrollDots, '1E40AF');
                        }
                    });
                    
                    // Dot click functionality for webdev
                    webdevScrollDots.forEach(dot => {
                        dot.addEventListener('click', function() {
                            const index = parseInt(this.dataset.index);
                            if (index === 0) {
                                webdevSyllabusScroll.scrollTo({
                                    top: 0,
                                    behavior: 'smooth'
                                });
                            } else {
                                webdevSyllabusScroll.scrollTo({
                                    top: webdevSyllabusScroll.scrollHeight,
                                    behavior: 'smooth'
                                });
                            }
                            updateScrollDots(index, webdevScrollDots, '1E40AF');
                        });
                    });
                }
            }

            // Set max height for Social Media syllabus
            const socialMediaSyllabusScroll = document.getElementById('syllabus-scroll-socialmedia');
            if (socialMediaSyllabusScroll) {
                const socialMediaCards = socialMediaSyllabusScroll.querySelectorAll('.bg-gradient-to-r');
                
                if (socialMediaCards.length > 0) {
                    const cardHeight = socialMediaCards[0].offsetHeight;
                    const cardMargin = 32; // 8 * 4 = 32px (space-y-8)
                    socialMediaSyllabusScroll.style.maxHeight = `${(cardHeight + cardMargin) * 3 - cardMargin}px`;
                }
                
                // Get scroll dots for social media section
                const socialMediaSection = document.getElementById('social-media');
                if (socialMediaSection) {
                    const socialMediaScrollDots = socialMediaSection.querySelectorAll('.scroll-dot');
                    
                    // Update scroll indicator for social media
                    socialMediaSyllabusScroll.addEventListener('scroll', function() {
                        const scrollPosition = socialMediaSyllabusScroll.scrollTop;
                        const maxScroll = socialMediaSyllabusScroll.scrollHeight - socialMediaSyllabusScroll.clientHeight;
                        const scrollRatio = scrollPosition / maxScroll;
                        
                        if (scrollRatio < 0.5) {
                            updateScrollDots(0, socialMediaScrollDots, '6D28D9');
                        } else {
                            updateScrollDots(1, socialMediaScrollDots, '6D28D9');
                        }
                    });
                    
                    // Dot click functionality for social media
                    socialMediaScrollDots.forEach(dot => {
                        dot.addEventListener('click', function() {
                            const index = parseInt(this.dataset.index);
                            if (index === 0) {
                                socialMediaSyllabusScroll.scrollTo({
                                    top: 0,
                                    behavior: 'smooth'
                                });
                            } else {
                                socialMediaSyllabusScroll.scrollTo({
                                    top: socialMediaSyllabusScroll.scrollHeight,
                                    behavior: 'smooth'
                                });
                            }
                            updateScrollDots(index, socialMediaScrollDots, '6D28D9');
                        });
                    });
                }
            }
            
            function updateScrollDots(activeIndex, dots, color) {
                dots.forEach((dot, index) => {
                    if (index === activeIndex) {
                        dot.classList.add(`bg-[#${color}]`);
                        dot.classList.remove('bg-gray-300');
                    } else {
                        dot.classList.remove(`bg-[#${color}]`);
                        dot.classList.add('bg-gray-300');
                    }
                });
            }
        });

        // Get modal elements
        const modal = document.getElementById('registrationModal');
        const closeModal = document.getElementById('closeModal');
        
        // Get all registration buttons
        const registerButtons = document.querySelectorAll('.cta-button');
        
        // Add hover effect for registration options
        const registrationOptions = document.querySelectorAll('.registration-option');
        registrationOptions.forEach(option => {
            option.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
                this.style.background = 'linear-gradient(to bottom, #FFD066, #FFBB45)';
                this.style.boxShadow = '0 8px 20px rgba(255, 165, 0, 0.5), 0 0 15px 5px rgba(255, 165, 0, 0.4)';
                this.style.borderColor = '#D68E00';
                this.style.animationPlayState = 'paused';
            });
            option.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.background = 'linear-gradient(to bottom, #FFBD33, #FFA500)';
                this.style.boxShadow = '';
                this.style.borderColor = '#E09400';
                this.style.animationPlayState = 'running';
            });
        });
        
        // Open modal function
        function openModal() {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
            
            // Add subtle animation
            const modalContent = modal.querySelector('div > div');
            modalContent.style.opacity = '0';
            modalContent.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                modalContent.style.transition = 'all 0.3s ease-out';
                modalContent.style.opacity = '1';
                modalContent.style.transform = 'translateY(0)';
            }, 10);
        }
        
        // Close modal function
        function closeModalFunc() {
            const modalContent = modal.querySelector('div > div');
            modalContent.style.opacity = '0';
            modalContent.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                modal.classList.add('hidden');
                document.body.style.overflow = ''; // Re-enable scrolling
            }, 200);
        }
        
        // Add click event listeners to registration buttons
        registerButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                openModal();
            });
        });
        
        // Close modal when clicking the close button
        closeModal.addEventListener('click', closeModalFunc);
        
        // Close modal when clicking outside the modal content
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModalFunc();
            }
        });
        
        // Close modal when pressing Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModalFunc();
            }
        });