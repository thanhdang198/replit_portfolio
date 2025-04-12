import { AnimatedDiv } from "@/components/ui/animated-div";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { useTranslation } from "@/hooks/useTranslation";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <AnimatedDiv className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t("experience.title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </AnimatedDiv>

        <div className="max-w-3xl mx-auto">
          <Timeline>
            <TimelineItem
              date={t("experience.company1.period")}
              title={t("experience.company1.name")}
              subtitle={t("experience.company1.role")}
              description={t("experience.company1.description")}
              icon={<Briefcase className="h-5 w-5 text-primary" />}
            />
            
            <TimelineItem
              date={t("experience.company2.period")}
              title={t("experience.company2.name")}
              subtitle={t("experience.company2.role")}
              description={t("experience.company2.description")}
              icon={<Briefcase className="h-5 w-5 text-primary" />}
            />
            
            <TimelineItem
              date={t("experience.company3.period")}
              title={t("experience.company3.name")}
              subtitle={t("experience.company3.role")}
              description={t("experience.company3.description")}
              icon={<Briefcase className="h-5 w-5 text-primary" />}
              isLast
            />
          </Timeline>
        </div>
      </div>
    </section>
  );
}
