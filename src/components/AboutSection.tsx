import { Award, Users, Lightbulb, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import portfolio1 from "@/assets/portfolio-1.jpg";

const stats = [
  { icon: Award, label: "پروژه تکمیل شده", value: "250+" },
  { icon: Users, label: "مشتری راضی", value: "150+" },
  { icon: Lightbulb, label: "جایزه بین‌المللی", value: "25+" },
  { icon: Target, label: "سال تجربه", value: "15+" }
];

const values = [
  {
    title: "نوآوری",
    description: "استفاده از جدیدترین تکنولوژی‌ها و روش‌های طراحی",
    icon: Lightbulb
  },
  {
    title: "کیفیت",
    description: "تعهد به بالاترین استانداردهای معماری و ساخت",
    icon: Award
  },
  {
    title: "پایداری",
    description: "طراحی‌های سازگار با محیط زیست و آینده",
    icon: Target
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                درباره ما
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                استودیو معماری آوانگارد با بیش از 15 سال تجربه در طراحی و اجرای پروژه‌های 
                نوآورانه، پیشرو در ایجاد فضاهای الهام‌بخش و کاربردی است. ما معتقدیم که 
                معماری نه تنها باید زیبا باشد، بلکه باید زندگی را بهتر کند.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                تیم ما از معماران مجرب، طراحان خلاق و مهندسان متخصص تشکیل شده است که 
                با ترکیب هنر و تکنولوژی، پروژه‌هایی بی‌نظیر خلق می‌کنند.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">ارزش‌های ما</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className="flex items-start space-x-reverse space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-gradient-primary p-3 rounded-full">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <Card className="overflow-hidden group hover:shadow-elegant transition-all duration-500">
                  <img
                    src={portfolio1}
                    alt="پروژه معماری"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </Card>
                <Card className="overflow-hidden group hover:shadow-elegant transition-all duration-500 animate-architectural-float">
                  <div className="h-32 bg-gradient-primary p-6 flex items-center justify-center">
                    <div className="text-center text-primary-foreground">
                      <div className="text-3xl font-bold">15+</div>
                      <div className="text-sm">سال تجربه</div>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div className="space-y-6 mt-8">
                <Card className="overflow-hidden group hover:shadow-elegant transition-all duration-500 animate-morph-geometric">
                  <div className="h-32 bg-gradient-architectural p-6 flex items-center justify-center">
                    <div className="text-center text-accent-foreground">
                      <div className="text-3xl font-bold">250+</div>
                      <div className="text-sm">پروژه موفق</div>
                    </div>
                  </div>
                </Card>
                <Card className="overflow-hidden group hover:shadow-elegant transition-all duration-500">
                  <img
                    src={portfolio1}
                    alt="طراحی داخلی"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </Card>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full animate-architectural-float"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rotate-45 animate-morph-geometric"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="p-6 text-center group hover:shadow-glow transition-all duration-500 hover:scale-105 border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:animate-glow-pulse">
                <stat.icon className="h-8 w-8 text-primary-foreground mx-auto" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}