import { Project } from "@/types";

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce analytics, featuring real-time data visualization and sales tracking.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    technologies: ["React", "Redux", "TypeScript", "Chart.js"],
    githubUrl: "https://github.com/doanthanh7/ecommerce-dashboard",
    demoUrl: "https://ecommerce-dashboard-demo.com",
    category: "React"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A full-featured task management application with drag-and-drop interface, task prioritization, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1596720426673-e4e14290f0cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    technologies: ["Vue.js", "Vuex", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/doanthanh7/task-management",
    demoUrl: "https://task-management-demo.com",
    category: "Vue"
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description: "A cross-platform mobile application providing accurate weather forecasts with interactive maps and customizable notifications.",
    image: "https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    technologies: ["React Native", "Redux", "OpenWeatherMap API", "Geolocation"],
    githubUrl: "https://github.com/doanthanh7/weather-app",
    demoUrl: "https://weather-app-demo.com",
    category: "React"
  }
];

export default projectsData;
