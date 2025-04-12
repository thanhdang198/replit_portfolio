// Social links
export const GITHUB_USERNAME = "thanhdt-vietmap";
export const LINKEDIN_USERNAME = "trongthanhdang";
export const EMAIL = "contact@thanhdt.dev";
export const PHONE = "+84 336 734 111";
export const LOCATION = "Binh Tan District, HCM City";
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
export const PROJECT_FILTERS = ["All", "Flutter", "React Native", "Android", "iOS"];

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
