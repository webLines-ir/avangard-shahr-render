import { Phone, Mail, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  services: [
    "طراحی معماری",
    "طراحی داخلی", 
    "مشاوره ساخت",
    "نظارت پروژه"
  ],
  company: [
    "درباره ما",
    "نمونه کارها",
    "تیم",
    "جوایز"
  ],
  support: [
    "پشتیبانی",
    "سوالات متداول",
    "بلاگ",
    "اخبار"
  ]
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border/50 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-primary mb-6">آوانگارد</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              استودیو معماری آوانگارد، پیشرو در طراحی و ساخت فضاهای نوآورانه و الهام‌بخش. 
              ما آینده معماری را می‌سازیم.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-reverse space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+98 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-reverse space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@avangard.ir</span>
              </div>
              <div className="flex items-center space-x-reverse space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>تهران، خیابان ولیعصر</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">خدمات ما</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">شرکت</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">پشتیبانی</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div>
              <h5 className="text-sm font-semibold text-foreground mb-3">خبرنامه</h5>
              <p className="text-xs text-muted-foreground mb-3">
                از آخرین پروژه‌ها و اخبار ما باخبر شوید
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="ایمیل شما"
                  className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button size="sm" className="bg-gradient-primary hover:shadow-glow">
                  عضویت
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © {currentYear} استودیو معماری آوانگارد. تمامی حقوق محفوظ است.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-reverse space-x-4">
              <span className="text-sm text-muted-foreground ml-4">ما را دنبال کنید:</span>
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className="rounded-full border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  <social.icon className="h-4 w-4" />
                  <span className="sr-only">{social.label}</span>
                </Button>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-reverse space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors duration-300">
                حریم خصوصی
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                قوانین و مقررات
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-primary opacity-5 rotate-45 transform translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-architectural opacity-5 rounded-full transform translate-y-12 -translate-x-12"></div>
    </footer>
  );
}