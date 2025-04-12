import { AnimatedText } from "@/components/ui/animated-text";
import { AnimatedDiv } from "@/components/ui/animated-div";
import { Button } from "@/components/ui/button";
import { Download, Send } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimatedDiv className="mb-4">
              <p className="text-lg text-primary font-medium mb-2">
                {t("hero.greeting")}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <AnimatedText text={t("hero.name")} className="leading-tight" />
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
                <AnimatedText text={t("hero.title")} />
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-lg">
                {t("hero.subtitle")}
              </p>
            </AnimatedDiv>

            <AnimatedDiv delay={0.4} className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full">
                <a href="#contact" className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  {t("hero.contact")}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                <a 
                  href="/DANGTRONGTHANH_CV.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  {t("hero.cta")}
                </a>
              </Button>
            </AnimatedDiv>
          </div>

          <AnimatedDiv
            delay={0.2}
            direction="left"
            className="relative hidden lg:block"
          >
            <div className="relative rounded-lg overflow-hidden bg-gradient-to-tr from-primary/20 to-primary/5 aspect-square flex items-center justify-center">
              <img 
                src="/profile.png" 
                alt="Đặng Trọng Thành" 
                className="object-cover w-full h-full"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
}
