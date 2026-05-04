<script>
	import { afterNavigate } from '$app/navigation';
	let open = $state(false);

	afterNavigate(() => {
		open = false;
	});
</script>

<header class="topnav">
	<a href={'/'} class="logo">De*core</a>
	<button class="topnav__hamburger" onclick={() => (open = true)}>
		<span class="material-icons-outlined">density_medium</span>
	</button>

	<nav class={`topnav__menu ${open ? 'open' : ''}`}>
		<button class="topnav__close" onclick={() => (open = false)}>
			<span class="material-icons-outlined">close</span>
		</button>
		<a href={'/aesthetics'} onclick={() => open = false}>Aesthetics</a>
		<div class="search-bar">
			<span class="material-icons-outlined">search</span>
			<input class="search" placeholder="Search..." />
		</div>

		<a href={'/favorites'} onclick={() => open = false}>Favorites</a>
	</nav>

	{#if open}
		<div
			class="topnav__backdrop"
			onclick={() => (open = false)}
			onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { open = false; e.preventDefault(); } }}
			role="button"
			tabindex="0"
			aria-label="Close navigation menu"
		></div>
	{/if}
</header>

<style>
  .topnav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #eee;
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
  }

  .topnav__menu {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .topnav__close,
  .topnav__hamburger {
		display: none;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  .topnav__close {
    display: none;
  }

  .topnav__backdrop {
    display: none;
  }

	.search{
		padding: 0px;
	}

	.search-bar {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 0.75rem;
		border: 1px solid #ddd;
		border-radius: 20px;
		background: #f9f9f9;
		transition: border-color 0.2s ease;
	}

	.search-bar:focus-within {
		border-color: #007acc;
		background: white;
	}

	.search-bar .material-icons-outlined {
		color: #666;
		font-size: 1.2rem;
		flex-shrink: 0;
	}

	.search-bar .search {
		border: none;
		background: transparent;
		flex: 1;
		font-size: 0.9rem;
		outline: none;
	}

  @media (max-width: 40em) {
    .topnav__hamburger {
      display: block;
      z-index: 1001;
    }

    .topnav__menu {
      position: fixed;
      top: 0;
      right: 0;
      width: 66vw;
      max-width: 350px;
      height: 100vh;
      background-color: #faf8f3;
      padding: 1.5rem;
      flex-direction: column;
      transform: translateX(100vw);
      transition: transform 0.5s ease-in-out;
      z-index: 1002;
      overflow-y: auto;
    }

    .topnav__menu.open {
      transform: translateX(0);
    }

    .topnav__menu .search-bar {
      width: 100%;
      margin: 1rem 0;
      padding: 0.75rem 1rem;
    }

    .topnav__menu .search-bar .search {
      font-size: 1rem;
    }

    .topnav__backdrop {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(4px);
      z-index: 1001;
    }
  }

  .logo { font-weight: bold; font-size: 1.25rem; text-decoration: none; color: inherit; }

	nav a {
		text-decoration: none;
		color: inherit;
	}

	nav a:focus,
	nav a:active,
	nav a:visited {
		color: inherit;
		outline: none;
	}
</style>