<!-- Global wrapper: wrap every page (header, footer)-->
<script>
	import favicon from '$lib/assets/favicon.svg';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<a href="/" class="logo">De*core</a>
	<nav>
		<a href="/aesthetics">Aesthetics</a>
		<form>Search</form>
		<a href="/favorites">Favorites</a>  
		
	</nav>
</header>

{@render children()}


<footer> 
	<p> A catalog of products organized by aesthetic. As an Amazon Associate we may earn from qualifying purchases. Product links go directly to Amazon.com.</p>
	<p> 2026 De*core</p>
</footer>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    border-bottom: 1px solid #eee;
  }
  .logo { font-weight: bold; font-size: 1.25rem; text-decoration: none; color: inherit; }
  nav a { margin-left: 1.5rem; text-decoration: none; color: inherit; }
  footer { padding: 2rem; text-align: center; color: #888; }
</style>
