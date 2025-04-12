import { AnimatedDiv } from "@/components/ui/animated-div";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { useTranslation } from "@/hooks/useTranslation";
import { GraduationCap, Languages } from "lucide-react";

export default function Education() {
  const { t } = useTranslation();

  return (
    <section id="education" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedDiv className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t("education.title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </AnimatedDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedDiv>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-full">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t("education.title")}</h3>
              </div>
              
              <Timeline>
                <TimelineItem
                  date={t("education.period")}
                  title={t("education.university")}
                  subtitle={t("education.degree")}
                  description={t("education.gpa")}
                  isLast
                />
              </Timeline>
            </div>
          </AnimatedDiv>

          <AnimatedDiv delay={0.2}>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Languages className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t("language.title")}</h3>
              </div>
              
              <div className="p-4 border rounded-lg mb-4">
                <h4 className="font-medium mb-3">{t("language.english")}</h4>
                <ul className="space-y-2 text-muted-foreground pl-6 list-disc text-sm">
                  <li>{t("language.english.cert1")}</li>
                  <li>{t("language.english.cert2")}</li>
                </ul>
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
}
