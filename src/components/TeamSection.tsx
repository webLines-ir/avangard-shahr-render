import { Linkedin, Twitter, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    id: 1,
    name: "دکتر علی محمدی",
    position: "معمار ارشد و بنیانگذار",
    bio: "بیش از 20 سال تجربه در طراحی پروژه‌های بزرگ شهری و دارای جوایز متعدد بین‌المللی",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "ali@avangard.com"
    }
  },
  {
    id: 2,
    name: "مریم احمدی",
    position: "معمار طراح",
    bio: "متخصص در طراحی‌های پایدار و کاربرد تکنولوژی‌های نوین در معماری",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b494?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "maryam@avangard.com"
    }
  },
  {
    id: 3,
    name: "حسن رضایی",
    position: "مدیر پروژه",
    bio: "مدیریت و نظارت بر اجرای پروژه‌های معماری با تأکید بر کیفیت و زمان‌بندی",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "hassan@avangard.com"
    }
  },
  {
    id: 4,
    name: "سارا کریمی",
    position: "طراح داخلی",
    bio: "خلق فضاهای داخلی منحصر به فرد با ترکیب هنر، عملکرد و زیبایی",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sara@avangard.com"
    }
  }
];

const philosophy = [
  "ما معتقدیم که معماری باید داستان بگوید",
  "هر پروژه، ترکیبی از هنر، علم و فلسفه است",
  "نوآوری در خدمت انسان و محیط زیست",
  "همکاری تیمی برای دستیابی به بهترین نتایج"
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            تیم ما
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            تیمی از معماران مجرب، طراحان خلاق و متفکران نوآور که با هم آینده‌ای بهتر می‌سازند
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <Card
              key={member.id}
              className="group overflow-hidden hover:shadow-architectural transition-all duration-500 hover:scale-105 border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-reverse space-x-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary rounded-full backdrop-blur-sm"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary rounded-full backdrop-blur-sm"
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary rounded-full backdrop-blur-sm"
                    >
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-foreground">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-8 text-foreground">فلسفه ما</h3>
            <div className="space-y-6">
              {philosophy.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-reverse space-x-4 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-gradient-primary p-2 rounded-full mt-1 group-hover:animate-glow-pulse">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Card className="p-8 bg-gradient-subtle border-border/50 hover:shadow-glow transition-all duration-500">
              <blockquote className="text-xl text-foreground leading-relaxed italic mb-6">
                "معماری موسیقی منجمد است و ما در آوانگارد، سعی می‌کنیم این موسیقی را 
                زنده و پویا نگه داریم تا هر فضا داستان خودش را بگوید."
              </blockquote>
              <cite className="text-primary font-semibold">دکتر علی محمدی، بنیانگذار آوانگارد</cite>
            </Card>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rotate-45 animate-morph-geometric"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full animate-architectural-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
}