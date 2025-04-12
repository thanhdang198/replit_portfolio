import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useGitHubUser } from '@/hooks/useGitHubData';
import { Skeleton } from '@/components/ui/skeleton';
import { Github, BarChart2 } from 'lucide-react';
import { formatGitHubActivity } from '@/lib/github';

interface GitHubCalendarProps {
  username: string;
}

const GitHubCalendar = ({ username }: GitHubCalendarProps) => {
  const { t } = useTranslation();
  const { data: user, isLoading, isError } = useGitHubUser(username);
  const containerRef = useRef<HTMLDivElement>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const iframe = document.createElement('iframe');
      iframe.style.width = '100%';
      iframe.style.height = '160px';
      iframe.style.border = 'none';
      iframe.style.overflow = 'hidden';
      iframe.onload = () => setIframeLoaded(true);
      iframe.src = `https://github-contributions-api.jogruber.de/embed/${username}?theme=native&animations=true`;
      
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(iframe);
    }
    
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [username]);

  if (isError) {
    return (
      <div className="github-calendar bg-white p-6 rounded-lg shadow-sm overflow-hidden">
        <div className="flex justify-center items-center h-40">
          <div className="text-center text-zinc-500">
            <p>Failed to load GitHub data</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="github-calendar bg-white p-6 rounded-lg shadow-sm overflow-hidden">
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center">
          <Github className="h-5 w-5 mr-2 text-primary" />
          <h4 className="font-medium">GitHub Activity</h4>
        </div>
        
        {!isLoading && user && (
          <div className="flex items-center text-sm text-zinc-600">
            <span className="mr-4">
              <strong>{user.public_repos}</strong> repos
            </span>
            <span className="mr-4">
              <strong>{user.followers}</strong> followers
            </span>
            <span>
              <strong>{formatGitHubActivity(user)}</strong>
            </span>
          </div>
        )}
      </div>
      
      {isLoading ? (
        <Skeleton className="w-full h-40" />
      ) : (
        <motion.div 
          ref={containerRef}
          className="overflow-x-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: iframeLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* GitHub contribution graph is loaded via iframe */}
          {!iframeLoaded && (
            <div className="flex justify-center items-center h-40 bg-slate-50 rounded-lg">
              <div className="text-center">
                <BarChart2 className="text-primary/60 h-8 w-8 mx-auto mb-2" />
                <p className="text-zinc-500">Loading GitHub contribution graph...</p>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default GitHubCalendar;
