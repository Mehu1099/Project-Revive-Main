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
        { src: 'images/existing/IMG_9273.jpg', label: 'Housing' },
        { src: 'images/existing/IMG_9303.jpg', label: 'Street View' },
        { src: 'images/existing/IMG_9316.jpg', label: 'Street View' },
        { src: 'images/existing/IMG_9346.jpg', label: 'Street View' },
        { src: 'images/existing/IMG_9372.jpg', label: 'Building Exterior' },
        { src: 'images/existing/IMG_9380.jpg', label: 'Retail Shop' },
        { src: 'images/existing/IMG_9297.jpg', label: 'People-Construction' },
        { src: 'images/existing/IMG_9305.jpg', label: 'People-Houshold' },
        { src: 'images/existing/IMG_9340.jpg', label: 'People-Retail' },
        { src: 'images/existing/IMG_9359.jpg"', label: 'Young Life' },
        // Last 2 diagrams - Secondary path (blue)
        { src: 'images/existing/Current_Condition.png"', label: 'Existing Condition' },
        { src: 'images/existing/Most_Common_Proposal_Massing.png', label: 'Developer Solution Diagram' }
    ],
    'understanding-site': [
        { src: 'images/site/Zoomed_Out_Map.png', label: 'Zoomed-out Context' },
        { src: 'images/site/Zoomed-in_Important_landmarks.png', label: 'Zoomed-in Context' }
    ],
    'reality-check': [
        { src: 'images/reality/existing_plan.png', label: 'Existing Plan' },
        { src: 'images/reality/existing_axon.png', label: 'Site Cluster Axonomteric' },
        { src: 'images/reality/testimonials_residents.png', label: 'Resident Testimonials' }
    ],
    'masterplan': [
        { src: 'images/masterplan/masterplan-2D.png"', label: 'Masterplan' },
        { src: 'images/masterplan/masterplan-axon.png"', label: 'Masterplan Axonometric' }
    ],
    'housing': [
        // Typology 1 - Red numbers (0-6)
        { src: 'images/housing/typology1-in-context.png', label: 'Typology 1 - In Context', typology: 1 },
        { src: 'images/housing/typology-1-PublicSphere.png', label: 'Typology 1 - Public Sphere', typology: 1 },
        { src: 'images/housing/typology-1-PrivateSphere.png', label: 'Typology 1 - Private Sphere', typology: 1 },
        { src: 'images/housing/typology-1-arcade.png"', label: 'Typology 1 - Arcade Level', typology: 1 },
        { src: 'images/housing/typology-1-sharedcorridor.png"', label: 'Typology 1 - Shared Corridor', typology: 1 },
        { src: 'images/housing/typology-1-community-rooftop.png', label: 'Typology 1 - Community Rooftop', typology: 1 },
        { src: 'images/housing/typology-1-real-life-context.png', label: 'Typology 1 - Real Life', typology: 1 },
        // Typology 2 - Blue numbers (7-13)
        { src: 'images/housing/typology2-in-context.png', label: 'Typology 2 - In Context', typology: 2 },
        { src: 'images/housing/typology-2-PublicSphere.png', label: 'Typology 2 - Public Sphere', typology: 2 },
        { src: 'images/housing/typology-2-PrivateSphere.png', label: 'Typology 2 - Private Sphere', typology: 2 },
        { src: 'images/housing/typology-2-arcade.png', label: 'Typology 2 - Arcade Level', typology: 2 },
        { src: 'images/housing/typology-2-sharedcorridor.png', label: 'Typology 2 - Shared Corridor', typology: 2 },
        { src: 'images/housing/typology-2-community-rooftop.png', label: 'Typology 2 - Community Rooftop', typology: 2 },
        { src: 'images/housing/typology-2-real-life-context.png', label: 'Typology 2 - Real Life', typology: 2 },
        // Typology 3 - Green numbers (14-20)
        { src: 'images/housing/typology3-in-context.png', label: 'Typology 3 - In Context', typology: 3 },
        { src: 'images/housing/typology-3-PublicSphere.png', label: 'Typology 3 - Public Sphere', typology: 3 },
        { src: 'images/housing/typology-3-PrivateSphere.png', label: 'Typology 3 - Private Sphere', typology: 3 },
        { src: 'images/housing/typology-3-courtyard.png', label: 'Typology 3 - Courtyard Level', typology: 3 },
        { src: 'images/housing/typology-3-sharedcorridor.png', label: 'Typology 3 - Shared Corridor', typology: 3 },
        { src: 'images/housing/typology-3-community-rooftop.png', label: 'Typology 3 - Community Rooftop', typology: 3 },
        { src: 'images/housing/typology-3-real-life-context.png', label: 'Typology 3 - Real Life', typology: 3 }
    ]
};

/* ========================================================================================================================================
   VIDEO SOURCES MAPPING
   Instructions: Replace video paths with your actual file paths
   ======================================================================================================================================== */
const videoSources = {
    'landing':'videos/Railway_Section.mp4',             // 5 second intro video
    'video1': 'videos/First_Transition.mp4',           // 34 seconds - Site tour
    'video2': 'videos/Fourth_Transition.mp4',         // 9 seconds - Site tour
    'video3': 'videos/Second_transition.mp4'         // 45 seconds - Site tour
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
    } else {
        // Show cluster labels for housing even in scattered mode
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

        // Set dynamic z-index based on vertical position (items lower on screen appear on top)
        if (!showPath) {
            const baseZIndex = 15 + Math.floor(itemPosition.y / 2);
            contentItem.style.zIndex = baseZIndex;
        }
        
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
                // Bring item forward immediately on click
                contentItem.style.zIndex = '150';
                focusItem(contentItem, index);
            }
        });
        
        // Also bring forward on mouseenter for better accessibility
        contentItem.addEventListener('mouseenter', () => {
            if (!focusedItem && !videoMode) {
                contentItem.style.zIndex = '100';
            }
        });
        
        contentItem.addEventListener('mouseleave', () => {
            if (!focusedItem && !videoMode && !showPath) {
                // Reset to position-based z-index
                const baseZIndex = 15 + Math.floor(itemPosition.y / 2);
                contentItem.style.zIndex = baseZIndex;
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


// Random scattered positioning for housing (grouped by typology with collision avoidance)
function generateScatteredHousingPath(items) {
    const positions = [];
    
    // Define cluster centers for each typology in scattered mode
    const clusterCenters = [
        { x: 20, y: 48 },  // Typology 1 - Left region
        { x: 50, y: 48 },  // Typology 2 - Center region
        { x: 80, y: 48 }   // Typology 3 - Right region
    ];
    
    // Counter for items per typology
    const typologyCounts = [0, 0, 0];
    
    items.forEach((item, index) => {
        const typology = item.typology - 1; // 0, 1, or 2
        const cluster = clusterCenters[typology];
        const itemInTypology = typologyCounts[typology];
        typologyCounts[typology]++;
        
        if (itemInTypology === 0) {
            // First item of each typology - center of cluster
            positions.push({
                x: cluster.x,
                y: cluster.y
            });
        } else {
            // Arrange remaining items in expanding spiral pattern with more spacing
            const angle = (itemInTypology * 2.8) + (typology * 0.7); // More staggered angles
            const radius = 8 + (itemInTypology * 2.8); // Larger expanding radius for more space
            
            const offsetX = Math.cos(angle) * radius;
            const offsetY = Math.sin(angle) * radius * 0.8; // Slightly flatter vertically
            
            let finalX = cluster.x + offsetX;
            let finalY = cluster.y + offsetY;
            
            // Ensure within safe bounds with extra margin
            finalX = Math.max(13, Math.min(87, finalX));
            finalY = Math.max(28, Math.min(68, finalY));
            
            positions.push({
                x: finalX,
                y: finalY
            });
        }
    });
    
    return positions;
}


// Check if position overlaps with existing positions
function isPositionValid(newPos, existingPositions, minDistance = 15) {
    for (let pos of existingPositions) {
        const dx = newPos.x - pos.x;
        const dy = newPos.y - pos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < minDistance) {
            return false;
        }
    }
    return true;
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
    const positions = showPath ? 
        // Positions for path mode
        [
            { x: '20%', y: '12%' },
            { x: '50%', y: '12%' },
            { x: '80%', y: '12%' }
        ] :
        // Positions for scattered mode
        [
            { x: '22%', y: '15%' },
            { x: '50%', y: '15%' },
            { x: '78%', y: '15%' }
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
        item.classList.remove('fade-in');
        item.className = showPath ? 'content-item thumbnail' : 'content-item scattered';
        item.style.opacity = '0.7';
        
        // Reset z-index for scattered items
        if (!showPath) {
            const originalY = parseFloat(item.dataset.originalY);
            const baseZIndex = 15 + Math.floor(originalY / 2);
            item.style.zIndex = baseZIndex;
        }
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



/* ====================================================================================================================================================
   KEYBOARD SHORTCUTS
   ==================================================================================================================================================== */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && currentMode === 'explore') {
        if (focusedItem) {
            resetItems();
        } else {
            exitExploreMode();
        }
    }
});


/* ===================================================================================================================================================
   INITIALIZATION
   =================================================================================================================================================== */
window.addEventListener('load', () => {
    updateCurrentSection();
    // Ensure mode indicator and menu are hidden on load
    modeIndicator.classList.remove('visible');
    menuTrigger.classList.remove('visible');
    
    // Lock scrolling until landing page animations complete
    document.body.classList.add('scroll-locked');
    
    // Unlock scrolling after all animations complete (13.5s total)
    setTimeout(() => {
        document.body.classList.remove('scroll-locked');
        // Scroll indicator animation continues from CSS
    }, 13500); // 13.5 seconds - when all animations complete
});



/* ===================================================================================================================================================
   SCROLL LOCK ON LANDING PAGE
   Prevents all scroll attempts during landing animations
   =================================================================================================================================================== */
function preventScroll(e) {
    if (document.body.classList.contains('scroll-locked')) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
}

// Prevent mouse wheel scrolling
window.addEventListener('wheel', preventScroll, { passive: false });

// Prevent touch scrolling on mobile
window.addEventListener('touchmove', preventScroll, { passive: false });

// Prevent keyboard scrolling (arrow keys, space, page up/down)
window.addEventListener('keydown', (e) => {
    if (document.body.classList.contains('scroll-locked')) {
        const scrollKeys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '];
        if (scrollKeys.includes(e.key)) {
            e.preventDefault();
            return false;
        }
    }
});