// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================================================
    // 🎬 VIDEO FUNCTIONALITY - OPTIMIZED FOR SMOOTH PLAYBACK
    // ===================================================================
    
    const video = document.querySelector('.background-video');
    const videoContainer = document.querySelector('.video-container');
    
    if (video) {
        console.log('✅ Video element found!');
        console.log('Video src:', video.querySelector('source')?.src);
        
        // Check if video container is visible
        if (videoContainer) {
            const containerStyles = window.getComputedStyle(videoContainer);
            console.log('Video container z-index:', containerStyles.zIndex);
            console.log('Video container position:', containerStyles.position);
        }
        
        // PERFORMANCE OPTIMIZATION: Use normal speed or slightly slower for smooth playback
        video.playbackRate = 0.7; // Moderate slow motion for smooth playback
        
        // Optimize video loading
        video.preload = 'auto';
        video.setAttribute('playsinline', 'true');
        
        // Video event listeners
        video.addEventListener('loadstart', function() {
            console.log('🎬 Video loading started...');
        });
        
        video.addEventListener('canplay', function() {
            console.log('✅ Video can start playing');
            const playPromise = video.play();
            
            if (playPromise !== undefined) {
                playPromise
                    .then(function() {
                        console.log('✅ Video playing successfully');
                    })
                    .catch(function(error) {
                        console.error('❌ Video autoplay failed:', error);
                        video.muted = true;
                        video.play();
                    });
            }
        });
        
        video.addEventListener('loadeddata', function() {
            console.log('✅ Video data loaded successfully!');
        });
        
        video.addEventListener('error', function(e) {
            console.error('❌ Video error:', e);
            if (video.error) {
                console.error('Error code:', video.error.code);
            }
            video.style.display = 'none';
        });
        
        // Force play attempt after a short delay
        setTimeout(function() {
            if (video.paused) {
                console.log('⚠️ Video is paused, attempting to play...');
                video.play().catch(function(error) {
                    console.error('❌ Manual play attempt failed:', error);
                });
            }
        }, 1000);
        
    } else {
        console.error('❌ Video element not found!');
    }
    
    // ===================================================================
    // ⬇️ LANDING ARROW FUNCTIONALITY
    // ===================================================================
    
    const scrollArrow = document.querySelector('.scroll-arrow');
    const landingSection = document.getElementById('landing');
    const gallerySection = document.getElementById('gallery');
    
    if (scrollArrow) {
        console.log('✅ Landing arrow element found');
    } else {
        console.error('❌ Landing arrow element NOT found!');
    }
    
    // Show landing arrow at 7.5 seconds
    setTimeout(function() {
        if (scrollArrow) {
            console.log('⏰ Landing arrow showing now');
            scrollArrow.classList.add('show');
        }
    }, 7500);
    
    // Smooth scroll to gallery when landing arrow is clicked
    if (scrollArrow) {
        scrollArrow.addEventListener('click', function() {
            console.log('🖱️ Landing arrow clicked - scrolling to gallery');
            if (gallerySection) {
                gallerySection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // ===================================================================
    // 🖼️ LIGHTBOX FUNCTIONALITY
    // ===================================================================
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxClose = document.querySelector('.lightbox-close');
    const photoItems = document.querySelectorAll('.photo-item');
    
    // Open lightbox when photo is clicked
    photoItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const img = item.querySelector('img');
            const imgSrc = img.src;
            const imgAlt = img.alt;
            
            console.log('Photo clicked - opening lightbox');
            
            lightboxImage.src = imgSrc;
            lightboxImage.alt = imgAlt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close lightbox when close button is clicked
    if (lightboxClose) {
        lightboxClose.addEventListener('click', function() {
            console.log('Closing lightbox');
            closeLightbox();
        });
    }
    
    // Close lightbox when clicking outside the image
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                console.log('Closing lightbox (clicked outside)');
                closeLightbox();
            }
        });
    }
    
    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            console.log('Closing lightbox (Escape key)');
            closeLightbox();
        }
    });
    
    // Function to close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // ===================================================================
    // 📊 SEQUENTIAL PHOTO FADE-IN ON SCROLL
    // ===================================================================
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };
    
    // Create Intersection Observer for photo animations
    const photoObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const photoItem = entry.target;
                const dataIndex = parseInt(photoItem.getAttribute('data-index'));
                
                // Add fade-in with sequential delay
                setTimeout(function() {
                    photoItem.classList.add('visible');
                }, dataIndex * 500);
            }
        });
    }, observerOptions);
    
    // Observe all photo items
    photoItems.forEach(function(item) {
        photoObserver.observe(item);
    });
    
    // ===================================================================
    // ⬇️ GALLERY ARROW FUNCTIONALITY
    // ===================================================================
    
    let galleryArrowShown = false;
    const galleryArrow = document.querySelector('.gallery-scroll-arrow');
    
    if (galleryArrow) {
        console.log('✅ Gallery arrow element found');
    } else {
        console.error('❌ Gallery arrow element NOT found!');
    }
    
    // Detect when gallery section becomes visible
    const galleryObserverForArrow = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting && !galleryArrowShown) {
                console.log('✅ Gallery section visible, showing arrow in 2 seconds');
                
                // Show gallery arrow after 2 seconds
                setTimeout(function() {
                    if (galleryArrow && !galleryArrowShown) {
                        galleryArrow.classList.add('show');
                        galleryArrowShown = true;
                        console.log('⬇️ Gallery arrow shown');
                        
                        // Force visibility check
                        setTimeout(function() {
                            checkArrowVisibility();
                        }, 100);
                    }
                }, 2000);
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe the gallery section
    if (gallerySection) {
        galleryObserverForArrow.observe(gallerySection);
    }
    
    // Gallery arrow click handler
    if (galleryArrow) {
        galleryArrow.addEventListener('click', function() {
            console.log('🖱️ Gallery arrow clicked');
            // CUSTOMIZE: Add functionality here (scroll to next section, etc.)
        });
    }
    
    // ===================================================================
    // 👁️ ARROW VISIBILITY CONTROL
    // ===================================================================
    
    function checkArrowVisibility() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        
        if (!landingSection || !gallerySection) {
            return;
        }
        
        // Get section positions
        const landingTop = landingSection.offsetTop;
        const landingBottom = landingTop + landingSection.offsetHeight;
        const galleryTop = gallerySection.offsetTop;
        const galleryBottom = galleryTop + gallerySection.offsetHeight;
        
        // Current viewport middle position
        const viewportMiddle = scrollPosition + windowHeight / 2;
        
        // Landing arrow visibility
        if (scrollArrow && scrollArrow.classList.contains('show')) {
            if (viewportMiddle > landingBottom - (windowHeight * 0.3)) {
                scrollArrow.style.opacity = '0';
                scrollArrow.style.pointerEvents = 'none';
            } else {
                scrollArrow.style.opacity = '1';
                scrollArrow.style.pointerEvents = 'auto';
            }
        }
        
        // Gallery arrow visibility
        if (galleryArrow && galleryArrow.classList.contains('show')) {
            if (viewportMiddle >= galleryTop + (windowHeight * 0.3) && 
                viewportMiddle <= galleryBottom - (windowHeight * 0.3)) {
                galleryArrow.style.opacity = '1';
                galleryArrow.style.pointerEvents = 'auto';
            } else {
                galleryArrow.style.opacity = '0';
                galleryArrow.style.pointerEvents = 'none';
            }
        }
    }
    
    // Check arrow visibility on scroll
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(function() {
            checkArrowVisibility();
        }, 10);
        
        checkArrowVisibility();
    });
    
    // Initial check
    checkArrowVisibility();
    
    // Re-check after landing arrow appears
    setTimeout(function() {
        checkArrowVisibility();
    }, 8000);
    
    // ===================================================================
    // 📊 DEBUG INFORMATION
    // ===================================================================
    
    console.log('=== SINGLE PAGE WEBSITE INFO ===');
    console.log('Structure: Single page with sections');
    console.log('Landing: Video background with title and bouncing arrow');
    console.log('Gallery: 10 photos with lightbox functionality');
    console.log('Font: PF Din Stencil for title, Poppins for other text');
    console.log('Landing Arrow: Appears at 7.5 seconds');
    console.log('Gallery Arrow: Appears 2 seconds after gallery is visible');




    // =======================================================================================================================================================
    // 🖼️ TWO IMAGES SECTION FUNCTIONALITY
    // =======================================================================================================================================================
    
    const twoImagesSection = document.getElementById('two-images');
    const twoImagesArrow = document.querySelector('.two-images-scroll-arrow');
    const realityCheckText = document.querySelector('.reality-check-text');
    const imageLeft = document.querySelector('.image-left');
    const imageRight = document.querySelector('.image-right');
    
    // Variable to track if animations are currently playing
    let twoImagesAnimating = false;
    
    // Update gallery arrow click handler to scroll to two-images section
    if (galleryArrow && twoImagesSection) {
        galleryArrow.addEventListener('click', function() {
            twoImagesSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            console.log('📜 Scrolling to two-images section');
        });
    }
    
    // Function to reset animations
    function resetTwoImagesAnimations() {
        if (imageLeft) {
            imageLeft.classList.remove('visible');
        }
        if (imageRight) {
            imageRight.classList.remove('visible');
        }
        if (twoImagesArrow) {
            twoImagesArrow.classList.remove('show');
            twoImagesArrow.style.opacity = '0';
            twoImagesArrow.style.pointerEvents = 'none';
        }
        if (realityCheckText) {
            realityCheckText.classList.remove('show');
        }
        twoImagesAnimating = false;
        console.log('🔄 Two images animations reset');
    }
    
    // Function to play animations
    function playTwoImagesAnimations() {
        if (twoImagesAnimating) return; // Prevent multiple simultaneous animations
        twoImagesAnimating = true;
        
        console.log('👁️ Two images section visible - starting animations');
        
        // Animate first image immediately
        setTimeout(function() {
            if (imageLeft) {
                imageLeft.classList.add('visible');
                console.log('🖼️ First image animated');
            }
        }, 300);
        
        // Animate second image after 2 seconds
        setTimeout(function() {
            if (imageRight) {
                imageRight.classList.add('visible');
                console.log('🖼️ Second image animated');
            }
        }, 2300);
        
        // Show arrow after both images appear (4 seconds total)
        setTimeout(function() {
            if (twoImagesArrow) {
                twoImagesArrow.classList.add('show');
                twoImagesArrow.style.opacity = '1';
                twoImagesArrow.style.pointerEvents = 'auto';
                console.log('⬇️ Two images section arrow shown');
                
                // Force visibility check
                checkArrowVisibility();
            }
        }, 4300);
        
        // Show "Reality Check" text after arrow (0.5s after arrow)
        setTimeout(function() {
            if (realityCheckText) {
                realityCheckText.classList.add('show');
                console.log('📝 Reality Check text shown');
            }
        }, 4800);
    }
    
    // Observer for two images section with replay functionality
    if (twoImagesSection && imageLeft && imageRight && twoImagesArrow && realityCheckText) {
        console.log('✅ Two images section elements found');
        
        const twoImagesObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    // Section is entering view - play animations
                    playTwoImagesAnimations();
                } else {
                    // Section is leaving view - reset animations for replay
                    resetTwoImagesAnimations();
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '0px'
        });
        
        // Start observing
        twoImagesObserver.observe(twoImagesSection);
        
        // Arrow click handler (ready for next section)
        twoImagesArrow.addEventListener('click', function() {
            console.log('Two images arrow clicked - ready for next section');
            // When you add the next section, add scroll code here
        });
    } else {
        console.error('❌ Two images section elements not found');
    }
    
    // ===================================================================
    // 👁️ UPDATE ARROW VISIBILITY FUNCTION TO INCLUDE NEW SECTION
    // ===================================================================
    
    function checkArrowVisibilityUpdated() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const viewportMiddle = scrollY + (windowHeight / 2);
        
        // Get section boundaries
        const landingTop = 0;
        const landingBottom = windowHeight;
        
        if (gallerySection) {
            const galleryTop = gallerySection.offsetTop;
            const galleryBottom = galleryTop + gallerySection.offsetHeight;
            
            // Landing arrow visibility
            if (scrollArrow && scrollArrow.classList.contains('show')) {
                if (viewportMiddle >= landingTop && viewportMiddle < galleryTop) {
                    scrollArrow.style.opacity = '1';
                    scrollArrow.style.pointerEvents = 'auto';
                } else {
                    scrollArrow.style.opacity = '0';
                    scrollArrow.style.pointerEvents = 'none';
                }
            }
            
            // Gallery arrow visibility
            if (galleryArrow && galleryArrow.classList.contains('show')) {
                if (viewportMiddle >= galleryTop + (windowHeight * 0.3) && 
                    viewportMiddle <= galleryBottom - (windowHeight * 0.3)) {
                    galleryArrow.style.opacity = '1';
                    galleryArrow.style.pointerEvents = 'auto';
                } else {
                    galleryArrow.style.opacity = '0';
                    galleryArrow.style.pointerEvents = 'none';
                }
            }
            
            // Two images arrow visibility
            if (twoImagesSection && twoImagesArrow && twoImagesArrow.classList.contains('show')) {
                const twoImagesTop = twoImagesSection.offsetTop;
                const twoImagesBottom = twoImagesTop + twoImagesSection.offsetHeight;
                
                if (viewportMiddle >= twoImagesTop + (windowHeight * 0.3) && 
                    viewportMiddle <= twoImagesBottom - (windowHeight * 0.3)) {
                    twoImagesArrow.style.opacity = '1';
                    twoImagesArrow.style.pointerEvents = 'auto';
                } else {
                    twoImagesArrow.style.opacity = '0';
                    twoImagesArrow.style.pointerEvents = 'none';
                }
            }
        }
    }
    
    // Override the original checkArrowVisibility with the updated version
    checkArrowVisibility = checkArrowVisibilityUpdated;
    
    console.log('=== TWO IMAGES SECTION ADDED ===');
    console.log('Feature: Two images slide in from bottom, one after another');
    console.log('Timing: First image → 2s gap → Second image → Arrow → Reality Check text');
    console.log('Background: #414042 gray');
    console.log('Replay: Animations replay every time you scroll back to this section');




    //======================================================================================================================================================
    //======================================================================================================================================================
    //======================================================================================================================================================

    // SECOND VIDEO TRANSITION SECTION FUNCTIONALITY
    
    const videoSection = document.getElementById('video-section');
    const sectionVideo = document.querySelector('.section-video');
    const videoSectionArrow = document.querySelector('.video-section-arrow');
    const videoSectionText = document.querySelector('.video-section-text');
    
    let videoSectionAnimating = false;
    
    // Update two-images arrow to scroll to video section
    if (twoImagesArrow && videoSection) {
        twoImagesArrow.addEventListener('click', function() {
            videoSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            console.log('📜 Scrolling to video section');
        });
    }
    
    // Function to reset video section animations
    function resetVideoSection() {
        if (sectionVideo) {
            // Pause and reset video
            sectionVideo.pause();
            sectionVideo.currentTime = 0;
            sectionVideo.classList.remove('fade-out');
            console.log('🔄 Video reset to beginning');
        }
        
        if (videoSectionArrow) {
            videoSectionArrow.classList.remove('show');
            videoSectionArrow.style.opacity = '0';
            videoSectionArrow.style.pointerEvents = 'none';
        }
        
        if (videoSectionText) {
            videoSectionText.classList.remove('show');
        }
        
        videoSectionAnimating = false;
        console.log('🔄 Video section animations reset');
    }
    
    // Function to play video section animations
    function playVideoSection() {
        if (videoSectionAnimating) return; // Prevent multiple plays
        videoSectionAnimating = true;
        
        console.log('👁️ Video section visible - starting video');
        
        // Start playing video
        if (sectionVideo) {
            const playPromise = sectionVideo.play();
            
            if (playPromise !== undefined) {
                playPromise
                    .then(function() {
                        console.log('✅ Video section video playing');
                    })
                    .catch(function(error) {
                        console.error('❌ Video autoplay failed:', error);
                        // Try to play muted
                        sectionVideo.muted = true;
                        sectionVideo.play();
                    });
            }
        }
    }
    
    // Video section functionality
    if (videoSection && sectionVideo && videoSectionArrow && videoSectionText) {
        console.log('✅ Video section elements found');
        
        // Observer for video section with replay
        const videoSectionObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    // Section is entering view - play video
                    playVideoSection();
                } else {
                    // Section is leaving view - reset everything
                    resetVideoSection();
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '0px'
        });
        
        // Start observing video section
        videoSectionObserver.observe(videoSection);
        
        // Video ended event - fade out and show arrow/text
        sectionVideo.addEventListener('ended', function() {
            console.log('🎬 Video ended - starting fade out');
            
            // Add fade-out class
            sectionVideo.classList.add('fade-out');
            
            // Show arrow 0.3 seconds after fade-out completes (2s fade + 0.3s)
            setTimeout(function() {
                if (videoSectionArrow) {
                    videoSectionArrow.classList.add('show');
                    videoSectionArrow.style.opacity = '1';
                    videoSectionArrow.style.pointerEvents = 'auto';
                    console.log('⬇️ Video section arrow shown');
                    
                    // Force visibility check
                    checkArrowVisibility();
                }
            }, 2300); // 2000ms fade + 300ms delay
            
            // Show text with slide-up 0.3 seconds after arrow (2s fade + 0.3s + 0.3s)
            setTimeout(function() {
                if (videoSectionText) {
                    videoSectionText.classList.add('show');
                    console.log('📝 Understanding the Site text sliding up to center');
                }
            }, 2600); // 2000ms fade + 300ms delay + 300ms delay
        });
        
        // Video loading events
        sectionVideo.addEventListener('loadeddata', function() {
            console.log('✅ Video section video loaded');
        });
        
        sectionVideo.addEventListener('error', function(e) {
            console.error('❌ Video section video error:', e);
        });
        
        // Arrow click handler (ready for next section)
        videoSectionArrow.addEventListener('click', function() {
            console.log('Video section arrow clicked - ready for next section');
            // When you add the next section, add scroll code here
        });
        
    } else {
        console.error('❌ Video section elements not found');
    }
    
    // ===================================================================
    // 👁️ UPDATE ARROW VISIBILITY FUNCTION FOR VIDEO SECTION
    // ===================================================================
    
    function checkArrowVisibilityWithVideo() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const viewportMiddle = scrollY + (windowHeight / 2);
        
        // Get section boundaries
        const landingTop = 0;
        const landingBottom = windowHeight;
        
        if (gallerySection) {
            const galleryTop = gallerySection.offsetTop;
            const galleryBottom = galleryTop + gallerySection.offsetHeight;
            
            // Landing arrow visibility
            if (scrollArrow && scrollArrow.classList.contains('show')) {
                if (viewportMiddle >= landingTop && viewportMiddle < galleryTop) {
                    scrollArrow.style.opacity = '1';
                    scrollArrow.style.pointerEvents = 'auto';
                } else {
                    scrollArrow.style.opacity = '0';
                    scrollArrow.style.pointerEvents = 'none';
                }
            }
            
            // Gallery arrow visibility
            if (galleryArrow && galleryArrow.classList.contains('show')) {
                if (viewportMiddle >= galleryTop + (windowHeight * 0.3) && 
                    viewportMiddle <= galleryBottom - (windowHeight * 0.3)) {
                    galleryArrow.style.opacity = '1';
                    galleryArrow.style.pointerEvents = 'auto';
                } else {
                    galleryArrow.style.opacity = '0';
                    galleryArrow.style.pointerEvents = 'none';
                }
            }
            
            // Two images arrow visibility
            if (twoImagesSection && twoImagesArrow && twoImagesArrow.classList.contains('show')) {
                const twoImagesTop = twoImagesSection.offsetTop;
                const twoImagesBottom = twoImagesTop + twoImagesSection.offsetHeight;
                
                if (viewportMiddle >= twoImagesTop + (windowHeight * 0.3) && 
                    viewportMiddle <= twoImagesBottom - (windowHeight * 0.3)) {
                    twoImagesArrow.style.opacity = '1';
                    twoImagesArrow.style.pointerEvents = 'auto';
                } else {
                    twoImagesArrow.style.opacity = '0';
                    twoImagesArrow.style.pointerEvents = 'none';
                }
            }
            
            // Video section arrow visibility
            if (videoSection && videoSectionArrow && videoSectionArrow.classList.contains('show')) {
                const videoSectionTop = videoSection.offsetTop;
                const videoSectionBottom = videoSectionTop + videoSection.offsetHeight;
                
                if (viewportMiddle >= videoSectionTop + (windowHeight * 0.3) && 
                    viewportMiddle <= videoSectionBottom - (windowHeight * 0.3)) {
                    videoSectionArrow.style.opacity = '1';
                    videoSectionArrow.style.pointerEvents = 'auto';
                } else {
                    videoSectionArrow.style.opacity = '0';
                    videoSectionArrow.style.pointerEvents = 'none';
                }
            }
        }
    }
    
    // Override the original checkArrowVisibility with the video section version
    checkArrowVisibility = checkArrowVisibilityWithVideo;
    
    console.log('=== VIDEO SECTION ADDED ===');
    console.log('Feature: Fullscreen video that plays when scrolled to');
    console.log('Video fades to #414042 after ending');
    console.log('Arrow appears 0.3s after fade completes');
    console.log('Text slides up to center 0.3s after arrow');
    console.log('Replay: All animations replay when scrolling back to section');


    //======================================================================================================================================================
    //======================================================================================================================================================
    //======================================================================================================================================================

    // SITE ZOOMED OUT MAPS OVERLAYS - WITH SCROLL INTERACTION ANIMATION
    
    const overlayImagesSection = document.getElementById('overlay-images');
    const overlaySectionArrow = document.querySelector('.overlay-section-arrow');
    const overlayLayer1 = document.querySelector('.layer-1');
    const overlayLayer2 = document.querySelector('.layer-2');
    const overlayLayer3 = document.querySelector('.layer-3');
    
    let overlayAnimating = false;
    
    // Update video section arrow to scroll to overlay images section
    if (videoSectionArrow && overlayImagesSection) {
        videoSectionArrow.addEventListener('click', function() {
            overlayImagesSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            console.log('📜 Scrolling to overlay images section');
        });
    }
    
    // Function to reset overlay animations
    function resetOverlayAnimations() {
        if (overlayLayer1) overlayLayer1.classList.remove('visible');
        if (overlayLayer2) overlayLayer2.classList.remove('visible');
        if (overlayLayer3) {
            overlayLayer3.classList.remove('visible');
            overlayLayer3.classList.remove('pulsing');
        }
        
        if (overlaySectionArrow) {
            overlaySectionArrow.classList.remove('show');
            overlaySectionArrow.style.opacity = '0';
            overlaySectionArrow.style.pointerEvents = 'none';
        }
        
        overlayAnimating = false;
        console.log('🔄 Overlay images animations reset');
    }
    
    // Function to play overlay animations
    function playOverlayAnimations() {
        if (overlayAnimating) return;
        overlayAnimating = true;
        
        console.log('👁️ Overlay images section visible - starting animations');
        
        // FIRST IMAGE: Slide up from bottom (starts immediately)
        setTimeout(function() {
            if (overlayLayer1) {
                overlayLayer1.classList.add('visible');
                console.log('🖼️ First image sliding up from bottom');
            }
        }, 300);
        
        // SECOND IMAGE: Fade in (1.5 seconds after first)
        setTimeout(function() {
            if (overlayLayer2) {
                overlayLayer2.classList.add('visible');
                console.log('🖼️ Second image fading in');
            }
        }, 1800); // 300ms + 1500ms gap
        
        // THIRD IMAGE: Fade in (1.5 seconds after second)
        setTimeout(function() {
            if (overlayLayer3) {
                overlayLayer3.classList.add('visible');
                console.log('🖼️ Third image fading in');
            }
        }, 3300); // 300ms + 1500ms + 1500ms gap
        
        // PULSING: Start after third image finishes fading (1.2s fade duration)
        setTimeout(function() {
            if (overlayLayer3) {
                overlayLayer3.classList.add('pulsing');
                console.log('💓 Third image pulsing');
            }
        }, 4500); // 3300ms + 1200ms fade duration
        
        // ARROW: Appear after pulsing starts (0.5s after pulse)
        setTimeout(function() {
            if (overlaySectionArrow) {
                overlaySectionArrow.classList.add('show');
                overlaySectionArrow.style.opacity = '1';
                overlaySectionArrow.style.pointerEvents = 'auto';
                console.log('⬇️ Arrow appearing');
                
                // Force visibility check
                checkArrowVisibility();
            }
        }, 5000); // 4500ms + 500ms buffer
    }
    
    // Observer for overlay images section with replay functionality
    if (overlayImagesSection && overlayLayer1 && overlayLayer2 && overlayLayer3 && overlaySectionArrow) {
        console.log('✅ Overlay images section elements found');
        
        const overlayObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    // Section is entering view - play animations
                    playOverlayAnimations();
                } else {
                    // Section is leaving view - reset animations for replay
                    resetOverlayAnimations();
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '0px'
        });
        
        // Start observing
        overlayObserver.observe(overlayImagesSection);
        
        // Arrow click handler (ready for next section)
        overlaySectionArrow.addEventListener('click', function() {
            console.log('Overlay images arrow clicked - ready for next section');
            // When you add the next section, add scroll code here
        });
    } else {
        console.error('❌ Overlay images section elements not found');
    }
    
    // ===================================================================
    // 👁️ UPDATE ARROW VISIBILITY FUNCTION
    // ===================================================================
    
    function checkArrowVisibilityWithOverlay() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const viewportMiddle = scrollY + (windowHeight / 2);
        
        // Get section boundaries
        const landingTop = 0;
        const landingBottom = windowHeight;
        
        if (gallerySection) {
            const galleryTop = gallerySection.offsetTop;
            const galleryBottom = galleryTop + gallerySection.offsetHeight;
            
            // Landing arrow visibility
            if (scrollArrow && scrollArrow.classList.contains('show')) {
                if (viewportMiddle >= landingTop && viewportMiddle < galleryTop) {
                    scrollArrow.style.opacity = '1';
                    scrollArrow.style.pointerEvents = 'auto';
                } else {
                    scrollArrow.style.opacity = '0';
                    scrollArrow.style.pointerEvents = 'none';
                }
            }
            
            // Gallery arrow visibility
            if (galleryArrow && galleryArrow.classList.contains('show')) {
                if (viewportMiddle >= galleryTop + (windowHeight * 0.3) && 
                    viewportMiddle <= galleryBottom - (windowHeight * 0.3)) {
                    galleryArrow.style.opacity = '1';
                    galleryArrow.style.pointerEvents = 'auto';
                } else {
                    galleryArrow.style.opacity = '0';
                    galleryArrow.style.pointerEvents = 'none';
                }
            }
            
            // Two images arrow visibility
            if (twoImagesSection && twoImagesArrow && twoImagesArrow.classList.contains('show')) {
                const twoImagesTop = twoImagesSection.offsetTop;
                const twoImagesBottom = twoImagesTop + twoImagesSection.offsetHeight;
                
                if (viewportMiddle >= twoImagesTop + (windowHeight * 0.3) && 
                    viewportMiddle <= twoImagesBottom - (windowHeight * 0.3)) {
                    twoImagesArrow.style.opacity = '1';
                    twoImagesArrow.style.pointerEvents = 'auto';
                } else {
                    twoImagesArrow.style.opacity = '0';
                    twoImagesArrow.style.pointerEvents = 'none';
                }
            }
            
            // Video section arrow visibility
            if (videoSection && videoSectionArrow && videoSectionArrow.classList.contains('show')) {
                const videoSectionTop = videoSection.offsetTop;
                const videoSectionBottom = videoSectionTop + videoSection.offsetHeight;
                
                if (viewportMiddle >= videoSectionTop + (windowHeight * 0.3) && 
                    viewportMiddle <= videoSectionBottom - (windowHeight * 0.3)) {
                    videoSectionArrow.style.opacity = '1';
                    videoSectionArrow.style.pointerEvents = 'auto';
                } else {
                    videoSectionArrow.style.opacity = '0';
                    videoSectionArrow.style.pointerEvents = 'none';
                }
            }
            
            // Overlay images arrow visibility
            if (overlayImagesSection && overlaySectionArrow && overlaySectionArrow.classList.contains('show')) {
                const overlayTop = overlayImagesSection.offsetTop;
                const overlayBottom = overlayTop + overlayImagesSection.offsetHeight;
                
                if (viewportMiddle >= overlayTop + (windowHeight * 0.3) && 
                    viewportMiddle <= overlayBottom - (windowHeight * 0.3)) {
                    overlaySectionArrow.style.opacity = '1';
                    overlaySectionArrow.style.pointerEvents = 'auto';
                } else {
                    overlaySectionArrow.style.opacity = '0';
                    overlaySectionArrow.style.pointerEvents = 'none';
                }
            }
        }
    }
    
    // Override the original checkArrowVisibility
    checkArrowVisibility = checkArrowVisibilityWithOverlay;
    
    console.log('=== OVERLAY IMAGES SECTION - SIMPLE ANIMATIONS ===');
    console.log('First image: Slides up from bottom');
    console.log('Other images: Fade in with 1.5s gaps');
    console.log('Pulsing: Starts after all images loaded');
    console.log('Arrow: Appears after pulsing starts');
    console.log('Replay: Animations replay when scrolling back');
    
});