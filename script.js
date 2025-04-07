// Information content for each clickable point
const infoContent = {
    // Stage 1: Exploration Phase
    "initial-interest": {
        title: "Initial Interest",
        content: `
            <p>Your journey at Quantum University begins with curiosity about holistic medicine and alternative healing approaches. This initial interest often stems from:</p>
            <ul>
                <li>Personal experiences with holistic healing</li>
                <li>Desire to explore beyond conventional medicine</li>
                <li>Interest in quantum physics applications to health</li>
                <li>Seeking a career that aligns with wellness values</li>
            </ul>
            <p>At this stage, you're discovering the possibilities of holistic health education and how it might align with your personal and professional goals.</p>
        `
    },
    "program-research": {
        title: "Program Research",
        content: `
            <p>As your interest deepens, you'll explore Quantum University's diverse program offerings to find the right fit for your background and aspirations:</p>
            <ul>
                <li><strong>Bachelor in Holistic Health</strong>: Foundation for those new to holistic medicine</li>
                <li><strong>Master in Holistic Health, Natural or Integrative Medicine</strong>: Advanced study for those with prior health education</li>
                <li><strong>Doctorate in Holistic Health</strong>: Specialized expertise and professional credentials</li>
                <li><strong>PhD in Natural/Integrative Medicine</strong>: Highest level of academic achievement</li>
                <li><strong>Fast Track Options</strong>: Combined programs for expedited completion</li>
            </ul>
            <p>During this phase, you'll compare programs, review curriculum details, and identify which path aligns with your career goals.</p>
        `
    },
    "admission-requirements": {
        title: "Admission Requirements",
        content: `
            <p>Each program at Quantum University has specific admission requirements based on the degree level:</p>
            <ul>
                <li><strong>Bachelor's Program</strong>: High School Diploma or GED, proficiency in English</li>
                <li><strong>Master's Program</strong>: Bachelor of Science in health-related field or enrollment in Bachelor in Holistic Health Sciences</li>
                <li><strong>Doctorate Program</strong>: Master or Doctorate of Science in health-related field or enrollment in master's program</li>
                <li><strong>PhD Program</strong>: Typically requires prior graduate-level education</li>
            </ul>
            <p>The university offers flexibility for students with non-traditional backgrounds through transfer credits and alternative admission pathways.</p>
        `
    },
    "application-process": {
        title: "Application Process",
        content: `
            <p>The application process at Quantum University is designed to be straightforward and supportive:</p>
            <ol>
                <li><strong>Initial Inquiry</strong>: Request information through the university website</li>
                <li><strong>Admissions Consultation</strong>: Speak with an admissions advisor about your goals</li>
                <li><strong>Application Submission</strong>: Complete online application with required documentation</li>
                <li><strong>Transcript Evaluation</strong>: Submit previous academic records for review</li>
                <li><strong>Acceptance</strong>: Receive admission decision</li>
                <li><strong>Enrollment</strong>: Complete registration and prepare for your first term</li>
            </ol>
            <p>Admissions advisors are available throughout the process to answer questions and provide guidance on program selection.</p>
        `
    },
    "financial-planning": {
        title: "Financial Planning",
        content: `
            <p>Planning for your educational investment is an important part of your journey:</p>
            <ul>
                <li><strong>Tuition Costs</strong>: Vary by program level and credits required</li>
                <li><strong>Enrollment Packages</strong>: Special offers that may include tuition discounts and educational tools</li>
                <li><strong>Payment Plans</strong>: Flexible options to manage educational expenses</li>
                <li><strong>Educational Materials</strong>: Smart Tab and course materials included in many programs</li>
                <li><strong>Return on Investment</strong>: Consider potential career advancement and practice opportunities</li>
            </ul>
            <p>Quantum University offers enrollment specials throughout the year that can provide significant savings on tuition and educational resources.</p>
        `
    },

    // Stage 2: Foundation Phase
    "enrollment": {
        title: "Enrollment",
        content: `
            <p>The enrollment process marks your official entry into Quantum University's academic community:</p>
            <ol>
                <li><strong>Program Selection</strong>: Finalize your degree program choice</li>
                <li><strong>Registration</strong>: Complete registration for your first term</li>
                <li><strong>Student Portal Access</strong>: Receive login credentials for the learning platform</li>
                <li><strong>Welcome Package</strong>: Receive orientation materials and resources</li>
                <li><strong>Academic Calendar</strong>: Review important dates and deadlines</li>
            </ol>
            <p>Upon enrollment, you'll be assigned a student advisor who will help guide you through your academic journey and answer any questions about university procedures.</p>
        `
    },
    "technology-onboarding": {
        title: "Technology Onboarding",
        content: `
            <p>Quantum University leverages advanced educational technology to enhance your learning experience:</p>
            <ul>
                <li><strong>Smart Tab</strong>: Receive your pre-loaded tablet with up to 250 hours of course videos and materials</li>
                <li><strong>Learning Platform</strong>: Orientation to the online learning environment</li>
                <li><strong>Digital Library</strong>: Access to research resources and supplementary materials</li>
                <li><strong>Technical Support</strong>: Available to assist with any technology questions</li>
                <li><strong>Mobile Access</strong>: Learn on-the-go with mobile-compatible resources</li>
            </ul>
            <p>The technology onboarding process ensures you're comfortable with all digital tools before beginning your coursework, allowing for a seamless learning experience.</p>
        `
    },
    "orientation": {
        title: "Orientation",
        content: `
            <p>The orientation process introduces you to Quantum University's unique approach to holistic health education:</p>
            <ul>
                <li><strong>University Overview</strong>: Introduction to Quantum University's mission and philosophy</li>
                <li><strong>Program Structure</strong>: Understanding your degree requirements and timeline</li>
                <li><strong>Learning Methodology</strong>: Introduction to self-paced learning approach</li>
                <li><strong>Support Resources</strong>: Overview of available academic and technical support</li>
                <li><strong>Community Connection</strong>: Introduction to student community and networking opportunities</li>
            </ul>
            <p>Orientation helps you understand how to navigate your educational journey effectively and make the most of the resources available to you as a Quantum University student.</p>
        `
    },
    "first-courses": {
        title: "First Courses",
        content: `
            <p>Your initial coursework at Quantum University establishes the foundation for your holistic health education:</p>
            <ul>
                <li><strong>Foundational Concepts</strong>: Introduction to holistic health principles</li>
                <li><strong>Quantum Physics Basics</strong>: Understanding the scientific framework</li>
                <li><strong>Self-Paced Structure</strong>: Learning to manage your educational timeline</li>
                <li><strong>Assessment Methods</strong>: Understanding how learning is evaluated</li>
                <li><strong>Study Strategies</strong>: Developing effective approaches to master the material</li>
            </ul>
            <p>These first courses are designed to be accessible while introducing you to the unique perspective of quantum physics applied to health and healing.</p>
        `
    },
    "quantum-ai": {
        title: "Quantum AI Introduction",
        content: `
            <p>Quantum AI is your personal AI mentor, available 24/7 to support your learning journey:</p>
            <ul>
                <li><strong>Personalized Support</strong>: AI assistance tailored to your learning needs</li>
                <li><strong>Content Navigation</strong>: Help finding specific information within your courses</li>
                <li><strong>Concept Clarification</strong>: Explanations of complex topics and terminology</li>
                <li><strong>Study Guidance</strong>: Suggestions for effective learning approaches</li>
                <li><strong>Continuous Availability</strong>: Support whenever you need it, regardless of time zone</li>
            </ul>
            <p>Learning to leverage Quantum AI effectively will enhance your educational experience and provide on-demand support throughout your studies.</p>
        `
    },

    // Stage 3: Development Phase
    "core-curriculum": {
        title: "Core Curriculum",
        content: `
            <p>The core curriculum provides essential knowledge and skills in holistic health:</p>
            <ul>
                <li><strong>Holistic Health Principles</strong>: Fundamental concepts of whole-person wellness</li>
                <li><strong>Quantum Physics Applications</strong>: Scientific basis for holistic approaches</li>
                <li><strong>Natural Healing Modalities</strong>: Various techniques and their applications</li>
                <li><strong>Integrative Assessment</strong>: Evaluating health from multiple perspectives</li>
                <li><strong>Ethics and Professional Practice</strong>: Guidelines for responsible practice</li>
            </ul>
            <p>These core courses build your understanding of how quantum physics principles inform holistic health practices and provide the foundation for more specialized study.</p>
        `
    },
    "specialized-learning": {
        title: "Specialized Learning",
        content: `
            <p>As you progress, you'll have opportunities to focus on specific areas of interest:</p>
            <ul>
                <li><strong>Energy Medicine</strong>: Working with the body's energy systems</li>
                <li><strong>Neurofeedback</strong>: Brain-based approaches to wellness</li>
                <li><strong>Consciousness Studies</strong>: Exploring the mind-body connection</li>
                <li><strong>Nutritional Approaches</strong>: Food as medicine principles</li>
                <li><strong>Mind-Body Techniques</strong>: Methods for integrating mental and physical health</li>
            </ul>
            <p>Specialized courses allow you to develop expertise in specific modalities that align with your professional interests and practice goals.</p>
        `
    },
    "assessment-milestones": {
        title: "Assessment Milestones",
        content: `
            <p>Your progress is evaluated through various assessment methods:</p>
            <ul>
                <li><strong>Course Exams</strong>: Testing knowledge acquisition and comprehension</li>
                <li><strong>Practical Demonstrations</strong>: Applying techniques and principles</li>
                <li><strong>Research Projects</strong>: Exploring topics in depth</li>
                <li><strong>Case Studies</strong>: Analyzing and addressing health scenarios</li>
                <li><strong>Self-Reflection</strong>: Evaluating personal growth and understanding</li>
            </ul>
            <p>These assessments are designed not just to evaluate but to deepen your understanding and help you integrate knowledge into practical application.</p>
        `
    },
    "practicum-experience": {
        title: "Practicum Experience",
        content: `
            <p>The practicum component bridges theory and practice:</p>
            <ul>
                <li><strong>Hands-on Application</strong>: Applying techniques in real-world settings</li>
                <li><strong>Case Management</strong>: Working with actual health scenarios</li>
                <li><strong>Supervised Practice</strong>: Guidance from experienced practitioners</li>
                <li><strong>Documentation Skills</strong>: Learning to record and track client progress</li>
                <li><strong>Professional Integration</strong>: Developing a professional approach to practice</li>
            </ul>
            <p>Practicum experiences help you develop confidence in applying holistic health principles and prepare you for professional practice after graduation.</p>
        `
    },
    "mentor-connections": {
        title: "Mentor Connections",
        content: `
            <p>Building relationships with faculty and peers enhances your educational experience:</p>
            <ul>
                <li><strong>Faculty Mentorship</strong>: Guidance from experienced practitioners and educators</li>
                <li><strong>Peer Collaboration</strong>: Learning from and with fellow students</li>
                <li><strong>Professional Networking</strong>: Connecting with practitioners in the field</li>
                <li><strong>Community Forums</strong>: Discussing ideas and challenges with others</li>
                <li><strong>Support System</strong>: Building relationships that extend beyond graduation</li>
            </ul>
            <p>These connections provide valuable perspectives, support your learning process, and often develop into professional relationships that continue throughout your career.</p>
        `
    },

    // Stage 4: Certification Phase
    "program-completion": {
        title: "Program Completion",
        content: `
            <p>Reaching the end of your degree program represents a significant achievement:</p>
            <ul>
                <li><strong>Course Requirements</strong>: Completing all required coursework</li>
                <li><strong>Final Projects</strong>: Demonstrating comprehensive understanding</li>
                <li><strong>Degree Audit</strong>: Verification of all program requirements</li>
                <li><strong>Graduation Application</strong>: Formal request for degree conferral</li>
                <li><strong>Transition Planning</strong>: Preparing for next steps in your journey</li>
            </ul>
            <p>Program completion signifies that you've acquired the knowledge and skills necessary for professional practice in holistic health.</p>
        `
    },
    "certification-preparation": {
        title: "Board Certification Preparation",
        content: `
            <p>Preparing for professional certification is a key step toward practice:</p>
            <ul>
                <li><strong>Board Requirements</strong>: Understanding certification criteria</li>
                <li><strong>Exam Preparation</strong>: Studying for certification examinations</li>
                <li><strong>Documentation</strong>: Gathering required credentials and references</li>
                <li><strong>Application Guidance</strong>: Support for the certification process</li>
                <li><strong>Practice Testing</strong>: Simulated exams to assess readiness</li>
            </ul>
            <p>Quantum University provides resources and guidance to help you navigate the certification process successfully.</p>
        `
    },
    "certification-application": {
        title: "Certification Application",
        content: `
            <p>Applying for professional certification validates your expertise:</p>
            <ul>
                <li><strong>Application Submission</strong>: Completing board certification paperwork</li>
                <li><strong>Credential Verification</strong>: Confirmation of educational qualifications</li>
                <li><strong>Examination Scheduling</strong>: Arranging to take required tests</li>
                <li><strong>Ethics Agreements</strong>: Committing to professional standards</li>
                <li><strong>Application Tracking</strong>: Monitoring progress toward certification</li>
            </ul>
            <p>Different certification boards have specific requirements, and Quantum University graduates qualify for multiple certifications depending on their program.</p>
        `
    },
    "professional-title": {
        title: "Professional Title Acquisition",
        content: `
            <p>Earning professional titles and credentials establishes your authority:</p>
            <ul>
                <li><strong>Holistic Health Practitioner (HHP)</strong>: For Bachelor's and higher graduates</li>
                <li><strong>International Practitioner of Holistic Medicine (IPHM)</strong>: Internationally recognized credential</li>
                <li><strong>Board Certified Doctor of Holistic Health (BCDHH)</strong>: For Doctorate graduates</li>
                <li><strong>Alternative Medical Practitioner (AMP)</strong>: For Doctorate graduates</li>
                <li><strong>Doctor of Holistic Health (DHH)</strong>: For Doctorate graduates</li>
            </ul>
            <p>These professional titles demonstrate your expertise to clients and colleagues, establishing credibility in the holistic health field.</p>
        `
    },
    "graduation": {
        title: "Graduation",
        content: `
            <p>Graduation marks the culmination of your educational journey:</p>
            <ul>
                <li><strong>Degree Conferral</strong>: Official awarding of your academic credential</li>
                <li><strong>Graduation Ceremony</strong>: Celebration of your achievement</li>
                <li><strong>Alumni Status</strong>: Joining the Quantum University graduate community</li>
                <li><strong>Diploma and Transcripts</strong>: Receiving official documentation</li>
                <li><strong>Transition Support</strong>: Guidance for beginning your professional practice</li>
            </ul>
            <p>Graduation represents not just the completion of your studies but the beginning of your professional journey as a holistic health practitioner.</p>
        `
    },

    // Stage 5: Career Launch Phase
    "career-path-selection": {
        title: "Career Path Selection",
        content: `
            <p>Graduates have multiple career paths to consider:</p>
            <ul>
                <li><strong>Private Practice</strong>: Establishing your own holistic health practice</li>
                <li><strong>Integrative Healthcare</strong>: Working within conventional healthcare settings</li>
                <li><strong>Wellness Consulting</strong>: Advising individuals or organizations</li>
                <li><strong>Education</strong>: Teaching holistic health principles</li>
                <li><strong>Research</strong>: Contributing to the knowledge base in holistic medicine</li>
            </ul>
            <p>Your choice of career path will be influenced by your interests, strengths, and the specific credentials you've earned through your studies.</p>
        `
    },
    "practice-establishment": {
        title: "Practice Establishment",
        content: `
            <p>Setting up a holistic health practice involves several key steps:</p>
            <ul>
                <li><strong>Business Planning</strong>: Developing a sustainable practice model</li>
                <li><strong>Legal Considerations</strong>: Understanding scope of practice and regulations</li>
                <li><strong>Location Setup</strong>: Creating a healing environment (physical or virtual)</li>
                <li><strong>Service Definition</strong>: Clarifying what you offer to clients</li>
                <li><strong>Marketing Strategy</strong>: Attracting clients who can benefit from your services</li>
            </ul>
            <p>Many Quantum University graduates successfully establish private practices that allow them to apply their knowledge while maintaining professional autonomy.</p>
        `
    },
    "career-integration": {
        title: "Career Integration",
        content: `
            <p>For those with existing healthcare careers, integration involves:</p>
            <ul>
                <li><strong>Scope Expansion</strong>: Adding holistic modalities to current practice</li>
                <li><strong>Colleague Education</strong>: Sharing knowledge with professional peers</li>
                <li><strong>Complementary Approaches</strong>: Combining conventional and holistic methods</li>
                <li><strong>Interdisciplinary Collaboration</strong>: Working with diverse practitioners</li>
                <li><strong>Organizational Change</strong>: Influencing healthcare systems toward integration</li>
            </ul>
            <p>Healthcare practitioners often find that their Quantum University education enhances their existing practice and opens new opportunities for patient care.</p>
        `
    },
    "professional-network": {
        title: "Professional Network",
        content: `
            <p>Building a professional network supports your ongoing success:</p>
            <ul>
                <li><strong>Alumni Community</strong>: Connecting with fellow Quantum University graduates</li>
                <li><strong>Professional Associations</strong>: Joining organizations in your field</li>
                <li><strong>Collaborative Partnerships</strong>: Working with complementary practitioners</li>
                <li><strong>Mentorship</strong>: Both receiving and providing professional guidance</li>
                <li><strong>Conference Participation</strong>: Engaging with the broader holistic health community</li>
            </ul>
            <p>Your professional network provides support, referrals, and opportunities for continued growth throughout your career.</p>
        `
    },
    "continued-education": {
        title: "Continued Education",
        content: `
            <p>Lifelong learning is essential for holistic health practitioners:</p>
            <ul>
                <li><strong>Advanced Degrees</strong>: Pursuing higher academic credentials</li>
                <li><strong>Specialized Certifications</strong>: Developing expertise in specific modalities</li>
                <li><strong>Professional Development</strong>: Attending workshops and seminars</li>
                <li><strong>Research Engagement</strong>: Staying current with emerging knowledge</li>
                <li><strong>Teaching and Mentoring</strong>: Deepening understanding through education of others</li>
            </ul>
            <p>Many graduates return to Quantum University for advanced degrees or specialized training as they continue to evolve their professional practice.</p>
        `
    },

    // Stage 6: Alumni Phase
    "alumni-association": {
        title: "Alumni Association",
        content: `
            <p>Stay connected with Quantum University through the dedicated Alumni Association. Benefits include:</p>
            <ul>
                <li>Access to exclusive events and webinars</li>
                <li>Subscription to alumni newsletters</li>
                <li>Opportunities to engage with the university community</li>
                <li>Support from a network of fellow graduates</li>
            </ul>
            <p>The association aims to foster lifelong relationships and support your continued success.</p>
        `
    },
    "lifelong-learning": {
        title: "Lifelong Learning",
        content: `
            <p>Quantum University encourages continuous growth. As an alum, you have access to:</p>
            <ul>
                <li><strong>The Alumni Library:</strong> Resources for business building and practice enhancement.</li>
                <li><strong>Continuing Education:</strong> Advanced workshops and courses to deepen your expertise.</li>
                <li><strong>Research Updates:</strong> Stay informed about the latest advancements in holistic and quantum medicine.</li>
                <li><strong>Quantum AI Mentor:</strong> Personalized support based on your study track.</li>
            </ul>
            <p>Commit to expanding your knowledge throughout your career.</p>
        `
    },
    "networking-community": {
        title: "Networking & Community",
        content: `
            <p>Build valuable connections within the Quantum University alumni network:</p>
            <ul>
                <li><strong>Online Forums:</strong> Engage in discussions and share insights on platforms like the Weebly forum or Facebook group.</li>
                <li><strong>Regional Meetups:</strong> Connect with alumni in your local area.</li>
                <li><strong>Professional Directory:</strong> Find and connect with other practitioners.</li>
                <li><strong>Collaborative Opportunities:</strong> Partner with fellow alumni on projects or research.</li>
            </ul>
            <p>Leverage the power of the community for support and professional growth.</p>
        `
    },
    "business-building": {
        title: "Business Building Support",
        content: `
            <p>The Alumni Association provides resources to help you establish and grow your practice or business:</p>
            <ul>
                <li><strong>Marketing Services:</strong> Guidance and tools to promote your services.</li>
                <li><strong>Practice Management Resources:</strong> Tips and strategies for running a successful practice.</li>
                <li><strong>Protection Services:</strong> Information on insurance and legal considerations.</li>
                <li><strong>Success Stories:</strong> Learn from the experiences of established alumni.</li>
            </ul>
            <p>Get a head start in building a thriving holistic health business.</p>
        `
    },
    "mentorship-giving-back": {
        title: "Mentorship & Giving Back",
        content: `
            <p>Share your expertise and contribute to the Quantum University community:</p>
            <ul>
                <li><strong>Mentoring Programs:</strong> Guide current students on their educational journey.</li>
                <li><strong>Guest Lecturing:</strong> Share your real-world experiences in classrooms or webinars.</li>
                <li><strong>Contributing Content:</strong> Write articles for alumni publications or the university blog.</li>
                <li><strong>Supporting Initiatives:</strong> Participate in university events or fundraising efforts.</li>
            </ul>
            <p>Give back to the community that supported your growth and inspire the next generation.</p>
        `
    }
};

// HTML-aware typewriter effect function
function typeWriter(element, html, speed = 30) {
    // First insert the full content but make it invisible
    element.innerHTML = html;
    
    // Find all text nodes
    const allTextNodes = [];
    
    function findTextNodes(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            if (node.textContent.trim() !== '') {
                allTextNodes.push(node);
                
                // Store original content and hide it
                node._originalContent = node.textContent;
                node.textContent = '';
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            Array.from(node.childNodes).forEach(findTextNodes);
        }
    }
    
    findTextNodes(element);
    
    // Create and insert a cursor
    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    element.appendChild(cursor);
    
    let currentNodeIndex = 0;
    let currentCharIndex = 0;
    
    function typeNextChar() {
        if (currentNodeIndex >= allTextNodes.length) {
            // We're done - remove the cursor
            cursor.remove();
            return;
        }
        
        const currentNode = allTextNodes[currentNodeIndex];
        const originalText = currentNode._originalContent;
        
        // Highlight the current element that's being typed
        let currentElement = currentNode.parentNode;
        currentElement.classList.add('typing');
        
        if (currentCharIndex === 0) {
            // Just started this node, make sure cursor is positioned after it
            currentNode.parentNode.insertBefore(cursor, currentNode.nextSibling);
        }
        
        // Add the next character
        currentNode.textContent += originalText[currentCharIndex];
        currentCharIndex++;
        
        // Move to next node or character
        if (currentCharIndex >= originalText.length) {
            // Remove typing highlight
            currentElement.classList.remove('typing');
            
            // Move to next node
            currentNodeIndex++;
            currentCharIndex = 0;
            
            // Longer pause between nodes
            setTimeout(typeNextChar, speed * 3);
        } else {
            // Continue with next character in current node
            setTimeout(typeNextChar, speed);
        }
    }
    
    // Start typing after a short delay
    setTimeout(typeNextChar, 100);
}

// DOM Elements
const modal = document.getElementById('info-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const closeModal = document.getElementById('close-modal');
const stages = document.querySelectorAll('.stage');
const substages = document.querySelectorAll('.substage');
const mainContent = document.querySelector('main');
const body = document.querySelector('body');

console.log('Modal:', modal);
console.log('Modal Title:', modalTitle);
console.log('Modal Content:', modalContent);
console.log('Close Modal:', closeModal);
console.log('Stages:', stages.length);
console.log('Substages:', substages.length);

// Create progress indicator
const progressIndicator = document.createElement('div');
progressIndicator.className = 'progress-indicator';
const progressBar = document.createElement('div');
progressBar.className = 'progress-bar';
progressIndicator.appendChild(progressBar);
document.body.prepend(progressIndicator);

// Add dynamic particles for background effects
function createParticles() {
    const numParticles = 15;
    
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * document.body.scrollHeight;
        
        // Random size
        const size = Math.random() * 15 + 5;
        
        // Set styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}px`;
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        // Random animation duration and delay
        const animDuration = Math.random() * 10 + 10;
        const animDelay = Math.random() * 5;
        
        particle.style.animation = `floatParticle ${animDuration}s ${animDelay}s infinite alternate ease-in-out`;
        
        document.body.appendChild(particle);
    }
}

// Create stage background images
function addStageBackgrounds() {
    const stageBackgrounds = [
        'https://images.unsplash.com/photo-1506703719100-a0f375845a6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', // Exploration (Cosmic/Nebula)
        'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80', // Foundation (Books/Knowledge)
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', // Development (Code/Growth)
        'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80', // Certification (Diploma/Achievement)
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80', // Career (Collaboration/Professional)
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'  // Alumni (Community/Network)
    ];
    
    const stageContents = document.querySelectorAll('.stage-content');
    
    stageContents.forEach((content, index) => {
        const bg = document.createElement('div');
        bg.className = 'stage-bg';
        bg.style.backgroundImage = `url(${stageBackgrounds[index]})`;
        content.appendChild(bg);
    });
}

// Add interactive icons to each stage
function addInteractiveIcons() {
    const stageContents = document.querySelectorAll('.stage-content');
    const icons = [
        'https://api.iconify.design/mdi/telescope.svg?color=%23d4af37',
        'https://api.iconify.design/mdi/book-open-variant.svg?color=%23d4af37',
        'https://api.iconify.design/mdi/chart-line.svg?color=%23d4af37',
        'https://api.iconify.design/mdi/certificate.svg?color=%23d4af37',
        'https://api.iconify.design/mdi/account-group.svg?color=%23d4af37',
        'https://api.iconify.design/mdi/account-group.svg?color=%23d4af37'
    ];
    
    stageContents.forEach((content, index) => {
        const icon = document.createElement('div');
        icon.className = 'interactive-icon';
        icon.style.backgroundImage = `url(${icons[index]})`;
        icon.style.top = '15px';
        icon.style.right = '15px';
        content.appendChild(icon);
    });
}

// Add 3D tilt effect to stage content
function addTiltEffect() {
    const stageContents = document.querySelectorAll('.stage-content');
    
    stageContents.forEach(content => {
        content.classList.add('tilt-effect');
        
        content.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = content.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;
            
            // Calculate tilt (limited to 5 degrees)
            const tiltX = (y - 0.5) * 5;
            const tiltY = (0.5 - x) * 5;
            
            content.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        content.addEventListener('mouseleave', () => {
            content.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// Add scroll-based animation for stages
function handleScrollAnimation() {
    const stageEntries = document.querySelectorAll('.stage');
    
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        {
            threshold: 0.1
        }
    );
    
    stageEntries.forEach(stage => {
        observer.observe(stage);
    });
}

// Update progress bar based on scroll position
function updateProgressBar() {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = (scrollTop) / (docHeight - winHeight);
    progressBar.style.width = `${scrollPercent * 100}%`;
}

// Add a quantum separator to each stage content
function addQuantumSeparators() {
    const stageContents = document.querySelectorAll('.stage-content');
    
    stageContents.forEach(content => {
        const h4 = content.querySelector('h4');
        const separator = document.createElement('div');
        separator.className = 'quantum-separator';
        
        content.insertBefore(separator, h4.nextSibling);
    });
}

// Initialize all enhancements
function initEnhancements() {
    console.log('Initializing enhancements...');
    createParticles();
    addStageBackgrounds();
    addInteractiveIcons();
    addTiltEffect();
    handleScrollAnimation();
    updateProgressBar();
    addQuantumSeparators();

    // Position stages along the SVG path
    positionStagesAlongPath();

    // Use direct onclick attribute for more reliable click handling
    console.log('Setting up direct click handlers...');
    setupDirectClickHandlers(); // This function now finds substages internally

    // --- Add Modal Close Event Listeners --- 
    const modal = document.getElementById('info-modal');
    const closeModal = document.getElementById('modal-close-btn');

    if (closeModal) {
        closeModal.onclick = function() {
            console.log('Close button clicked');
            modal.classList.remove('active');
        };
    }

    if (modal) {
        modal.onclick = function(event) {
            // Close only if the background (modal itself) is clicked, not content inside
            if (event.target === modal) { 
                console.log('Modal background clicked');
                modal.classList.remove('active');
            }
        };
    }
    // -------------------------------------
}

// New function to position stages along the path
function positionStagesAlongPath() {
    const path = document.getElementById('main-path');
    const stages = document.querySelectorAll('.stage');
    if (!path || stages.length === 0) {
        console.error("Path or stages not found for positioning.");
        return;
    }

    const pathLength = path.getTotalLength();
    const numStages = stages.length;
    // Distribute stages somewhat evenly, leaving space at start/end
    const startOffset = pathLength * 0.05;
    const endOffset = pathLength * 0.95;
    const spacing = (endOffset - startOffset) / (numStages - 1);

    console.log(`Path length: ${pathLength}, Num stages: ${numStages}, Spacing: ${spacing}`);

    stages.forEach((stage, index) => {
        const distance = startOffset + index * spacing;
        const point = path.getPointAtLength(distance);
        
        console.log(`Stage ${index + 1}: Distance ${distance.toFixed(2)}, Point (x: ${point.x.toFixed(2)}, y: ${point.y.toFixed(2)})`);

        // Get stage dimensions for centering
        const rect = stage.getBoundingClientRect();
        const stageWidth = rect.width;
        const stageHeight = rect.height;

        // Calculate top/left to center the stage on the point
        // Note: Adjustments might be needed based on container padding/margins
        const stageTop = point.y - stageHeight / 2;
        const stageLeft = point.x - stageWidth / 2;

        stage.style.position = 'absolute';
        stage.style.left = `${stageLeft}px`;
        stage.style.top = `${stageTop}px`;
        // Remove any lingering margin styles that might interfere
        stage.style.marginLeft = '0'; 
        stage.style.marginRight = '0';
        
        // Apply animation delay based on index (optional, reuse from old code?)
        const stageContent = stage.querySelector('.stage-content');
        if (stageContent) {
             stageContent.style.opacity = '0'; // Start hidden
             stageContent.style.animation = `fadeInStage 1s forwards ${index * 0.3}s`; // Apply fade-in
             // Reset transform if it was set previously
             stageContent.style.transform = 'translateX(0)'; 
        }

        // Optional: Calculate angle and apply rotation (more complex)
        // const nextPoint = path.getPointAtLength(distance + 1); // Point slightly further along
        // const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);
        // stage.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
    });
}

// Setup direct click handlers using onclick attributes
function setupDirectClickHandlers() {
    const substages = document.querySelectorAll('.substage'); // Select ALL substages again
    const modal = document.getElementById('info-modal');
    
    substages.forEach((substage, index) => {
        console.log(`Setting up direct click handler for substage ${index}`);
        substage.onclick = function() {
            console.log('Substage clicked!');
            const infoType = substage.getAttribute('data-info');
            console.log('Info type:', infoType);
            
            if (!infoContent[infoType]) {
                console.error('No content found for', infoType);
                return;
            }
            
            const info = infoContent[infoType];
            console.log('Found info:', info.title);
            
            // Show the modal first
            modal.classList.add('active');
            
            // Set title
            modalTitle.textContent = info.title;
            
            // Add a temporary loading indicator
            modalContent.innerHTML = '<div class="loading">Loading content...</div>';
            
            // Slight delay to ensure modal is visible
            setTimeout(() => {
                // Start typing effect
                typeWriter(modalContent, info.content, 15); // 15ms is a good speed for typing
            }, 300);
        };
    });
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded');
    initEnhancements();
});
