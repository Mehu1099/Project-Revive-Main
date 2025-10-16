// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {


    // ===============================================================================================================================================================
    // 🎬 INTRO SECTION - NEWS FLASH ANIMATION
    // ===============================================================================================================================================================
    
    const introSection = document.getElementById('intro-section');
    const introVideo = document.querySelector('.intro-video');
    const introDarkOverlay = document.querySelector('.intro-dark-overlay');
    const flashImages = document.querySelectorAll('.flash-image-wrapper');
    const newsHeadline = document.querySelector('.news-headline');
    const introArrow = document.querySelector('.intro-scroll-arrow');
    const landingSection = document.getElementById('landing');
    
    if (introSection && introVideo && introDarkOverlay && flashImages.length > 0) {
        console.log('✅ Intro section initialized');
        
        // Wait 3 seconds, then start darkening and show images
        setTimeout(function() {
            // Darken the video
            introDarkOverlay.classList.add('darken');
            console.log('🌑 Video darkening');
            
            // Show images one by one with news flash effect
            // Image 1 - after 1 second
            setTimeout(function() {
                console.log('📰 Showing image 1');
                flashImages[0].classList.add('flash-before');
                setTimeout(function() {
                    flashImages[0].classList.remove('flash-before');
                    flashImages[0].classList.add('show');
                }, 300);
            }, 1000);
            
            // Image 2 - after 2 seconds
            setTimeout(function() {
                console.log('📰 Showing image 2');
                flashImages[1].classList.add('flash-before');
                setTimeout(function() {
                    flashImages[1].classList.remove('flash-before');
                    flashImages[1].classList.add('show');
                }, 300);
            }, 2000);
            
            // Image 3 - after 3 seconds
            setTimeout(function() {
                console.log('📰 Showing image 3');
                flashImages[2].classList.add('flash-before');
                setTimeout(function() {
                    flashImages[2].classList.remove('flash-before');
                    flashImages[2].classList.add('show');
                }, 300);
            }, 3000);
            
            // Image 4 - after 4 seconds
            setTimeout(function() {
                console.log('📰 Showing image 4');
                flashImages[3].classList.add('flash-before');
                setTimeout(function() {
                    flashImages[3].classList.remove('flash-before');
                    flashImages[3].classList.add('show');
                }, 300);
            }, 4000);
            
            // Show headline text after all images - after 5 seconds
            setTimeout(function() {
                if (newsHeadline) {
                    console.log('📢 Showing headline');
                    newsHeadline.classList.add('flash-before');
                    setTimeout(function() {
                        newsHeadline.classList.remove('flash-before');
                        newsHeadline.classList.add('show');
                    }, 400);
                }
            }, 5000);
            
            // Show arrow after headline - after 6.5 seconds
            setTimeout(function() {
                if (introArrow) {
                    introArrow.classList.add('show');
                    console.log('⬇️ Intro arrow shown');
                }
            }, 6500);
            
        }, 3000); // Start sequence after 3 seconds of video playing
        
        // Arrow click navigation
        if (introArrow) {
            introArrow.addEventListener('click', function() {
                const questionSection = document.getElementById('question-section');
                if (questionSection) {
                    console.log('Intro arrow clicked - scrolling to question section');
                    questionSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                } else {
                    console.error('Question section not found!');
                }
            });
        }
    }

    // ===========================================================================================================================================================
    // ❓ QUESTION SECTION - TYPEWRITER EFFECT
    // ===========================================================================================================================================================
    
    const questionSection = document.getElementById('question-section');
    const questionText = document.querySelector('.question-text');
    const journeyText = document.querySelector('.journey-text');
    const questionArrow = document.querySelector('.question-scroll-arrow');
    
    console.log('Question section elements check:');
    console.log('- Section:', questionSection);
    console.log('- Text element:', questionText);
    console.log('- Journey text:', journeyText);
    console.log('- Arrow:', questionArrow);
    
    if (questionSection && questionText) {
        console.log('✅ Question section initialized');
        
        const fullText = "What can you do about it ?";
        let charIndex = 0;
        let hasStarted = false;
        
        // Function to type out the text
        function typeWriter() {
            if (charIndex < fullText.length) {
                questionText.textContent += fullText.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 100); // 100ms per character
            } else {
                // Typing complete - remove cursor
                questionText.classList.remove('typing');
                console.log('✍️ Typewriter complete');
                
                // Show arrow after text is complete (0.5s delay)
                setTimeout(function() {
                    if (questionArrow) {
                        questionArrow.classList.add('show');
                        console.log('⬇️ Question arrow shown');
                    }
                    
                    // Show journey text after arrow (0.8s delay)
                    setTimeout(function() {
                        if (journeyText) {
                            journeyText.classList.add('show');
                            console.log('🚶 Journey text shown');
                        }
                    }, 800);
                }, 500);
            }
        }
        
        // Intersection Observer to start animation when section is visible
        const questionObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting && !hasStarted) {
                    hasStarted = true;
                    console.log('👁️ Question section visible - starting animation');
                    
                    // Flash effect first
                    questionText.classList.add('flash');
                    
                    // After flash, start typing
                    setTimeout(function() {
                        questionText.classList.remove('flash');
                        questionText.classList.add('show', 'typing');
                        console.log('Starting typewriter...');
                        typeWriter();
                    }, 500);
                }
            });
        }, {
            threshold: 0.5
        });
        
        questionObserver.observe(questionSection);
        
        // Arrow click navigation to landing section - FIXED
        if (questionArrow) {
            questionArrow.addEventListener('click', function() {
                const landingSection = document.getElementById('landing');
                if (landingSection) {
                    console.log('Question arrow clicked - scrolling to landing section');
                    landingSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                } else {
                    console.error('Landing section not found!');
                }
            });
        }
    } else {
        console.error('❌ Question section or text element not found!');
        if (!questionSection) console.error('   - Missing: #question-section');
        if (!questionText) console.error('   - Missing: .question-text');
    }


    
    // ==========================================================================================================================================================
    // 🎬 LANDING SECTION - TWO VIDEOS FUNCTIONALITY
    // ==========================================================================================================================================================
    
    const videoFirst = document.querySelector('.video-first');
    const videoSecond = document.querySelector('.video-second');
    
    if (videoFirst && videoSecond) {
        console.log('✅ Both video elements found!');
        
        videoFirst.playbackRate = 0.7;
        videoSecond.playbackRate = 0.7;
        
        videoFirst.preload = 'auto';
        videoSecond.preload = 'auto';
        
        videoFirst.addEventListener('canplay', function() {
            console.log('✅ First video can start playing');
            const playPromise = videoFirst.play();
            
            if (playPromise !== undefined) {
                playPromise.then(function() {
                    console.log('✅ First video playing successfully');
                }).catch(function(error) {
                    console.error('❌ First video autoplay failed:', error);
                    videoFirst.muted = true;
                    videoFirst.play();
                });
            }
        });
        
        videoFirst.addEventListener('ended', function() {
            console.log('🎬 First video ended - starting transition');
            
            const playSecondPromise = videoSecond.play();
            
            if (playSecondPromise !== undefined) {
                playSecondPromise.then(function() {
                    console.log('✅ Second video started playing');
                    videoFirst.classList.add('fade-out');
                    videoSecond.classList.add('fade-in');
                }).catch(function(error) {
                    console.error('❌ Second video autoplay failed:', error);
                    videoSecond.muted = true;
                    videoSecond.play().then(function() {
                        videoFirst.classList.add('fade-out');
                        videoSecond.classList.add('fade-in');
                    });
                });
            }
        });
    }
    
// =====================================================================================================
// 🔓 UNLOCK MECHANISM
// =====================================================================================================

const unlockHint = document.querySelector('.unlock-hint');
const typedLettersDisplay = document.querySelector('.typed-letters');
const subtitle = document.querySelector('.subtitle');
const scrollArrow = document.querySelector('.scroll-arrow');
const gallerySection = document.getElementById('gallery');
const accessDeniedOverlay = document.querySelector('.access-denied-overlay');

let typedSequence = '';
let isUnlocked = false;
let isProcessingDenial = false;
const unlockWord = 'REVIVE';

// Lock scrolling on page load
document.body.classList.add('scroll-locked');

if (unlockHint && typedLettersDisplay && subtitle && scrollArrow) {
    console.log('✅ Unlock mechanism initialized');
    
    document.addEventListener('keypress', function(e) {
        if (isUnlocked || isProcessingDenial) return;
        
        const key = e.key.toUpperCase();
        
        if (/^[A-Z]$/.test(key)) {
            typedSequence += key;
            
            if (typedSequence.length > unlockWord.length) {
                typedSequence = typedSequence.slice(-unlockWord.length);
            }
            
            typedLettersDisplay.textContent = typedSequence;
            
            // Check if typed sequence matches unlock word
            if (typedSequence === unlockWord) {
                isUnlocked = true;
                console.log('🎉 UNLOCKED!');
                
                unlockHint.classList.add('success');
                
                setTimeout(function() {
                    unlockHint.style.display = 'none';
                    subtitle.classList.remove('locked');
                    subtitle.classList.add('unlocked');
                    
                    setTimeout(function() {
                        scrollArrow.classList.remove('locked');
                        scrollArrow.classList.add('show');
                        scrollArrow.style.opacity = '1';
                        scrollArrow.style.pointerEvents = 'auto';
                        
                        // UNLOCK SCROLLING
                        document.body.classList.remove('scroll-locked');
                        console.log('✅ Scrolling unlocked');
                        console.log('⬇️ Landing arrow shown');
                    }, 1000);
                }, 800);
            }

            // Check if typed sequence is complete but wrong
            // Check if typed sequence is complete but wrong
            else if (typedSequence.length === unlockWord.length) {
                console.log('❌ WRONG PASSWORD - ACCESS DENIED');
                console.log('Typed:', typedSequence);
                console.log('Expected:', unlockWord);
                
                isProcessingDenial = true;
                
                // Find and show access denied overlay
                const overlay = document.querySelector('.access-denied-overlay');
                console.log('Overlay element found:', overlay);
                
                if (overlay) {
                    // Force display
                    overlay.style.display = 'flex';
                    overlay.classList.add('active');
                    console.log('✅ Overlay should now be visible');
                    console.log('Overlay display:', window.getComputedStyle(overlay).display);
                    console.log('Overlay z-index:', window.getComputedStyle(overlay).zIndex);
                    
                    // Reload page after 2 seconds
                    setTimeout(function() {
                        console.log('🔄 Reloading page in 0.5 seconds...');
                        setTimeout(function() {
                            location.reload();
                        }, 500);
                    }, 1500);
                } else {
                    console.error('❌ Overlay element not found!');
                    // Fallback: still reload
                    setTimeout(function() {
                        location.reload();
                    }, 2000);
                }
            }
        }
    });
    
    if (scrollArrow && gallerySection) {
        scrollArrow.addEventListener('click', function() {
            if (isUnlocked) {
                gallerySection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

// Prevent manual scrolling until unlocked
window.addEventListener('wheel', function(e) {
    if (!isUnlocked && !isProcessingDenial) {
        e.preventDefault();
    }
}, { passive: false });

window.addEventListener('touchmove', function(e) {
    if (!isUnlocked && !isProcessingDenial) {
        e.preventDefault();
    }
}, { passive: false });

// Prevent keyboard scrolling
window.addEventListener('keydown', function(e) {
    if (!isUnlocked && !isProcessingDenial) {
        const scrollKeys = ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '];
        if (scrollKeys.includes(e.key)) {
            e.preventDefault();
        }
    }
});
    
// =======================================================================================================================================================
// LIGHTBOX FUNCTIONALITY for Image Gallery Section
// =======================================================================================================================================================

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-image');  // Changed to match HTML
const closeLightbox = document.querySelector('.lightbox-close');  // Changed to match HTML
const photoItems = document.querySelectorAll('.photo-item img');  // Changed to select actual images

photoItems.forEach(function(photo) {
    photo.addEventListener('click', function() {
        if (lightbox && lightboxImg) {
            lightbox.classList.add('active');
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt;
        }
    });
});

if (closeLightbox) {
    closeLightbox.addEventListener('click', function() {
        if (lightbox) {
            lightbox.classList.remove('active');
        }
    });
}

if (lightbox) {
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
    }
});
    
    // ===================================================================
    // PHOTO FADE-IN ANIMATIONS
    // ===================================================================
    
    const photoItemsAll = document.querySelectorAll('.photo-item');
    
    const photoObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const photoItem = entry.target;
                const dataIndex = parseInt(photoItem.getAttribute('data-index'));
                
                setTimeout(function() {
                    photoItem.classList.add('visible');
                }, dataIndex * 500);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px'
    });
    
    photoItemsAll.forEach(function(item) {
        photoObserver.observe(item);
    });
    
    // ===================================================================
    // GALLERY ARROW
    // ===================================================================
    
    const galleryArrow = document.querySelector('.gallery-scroll-arrow');
    const galleryImages = document.querySelectorAll('.photo-item img');

    if (gallerySection && galleryArrow) {
    console.log('✅ Gallery arrow element found');
    
    let galleryArrowShown = false;
    let imagesLoaded = false;
    
    // Wait for all gallery images to load
    function waitForGalleryImages() {
        const imagePromises = Array.from(galleryImages).map(img => {
            return new Promise((resolve) => {
                if (img.complete) {
                    resolve();
                } else {
                    img.addEventListener('load', resolve);
                    img.addEventListener('error', resolve);
                }
            });
        });
        
        Promise.all(imagePromises).then(() => {
            console.log('✅ All gallery images loaded');
            imagesLoaded = true;
        });
    }
    
    // Start loading images
    waitForGalleryImages();
    
    const galleryArrowObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting && !galleryArrowShown && imagesLoaded) {
                console.log('👁️ Gallery section visible - showing arrow in 2 seconds');
                
                setTimeout(function() {
                    galleryArrow.classList.add('show');
                    galleryArrow.style.opacity = '1';
                    galleryArrow.style.pointerEvents = 'auto';
                    galleryArrowShown = true;
                    console.log('⬇️ Gallery arrow shown');
                    checkArrowVisibility();
                }, 2000);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px'
    });
    
    galleryArrowObserver.observe(gallerySection);
} else {
    console.error('❌ Gallery arrow not found');
    if (!gallerySection) console.error('   - Missing: gallery section');
    if (!galleryArrow) console.error('   - Missing: .gallery-scroll-arrow element');
}


    
    // ===================================================================================================================================================
    // 🖼️ TWO IMAGES SECTION SHOWING CURRENT SLUM PROPOSAL STRATEGY
    // ===================================================================================================================================================
    
    const twoImagesSection = document.getElementById('two-images');
    const twoImagesArrow = document.querySelector('.two-images-scroll-arrow');
    const realityCheckText = document.querySelector('.reality-check-text');
    const imageLeft = document.querySelector('.image-left');
    const imageRight = document.querySelector('.image-right');
    
    let twoImagesAnimating = false;
    
    if (galleryArrow && twoImagesSection) {
        galleryArrow.addEventListener('click', function() {
            twoImagesSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    function resetTwoImagesAnimations() {
        if (imageLeft) imageLeft.classList.remove('visible');
        if (imageRight) imageRight.classList.remove('visible');
        
        if (twoImagesArrow) {
            twoImagesArrow.classList.remove('show');
            twoImagesArrow.style.opacity = '0';
            twoImagesArrow.style.pointerEvents = 'none';
        }
        
        if (realityCheckText) {
            realityCheckText.classList.remove('show');
        }
        
        twoImagesAnimating = false;
    }
    
    function playTwoImagesAnimations() {
        if (twoImagesAnimating) return;
        twoImagesAnimating = true;
        
        setTimeout(function() {
            if (imageLeft) imageLeft.classList.add('visible');
        }, 300);
        
        setTimeout(function() {
            if (imageRight) imageRight.classList.add('visible');
        }, 2300);
        
        setTimeout(function() {
            if (twoImagesArrow) {
                twoImagesArrow.classList.add('show');
                twoImagesArrow.style.opacity = '1';
                twoImagesArrow.style.pointerEvents = 'auto';
                checkArrowVisibility();
            }
        }, 4300);
        
        setTimeout(function() {
            if (realityCheckText) {
                realityCheckText.classList.add('show');
            }
        }, 4800);
    }
    
    if (twoImagesSection && imageLeft && imageRight) {
        const twoImagesObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    playTwoImagesAnimations();
                } else {
                    resetTwoImagesAnimations();
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '0px'
        });
        
        twoImagesObserver.observe(twoImagesSection);
    }
    
    // ==========================================================================================================================================================
    // 🎬 SECOND VIDEO TRANSITION SECTION
    // ==========================================================================================================================================================
    
    const videoSection = document.getElementById('video-section');
    const sectionVideo = document.querySelector('.section-video');
    const videoSectionArrow = document.querySelector('.video-section-arrow');
    const videoSectionText = document.querySelector('.video-section-text');
    
    let videoSectionAnimating = false;
    
    if (twoImagesArrow && videoSection) {
        twoImagesArrow.addEventListener('click', function() {
            videoSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    function resetVideoSection() {
        if (sectionVideo) {
            sectionVideo.pause();
            sectionVideo.currentTime = 0;
            sectionVideo.classList.remove('fade-out');
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
    }
    
    function playVideoSection() {
        if (videoSectionAnimating) return;
        videoSectionAnimating = true;
        
        if (sectionVideo) {
            const playPromise = sectionVideo.play();
            
            if (playPromise !== undefined) {
                playPromise.then(function() {
                    console.log('✅ Video section playing');
                }).catch(function(error) {
                    console.error('❌ Video autoplay failed:', error);
                    sectionVideo.muted = true;
                    sectionVideo.play();
                });
            }
        }
    }
    
    if (videoSection && sectionVideo) {
        const videoSectionObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    playVideoSection();
                } else {
                    resetVideoSection();
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '0px'
        });
        
        videoSectionObserver.observe(videoSection);
        
        sectionVideo.addEventListener('ended', function() {
            sectionVideo.classList.add('fade-out');
            
            setTimeout(function() {
                if (videoSectionArrow) {
                    videoSectionArrow.classList.add('show');
                    videoSectionArrow.style.opacity = '1';
                    videoSectionArrow.style.pointerEvents = 'auto';
                    checkArrowVisibility();
                }
            }, 2300);
            
            setTimeout(function() {
                if (videoSectionText) {
                    videoSectionText.classList.add('show');
                }
            }, 2600);
        });
    }


    
    // =======================================================================================================================================================
    // OVERLAY IMAGES SECTION (UNDESRANDING THE SITE ZOOMED OUT SCALE)
    // =======================================================================================================================================================
    
    const overlayImagesSection = document.getElementById('overlay-images');
    const overlaySectionArrow = document.querySelector('.overlay-section-arrow');
    const overlayLayer1 = document.querySelector('.layer-1');
    const overlayLayer2 = document.querySelector('.layer-2');
    const overlayLayer3 = document.querySelector('.layer-3');
    
    let overlayAnimating = false;
    
    if (videoSectionArrow && overlayImagesSection) {
        videoSectionArrow.addEventListener('click', function() {
            overlayImagesSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
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
    }
    
    function playOverlayAnimations() {
        if (overlayAnimating) return;
        overlayAnimating = true;
        
        setTimeout(function() {
            if (overlayLayer1) overlayLayer1.classList.add('visible');
        }, 300);
        
        setTimeout(function() {
            if (overlayLayer2) overlayLayer2.classList.add('visible');
        }, 1800);
        
        setTimeout(function() {
            if (overlayLayer3) overlayLayer3.classList.add('visible');
        }, 3300);
        
        setTimeout(function() {
            if (overlayLayer3) overlayLayer3.classList.add('pulsing');
        }, 4500);
        
        setTimeout(function() {
            if (overlaySectionArrow) {
                overlaySectionArrow.classList.add('show');
                overlaySectionArrow.style.opacity = '1';
                overlaySectionArrow.style.pointerEvents = 'auto';
                checkArrowVisibility();
            }
        }, 5000);
    }
    
    if (overlayImagesSection && overlayLayer1 && overlayLayer2 && overlayLayer3) {
        const overlayObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    playOverlayAnimations();
                } else {
                    resetOverlayAnimations();
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '0px'
        });
        
        overlayObserver.observe(overlayImagesSection);
    }


    
    // =======================================================================================================================================================
    // 👁️ ARROW VISIBILITY CONTROL
    // =======================================================================================================================================================
    
    function checkArrowVisibility() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const viewportMiddle = scrollY + (windowHeight / 2);
        
        const landingTop = 0;
        const landingBottom = windowHeight;
        
        if (gallerySection) {
            const galleryTop = gallerySection.offsetTop;
            const galleryBottom = galleryTop + gallerySection.offsetHeight;
            
            if (scrollArrow && scrollArrow.classList.contains('show')) {
                if (viewportMiddle >= landingTop && viewportMiddle < galleryTop) {
                    scrollArrow.style.opacity = '1';
                    scrollArrow.style.pointerEvents = 'auto';
                } else {
                    scrollArrow.style.opacity = '0';
                    scrollArrow.style.pointerEvents = 'none';
                }
            }
            
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
    
    checkArrowVisibility();
    
    setTimeout(function() {
        checkArrowVisibility();
    }, 8000);



// =======================================================================================================================================================
// SECOND OVERLAY IMAGES SECTION : ZOOMED-in MAPS
// =======================================================================================================================================================

    const overlayImagesSection2 = document.getElementById('overlay-images-2');
    const overlaySectionArrow2 = document.querySelector('.overlay-section-arrow-2');
    const overlayLayer1_2 = document.querySelector('.layer-1-2');
    const overlayLayer2_2 = document.querySelector('.layer-2-2');
    const overlayLayer3_2 = document.querySelector('.layer-3-2');

    let overlayAnimating2 = false;

    if (overlaySectionArrow && overlayImagesSection2) {
    overlaySectionArrow.addEventListener('click', function() {
        overlayImagesSection2.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    });
}

function resetOverlayAnimations2() {
    if (overlayLayer1_2) overlayLayer1_2.classList.remove('visible');
    if (overlayLayer2_2) overlayLayer2_2.classList.remove('visible');
    if (overlayLayer3_2) {
        overlayLayer3_2.classList.remove('visible');
        overlayLayer3_2.classList.remove('pulsing');
    }
    
    if (overlaySectionArrow2) {
        overlaySectionArrow2.classList.remove('show');
        overlaySectionArrow2.style.opacity = '0';
        overlaySectionArrow2.style.pointerEvents = 'none';
    }
    
    overlayAnimating2 = false;
}

function playOverlayAnimations2() {
    if (overlayAnimating2) return;
    overlayAnimating2 = true;
    
    setTimeout(function() {
        if (overlayLayer1_2) overlayLayer1_2.classList.add('visible');
    }, 300);
    
    setTimeout(function() {
        if (overlayLayer2_2) overlayLayer2_2.classList.add('visible');
    }, 1800);
    
    setTimeout(function() {
        if (overlayLayer3_2) overlayLayer3_2.classList.add('visible');
    }, 3300);
    
    setTimeout(function() {
        if (overlayLayer3_2) overlayLayer3_2.classList.add('pulsing');
    }, 4500);
    
    setTimeout(function() {
        if (overlaySectionArrow2) {
            overlaySectionArrow2.classList.add('show');
            overlaySectionArrow2.style.opacity = '1';
            overlaySectionArrow2.style.pointerEvents = 'auto';
            checkArrowVisibility();
        }
    }, 5000);
}

if (overlayImagesSection2 && overlayLayer1_2 && overlayLayer2_2 && overlayLayer3_2) {
    const overlayObserver2 = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                playOverlayAnimations2();
            } else {
                resetOverlayAnimations2();
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px'
    });
    
    overlayObserver2.observe(overlayImagesSection2);
}

// Arrow click navigation to verification section
if (overlaySectionArrow2) {
    overlaySectionArrow2.addEventListener('click', function() {
        const verificationSection = document.getElementById('verification-section');
        if (verificationSection) {
            console.log('Second overlay arrow clicked - scrolling to verification section');
            verificationSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            console.error('Verification section not found!');
        }
    });
}

// Add to arrow visibility check
if (overlayImagesSection2 && overlaySectionArrow2 && overlaySectionArrow2.classList.contains('show')) {
    const overlayTop2 = overlayImagesSection2.offsetTop;
    const overlayBottom2 = overlayTop2 + overlayImagesSection2.offsetHeight;
    
    const scrollY2 = window.scrollY;
    const windowHeight2 = window.innerHeight;
    const viewportMiddle2 = scrollY2 + (windowHeight2 / 2);
    
    if (viewportMiddle2 >= overlayTop2 + (windowHeight2 * 0.3) && 
        viewportMiddle2 <= overlayBottom2 - (windowHeight2 * 0.3)) {
        overlaySectionArrow2.style.opacity = '1';
        overlaySectionArrow2.style.pointerEvents = 'auto';
    } else {
        overlaySectionArrow2.style.opacity = '0';
        overlaySectionArrow2.style.pointerEvents = 'none';
    }
}
    
    console.log('=== WEBSITE INITIALIZED ===');


// =======================================================================================================================================================
// 🔒 TESTIMONIALS VERIFICATION SECTION
// =======================================================================================================================================================

const verificationSection = document.getElementById('verification-section');
const verificationMainText = document.querySelector('.verification-main-text');
const verificationRequiredText = document.querySelector('.verification-required-text');
const verificationDotContainer = document.querySelector('.verification-dot-container');
const accessGrantedContainer = document.querySelector('.access-granted-container');
const verificationArrow = document.querySelector('.verification-scroll-arrow');

if (verificationSection && verificationMainText) {
    console.log('✅ Verification section initialized');
    
    const fullText = "The following includes real life testimonials and experiences";
    let charIndex = 0;
    let hasStarted = false;
    let isVerified = false;
    
    // Lock scrolling initially when section is reached
    function lockScrolling() {
        document.body.classList.add('verification-locked');
        console.log('🔒 Scrolling locked - verification required');
    }
    
    function unlockScrolling() {
        document.body.classList.remove('verification-locked');
        console.log('🔓 Scrolling unlocked');
    }
    
    // Realistic typewriter with variable speeds and pauses
    function typeWriter() {
        if (charIndex < fullText.length) {
            const currentChar = fullText.charAt(charIndex);
            verificationMainText.textContent += currentChar;
            charIndex++;
            
            // Variable typing speed for realism
            let delay;
            
            if (currentChar === ' ') {
                // Slight pause after words
                delay = Math.random() * 100 + 50; // 50-150ms
            } else if (currentChar === ',' || currentChar === '.') {
                // Longer pause after punctuation
                delay = Math.random() * 150 + 200; // 200-350ms
            } else if (Math.random() > 0.85) {
                // Random occasional hesitation (15% chance)
                delay = Math.random() * 100 + 150; // 150-250ms
            } else {
                // Normal typing speed with slight variation
                delay = Math.random() * 60 + 40; // 40-100ms
            }
            
            setTimeout(typeWriter, delay);
        } else {
            // Typing complete - remove cursor after a pause
            setTimeout(function() {
                verificationMainText.classList.remove('typing');
                console.log('✍️ Typewriter complete');
                
                // Show "verification required" text
                setTimeout(function() {
                    if (verificationRequiredText) {
                        verificationRequiredText.classList.add('show');
                        console.log('📝 Verification required text shown');
                    }
                    
                    // Show blinking dot
                    setTimeout(function() {
                        if (verificationDotContainer) {
                            verificationDotContainer.classList.add('show');
                            console.log('🔴 Verification dot shown');
                            
                            // Lock scrolling once dot appears
                            lockScrolling();
                        }
                    }, 800);
                }, 500);
            }, 800); // Pause before removing cursor
        }
    }
    
    // Intersection Observer to start animation when section is visible
    const verificationObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting && !hasStarted) {
                hasStarted = true;
                console.log('👁️ Verification section visible - starting animation');
                
                // Brief pause before typing starts
                setTimeout(function() {
                    verificationMainText.classList.add('show', 'typing');
                    typeWriter();
                }, 300);
            }
        });
    }, {
        threshold: 0.5
    });
    
    verificationObserver.observe(verificationSection);
    
    // Dot click handler - Verification process
    if (verificationDotContainer) {
        verificationDotContainer.addEventListener('click', function() {
            if (isVerified) return;
            
            console.log('🔍 Verification dot clicked - starting verification');
            isVerified = true;
            
            // Hide the dot
            verificationDotContainer.style.opacity = '0';
            verificationDotContainer.style.pointerEvents = 'none';
            
            // Show access granted overlay
            if (accessGrantedContainer) {
                accessGrantedContainer.classList.add('active');
                
                // After 3 seconds, hide overlay and show arrow
                setTimeout(function() {
                    accessGrantedContainer.classList.remove('active');
                    accessGrantedContainer.style.display = 'none';
                    
                    // Unlock scrolling
                    unlockScrolling();
                    
                    // Show navigation arrow
                    if (verificationArrow) {
                        verificationArrow.classList.add('show');
                        console.log('⬇️ Verification arrow shown');
                    }
                }, 3000);
            }
        });
    }
    
    // Prevent scrolling past section until verified
    let scrollAttempts = 0;
    window.addEventListener('wheel', function(e) {
        if (!isVerified && document.body.classList.contains('verification-locked')) {
            const rect = verificationSection.getBoundingClientRect();
            const inSection = rect.top <= 0 && rect.bottom > window.innerHeight * 0.5;
            
            if (inSection && e.deltaY > 0) {
                e.preventDefault();
                scrollAttempts++;
                
                // Subtle hint after multiple scroll attempts
                if (scrollAttempts === 3 && verificationDotContainer) {
                    verificationDotContainer.style.transform = 'scale(1.3)';
                    setTimeout(function() {
                        verificationDotContainer.style.transform = 'scale(1)';
                    }, 200);
                }
            }
        }
    }, { passive: false });
    
    // Arrow click navigation to next section
    if (verificationArrow) {
        verificationArrow.addEventListener('click', function() {
            // Find the next section after verification
            const nextSection = verificationSection.nextElementSibling;
            if (nextSection) {
                console.log('Verification arrow clicked - scrolling to next section');
                nextSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}


// ===================================================================================================================================================================
// 🖼️ TWO IMAGES SLIDE-IN STACKED SECTION
// ===================================================================================================================================================================

const slideImagesSection = document.getElementById('slide-images-section');
const slideTitleText = document.querySelector('.slide-title-text');
const slideImg1 = document.querySelector('.slide-img-1');
const slideImg2 = document.querySelector('.slide-img-2');
const slideArrow = document.querySelector('.slide-scroll-arrow');

if (slideImagesSection && slideTitleText && slideImg1 && slideImg2) {
    console.log('✅ Slide images section initialized');
    
    const titleFullText = "What the People Say?";
    let titleCharIndex = 0;
    let hasAnimated = false;
    
    // Realistic typewriter for title
    function typeTitleWriter() {
        if (titleCharIndex < titleFullText.length) {
            const currentChar = titleFullText.charAt(titleCharIndex);
            slideTitleText.textContent += currentChar;
            titleCharIndex++;
            
            // Variable typing speed
            let delay;
            
            if (currentChar === ' ') {
                delay = Math.random() * 100 + 50; // 50-150ms
            } else if (currentChar === '?' || currentChar === ',') {
                delay = Math.random() * 150 + 200; // 200-350ms
            } else if (Math.random() > 0.85) {
                delay = Math.random() * 100 + 150; // 150-250ms
            } else {
                delay = Math.random() * 60 + 40; // 40-100ms
            }
            
            setTimeout(typeTitleWriter, delay);
        } else {
            // Typing complete - remove cursor
            setTimeout(function() {
                slideTitleText.classList.remove('typing');
                console.log('✍️ Title typewriter complete');
                
                // Start image animations after title completes
                startImageAnimations();
            }, 500);
        }
    }
    
    // Start image animations
    function startImageAnimations() {
        // First image slides in
        setTimeout(function() {
            slideImg1.classList.add('animate');
            console.log('📸 First image sliding in');
        }, 500);
        
        // Second image slides in after first completes
        setTimeout(function() {
            slideImg2.classList.add('animate');
            console.log('📸 Second image sliding in');
            
            // After second image settles, start blinking
            setTimeout(function() {
                slideImg2.classList.add('blinking');
                console.log('✨ Second image blinking started');
            }, 1800);
        }, 2300);
        
        // Show arrow after all animations complete
        setTimeout(function() {
            if (slideArrow) {
                slideArrow.classList.add('show');
                console.log('⬇️ Slide section arrow shown');
            }
        }, 5000);
    }
    
    // Intersection Observer to start animation when section is visible
    const slideObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                console.log('👁️ Slide images section visible - starting title typewriter');
                
                // Brief pause before typing starts
                setTimeout(function() {
                    slideTitleText.classList.add('show', 'typing');
                    typeTitleWriter();
                }, 300);
            }
        });
    }, {
        threshold: 0.3
    });
    
    slideObserver.observe(slideImagesSection);
    
    // Arrow click navigation to next section
    if (slideArrow) {
        slideArrow.addEventListener('click', function() {
            const nextSection = slideImagesSection.nextElementSibling;
            if (nextSection) {
                console.log('Slide arrow clicked - scrolling to next section');
                nextSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}
    
});