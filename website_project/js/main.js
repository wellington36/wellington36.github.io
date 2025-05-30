// Main JavaScript file for CFC Website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Function to load and initialize graphs if the HTML container exists
    function initializeGraphs() {
        // This function will be expanded when the actual graph HTML is integrated
        console.log('Graph initialization ready');
    }
    
    // Call graph initialization
    initializeGraphs();
});

// Function to handle graph data loading
function loadGraphData(graphId, dataUrl) {
    // This is a placeholder function that will be implemented
    // when the actual graph HTML is integrated
    console.log(`Loading data for graph ${graphId} from ${dataUrl}`);
    
    // In the future, this would fetch data and render the graph
    return {
        loaded: true,
        graphId: graphId
    };
}
