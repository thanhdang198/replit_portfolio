import { AnimatedDiv } from "@/components/ui/animated-div";
import { SkillTag } from "@/components/ui/skill-tag";
import { useTranslation } from "@/hooks/useTranslation";
import { Code, Globe, Drill } from "lucide-react";

export default function Skills() {
  const { t } = useTranslation();

  const technicalSkills = [
    "Flutter", "React Native", "Android", "iOS", "Dart", "Java", "Kotlin", "Swift", "TypeScript", "Clean architecture"
  ];
  
  const languages = ["English (B1 certificate)", "Basic english communication"];
  
  const tools = [
    "Scrum Agile", "Git", "CI/CD", "Figma", "XD", "Jira", "Redmine"
  ];

  const technicalSummary = [
    { key: "technical.item1" },
    { key: "technical.item2" },
    { key: "technical.item3" },
    { key: "technical.item4" },
    { key: "technical.item5" },
    { key: "technical.item6" },
    { key: "technical.item7" },
  ];

  return (
    <section id="skills" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedDiv className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t("skills.title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </AnimatedDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <AnimatedDiv delay={0.1} className="bg-card rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 rounded-full">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{t("skills.tech")}</h3>
            </div>
            <div className="flex flex-wrap">
              {technicalSkills.map((skill, index) => (
                <SkillTag 
                  key={skill} 
                  name={skill} 
                  delay={index * 0.05} 
                />
              ))}
            </div>
          </AnimatedDiv>

          {/* Languages */}
          <AnimatedDiv delay={0.2} className="bg-card rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 rounded-full">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{t("skills.languages")}</h3>
            </div>
            <div className="flex flex-wrap">
              {languages.map((lang, index) => (
                <SkillTag 
                  key={lang} 
                  name={lang} 
                  delay={index * 0.05} 
                />
              ))}
            </div>
          </AnimatedDiv>

          {/* Tools */}
          <AnimatedDiv delay={0.3} className="bg-card rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 rounded-full">
                <Drill className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{t("skills.tools")}</h3>
            </div>
            <div className="flex flex-wrap">
              {tools.map((tool, index) => (
                <SkillTag 
                  key={tool} 
                  name={tool} 
                  delay={index * 0.05} 
                />
              ))}
            </div>
          </AnimatedDiv>
        </div>

        {/* Technical Summary */}
        <AnimatedDiv delay={0.4} className="mt-12 bg-card rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-6">{t("technical.title")}</h3>
          <ul className="space-y-3 list-disc pl-6">
            {technicalSummary.map((item, index) => (
              <AnimatedDiv key={item.key} delay={0.1 * index} direction="right">
                <li className="text-foreground">{t(item.key)}</li>
              </AnimatedDiv>
            ))}
          </ul>
        </AnimatedDiv>
      </div>
    </section>
  );
}
