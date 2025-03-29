import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import { useEffect } from "react";
import PlayersPage from "@/pages/PlayersPage";
import RulesPage from "@/pages/RulesPage";
import ContactPage from "@/pages/ContactPage";
import TermsPage from "@/pages/TermsPage";
import PrivacyPage from "@/pages/PrivacyPage";
import RefundPage from "@/pages/RefundPage";
import AupPage from "@/pages/AupPage";

// Freeing Fire particles animation setup
function setupParticles() {
  // Create a canvas element
  const canvas = document.createElement('canvas');
  canvas.id = 'game-particles';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '0';
  document.body.appendChild(canvas);

  // Set canvas size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Get context
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Particles array
  const particles: {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
    opacity: number;
  }[] = [];

  // Create particles
  function createParticles() {
    const particleCount = Math.floor(window.innerWidth / 20); // Adjust density based on screen width
    
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 3 + 1;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const speedX = (Math.random() - 0.5) * 0.5;
      const speedY = (Math.random() - 0.5) * 0.5;
      
      // Orange and blue colors for Free Fire theme
      const colors = ['rgba(255, 87, 34, ', 'rgba(0, 229, 255, '];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      const opacity = Math.random() * 0.5 + 0.2;
      
      particles.push({
        x,
        y,
        size,
        speedX,
        speedY,
        color,
        opacity
      });
    }
  }

  // Update particles
  function updateParticles() {
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      
      p.x += p.speedX;
      p.y += p.speedY;
      
      // Bounce off edges
      if (p.x > canvas.width || p.x < 0) {
        p.speedX = -p.speedX;
      }
      
      if (p.y > canvas.height || p.y < 0) {
        p.speedY = -p.speedY;
      }
    }
  }

  // Draw particles
  function drawParticles() {
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.opacity + ')';
      ctx.fill();
    }
  }

  // Animation loop
  function animate() {
    updateParticles();
    drawParticles();
    requestAnimationFrame(animate);
  }

  // Window resize event
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles.length = 0; // Clear particles
    createParticles(); // Recreate for new dimensions
  });

  // Initialize
  createParticles();
  animate();
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/players" component={PlayersPage} />
      <Route path="/rules" component={RulesPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/refund" component={RefundPage} />
      <Route path="/aup" component={AupPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Set up the Free Fire themed particles
    setupParticles();
    
    // Add a class to the body for global styling
    document.body.classList.add('free-fire-theme');
    
    // Clean up function
    return () => {
      const canvas = document.getElementById('game-particles');
      if (canvas) {
        canvas.remove();
      }
      document.body.classList.remove('free-fire-theme');
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="game-background">
        <div className="cyber-grid">
          <Router />
          <Toaster />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
