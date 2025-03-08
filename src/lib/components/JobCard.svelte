<script>
    export let job;
    
    // Format the posted date
    const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };
    
    // Calculate days ago
    const getDaysAgo = (dateString) => {
      const posted = new Date(dateString);
      const today = new Date();
      const diffTime = Math.abs(today - posted);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    };
  </script>
  
  <div class="job-card">
    <div class="job-header">
      <div class="company-logo">
        <img src={job.logoUrl || '/images/default-company.png'} alt={`${job.company} logo`} />
      </div>
      <div class="job-meta">
        <h3 class="job-title">
          <a href={`/jobs/${job.id}`}>{job.title}</a>
        </h3>
        <div class="company-name">{job.company}</div>
        <div class="job-location">{job.location}</div>
      </div>
    </div>
    
    <div class="job-body">
      <p class="job-description">{job.description}</p>
    </div>
    
    <div class="job-footer">
      <div class="job-tags">
        <span class="job-type">{job.type}</span>
        <span class="job-salary">{job.salary}</span>
      </div>
      <div class="job-date">
        <span class="days-ago">{getDaysAgo(job.posted)} days ago</span>
      </div>
    </div>
  </div>
  
  <style>
    .job-card {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    
    .job-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
    
    .job-header {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    
    .company-logo {
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .company-logo img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
    
    .job-title {
      margin: 0 0 0.3rem 0;
      font-size: 1.25rem;
    }
    
    .job-title a {
      color: #333;
      text-decoration: none;
    }
    
    .job-title a:hover {
      color: #4a6cf7;
    }
    
    .company-name {
      font-weight: 500;
      color: #555;
      margin-bottom: 0.2rem;
    }
    
    .job-location {
      color: #666;
      font-size: 0.9rem;
    }
    
    .job-body {
      margin-bottom: 1.5rem;
    }
    
    .job-description {
      color: #555;
      line-height: 1.5;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin: 0;
    }
    
    .job-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.9rem;
    }
    
    .job-tags {
      display: flex;
      gap: 0.75rem;
    }
    
    .job-type, .job-salary {
      padding: 0.25rem 0.75rem;
      border-radius: 100px;
      font-weight: 500;
    }
    
    .job-type {
      background-color: #e8f0fe;
      color: #4a6cf7;
    }
    
    .job-salary {
      background-color: #f0f8f0;
      color: #38a169;
    }
    
    .days-ago {
      color: #777;
    }
  </style>