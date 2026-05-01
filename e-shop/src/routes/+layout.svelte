<!-- Global wrapper: wrap every page (header, footer)-->
<script>
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/styles/global.css';
	let { children } = $props();
	let open = false;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="topnav">
	<a href="/" class="logo">De*core</a>
	<button class="topnav__hamburger" on:click={() => (open = true)}>
		<span class="material-icons-outlined">density_medium</span>
	</button>	

	<nav class={`topnav__menu ${open ? 'open' : ''}`}>
		<button class="topnav__close" on:click={() => (open = false)}>
			<span class="material-icons-outlined">close</span>
		</button>
		<a href="/aesthetics">Aesthetics</a>
		<input class="search" placeholder="Search..." />
		<a href="/favorites">Favorites</a>
	</nav>

</header>

<main class= "container">
	{@render children()}
</main>

<footer> 
	<p> A catalog of products organized by aesthetic. As an Amazon Associate we may earn from qualifying purchases. Product links go directly to Amazon.com.</p>
	<p> 2026 De*core</p>
</footer>

<style>

  .topnav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #eee;
    max-width: 1100px;
    margin: 0 auto;
  }

  .topnav__menu {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .topnav__close,
  .topnav__hamburger {
    background: none;
    border: none;
    padding: 0;
  }

  .topnav__close {
    display: none;
  }

  @media (max-width: 40em) {
    .topnav__hamburger {
      display: block;
    }

    .topnav__menu {
      position: fixed;
      background-color: antiquewhite;
      inset: 0;
      padding: 1.5rem;
      flex-direction: column;
      transform: translateX(100vw);
      transition: transform 0.5s ease-in-out;
    }

    .topnav__menu.open {
      transform: translateX(0);
    }

    .topnav__close {
      display: block;
      margin-inline-start: auto;
      margin-block-end: 6rem;
    }
  }

  .logo { font-weight: bold; font-size: 1.25rem; text-decoration: none; color: inherit; }
  
	.container {
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}
	
	nav a { text-decoration: none;}

	footer {
		max-width: 1100px;
		margin: 0 auto;
		padding: 2rem 1.5rem;
		text-align: center;
		color: #888;
	}


</style>
