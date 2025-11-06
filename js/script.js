// Cyber Crime Website - Interactive JavaScript Features
// Author: Educational Project
// Purpose: Add interactivity and smooth transitions to the cyber crime awareness website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🛡️ Cyber Crime Website - Interactive Features Loaded');
    
    // Initialize all interactive features
    initializePageTransitions();
    initializeInteractiveElements();
    initializeAnimations();
    initializeSecurityTools();
    initializeNavigation();
});

// Page Transition Effects
function initializePageTransitions() {
    // Add loading animation when navigating between pages
    document.querySelectorAll('a[href*=".html"]').forEach(link => {
        link.addEventListener('click', function(e) {
            // Add transition effect
            document.body.style.opacity = '0.7';
            document.body.style.transition = 'opacity 0.3s ease';
            
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 300);
        });
    });
}

// Interactive Elements Initialization
function initializeInteractiveElements() {
    // Add hover effects to cyber buttons
    const cyberButtons = document.querySelectorAll('.cyber-button');
    cyberButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 8px 25px rgba(0, 255, 255, 0.4)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 15px rgba(0, 255, 255, 0.2)';
        });
    });

    // Add click effects to stat boxes
    const statBoxes = document.querySelectorAll('.stat-box');
    statBoxes.forEach(box => {
        box.addEventListener('click', function() {
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
}

// Animation Effects
function initializeAnimations() {
    // Add entrance animations to glass cards
    const glassCards = document.querySelectorAll('.glass-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInUp 0.6s ease forwards';
            }
        });
    });

    glassCards.forEach(card => {
        observer.observe(card);
    });

    // Add floating animation to header elements
    const headerElements = document.querySelectorAll('.logo, .nav a');
    headerElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.animation = 'float 2s ease-in-out infinite';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.animation = 'none';
        });
    });
}

// Security Tools and Interactive Features
function initializeSecurityTools() {
    // Password strength checker
    const passwordInput = document.getElementById('passwordInput');
    const passwordStrength = document.getElementById('passwordStrength');
    
    if (passwordInput && passwordStrength) {
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            const strength = checkPasswordStrength(password);
            updatePasswordStrengthDisplay(strength);
        });
    }

    // System status checker
    const systemStatusButton = document.getElementById('checkSystemStatus');
    const systemResults = document.getElementById('systemResults');
    
    if (systemStatusButton && systemResults) {
        systemStatusButton.addEventListener('click', function() {
            performSystemCheck();
        });
    }

    // Personal security checklist
    const checklistItems = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    checklistItems.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updateSecurityScore();
        });
    });
}

// Navigation Enhancement
function initializeNavigation() {
    // Add active state to current page navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.style.color = 'var(--neon-cyan)';
            link.style.textShadow = '0 0 10px var(--neon-cyan)';
        }
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Interactive Demo Functions (called from HTML)
function showHelplines() {
    const helplineResults = document.getElementById('helplineResults');
    if (helplineResults) {
        helplineResults.innerHTML = `
            <div class="success-box">
                <h4>🚨 Emergency Cyber Crime Helplines</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
                    <div>
                        <p><strong>National Cyber Crime Helpline:</strong></p>
                        <p style="font-size: 1.2rem; color: var(--neon-cyan);">1930</p>
                    </div>
                    <div>
                        <p><strong>Women Cyber Crime Helpline:</strong></p>
                        <p style="font-size: 1.2rem; color: var(--neon-purple);">1091</p>
                    </div>
                    <div>
                        <p><strong>Child Helpline:</strong></p>
                        <p style="font-size: 1.2rem; color: var(--neon-green);">1098</p>
                    </div>
                    <div>
                        <p><strong>Police Helpline:</strong></p>
                        <p style="font-size: 1.2rem; color: var(--neon-red);">100</p>
                    </div>
                </div>
                <p style="margin-top: 1rem; color: var(--text-secondary);">
                    <em>Remember: These helplines are available 24/7 for immediate assistance</em>
                </p>
            </div>
        `;
        helplineResults.style.animation = 'fadeIn 0.5s ease';
    }
}

function showReportingPortals() {
    const reportingResults = document.getElementById('reportingResults');
    if (reportingResults) {
        reportingResults.innerHTML = `
            <div class="warning-box">
                <h4>🌍 International Reporting Platforms</h4>
                <div style="margin-top: 1rem;">
                    <p><strong>🇮🇳 India:</strong> cybercrime.gov.in</p>
                    <p><strong>🇺🇸 USA:</strong> ic3.gov (FBI Internet Crime Complaint Center)</p>
                    <p><strong>🇬🇧 UK:</strong> actionfraud.police.uk</p>
                    <p><strong>🇪🇺 EU:</strong> europol.europa.eu/report-a-crime</p>
                    <p><strong>🌐 Global:</strong> interpol.int (Contact local police first)</p>
                </div>
                <p style="margin-top: 1rem; color: var(--text-secondary);">
                    <em>Always report to your local law enforcement agency first</em>
                </p>
            </div>
        `;
        reportingResults.style.animation = 'fadeIn 0.5s ease';
    }
}

function showWannaCryDetails() {
    const wannacryResults = document.getElementById('wannacryResults');
    if (wannacryResults) {
        wannacryResults.innerHTML = `
            <div class="warning-box">
                <h4>🔍 WannaCry Technical Analysis</h4>
                <div style="margin-top: 1rem;">
                    <p><strong>Vulnerability Exploited:</strong> EternalBlue (MS17-010)</p>
                    <p><strong>Attack Vector:</strong> SMB protocol vulnerability</p>
                    <p><strong>Propagation:</strong> Network worm capabilities</p>
                    <p><strong>Encryption:</strong> RSA-2048 + AES-128</p>
                    <p><strong>Kill Switch:</strong> Hardcoded domain check</p>
                    <p><strong>Impact:</strong> 300,000+ systems in 150+ countries</p>
                </div>
                <p style="margin-top: 1rem; color: var(--neon-green);">
                    <strong>Prevention:</strong> Regular Windows updates and disabling SMBv1
                </p>
            </div>
        `;
        wannacryResults.style.animation = 'fadeIn 0.5s ease';
    }
}

function showEquifaxDetails() {
    const equifaxResults = document.getElementById('equifaxResults');
    if (equifaxResults) {
        equifaxResults.innerHTML = `
            <div class="warning-box">
                <h4>🔍 Equifax Breach Technical Details</h4>
                <div style="margin-top: 1rem;">
                    <p><strong>Vulnerability:</strong> Apache Struts CVE-2017-5638</p>
                    <p><strong>Attack Vector:</strong> Remote code execution</p>
                    <p><strong>Entry Point:</strong> Public-facing web application</p>
                    <p><strong>Data Accessed:</strong> 147 million records</p>
                    <p><strong>Detection Delay:</strong> 76 days to discovery</p>
                    <p><strong>Stolen Data:</strong> SSNs, birth dates, addresses, driver's licenses</p>
                </div>
                <p style="margin-top: 1rem; color: var(--neon-red);">
                    <strong>Critical Failure:</strong> Failure to patch known vulnerability for months
                </p>
            </div>
        `;
        equifaxResults.style.animation = 'fadeIn 0.5s ease';
    }
}

function showCyberTimeline() {
    const timelineResults = document.getElementById('timelineResults');
    if (timelineResults) {
        timelineResults.innerHTML = `
            <div class="warning-box" style="max-height: 400px; overflow-y: auto;">
                <h4>⏰ Major Cyber Attacks Timeline (2000-2024)</h4>
                <div style="margin-top: 1rem; line-height: 2;">
                    <p><strong>2000:</strong> ILOVEYOU virus - $10B damage</p>
                    <p><strong>2001:</strong> Code Red worm - 359K servers infected</p>
                    <p><strong>2004:</strong> MyDoom - Fastest spreading email worm</p>
                    <p><strong>2008:</strong> Conficker worm - 15 million computers</p>
                    <p><strong>2013:</strong> Target breach - 110M customers affected</p>
                    <p><strong>2014:</strong> Sony Pictures hack - Data destruction</p>
                    <p><strong>2016:</strong> Bangladesh Bank heist - $81M stolen</p>
                    <p><strong>2017:</strong> WannaCry ransomware - Global epidemic</p>
                    <p><strong>2017:</strong> Equifax breach - 147M records exposed</p>
                    <p><strong>2018:</strong> Facebook-Cambridge Analytica - Data misuse</p>
                    <p><strong>2020:</strong> SolarWinds supply chain attack</p>
                    <p><strong>2021:</strong> Colonial Pipeline ransomware - Fuel shortage</p>
                    <p><strong>2022:</strong> Russia-Ukraine cyber warfare</p>
                    <p><strong>2023:</strong> MOVEit vulnerability - Mass exploitation</p>
                    <p><strong>2024:</strong> Major ransomware evolution continues</p>
                </div>
                <p style="margin-top: 1rem; color: var(--text-secondary);">
                    <em>Timeline shows the evolution and increasing sophistication of cyber attacks</em>
                </p>
            </div>
        `;
        timelineResults.style.animation = 'fadeIn 0.5s ease';
    }
}

// Security Tools Functions
function checkPasswordStrength(password) {
    let strength = 0;
    
    // Length check
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (password.length >= 16) strength++;
    
    // Character variety checks
    if (/[a-z]/.test(password)) strength++; // lowercase
    if (/[A-Z]/.test(password)) strength++; // uppercase
    if (/[0-9]/.test(password)) strength++; // numbers
    if (/[^A-Za-z0-9]/.test(password)) strength++; // special characters
    
    return Math.min(strength, 5); // Cap at 5 levels
}

function updatePasswordStrengthDisplay(strength) {
    const passwordStrength = document.getElementById('passwordStrength');
    if (!passwordStrength) return;
    
    const strengthLevels = [
        { text: 'Very Weak', color: '#ff4444', width: '20%' },
        { text: 'Weak', color: '#ff8844', width: '40%' },
        { text: 'Fair', color: '#ffaa44', width: '60%' },
        { text: 'Good', color: '#88ff44', width: '80%' },
        { text: 'Strong', color: '#44ff44', width: '100%' }
    ];
    
    const level = strengthLevels[Math.min(strength - 1, 4)];
    
    passwordStrength.innerHTML = `
        <div style="background: #1a1a2e; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <span style="color: ${level.color}; font-weight: bold;">Password Strength: ${level.text}</span>
                <span style="color: var(--text-secondary); font-size: 0.9rem;">${strength}/5</span>
            </div>
            <div style="background: #16213e; height: 8px; border-radius: 4px; overflow: hidden;">
                <div style="background: ${level.color}; width: ${level.width}; height: 100%; transition: width 0.3s ease;"></div>
            </div>
            <div style="margin-top: 0.5rem; font-size: 0.9rem; color: var(--text-secondary);">
                ${getPasswordTips(strength)}
            </div>
        </div>
    `;
}

function getPasswordTips(strength) {
    const tips = [
        'Use at least 8 characters with mixed case letters',
        'Add numbers and special characters for better security',
        'Consider using a passphrase or password manager',
        'Great! Your password is getting strong',
        'Excellent! Your password meets all security criteria'
    ];
    
    return tips[Math.min(strength - 1, 4)];
}

function performSystemCheck() {
    const systemResults = document.getElementById('systemResults');
    if (!systemResults) return;
    
    // Simulate system check
    systemResults.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <div style="font-size: 2rem; margin-bottom: 1rem;">🔍</div>
            <p style="color: var(--neon-cyan); margin-bottom: 1rem;">Performing security assessment...</p>
            <div style="width: 100%; height: 4px; background: #16213e; border-radius: 2px; overflow: hidden;">
                <div id="progressBar" style="width: 0%; height: 100%; background: var(--neon-cyan); transition: width 0.1s ease;"></div>
            </div>
        </div>
    `;
    
    // Animate progress bar
    let progress = 0;
    const progressBar = document.getElementById('progressBar');
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progressBar) {
            progressBar.style.width = Math.min(progress, 100) + '%';
        }
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                displaySystemCheckResults();
            }, 500);
        }
    }, 200);
}

function displaySystemCheckResults() {
    const systemResults = document.getElementById('systemResults');
    if (!systemResults) return;
    
    // Simulate random security status
    const statuses = [
        { status: 'Secure', color: '#44ff44', icon: '✅' },
        { status: 'Warning', color: '#ffaa44', icon: '⚠️' },
        { status: 'Critical', color: '#ff4444', icon: '🚨' }
    ];
    
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    
    systemResults.innerHTML = `
        <div class="warning-box">
            <h4>${randomStatus.icon} System Security Status: ${randomStatus.status}</h4>
            <div style="margin-top: 1rem;">
                <p><strong>Firewall:</strong> ${randomStatus.status === 'Secure' ? 'Active' : 'Needs Update'}</p>
                <p><strong>Antivirus:</strong> ${randomStatus.status === 'Secure' ? 'Up to Date' : 'Outdated'}</p>
                <p><strong>System Updates:</strong> ${randomStatus.status === 'Secure' ? 'Current' : 'Available'}</p>
                <p><strong>Network Security:</strong> ${randomStatus.status === 'Secure' ? 'Protected' : 'Vulnerable'}</p>
            </div>
            <p style="margin-top: 1rem; color: ${randomStatus.color};">
                <strong>Recommendation:</strong> ${getSecurityRecommendation(randomStatus.status)}
            </p>
        </div>
    `;
}

function getSecurityRecommendation(status) {
    const recommendations = {
        'Secure': 'Your system appears secure. Continue regular maintenance and stay vigilant.',
        'Warning': 'Some security measures need attention. Update your software and run a full antivirus scan.',
        'Critical': 'Immediate action required! Update all software, run antivirus scan, and check firewall settings.'
    };
    
    return recommendations[status];
}

function updateSecurityScore() {
    const checklistItems = document.querySelectorAll('.checklist-item input[type="checkbox"]:checked');
    const totalItems = document.querySelectorAll('.checklist-item input[type="checkbox"]').length;
    const score = Math.round((checklistItems.length / totalItems) * 100);
    
    const scoreElement = document.getElementById('securityScore');
    if (scoreElement) {
        scoreElement.innerHTML = `
            <div class="stat-box">
                <div class="stat-number">${score}%</div>
                <div class="stat-label">Security Score</div>
            </div>
        `;
        
        // Add color coding based on score
        const color = score >= 80 ? '#44ff44' : score >= 60 ? '#ffaa44' : '#ff4444';
        scoreElement.querySelector('.stat-number').style.color = color;
    }
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-5px); }
        100% { transform: translateY(0px); }
    }
    
    .demo-result {
        animation: fadeIn 0.5s ease;
    }
`;
document.head.appendChild(style);

// Add some interactive Easter eggs
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateEasterEgg();
        konamiCode = [];
    }
});

function activateEasterEgg() {
    document.body.style.animation = 'none';
    document.body.style.background = 'linear-gradient(45deg, #ff006e, #8338ec, #3a86ff, #06ffa5)';
    document.body.style.backgroundSize = '400% 400%';
    document.body.style.animation = 'gradient 3s ease infinite';
    
    // Add gradient animation
    const gradientStyle = document.createElement('style');
    gradientStyle.textContent = `
        @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
    `;
    document.head.appendChild(gradientStyle);
    
    // Show easter egg message
    const message = document.createElement('div');
    message.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                    background: rgba(0,0,0,0.9); padding: 2rem; border-radius: 15px; 
                    border: 2px solid var(--neon-cyan); z-index: 1000; text-align: center;">
            <h2 style="color: var(--neon-cyan); margin-bottom: 1rem;">🎮 EASTER EGG ACTIVATED! 🎮</h2>
            <p style="color: var(--text-primary); margin-bottom: 1rem;">
                You've discovered the Konami Code! You're clearly a cybersecurity enthusiast!
            </p>
            <p style="color: var(--neon-purple); font-size: 0.9rem;">
                Remember: With great power comes great responsibility. Use your knowledge wisely!
            </p>
            <button onclick="this.parentElement.parentElement.remove(); document.body.style.background='';" 
                    class="cyber-button" style="margin-top: 1rem;">
                Awesome! 🚀
            </button>
        </div>
    `;
    document.body.appendChild(message);
}

// Console message for developers
console.log(`
🛡️ CYBER CRIME AWARENESS WEBSITE
=====================================
🎮 Interactive Features Loaded!
🚀 Password Strength Checker
🔍 System Security Scanner
📊 Personal Security Checklist
🎯 Interactive Case Studies
🌐 Global Reporting Portals

💡 Pro Tip: Try the Konami Code (↑↑↓↓←→←→BA) for a surprise!

Stay safe in the digital world! 🌐🔒
`);