import { useQuery } from "@tanstack/react-query";
import { GitHubUser, GitHubRepo } from "@/types";
import { fetchGitHubUser, fetchGitHubRepos, filterRelevantRepos } from "@/lib/github";
import { GITHUB_USERNAME } from "@/lib/constants";

export function useGitHubUser(username: string = GITHUB_USERNAME) {
  return useQuery<GitHubUser>({
    queryKey: [`/api/github/${username}`],
    staleTime: 1000 * 60 * 60, // 1 hour
  });
}

export function useGitHubRepos(username: string = GITHUB_USERNAME) {
  const { data: repos, ...rest } = useQuery<GitHubRepo[]>({
    queryKey: [`/api/github/${username}/repos`],
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  // Processed repos for display
  const filteredRepos = repos ? filterRelevantRepos(repos) : [];

  return {
    repos: filteredRepos,
    ...rest
  };
}
