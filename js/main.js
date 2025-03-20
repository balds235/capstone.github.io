(function loadGSAP() {
    if (!window.gsap) {
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/gsap.min.js";
      script.onload = initAnimations;
      document.head.appendChild(script);
    } else {
      initAnimations();
    }
  })();
  
  function initAnimations() {
    // Animate header
    gsap.from("header", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
  
    // Animate navigation items
    gsap.from("nav ul li", { 
      duration: 1, 
      opacity: 0, 
      y: -20, 
      stagger: 0.2, 
      delay: 0.5, 
      ease: "power2.out"
    });
  
    // Animate video iframes on index page
    if (document.querySelector(".video-container")) {
      gsap.from(".video-container iframe", {
        duration: 1, 
        scale: 0.8, 
        opacity: 0, 
        stagger: 0.3,
        delay: 1,
        ease: "elastic.out(1, 0.3)"
      });
    }
  
    // Animate more-details section on index page
    if (document.querySelector(".more-details")) {
      gsap.from(".more-details", {
        duration: 1, 
        y: 30, 
        opacity: 0, 
        delay: 1.5, 
        ease: "power2.out"
      });
    }
    
    // Animate section content on details and team pages
    gsap.from("section", {
      duration: 1, 
      opacity: 0, 
      y: 30, 
      delay: 0.5, 
      ease: "power2.out"
    });
    
    // Animate footer
    gsap.from("footer", {
      duration: 1, 
      opacity: 0, 
      delay: 2, 
      ease: "power2.out"
    });
  }