<script>
    import JobCard from './JobCard.svelte';
    import { jobStore } from '$lib/stores/jobStore';
    
    // Optional limit parameter
    export let limit = undefined;
    export let filters = {
      query: '',
      location: '',
      jobType: ''
    };
    
    // Reactive variable to track filtered jobs
    $: filteredJobs = $jobStore.filter(job => {
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
    
    // Apply limit if provided
    $: displayedJobs = limit ? filteredJobs.slice(0, limit) : filteredJobs;
  </script>
  
  <div class="job-list">
    {#if displayedJobs.length > 0}
      {#each displayedJobs as job (job.id)}
        <JobCard {job} />
      {/each}
    {:else}
      <div class="no-jobs">
        <p>No jobs found matching your criteria.</p>
      </div>
    {/if}
  </div>
  
  <style>
    .job-list {
      margin: 1rem 0;
    }
    
    .no-jobs {
      background-color: #f5f7ff;
      padding: 2rem;
      text-align: center;
      border-radius: 8px;
    }
  </style>