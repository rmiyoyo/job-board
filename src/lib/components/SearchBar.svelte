<script>
    import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();
    
    let query = '';
    let location = '';
    let jobType = '';
    
    const handleSearch = () => {
      dispatch('search', {
        query,
        location,
        jobType
      });
    };
  </script>
  
  <div class="search-bar">
    <div class="search-form">
      <div class="search-group">
        <label for="query">What</label>
        <div class="input-icon">
          <span class="icon">🔍</span>
          <input 
            type="text" 
            id="query" 
            placeholder="Job title, keywords, or company" 
            bind:value={query}
          />
        </div>
      </div>
      
      <div class="search-group">
        <label for="location">Where</label>
        <div class="input-icon">
          <span class="icon">📍</span>
          <input 
            type="text" 
            id="location" 
            placeholder="City or remote" 
            bind:value={location}
          />
        </div>
      </div>
      
      <div class="search-group">
        <label for="job-type">Job Type</label>
        <div class="select-wrapper">
          <select id="job-type" bind:value={jobType}>
            <option value="">All Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
            <option value="Remote">Remote</option>
          </select>
        </div>
      </div>
      
      <button class="search-button" on:click={handleSearch}>
        Search Jobs
      </button>
    </div>
  </div>
  
  <style>
    .search-bar {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      padding: 1.5rem;
      margin-top: 1.5rem;
    }
    
    .search-form {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr auto;
      gap: 1rem;
      align-items: end;
    }
    
    @media (max-width: 768px) {
      .search-form {
        grid-template-columns: 1fr;
      }
    }
    
    .search-group {
      display: flex;
      flex-direction: column;
    }
    
    label {
      font-size: 0.9rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
      color: #555;
    }
    
    .input-icon {
      position: relative;
    }
    
    .icon {
      position: absolute;
      left: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      color: #999;
    }
    
    input, select {
      width: 100%;
      padding: 0.75rem;
      padding-left: 2.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
    }
    
    select {
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M10.293 3.293L6 7.586 1.707 3.293A1 1 0 00.293 4.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 1rem center;
      padding-right: 2.5rem;
    }
    
    .search-button {
      background-color: #4a6cf7;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    
    .search-button:hover {
      background-color: #3a5bd9;
    }
  </style>