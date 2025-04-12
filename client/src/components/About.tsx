import { AnimatedDiv } from "@/components/ui/animated-div";
import { AnimatedText } from "@/components/ui/animated-text";
import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedDiv className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t("about.title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </AnimatedDiv>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedDiv delay={0.2}>
            <div className="bg-card rounded-lg p-6 shadow-sm h-full">
              <AnimatedText text={t("about.description")} className="text-card-foreground leading-relaxed" />
            </div>
          </AnimatedDiv>

          <AnimatedDiv delay={0.4}>
            <div className="bg-card rounded-lg p-6 shadow-sm h-full">
              <h3 className="text-xl font-semibold mb-6">{t("about.contact")}</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t("about.phone")}</p>
                    <a href="tel:+84336734111" className="font-medium hover:text-primary transition-colors">
                      +84.336.734.111
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t("about.email")}</p>
                    <a href="mailto:contact@thanhdt.dev" className="font-medium hover:text-primary transition-colors">
                      contact@thanhdt.dev
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t("about.address")}</p>
                    <p className="font-medium">{t("about.address.value")}</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
}
