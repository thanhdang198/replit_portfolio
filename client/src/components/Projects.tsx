import { AnimatedDiv } from "@/components/ui/animated-div";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";
import { FolderGit2, Users } from "lucide-react";

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      nameKey: "projects.project1.name",
      periodKey: "projects.project1.period",
      descriptionKey: "projects.project1.description",
      roleKey: "projects.project1.role",
      teamKey: "projects.project1.team",
      techKey: "projects.project1.tech",
    },
    {
      id: 2,
      nameKey: "projects.project2.name",
      periodKey: "projects.project2.period",
      descriptionKey: "projects.project2.description",
      roleKey: "projects.project2.role",
      teamKey: "projects.project2.team",
      techKey: "projects.project2.tech",
    },
    {
      id: 3,
      nameKey: "projects.project3.name",
      periodKey: "projects.project3.period",
      descriptionKey: "projects.project3.description",
      roleKey: "projects.project3.role",
      teamKey: "projects.project3.team",
      techKey: "projects.project3.tech",
    },
    {
      id: 4,
      nameKey: "projects.project4.name",
      periodKey: "projects.project4.period",
      descriptionKey: "projects.project4.description",
      roleKey: "projects.project4.role",
      teamKey: "projects.project4.team",
      techKey: "projects.project4.tech",
    },
    {
      id: 5,
      nameKey: "projects.project5.name",
      periodKey: "projects.project5.period",
      descriptionKey: "projects.project5.description",
      roleKey: "projects.project5.role",
      teamKey: "projects.project5.team",
      techKey: "projects.project5.tech",
    },
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <AnimatedDiv className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t("projects.title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </AnimatedDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedDiv key={project.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full overflow-hidden border border-border/50 hover:border-primary/50 transition-colors shadow-sm hover:shadow-md">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="text-xs font-normal">
                        {t(project.periodKey)}
                      </Badge>
                      <FolderGit2 className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{t(project.nameKey)}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {t(project.descriptionKey)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm">
                      <div className="flex items-center gap-2 mb-2 text-primary font-medium">
                        <Users className="h-4 w-4" />
                        <span>{t(project.roleKey)}</span>
                      </div>
                      <p className="text-muted-foreground text-xs mb-1">{t(project.teamKey)}</p>
                      <p className="text-muted-foreground text-xs whitespace-pre-line">{t(project.techKey)}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
