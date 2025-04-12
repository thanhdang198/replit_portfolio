import { TechnicalSkill, ToolSkill, Language } from "@/types";

export const technicalSkills: TechnicalSkill[] = [
  {
    id: 1,
    name: "JavaScript/TypeScript",
    level: 90
  },
  {
    id: 2,
    name: "React & Redux",
    level: 85
  },
  {
    id: 3,
    name: "HTML5 & CSS3/SCSS",
    level: 95
  },
  {
    id: 4,
    name: "Vue.js",
    level: 80
  },
  {
    id: 5,
    name: "REST API/GraphQL",
    level: 85
  }
];

export const developmentTools: ToolSkill[] = [
  { id: 1, name: "Git", icon: "git-alt" },
  { id: 2, name: "GitHub", icon: "github" },
  { id: 3, name: "GitLab", icon: "code-branch" },
  { id: 4, name: "CLI", icon: "terminal" },
  { id: 5, name: "VS Code", icon: "laptop-code" }
];

export const frontendLibraries: ToolSkill[] = [
  { id: 1, name: "React", icon: "react" },
  { id: 2, name: "Vue", icon: "vuejs" },
  { id: 3, name: "jQuery", icon: "js" },
  { id: 4, name: "Bootstrap", icon: "bootstrap" },
  { id: 5, name: "Tailwind CSS", icon: "wind" },
  { id: 6, name: "Material UI", icon: "cube" }
];

export const buildTools: ToolSkill[] = [
  { id: 1, name: "Webpack", icon: "node-js" },
  { id: 2, name: "Vite", icon: "bolt" },
  { id: 3, name: "Gulp", icon: "tasks" }
];

export const testingTools: ToolSkill[] = [
  { id: 1, name: "Jest", icon: "vial" },
  { id: 2, name: "React Testing Library", icon: "check-circle" },
  { id: 3, name: "Cypress", icon: "bug" }
];

export const languages: Language[] = [
  {
    id: 1,
    name: "Vietnamese",
    level: 95,
    description: "Native"
  },
  {
    id: 2,
    name: "English",
    level: 80,
    description: "Professional"
  },
  {
    id: 3,
    name: "Japanese",
    level: 30,
    description: "Basic"
  }
];
