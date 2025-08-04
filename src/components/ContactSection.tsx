import { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "تلفن",
    content: "+98 21 1234 5678",
    description: "پاسخگویی در ساعات اداری"
  },
  {
    icon: Mail,
    title: "ایمیل",
    content: "info@avangard.ir",
    description: "پاسخ تا 24 ساعت"
  },
  {
    icon: MapPin,
    title: "آدرس",
    content: "تهران، خیابان ولیعصر، برج آوانگارد",
    description: "طبقه 15، واحد 1502"
  },
  {
    icon: Clock,
    title: "ساعات کاری",
    content: "شنبه تا چهارشنبه: 8-17",
    description: "پنجشنبه: 8-13"
  }
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "پیام شما ارسال شد",
        description: "ما در اسرع وقت با شما تماس خواهیم گرفت",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            تماس با ما
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            آماده همکاری با شما برای تحقق رویاهای معماری‌تان هستیم. با ما در تماس باشید
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">اطلاعات تماس</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={info.title}
                    className="p-6 hover:shadow-elegant transition-all duration-300 hover:scale-105 border-border/50"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-reverse space-x-4">
                      <div className="bg-gradient-primary p-3 rounded-full">
                        <info.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-foreground font-medium mb-1">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <Card className="p-0 overflow-hidden hover:shadow-glow transition-all duration-500">
              <div className="h-64 bg-gradient-architectural relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-primary-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-lg font-medium">نقشه محل</p>
                    <p className="text-sm opacity-80">نمایش در Google Maps</p>
                  </div>
                </div>
                {/* Animated elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-architectural-float"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/30 rotate-45 animate-morph-geometric"></div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 border-border/50 hover:shadow-architectural transition-all duration-500">
              <h3 className="text-2xl font-bold text-foreground mb-6">ارسال پیام</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      نام و نام خانوادگی *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="نام خود را وارد کنید"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      ایمیل *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="ایمیل خود را وارد کنید"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      شماره تلفن
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="09123456789"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      موضوع *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="موضوع پیام خود را وارد کنید"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    پیام *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full min-h-[120px]"
                    placeholder="پیام خود را اینجا بنویسید..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow text-lg py-6 rounded-full transition-all duration-500 hover:scale-105"
                >
                  {isSubmitting ? (
                    "در حال ارسال..."
                  ) : (
                    <>
                      ارسال پیام
                      <Send className="mr-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}