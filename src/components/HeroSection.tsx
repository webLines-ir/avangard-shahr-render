import { ArrowDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-architecture.jpg";

export function HeroSection() {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="معماری آوانگارد"
          className="w-full h-full object-cover animate-parallax-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-background/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/10"></div>
      </div>

      {/* Animated Geometric Shapes */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/10 rotate-45 animate-morph-geometric"></div>
      <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-accent/20 rounded-full animate-architectural-float"></div>
      <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-primary animate-grid-rotate opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-glow-pulse">
                آوانگارد
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
              استودیو معماری
            </p>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              طراحی‌هایی که آینده را می‌سازند، فضاهایی که الهام می‌بخشند
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                onClick={scrollToPortfolio}
                size="lg"
                className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-6 rounded-full transition-all duration-500 hover:scale-105"
              >
                مشاهده نمونه کارها
                <ArrowDown className="mr-2 h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 rounded-full transition-all duration-500 hover:scale-105"
              >
                <Play className="mr-2 h-5 w-5" />
                تماشای ویدئو
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-1/2 transform translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
}