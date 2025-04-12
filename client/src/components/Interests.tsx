import { Heart } from "lucide-react";
import { AnimatedDiv } from "@/components/ui/animated-div";
import { useTranslation } from "@/hooks/useTranslation";
import { SkillTag } from "@/components/ui/skill-tag";

export default function Interests() {
  const { t } = useTranslation();

  const interests = [
    t("interests.item1"),
    t("interests.item2"),
    t("interests.item3"),
    t("interests.item4"),
  ];

  return (
    <section id="interests" className="py-16">
      <div className="container mx-auto px-4">
        <AnimatedDiv className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t("interests.title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </AnimatedDiv>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {interests.map((interest, index) => (
              <SkillTag
                key={index}
                name={interest}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}