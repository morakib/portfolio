let currentPage = 'home';
let isZoomed = false;
let systemPowered = true;
let currentProjectIndex = 0;
let projectItems = [];

// Power button functionality
function togglePower() {
    const powerButton = document.getElementById('powerButton');
    const screenContent = document.getElementById('screenContent');
    const shutdownScreen = document.getElementById('shutdownScreen');
    const bootSequence = document.getElementById('bootSequence');
    
    if (systemPowered) {
        // Shutdown sequence
        systemPowered = false;
        powerButton.classList.add('off');
        
        // Show shutdown screen
        shutdownScreen.classList.add('active');
        
        // Hide shutdown screen after 2 seconds and turn off completely
        setTimeout(() => {
            shutdownScreen.classList.remove('active');
            screenContent.style.display = 'none';
        }, 2000);
        
    } else {
        // Boot sequence
        systemPowered = true;
        powerButton.classList.remove('off');
        
        // Show boot sequence
        bootSequence.classList.add('active');
        
        // Animate boot lines
        const bootLines = bootSequence.querySelectorAll('.boot-line');
        bootLines.forEach((line, index) => {
            setTimeout(() => {
                line.style.animationDelay = `${index * 0.5}s`;
            }, index * 500);
        });
        
        // After boot sequence, show main screen
        setTimeout(() => {
            bootSequence.classList.remove('active');
            screenContent.style.display = 'block';
            
            // Reset to home page
            if (isZoomed) {
                document.getElementById('desktopContainer').classList.remove('fullscreen');
                isZoomed = false;
            }
            
            document.querySelectorAll('.page-content').forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById('home').classList.add('active');
            currentPage = 'home';
        }, 4000);
    }
}

// Navigation function
function navigateToPage(pageId) {
    if (!systemPowered) return; // Prevent navigation when system is off
    if (isZoomed && pageId === currentPage) return;
    
    // Hide all pages
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show target page
    document.getElementById(pageId).classList.add('active');
    currentPage = pageId;
    
    // Initialize project navigation if entering projects page
    if (pageId === 'projects') {
        initializeProjectNavigation();
    }
    
    // Enter fullscreen mode
    if (!isZoomed) {
        document.getElementById('desktopContainer').classList.add('fullscreen');
        isZoomed = true;
    }
}

// Initialize project navigation
function initializeProjectNavigation() {
    projectItems = Array.from(document.querySelectorAll('.project-item'));
    currentProjectIndex = 0;
    updateProjectFocus();
}

// Update project focus
function updateProjectFocus() {
    projectItems.forEach((item, index) => {
        if (index === currentProjectIndex) {
            item.classList.add('focused');
        } else {
            item.classList.remove('focused');
        }
    });
}

// Navigate projects with keyboard
function navigateProjects(direction) {
    if (projectItems.length === 0) return;
    
    // Remove current focus
    projectItems[currentProjectIndex].classList.remove('focused');
    
    // Update index
    if (direction === 'up') {
        currentProjectIndex = currentProjectIndex > 0 ? currentProjectIndex - 1 : projectItems.length - 1;
    } else if (direction === 'down') {
        currentProjectIndex = currentProjectIndex < projectItems.length - 1 ? currentProjectIndex + 1 : 0;
    }
    
    // Update focus
    updateProjectFocus();
    
    // Scroll focused item into view
    projectItems[currentProjectIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}

// Activate current project
function activateCurrentProject() {
    if (projectItems.length > 0 && currentProjectIndex < projectItems.length) {
        projectItems[currentProjectIndex].click();
    }
}

// Go back function
function goBack() {
    if (!systemPowered) return; // Prevent navigation when system is off
    if (isZoomed) {
        document.getElementById('desktopContainer').classList.remove('fullscreen');
        isZoomed = false;
        
        // After zoom out animation, show home page
        setTimeout(() => {
            document.querySelectorAll('.page-content').forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById('home').classList.add('active');
            currentPage = 'home';
        }, 800);
    }
}

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add power button event listener
    document.getElementById('powerButton').addEventListener('click', togglePower);
    
    // Add touch support for mobile
    document.getElementById('powerButton').addEventListener('touchstart', function(e) {
        e.preventDefault();
        togglePower();
    });
    
    // Add keyboard support
    document.addEventListener('keydown', function(e) {
        if (!systemPowered) return; // Prevent keyboard navigation when system is off
        
        const key = e.key.toLowerCase();
        const keyMap = {
            'h': 'home',
            'p': 'projects',
            'a': 'about',
            'c': 'contact',
            'r': 'resume',
            'escape': 'back'
        };
        
        // Handle project navigation
        if (currentPage === 'projects' && isZoomed) {
            if (key === 'arrowup') {
                e.preventDefault();
                navigateProjects('up');
                return;
            } else if (key === 'arrowdown') {
                e.preventDefault();
                navigateProjects('down');
                return;
            } else if (key === 'enter') {
                e.preventDefault();
                activateCurrentProject();
                return;
            }
        }
        
        if (keyMap[key]) {
            e.preventDefault();
            if (key === 'escape') {
                goBack();
            } else {
                navigateToPage(keyMap[key]);
            }
        }
    });
    
// Project links modal
function showProjectModal(projectName, links) {
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${projectName}</h3>
                <button class="modal-close" onclick="closeModal()">[X]</button>
            </div>
            <div class="modal-body">
                <div class="project-links">
                    ${links.map(link => `
                        <a href="${link.url}" target="_blank" class="project-link">
                            <span class="link-icon">[${link.icon}]</span>
                            <span class="link-text">${link.text}</span>
                        </a>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

function closeModal() {
    const modal = document.querySelector('.project-modal');
    if (modal) {
        modal.remove();
    }
}

// Project item interactions
    document.querySelectorAll('.project-item').forEach((item, index) => {
        item.addEventListener('click', function() {
            const projectTitle = this.querySelector('strong').textContent;
            
            // Handle specific projects with their respective links
            if (projectTitle.includes('SWORD')) {
                showProjectModal('SWORD - Word Game', [
                    {
                        icon: 'CODE',
                        text: 'View Source Code',
                        url: 'https://github.com/morakib/sWORD/blob/main/README.md'
                    },
                    {
                        icon: 'PLAY',
                        text: 'Play Game',
                        url: 'https://sword-a6b9.onrender.com/'
                    }
                ]);
            } else if (projectTitle.includes('BANKAI')) {
                showProjectModal('BANKAI - Security Clone', [
                    {
                        icon: 'CODE',
                        text: 'View Source Code',
                        url: 'https://github.com/morakib/Bankai/blob/main/README.md'
                    },
                    {
                        icon: 'BOT',
                        text: 'Try Telegram Bot',
                        url: 'https://t.me/Bankai_Senbonzakura_bot'
                    }
                ]);
            } else if (projectTitle.includes('CHUPI_CHUPI')) {
                showProjectModal('CHUPI_CHUPI - Anonymous Messaging', [
                    {
                        icon: 'CODE',
                        text: 'View Source Code',
                        url: 'https://github.com/morakib/AnonymousMessageViaTelegram/blob/main/README.md'
                    },
                    {
                        icon: 'BOT',
                        text: 'Try Telegram Bot',
                        url: 'https://t.me/Chupi_chupi_7_bot'
                    }
                ]);
            } else if (projectTitle.includes('ANIME_CHARACTER_FIGHT')) {
                showProjectModal('ANIME_CHARACTER_FIGHT', [
                    {
                        icon: 'PLAY',
                        text: 'Play Game',
                        url: 'https://morakib.github.io/Anime_character_fight/'
                    }
                ]);
            } else if (projectTitle.includes('URL-PINGER-APP')) {
                showProjectModal('URL-PINGER-APP', [
                    {
                        icon: 'CODE',
                        text: 'View Source Code',
                        url: 'https://github.com/morakib/url-pinger-app/blob/main/README.md'
                    },
                    {
                        icon: 'LIVE',
                        text: 'View Live App',
                        url: 'https://url-pinger-app.vercel.app/'
                    }
                ]);
            } else if (projectTitle.includes('SPACESHOT')) {
                showProjectModal('SPACESHOT', [
                    {
                        icon: 'CODE',
                        text: 'View Source Code',
                        url: 'https://github.com/morakib/SpaceShot/blob/main/README.md'
                    }
                ]);
            } else if (projectTitle.includes('PIGEON-MESSAGING-APP')) {
                showProjectModal('PIGEON-MESSAGING-APP', [
                    {
                        icon: 'CODE',
                        text: 'View Source Code',
                        url: 'https://github.com/morakib/Pigeon-messaging-app-'
                    }
                ]);
            } else {
                alert('Project details would open here in a full implementation!');
            }
        });
        
        // Add touch support
        item.addEventListener('touchstart', function(e) {
            e.preventDefault();
            if (currentPage === 'projects') {
                projectItems.forEach(proj => proj.classList.remove('focused'));
                this.classList.add('focused');
                currentProjectIndex = index;
            }
        });
        
        item.addEventListener('touchend', function(e) {
            e.preventDefault();
            this.click();
        });
        
        // Add mouse hover focus
        item.addEventListener('mouseenter', function() {
            if (currentPage === 'projects') {
                projectItems.forEach(proj => proj.classList.remove('focused'));
                this.classList.add('focused');
                currentProjectIndex = index;
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (currentPage === 'projects') {
                this.classList.remove('focused');
            }
        });
    });
    
    // Add touch support for navigation cards
    document.querySelectorAll('.nav-card').forEach(card => {
        card.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        card.addEventListener('touchend', function(e) {
            e.preventDefault();
            this.style.transform = '';
            this.click();
        });
    });
    
    // Add touch support for back button
    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.style.background = '#aa0000';
        });
        
        btn.addEventListener('touchend', function(e) {
            e.preventDefault();
            this.style.background = '';
            this.click();
        });
    });
    
    // Add touch swipe support for project navigation
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchend', handleTouchEnd, { passive: false });
    
    // Form submission
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', function() {
            alert('Message sent! (In a real implementation, this would submit the form)');
        });
        
        // Add touch support for submit button
        submitBtn.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.style.background = '#00cc00';
        });
        
        submitBtn.addEventListener('touchend', function(e) {
            e.preventDefault();
            this.style.background = '';
            this.click();
        });
    }
});

// Mobile touch scroll navigation for projects
let touchStartY = 0;
let touchEndY = 0;

function handleTouchStart(e) {
    touchStartY = e.touches[0].clientY;
}

function handleTouchEnd(e) {
    touchEndY = e.changedTouches[0].clientY;
    handleSwipe();
}

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchStartY - touchEndY;
    
    if (currentPage === 'projects' && isZoomed) {
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                // Swipe up - go to next project
                navigateProjects('down');
            } else {
                // Swipe down - go to previous project
                navigateProjects('up');
            }
        }
    }
}

// Add sound effects (optional - uncomment to enable)
function playKeySound() {
    // Simple beep sound using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'square';
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

// PDF Download Function
function openPdfLink() {
    // Open the local resume.pdf file
    const pdfUrl = "./resume.pdf";
    window.open(pdfUrl, '_blank');
    return false;
}
