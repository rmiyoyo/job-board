<footer>
    <div class="footer-container">
      <div class="footer-grid">
        <div class="footer-section">
          <h3>JobBoard</h3>
          <p>Find your dream job or the perfect candidate with JobBoard. Connect with opportunities worldwide.</p>
          <div class="social-links">
            <a href="/" aria-label="Facebook" on:click|preventDefault>
              <span class="social-icon">📘</span>
            </a>
            <a href="/" aria-label="Twitter" on:click|preventDefault>
              <span class="social-icon">🐦</span>
            </a>
            <a href="/" aria-label="LinkedIn" on:click|preventDefault>
              <span class="social-icon">🔗</span>
            </a>
            <a href="/" aria-label="Instagram" on:click|preventDefault>
              <span class="social-icon">📷</span>
            </a>
          </div>
          
        </div>
        
        <div class="footer-section">
          <h4>For Job Seekers</h4>
          <ul>
            <li><a href="/browse-jobs">Browse Jobs</a></li>
            <li><a href="/career-advice">Career Advice</a></li>
            <li><a href="/resume-tips">Resume Tips</a></li>
            <li><a href="/interview-prep">Interview Prep</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>For Employers</h4>
          <ul>
            <li><a href="/post-job">Post a Job</a></li>
            <li><a href="/browse-resumes">Browse Resumes</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/employer-resources">Resources</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {new Date().getFullYear()} JobBoard. All rights reserved.</p>
      </div>
    </div>
  </footer>
  
  <style>
    footer {
      background-color: #f8f9fa;
      padding: 3rem 0 1.5rem;
      margin-top: 2rem;
    }
    
    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    
    .footer-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }
    
    .footer-section h3 {
      font-size: 1.5rem;
      color: #333;
      margin-bottom: 1rem;
    }
    
    .footer-section h4 {
      font-size: 1.1rem;
      color: #333;
      margin-bottom: 1rem;
    }
    
    .footer-section p {
      color: #666;
      line-height: 1.5;
      margin-bottom: 1rem;
    }
    
    .social-links {
      display: flex;
      gap: 0.75rem;
      margin-top: 1rem;
    }
    
    .social-icon {
      font-size: 1.25rem;
    }
    
    .footer-section ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .footer-section li {
      margin-bottom: 0.5rem;
    }
    
    .footer-section a {
      color: #555;
      text-decoration: none;
      transition: color 0.2s;
    }
    
    .footer-section a:hover {
      color: #4a6cf7;
    }
    
    .footer-bottom {
      padding-top: 1.5rem;
      border-top: 1px solid #eaeaea;
      text-align: center;
      color: #777;
      font-size: 0.9rem;
    }
  </style>