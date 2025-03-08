<script>
    import SearchBar from '$lib/components/SearchBar.svelte';
    import JobList from '$lib/components/JobList.svelte';
    import { onMount } from 'svelte';
    import { jobStore } from '$lib/stores/jobStore';
    import { sampleJobs } from '$lib/data/sampleJobs.js';
    
    // Initialize with sample data
    onMount(() => {
      jobStore.set(sampleJobs);
    });
  </script>
  
  <svelte:head>
    <title>JobBoard - Find Your Next Career Opportunity</title>
  </svelte:head>
  
  <section class="hero">
    <div class="hero-content">
      <h1>Find Your Dream Job</h1>
      <p>Browse thousands of job opportunities from top companies</p>
      <SearchBar />
    </div>
  </section>
  
  <section class="featured-jobs">
    <div class="section-header">
      <h2>Featured Jobs</h2>
      <a href="/jobs" class="view-all">View All Jobs</a>
    </div>
    
    <JobList limit={6} />
  </section>
  
  <section class="categories">
    <h2>Popular Categories</h2>
    <div class="category-grid">
      <div class="category-card">
        <h3>Development</h3>
        <p>1,204 jobs available</p>
      </div>
      <div class="category-card">
        <h3>Design</h3>
        <p>834 jobs available</p>
      </div>
      <div class="category-card">
        <h3>Marketing</h3>
        <p>952 jobs available</p>
      </div>
      <div class="category-card">
        <h3>Finance</h3>
        <p>528 jobs available</p>
      </div>
    </div>
  </section>
  
  <style>
    .hero {
      background-color: #f5f7ff;
      padding: 4rem 1rem;
      text-align: center;
      margin-bottom: 2rem;
    }
    
    .hero-content {
      max-width: 800px;
      margin: 0 auto;
    }
    
    .hero h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: #222;
    }
    
    .hero p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      color: #555;
    }
    
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }
    
    .view-all {
      color: #4a6cf7;
      text-decoration: none;
    }
    
    .featured-jobs, .categories {
      margin-bottom: 3rem;
    }
    
    .category-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1.5rem;
    }
    
    .category-card {
      background-color: #f5f7ff;
      padding: 1.5rem;
      border-radius: 8px;
      transition: transform 0.2s;
    }
    
    .category-card:hover {
      transform: translateY(-5px);
    }
    
    .category-card h3 {
      margin-bottom: 0.5rem;
      color: #222;
    }
    
    .category-card p {
      color: #666;
    }
  </style>