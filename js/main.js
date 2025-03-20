// Dynamically load GSAP if it's not already loaded
(function loadGSAP() {
    if (!window.gsap) {
      const script = document.createElement('script');
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/gsap.min.js";
      script.onload = initAnimations;
      document.head.appendChild(script);
    } else {
      initAnimations();
    }
  })();
  
  function initAnimations() {
    // Animate header: slide down and fade in
    gsap.from("header", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
  
    // Animate navigation items with a staggered reveal
    gsap.from("nav ul li", { 
      duration: 1, 
      opacity: 0, 
      y: -20, 
      stagger: 0.2, 
      delay: 0.5, 
      ease: "power2.out"
    });
  
    // Animate video iframes: scale up and fade in with a staggered effect
    gsap.from(".video-container iframe", {
      duration: 1, 
      scale: 0.8, 
      opacity: 0, 
      stagger: 0.3,
      delay: 1,
      ease: "elastic.out(1, 0.3)"
    });
  
    // Animate the more-details section: slide in from the bottom
    gsap.from(".more-details", {
      duration: 1, 
      y: 30, 
      opacity: 0, 
      delay: 1.5, 
      ease: "power2.out"
    });
  
    // Animate footer: fade in
    gsap.from("footer", {
      duration: 1, 
      opacity: 0, 
      delay: 2, 
      ease: "power2.out"
    });
  
    // Add an interactive hover effect on the "Project Details" button
    const detailsLink = document.querySelector(".more-details a");
    detailsLink.addEventListener("mouseenter", () => {
      gsap.to(detailsLink, { scale: 1.1, duration: 0.3, ease: "power1.out" });
    });
    detailsLink.addEventListener("mouseleave", () => {
      gsap.to(detailsLink, { scale: 1, duration: 0.3, ease: "power1.out" });
    });
  }