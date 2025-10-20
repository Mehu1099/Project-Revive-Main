/* ================================
   PROJECT .REVIVE - MAIN JAVASCRIPT
   Sangam Vihar Rehabilitation Website
   ================================ */

/* ================================
   CONTENT DATABASE
   Instructions: Replace all image paths with your actual file paths
   Keep the same structure for proper functionality
   ================================ */
const contentDatabase = {
    'existing-life': [
        // First 10 photos - Main path
        { src: 'images/existing/IMG_9273.jpg"', label: 'Housing' },
        { src: 'images/existing/photo-2.jpg', label: 'Street View 2' },
        { src: 'images/existing/photo-3.jpg', label: 'Community Space' },
        { src: 'images/existing/photo-4.jpg', label: 'Housing Conditions' },
        { src: 'images/existing/photo-5.jpg', label: 'Daily Life' },
        { src: 'images/existing/photo-6.jpg', label: 'Infrastructure' },
        { src: 'images/existing/photo-7.jpg', label: 'Commercial Area' },
        { src: 'images/existing/photo-8.jpg', label: 'Narrow Lanes' },
        { src: 'images/existing/photo-9.jpg', label: 'Water Access' },
        { src: 'images/existing/photo-10.jpg', label: 'Living Conditions' },
        // Last 2 diagrams - Secondary path (blue)
        { src: 'images/existing/diagram-1.jpg', label: 'Current Condition Diagram' },
        { src: 'images/existing/diagram-2.jpg', label: 'Developer Solution Diagram' }
    ],
    'understanding-site': [
        { src: 'images/site/location-1.jpg', label: 'Regional Context' },
        { src: 'images/site/location-2.jpg', label: 'Local Context' }
    ],
    'reality-check': [
        { src: 'images/reality/drawing-1.jpg', label: 'Current Status Analysis' },
        { src: 'images/reality/drawing-2.jpg', label: 'Resident Needs Assessment' },
        { src: 'images/reality/drawing-3.jpg', label: 'Future Requirements' }
    ],
    'masterplan': [
        { src: 'images/masterplan/plan-2d.jpg', label: '2D Masterplan' },
        { src: 'images/masterplan/plan-3d.jpg', label: '3D Axonometric View' }
    ],
    'housing': [
        // Typology 1 - Red numbers (0-6)
        { src: 'images/housing/type1-1.jpg', label: 'Typology 1 - Overview', typology: 1 },
        { src: 'images/housing/type1-2.jpg', label: 'Typology 1 - Ground Floor', typology: 1 },
        { src: 'images/housing/type1-3.jpg', label: 'Typology 1 - First Floor', typology: 1 },
        { src: 'images/housing/type1-4.jpg', label: 'Typology 1 - Section', typology: 1 },
        { src: 'images/housing/type1-5.jpg', label: 'Typology 1 - Elevation', typology: 1 },
        { src: 'images/housing/type1-6.jpg', label: 'Typology 1 - Details', typology: 1 },
        { src: 'images/housing/type1-7.jpg', label: 'Typology 1 - 3D View', typology: 1 },
        // Typology 2 - Blue numbers (7-13)
        { src: 'images/housing/type2-1.jpg', label: 'Typology 2 - Overview', typology: 2 },
        { src: 'images/housing/type2-2.jpg', label: 'Typology 2 - Ground Floor', typology: 2 },
        { src: 'images/housing/type2-3.jpg', label: 'Typology 2 - First Floor', typology: 2 },
        { src: 'images/housing/type2-4.jpg', label: 'Typology 2 - Section', typology: 2 },
        { src: 'images/housing/type2-5.jpg', label: 'Typology 2 - Elevation', typology: 2 },
        { src: 'images/housing/type2-6.jpg', label: 'Typology 2 - Details', typology: 2 },
        { src: 'images/housing/type2-7.jpg', label: 'Typology 2 - 3D View', typology: 2 },
        // Typology 3 - Green numbers (14-20)
        { src: 'images/housing/type3-1.jpg', label: 'Typology 3 - Overview', typology: 3 },
        { src: 'images/housing/type3-2.jpg', label: 'Typology 3 - Ground Floor', typology: 3 },
        { src: 'images/housing/type3-3.jpg', label: 'Typology 3 - First Floor', typology: 3 },
        { src: 'images/housing/type3-4.jpg', label: 'Typology 3 - Section', typology: 3 },
        { src: 'images/housing/type3-5.jpg', label: 'Typology 3 - Elevation', typology: 3 },
        { src: 'images/housing/type3-6.jpg', label: 'Typology 3 - Details', typology: 3 },
        { src: 'images/housing/type3-7.jpg', label: 'Typology 3 - 3D View', typology: 3 }
    ]
};

/* ================================
   VIDEO SOURCES MAPPING
   Instructions: Replace video paths with your actual file paths
   ================================ */
const videoSources = {
    'landing':'videos/Railway_Section.mp4',  // 5 second intro video
    'video1': 'videos/First_Transition.mp4',  // 34 seconds - Site tour
    'video2': 'videos/video-2.mp4',          // 9 seconds - Site tour
    'video3': 'videos/video-3.mp4'           // 45 seconds - Site tour
};

/* ================================
   CATEGORY TO SECTION INDEX MAPPING
   Instructions: Keep this mapping synchronized with your HTML sections
   Section 0 = Landing, 1-5 = Content sections
   ================================ */
const categoryToSection = {
    'existing-life': 1,
    'understanding-site': 2,
    'reality-check': 3,
    'masterplan': 4,
    'housing': 5
};

/* ================================
   CATEGORY TO VIDEO MAPPING
   Maps each category to its corresponding video
   ================================ */
const categoryToVideo = {
    'existing-life': 'video1',
    'understanding-site': 'video2',
    'reality-check': 'video2',
    'masterplan': 'video3',
    'housing': 'video3'
};

/* ====================================================================================================================================
   DOM ELEMENT REFERENCES
   ==================================================================================================================================== */
const storyMode = document.getElementById('storyMode');
const exploreMode = document.getElementById('exploreMode');
const timeline = document.getElementById('timeline');
const menu = document.getElementById('menu');
const menuTrigger = document.getElementById('menuTrigger');
const spatialCanvas = document.getElementById('spatialCanvas');
const pathNetwork = document.getElementById('pathNetwork');
const backgroundVideo = document.getElementById('backgroundVideo');
const videoOverlay = document.getElementById('videoOverlay');
const modeIndicator = document.getElementById('modeIndicator');
const exitExplore = document.getElementById('exitExplore');
const navHint = document.getElementById('navHint');
const pathToggle = document.getElementById('pathToggle');
const videoToggle = document.getElementById('videoToggle');
const modeChoiceModal = document.getElementById('modeChoiceModal');
const modalOverlay = document.getElementById('modalOverlay');
const viewStoryBtn = document.getElementById('viewStoryBtn');
const viewExploreBtn = document.getElementById('viewExploreBtn');
const menuItems = document.querySelectorAll('.menu-item');
const timelineSegments = document.querySelectorAll('.timeline-segment');
const storySections = document.querySelectorAll('.story-section');

/* ================================
   STATE MANAGEMENT
   ================================ */
let currentMode = 'story'; // 'story' or 'explore'
let currentCategory = null;
let activeItems = [];
let focusedItem = null;
let currentScrollPosition = 0;
let currentSectionIndex = 0;
let showPath = false;
let videoMode = false;
let viewedItems = new Set();
let pendingSection = null;

/* ================================
   MENU TRIGGER FUNCTIONALITY
   ================================ */
menuTrigger.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuTrigger.classList.toggle('active');
});

/* ================================
   VIDEO TRANSITIONS
   ================================ */
function changeVideo(videoKey) {
    if (videoSources[videoKey]) {
        backgroundVideo.src = videoSources[videoKey];
        backgroundVideo.play();
    }
}

// Monitor scroll position and change videos
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking && currentMode === 'story') {
        window.requestAnimationFrame(() => {
            updateCurrentSection();
            ticking = false;
        });
        ticking = true;
    }
});

function updateCurrentSection() {
    const scrollPosition = window.scrollY;
    const landingHeight = storySections[0].offsetHeight;
    
    // Show/hide mode indicator and menu trigger based on scroll position
    if (scrollPosition > landingHeight * 0.3) {
        modeIndicator.classList.add('visible');
        menuTrigger.classList.add('visible');
    } else {
        modeIndicator.classList.remove('visible');
        menuTrigger.classList.remove('visible');
    }
    
    storySections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            const videoKey = section.getAttribute('data-video');
            if (videoKey && backgroundVideo.src.indexOf(videoSources[videoKey]) === -1) {
                changeVideo(videoKey);
            }
            currentSectionIndex = index;
            updateTimelineProgress();
        }
    });
}

function updateTimelineProgress() {
    timelineSegments.forEach((seg, index) => {
        seg.classList.toggle('current', index === currentSectionIndex);
    });
}


/* ====================================================================================================================================
   EXPLORE SECTION FROM STORY MODE
   Called from HTML button onclick
   ==================================================================================================================================== */
function exploreSectionFromStory(category) {
    menuItems.forEach(item => {
        if (item.getAttribute('data-category') === category) {
            item.classList.add('active');
        }
    });
    enterExploreMode(category);
}


/* =================================================================================================================================
   MODE SWITCHING - STORY <-> EXPLORE
   ================================================================================================================================= */
function enterExploreMode(category) {
    currentMode = 'explore';
    currentCategory = category;
    currentScrollPosition = window.scrollY;
    
    // Change video to match the category
    const videoKey = categoryToVideo[category];
    if (videoKey) {
        changeVideo(videoKey);
    }



    // Update timeline to highlight current section
    const sectionIndex = categoryToSection[category];
    if (sectionIndex !== undefined) {
        currentSectionIndex = sectionIndex;
        updateTimelineProgress();
    }

    storyMode.classList.add('compressed');
    exploreMode.classList.add('active');
    timeline.classList.add('active');
    videoOverlay.classList.add('dimmed');
    modeIndicator.textContent = 'Explore Mode';
    exitExplore.classList.add('active');
    pathToggle.style.display = 'block';
    videoToggle.style.display = 'block';
    menu.classList.remove('active');
    menuTrigger.classList.remove('active');

    document.body.style.overflow = 'hidden';

    // Show navigation hint
    setTimeout(() => {
        navHint.classList.add('show');
        setTimeout(() => navHint.classList.remove('show'), 4000);
    }, 500);

    loadSpatialContent(category);
}

function exitExploreMode() {
    currentMode = 'story';
    currentCategory = null;
    focusedItem = null;
    viewedItems.clear();
    showPath = false;
    videoMode = false;
    pathToggle.classList.remove('active');
    pathToggle.textContent = '📍 Show Suggested Path';
    videoToggle.classList.remove('active');
    videoToggle.textContent = '🎥 Watch Video';
    videoToggle.style.display = 'none';

    menuItems.forEach(item => item.classList.remove('active'));

    storyMode.classList.remove('compressed');
    exploreMode.classList.remove('active');
    timeline.classList.remove('active');
    videoOverlay.classList.remove('dimmed');
    videoOverlay.classList.remove('focused');
    modeIndicator.textContent = 'Story Mode';
    exitExplore.classList.remove('active');
    pathToggle.style.display = 'none';

    document.body.style.overflow = '';
    window.scrollTo(0, currentScrollPosition);

    spatialCanvas.innerHTML = '';
    pathNetwork.innerHTML = '';
    activeItems = [];
}


/* ========================================================================================================================
   SPATIAL CONTENT LOADING
   This is the core function that arranges images in explore mode
   ======================================================================================================================== */
function loadSpatialContent(category) {
    spatialCanvas.innerHTML = '';
    pathNetwork.innerHTML = '';
    activeItems = [];

    const items = contentDatabase[category];
    if (!items) return;

    let positions;
    let secondaryPositions = [];
    let hasSecondaryPath = false;
    
    // Determine layout based on category
    if (category === 'housing') {
        // Housing: Three clusters for path mode, scattered for free explore
        if (showPath) {
            positions = generateClusteredPath(items);
        } else {
            positions = generateScatteredHousingPath(items);
        }
    } else if (category === 'existing-life') {
        // Existing life: Main path for photos, secondary path for diagrams
        const mainItems = items.slice(0, 10);
        const secondaryItems = items.slice(10, 12);
        positions = generateFlowingPath(mainItems.length);
        secondaryPositions = generateSecondaryPath(secondaryItems.length);
        hasSecondaryPath = true;
    } else {
        // Small categories: Center the thumbnails in path mode, scatter in free mode
        if (showPath) {
            positions = generateCenteredPath(items.length);
        } else {
            positions = generateScatteredPath(items.length);
        }
    }


    // Draw path first if in path mode
    if (showPath) {
        // Draw main path
        const mainPositions = category === 'existing-life' ? positions : positions;
        drawPathNetwork(mainPositions, false);
        
        // Draw secondary path for diagrams if needed
        if (hasSecondaryPath && category === 'existing-life') {
            drawPathNetwork(secondaryPositions, true);
        }
        
        if (category === 'housing') {
            addClusterLabels();
        }
    }

    // Create items
    items.forEach((item, index) => {
        const contentItem = document.createElement('div');
        contentItem.className = showPath ? 'content-item thumbnail' : 'content-item scattered';
        contentItem.dataset.index = index;
        
        // Add fade-in class only if not in path mode
        if (!showPath) {
            contentItem.classList.add('fade-in');
        }
        
        if (index === 0 && !showPath) {
            contentItem.classList.add('suggested-next');
        }

        // Add typology class for housing numbers
        let typologyClass = '';
        if (category === 'housing' && item.typology) {
            typologyClass = ` typology-${item.typology}`;
        }

        contentItem.innerHTML = `
            <div class="item-number${typologyClass}">${index + 1}</div>
            <img src="${item.src}" alt="${item.label}">
            <div class="item-label">${item.label}</div>
        `;

        // Position items
        let itemPosition;
        if (category === 'existing-life' && index >= 10 && hasSecondaryPath) {
            itemPosition = secondaryPositions[index - 10];
        } else {
            itemPosition = positions[index];
        }

        contentItem.style.left = itemPosition.x + '%';
        contentItem.style.top = itemPosition.y + '%';
        
        // Store original position
        contentItem.dataset.originalX = itemPosition.x;
        contentItem.dataset.originalY = itemPosition.y;
        
        if (showPath) {
            // Start hidden for animation
            contentItem.style.opacity = '0';
            contentItem.style.transform = 'scale(0.3)';
        } else {
            contentItem.style.opacity = '0';
            contentItem.style.transform = 'scale(0.5) rotate(' + (Math.random() * 20 - 10) + 'deg)';
        }

        contentItem.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!videoMode) {
                focusItem(contentItem, index);
            }
        });

        spatialCanvas.appendChild(contentItem);
        activeItems.push(contentItem);

        // Animate in
        if (showPath) {
            // Sequential animation for path mode
            setTimeout(() => {
                contentItem.style.opacity = '0.6';
                contentItem.style.transform = 'scale(1)';
            }, index * 100);
        } else {
            // Original animation for scattered mode
            setTimeout(() => {
                contentItem.style.opacity = '0.3'; // Start transparent
                contentItem.style.transform = 'scale(1) rotate(0deg)';
            }, index * 60);
        }
    });
}



/* ====================================================================================================================================
   PATH GENERATION FUNCTIONS
   ==================================================================================================================================== */

// Flowing S-curve path for standard categories
function generateFlowingPath(count) {
    const positions = [];
    const startX = 12;
    const startY = 25;
    const endX = 80;
    const endY = 60;
    
    for (let i = 0; i < count; i++) {
        const progress = i / (count - 1);
        const curveOffset = Math.sin(progress * Math.PI * 2) * 10;
        
        positions.push({
            x: startX + (endX - startX) * progress,
            y: startY + (endY - startY) * progress + curveOffset
        });
    }
    return positions;
}

// Centered horizontal line for small categories
function generateCenteredPath(count) {
    const positions = [];
    const centerX = 50;
    const centerY = 45;
    const spacing = 12; // Horizontal spacing between items
    const startX = centerX - ((count - 1) * spacing / 2);
    
    for (let i = 0; i < count; i++) {
        positions.push({
            x: Math.max(8, Math.min(92, startX + (i * spacing))),
            y: centerY
        });
    }
    return positions;
}


// Secondary path for diagrams (top right)
function generateSecondaryPath(count) {
    const positions = [];
    const startX = 68;
    const startY = 20;
    
    for (let i = 0; i < count; i++) {
        positions.push({
            x: Math.min(88, startX + (i * 12)),
            y: startY
        });
    }
    return positions;
}


// Clustered circular paths for housing typologies
function generateClusteredPath(items) {
    const positions = [];
    const clusterStarts = [
        { x: 20, y: 45 },  // Typology 1 - Left (adjusted)
        { x: 50, y: 45 },  // Typology 2 - Center (adjusted)
        { x: 80, y: 45 }   // Typology 3 - Right (adjusted)
    ];

    items.forEach((item, index) => {
        const typology = item.typology - 1;
        const posInCluster = index % 7;
        const cluster = clusterStarts[typology];
        
        const angle = (posInCluster / 7) * Math.PI * 2;
        const radius = 5 + posInCluster * 1.5; // Reduced radius to keep items in viewport
        
        positions.push({
            x: Math.max(8, Math.min(92, cluster.x + Math.cos(angle) * radius)), // Clamped between 8% and 92%
            y: Math.max(15, Math.min(75, cluster.y + Math.sin(angle) * radius))  // Clamped between 15% and 75%
        });
    });
    

    return positions;
}


// Random scattered positioning for housing (centered on viewport)
function generateScatteredHousingPath(items) {
    const positions = [];
    const centerX = 50;
    const centerY = 50;
    const maxSpreadX = 35; // How far from center horizontally
    const maxSpreadY = 25; // How far from center vertically
    
    items.forEach((item, index) => {
        // Generate random position centered around middle of viewport
        const randomX = centerX + (Math.random() - 0.5) * maxSpreadX * 2;
        const randomY = centerY + (Math.random() - 0.5) * maxSpreadY * 2;
        
        positions.push({
            x: Math.max(10, Math.min(90, randomX)), // Clamped between 10% and 90%
            y: Math.max(20, Math.min(80, randomY))  // Clamped between 20% and 80%
        });
    });
    
    return positions;
}


// Random scattered positioning for all categories (centered)
function generateScatteredPath(count) {
    const positions = [];
    const centerX = 50;
    const centerY = 50;
    const maxSpreadX = 35;
    const maxSpreadY = 25;
    
    for (let i = 0; i < count; i++) {
        const randomX = centerX + (Math.random() - 0.5) * maxSpreadX * 2;
        const randomY = centerY + (Math.random() - 0.5) * maxSpreadY * 2;
        
        positions.push({
            x: Math.max(10, Math.min(90, randomX)),
            y: Math.max(20, Math.min(80, randomY))
        });
    }
    
    return positions;
}



/* ==================================================================================================================================
   PATH NETWORK DRAWING
   ================================================================================================================================== */
function drawPathNetwork(positions, isSecondary = false) {
    // Set SVG viewBox if not already set
    if (!pathNetwork.getAttribute('viewBox')) {
        pathNetwork.setAttribute('viewBox', '0 0 100 100');
        pathNetwork.setAttribute('preserveAspectRatio', 'none');
    }
    
    // Draw lines only (no nodes)
    for (let i = 0; i < positions.length - 1; i++) {
        const start = positions[i];
        const end = positions[i + 1];
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const d = `M ${start.x} ${start.y} L ${end.x} ${end.y}`;
        path.setAttribute('d', d);
        path.setAttribute('class', isSecondary ? 'path-line visible secondary' : 'path-line visible');
        path.setAttribute('vector-effect', 'non-scaling-stroke');
        pathNetwork.appendChild(path);
    }
}

// Add cluster labels for housing typologies
function addClusterLabels() {
    const labels = ['Typology 1', 'Typology 2', 'Typology 3'];
    const positions = [
        { x: '18%', y: '12%' },
        { x: '50%', y: '12%' },
        { x: '82%', y: '12%' }
    ];

    labels.forEach((label, index) => {
        const clusterLabel = document.createElement('div');
        clusterLabel.className = 'cluster-label';
        clusterLabel.textContent = label;
        clusterLabel.style.left = positions[index].x;
        clusterLabel.style.top = positions[index].y;
        clusterLabel.style.transform = 'translateX(-50%)';
        spatialCanvas.appendChild(clusterLabel);
    });
}



/* ===================================================================================================================================
   ITEM FOCUS AND RESET
   =================================================================================================================================== */
function focusItem(selectedItem, index) {
    if (videoMode) return; // Don't focus in video mode
    
    focusedItem = selectedItem;
    videoOverlay.classList.add('focused');
    viewedItems.add(index);

    // Hide path lines when focusing
    if (showPath) {
        pathNetwork.classList.add('hide-paths');
    }

    activeItems.forEach((item, i) => {
        item.classList.remove('suggested-next');
        item.classList.remove('fade-in'); // Remove fade animation
        if (item === selectedItem) {
            item.className = 'content-item front';
            item.style.opacity = '1'; // Fully visible when focused
        } else {
            item.className = showPath ? 'content-item thumbnail' : 'content-item scattered';
            item.style.opacity = '0.3'; // Dim other items
        }
    });

    // Suggest next
    if (!showPath) {
        const nextIndex = index + 1;
        if (nextIndex < activeItems.length && !viewedItems.has(nextIndex)) {
            activeItems[nextIndex].classList.add('suggested-next');
        }
    }
}

function resetItems() {
    if (!focusedItem) return;
    
    focusedItem = null;
    videoOverlay.classList.remove('focused');

    // Show path lines again
    if (showPath) {
        pathNetwork.classList.remove('hide-paths');
    }

    activeItems.forEach((item, i) => {
        item.classList.remove('fade-in'); // Remove fade animation
        item.className = showPath ? 'content-item thumbnail' : 'content-item scattered';
        item.style.opacity = '0.6'; // Return to normal visibility
    });

    if (!showPath) {
        for (let i = 0; i < activeItems.length; i++) {
            if (!viewedItems.has(i)) {
                activeItems[i].classList.add('suggested-next');
                break;
            }
        }
    }
}


// Click empty space to reset
spatialCanvas.addEventListener('click', (e) => {
    if (e.target === spatialCanvas) {
        if (videoMode) {
            videoMode = false;
            videoToggle.classList.remove('active');
            videoToggle.textContent = '🎥 Watch Video';
            exitVideoMode();
        } else {
            resetItems();
        }
    }
});




/* ===============================================================================================================================================================
   PATH TOGGLE FUNCTIONALITY
   =============================================================================================================================================================== */
pathToggle.addEventListener('click', () => {
    showPath = !showPath;
    pathToggle.classList.toggle('active');
    pathToggle.textContent = showPath ? '📍 Hide Path' : '📍 Show Suggested Path';
    
    if (currentCategory) {
        loadSpatialContent(currentCategory);
    }
});





/* =================================================================================================================================================================
   VIDEO WATCH MODE
   ================================================================================================================================================================= */
videoToggle.addEventListener('click', () => {
    videoMode = !videoMode;
    videoToggle.classList.toggle('active');
    videoToggle.textContent = videoMode ? '📸 Show Content' : '🎥 Watch Video';
    
    if (videoMode) {
        enterVideoMode();
    } else {
        exitVideoMode();
    }
});

function enterVideoMode() {
    videoOverlay.classList.remove('dimmed');
    videoOverlay.classList.remove('focused');
    videoOverlay.classList.add('video-watch-mode');
    
    // Hide path lines in video mode
    if (showPath) {
        pathNetwork.classList.add('hide-paths');
    }
    
    activeItems.forEach((item, index) => {
        item.classList.add('edge-mode');
        
        // Move to edges
        const isLeft = index % 2 === 0;
        const edgeX = isLeft ? 5 : 95;
        const edgeY = 10 + (index * 8) % 70;
        
        item.style.left = edgeX + '%';
        item.style.top = edgeY + '%';
    });
}

function exitVideoMode() {
    videoOverlay.classList.remove('video-watch-mode');
    videoOverlay.classList.add('dimmed');
    
    // Show path lines again if path mode is active
    if (showPath) {
        pathNetwork.classList.remove('hide-paths');
    }
    
    activeItems.forEach((item, index) => {
        item.classList.remove('edge-mode');
        
        // Return to original position
        const originalX = item.dataset.originalX;
        const originalY = item.dataset.originalY;
        
        item.style.left = originalX + '%';
        item.style.top = originalY + '%';
        
        // Restore proper opacity
        setTimeout(() => {
            item.style.opacity = '0.6';
        }, 100);
    });
}




/* =============================================================================================================================================================
   MENU INTERACTIONS
   ============================================================================================================================================================== */
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const category = item.getAttribute('data-category');
        
        menuItems.forEach(mi => mi.classList.remove('active'));
        item.classList.add('active');

        if (currentMode === 'story') {
            enterExploreMode(category);
        } else {
            // Update timeline when switching categories in explore mode
            const sectionIndex = categoryToSection[category];
            if (sectionIndex !== undefined) {
                currentSectionIndex = sectionIndex;
                updateTimelineProgress();
            }
            
            // Change video to match the new category
            const videoKey = categoryToVideo[category];
            if (videoKey) {
                changeVideo(videoKey);
            }
            
            loadSpatialContent(category);
            currentCategory = category;
            resetItems();
            viewedItems.clear();
        }
    });
});



// Exit explore button
exitExplore.addEventListener('click', exitExploreMode);



/* ========================================================================================================================================
   TIMELINE INTERACTIONS
   ====================================================================================================================================== */
timelineSegments.forEach(segment => {
    segment.addEventListener('click', () => {
        const sectionIndex = parseInt(segment.getAttribute('data-section'));
        pendingSection = sectionIndex;
        
        if (currentMode === 'explore') {
            // Show modal asking how to view
            modeChoiceModal.classList.add('show');
            modalOverlay.classList.add('show');
        } else {
            // Direct navigation in story mode
            storySections[sectionIndex].scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Modal button handlers
viewStoryBtn.addEventListener('click', () => {
    modeChoiceModal.classList.remove('show');
    modalOverlay.classList.remove('show');
    exitExploreMode();
    setTimeout(() => {
        storySections[pendingSection].scrollIntoView({ behavior: 'smooth' });
    }, 100);
});

viewExploreBtn.addEventListener('click', () => {
    modeChoiceModal.classList.remove('show');
    modalOverlay.classList.remove('show');
    
    // Find category for this section
    const section = storySections[pendingSection];
    const category = section.getAttribute('data-category');
    
    if (category) {
        // Update timeline to match the section we're exploring
        currentSectionIndex = pendingSection;
        updateTimelineProgress();
        
        menuItems.forEach(item => {
            if (item.getAttribute('data-category') === category) {
                item.click();
            }
        });
    }
});

// Close modal when clicking overlay
modalOverlay.addEventListener('click', () => {
    modeChoiceModal.classList.remove('show');
    modalOverlay.classList.remove('show');
});



/* ==============================================================================================================================
   KEYBOARD SHORTCUTS
   ============================================================================================================================== */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && currentMode === 'explore') {
        if (focusedItem) {
            resetItems();
        } else {
            exitExploreMode();
        }
    }
});


/* ================================================================================================================================
   INITIALIZATION
   ================================================================================================================================ */
window.addEventListener('load', () => {
    updateCurrentSection();
    // Ensure mode indicator and menu are hidden on load
    modeIndicator.classList.remove('visible');
    menuTrigger.classList.remove('visible');
});