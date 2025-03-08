<script>
    // You can add navigation logic here
  </script>
  
  <header>
    <div class="header-container">
      <div class="logo">
        <a href="/">JobBoard</a>
      </div>
      
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/jobs">Browse Jobs</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/post-job" class="button">Post a Job</a></li>
        </ul>
      </nav>
    </div>
  </header>
  
  <style>
    header {
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 1rem 0;
    }
    
    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    
    .logo a {
      font-size: 1.5rem;
      font-weight: bold;
      color: #4a6cf7;
      text-decoration: none;
    }
    
    nav ul {
      display: flex;
      list-style: none;
      gap: 1.5rem;
      margin: 0;
      padding: 0;
    }
    
    nav a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
    }
    
    nav a:hover {
      color: #4a6cf7;
    }
    
    .button {
      background-color: #4a6cf7;
      color: white !important;
      padding: 0.5rem 1rem;
      border-radius: 4px;
    }
    
    .button:hover {
      background-color: #3a5bd9;
    }
  </style>