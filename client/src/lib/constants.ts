// Social links
export const GITHUB_USERNAME = "doanthanh7";
export const LINKEDIN_USERNAME = "thanhdt7";
export const EMAIL = "thanhdt.dev@gmail.com";
export const PHONE = "+84 917 xxx xxx";
export const LOCATION = "Hanoi, Vietnam";
export const WEBSITE = "https://www.thanhdt.dev";

// Section IDs
export const SECTION_IDS = {
  HERO: "hero",
  ABOUT: "about",
  EXPERIENCE: "experience",
  SKILLS: "skills",
  PROJECTS: "projects",
  CONTACT: "contact"
};

// Download CV URLs
export const CV_DOWNLOAD_URL = {
  EN: "/api/download-cv?lang=en",
  VI: "/api/download-cv?lang=vi"
};

// GitHub API URLs
export const GITHUB_API = {
  USER: (username: string) => `/api/github/${username}`,
  REPOS: (username: string) => `/api/github/${username}/repos`
};

// Project filters
export const PROJECT_FILTERS = ["All", "React", "Vue", "TypeScript"];

// Languages
export const LANGUAGES = {
  EN: "en",
  VI: "vi"
};

// Social media URLs
export const SOCIAL_LINKS = {
  GITHUB: (username: string) => `https://github.com/${username}`,
  LINKEDIN: (username: string) => `https://linkedin.com/in/${username}`,
  EMAIL: (email: string) => `mailto:${email}`
};
