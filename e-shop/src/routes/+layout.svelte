<!-- Global wrapper: wrap every page (header, footer)-->
<script>
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/styles/global.css';
	import Navbar from '$lib/components/Navbar.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />

<main class= "container">
	{@render children()}
</main>

<footer> 
	<p> A catalog of products organized by aesthetic. As an Amazon Associate we may earn from qualifying purchases. Product links go directly to Amazon.com.</p>
	<p> 2026 De*core</p>
</footer>

<style>
	.container {
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}
	
	footer {
		max-width: 1100px;
		margin: 0 auto;
		padding: 2rem 1.5rem;
		text-align: center;
		color: #888;
	}
</style>
