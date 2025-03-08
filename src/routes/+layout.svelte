<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import "../app.css";
  </script>
  
  <div class="app">
    <Header />
    
    <main>
      <slot />
    </main>
    
    <Footer />
  </div>
  
  <style>
    .app {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    
    main {
      flex: 1;
      padding: 1rem;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
    }
  </style>