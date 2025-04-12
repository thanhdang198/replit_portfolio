import { Trophy } from "lucide-react";
import { AnimatedDiv } from "@/components/ui/animated-div";
import { useTranslation } from "@/hooks/useTranslation";

export default function Achievements() {
  const { t } = useTranslation();

  const achievements = [
    t("achievements.item1"),
    t("achievements.item2"),
    t("achievements.item3"),
  ];

  return (
    <section id="achievements" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedDiv className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t("achievements.title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </AnimatedDiv>

        <div className="max-w-3xl mx-auto">
          <ul className="space-y-5">
            {achievements.map((achievement, index) => (
              <AnimatedDiv
                key={index}
                delay={0.1 * index}
                className="flex items-start gap-4"
              >
                <div className="bg-primary/10 p-2 rounded-full mt-1 flex-shrink-0">
                  <Trophy className="h-5 w-5 text-primary" />
                </div>
                <p className="text-foreground/90">{achievement}</p>
              </AnimatedDiv>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}