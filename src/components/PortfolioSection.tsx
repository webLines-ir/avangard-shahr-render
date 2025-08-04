import { useState } from "react";
import { ExternalLink, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const portfolioItems = [
  {
    id: 1,
    title: "مجتمع مسکونی مدرن",
    category: "مسکونی",
    image: portfolio1,
    description: "طراحی مجتمع مسکونی با رویکرد پایدار و نوآورانه"
  },
  {
    id: 2,
    title: "مرکز تجاری آوانگارد",
    category: "تجاری",
    image: portfolio2,
    description: "ساختمان تجاری با معماری منحصر به فرد"
  },
  {
    id: 3,
    title: "موزه هنر معاصر",
    category: "فرهنگی",
    image: portfolio3,
    description: "فضایی برای نمایش آثار هنری با طراحی نوآورانه"
  },
  {
    id: 4,
    title: "برج اداری نوآور",
    category: "اداری",
    image: portfolio1,
    description: "برج اداری با تکنولوژی‌های روز دنیا"
  },
  {
    id: 5,
    title: "خانه ویلایی لوکس",
    category: "مسکونی",
    image: portfolio2,
    description: "ویلای مدرن با طراحی منحصر به فرد"
  },
  {
    id: 6,
    title: "مرکز آموزشی",
    category: "آموزشی",
    image: portfolio3,
    description: "مجموعه آموزشی با رویکرد نوین"
  }
];

const categories = ["همه", "مسکونی", "تجاری", "فرهنگی", "اداری", "آموزشی"];

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("همه");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = portfolioItems.filter(
    item => selectedCategory === "همه" || item.category === selectedCategory
  );

  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            نمونه کارها
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مجموعه‌ای از پروژه‌های منحصر به فرد که نشان‌دهنده تعهد ما به نوآوری و کیفیت در معماری است
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                selectedCategory === category
                  ? "bg-gradient-primary shadow-glow"
                  : "hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className="group overflow-hidden bg-card hover:shadow-architectural transition-all duration-500 hover:scale-105 border-border/50"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-primary transition-opacity duration-300 ${
                  hoveredItem === item.id ? "opacity-80" : "opacity-0"
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-background/10 border-white/30 text-white hover:bg-white hover:text-primary rounded-full backdrop-blur-sm"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                
                <Button
                  variant="link"
                  className="mt-4 p-0 h-auto font-medium text-primary hover:text-accent"
                >
                  مشاهده جزئیات
                  <Plus className="mr-1 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            مشاهده بیشتر
          </Button>
        </div>
      </div>
    </section>
  );
}