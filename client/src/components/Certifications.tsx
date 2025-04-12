import { Award } from "lucide-react";
import { AnimatedDiv } from "@/components/ui/animated-div";
import { useTranslation } from "@/hooks/useTranslation";

export default function Certifications() {
  const { t } = useTranslation();

  const certifications = [
    {
      name: t("certifications.cert1.name"),
      issuer: t("certifications.cert1.issuer"),
      date: t("certifications.cert1.date"),
    },
    {
      name: t("certifications.cert2.name"),
      issuer: t("certifications.cert2.issuer"),
      date: t("certifications.cert2.date"),
    },
  ];

  return (
    <section id="certifications" className="py-16">
      <div className="container mx-auto px-4">
        <AnimatedDiv className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t("certifications.title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </AnimatedDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <AnimatedDiv
              key={index}
              delay={0.1 * index}
              className="bg-card rounded-lg p-6 shadow-sm border border-border/50 transition-all hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full mt-1">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">{cert.name}</h3>
                  <p className="text-muted-foreground mt-1">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground mt-1">{cert.date}</p>
                </div>
              </div>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  );
}