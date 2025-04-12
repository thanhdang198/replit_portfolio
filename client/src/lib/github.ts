import { GitHubUser, GitHubRepo } from "@/types";
import { GITHUB_API } from "./constants";

export async function fetchGitHubUser(username: string): Promise<GitHubUser> {
  const response = await fetch(GITHUB_API.USER(username));
  
  if (!response.ok) {
    throw new Error(`Failed to fetch GitHub user data: ${response.statusText}`);
  }
  
  return response.json();
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const response = await fetch(GITHUB_API.REPOS(username));
  
  if (!response.ok) {
    throw new Error(`Failed to fetch GitHub repos: ${response.statusText}`);
  }
  
  return response.json();
}

// Helper function to format GitHub data for display
export function formatGitHubActivity(user: GitHubUser): string {
  if (!user.created_at) return "Active on GitHub";
  
  const createdDate = new Date(user.created_at);
  const currentDate = new Date();
  const yearDiff = currentDate.getFullYear() - createdDate.getFullYear();
  
  if (yearDiff < 1) {
    return "New to GitHub";
  } else {
    return `${yearDiff}+ years activity`;
  }
}

// Filter repos to exclude forks and get most relevant
export function filterRelevantRepos(repos: GitHubRepo[], limit: number = 6): GitHubRepo[] {
  return repos
    .filter(repo => !repo.fork)
    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
    .slice(0, limit);
}
