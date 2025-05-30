// Graph loader script for CFC Website

document.addEventListener('DOMContentLoaded', function() {
    // Find all graph placeholders
    const graphPlaceholders = document.querySelectorAll('.graph-placeholder');
    
    // For each placeholder, load the corresponding graph
    graphPlaceholders.forEach(placeholder => {
        const graphId = placeholder.id;
        const graphFileName = placeholder.getAttribute('data-graph-file');
        
        if (graphFileName) {
            // Create iframe element
            const iframe = document.createElement('iframe');
            iframe.src = `../graphs/${graphFileName}`;
            iframe.width = '100%';
            iframe.height = '500px';
            iframe.frameBorder = '0';
            iframe.scrolling = 'no';
            iframe.style.overflow = 'hidden';
            
            // Replace placeholder with iframe
            placeholder.innerHTML = '';
            placeholder.appendChild(iframe);
        }
    });
});
