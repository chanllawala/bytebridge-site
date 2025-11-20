import { useEffect } from 'react';

const ChatWidget = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    
    // Set script content with your Tawk.to ID
    script.innerHTML = `
      var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
      (function() {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/690cc617b0dfb2195ced3f38/1j9cubjib';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
      })();
    `;
    
    // Add script to document
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      // Clean up the Tawk.to instance if needed
      if (window.Tawk_API && window.Tawk_API.hideWidget) {
        window.Tawk_API.hideWidget();
      }
      // Remove the script
      const tawkScripts = document.querySelectorAll('script[src*="tawk.to"]');
      tawkScripts.forEach(script => script.remove());
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default ChatWidget;
