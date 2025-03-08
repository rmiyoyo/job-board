import { writable } from 'svelte/store';

// Create a writable store for jobs
export const jobStore = writable([]);

// Filter jobs function
export const filterJobs = (jobs, filters) => {
  return jobs.filter(job => {
    // Filter by search query
    if (filters.query && !job.title.toLowerCase().includes(filters.query.toLowerCase()) && 
        !job.company.toLowerCase().includes(filters.query.toLowerCase()) &&
        !job.description.toLowerCase().includes(filters.query.toLowerCase())) {
      return false;
    }
    
    // Filter by location
    if (filters.location && job.location.toLowerCase() !== filters.location.toLowerCase()) {
      return false;
    }
    
    // Filter by job type
    if (filters.jobType && job.type.toLowerCase() !== filters.jobType.toLowerCase()) {
      return false;
    }
    
    return true;
  });
};