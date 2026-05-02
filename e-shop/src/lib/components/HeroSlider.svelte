<script lang="ts">
	import { onMount } from 'svelte';
	import { heroImages } from '$lib/data/hero-slider';
	import type { HeroImage } from '$lib/data/hero-slider';

	let current = $state(0);
	let slides: HeroImage[] = heroImages;

	onMount(() => {
		const interval = setInterval(() => {
			current = (current + 1) % slides.length;
		}, 6000);

		return () => clearInterval(interval);
	});
</script>

<section class="hero">
	<div class="slider">
		{#each slides as slide, i}
			<img
				src={slide.src}
				alt={slide.title}
				class={i === current ? "active" : ""}
			/>
		{/each}

		<!-- OVERLAY (this is what was broken before) -->
		{#if slides.length > 0}
			<div class="hero-overlay">
				<h1>{slides[current].title}</h1>
				<p>{slides[current].subtitle}</p>

				<a class="shop-now" href={slides[current].link}>
					Shop Now
				</a>
			</div>
		{/if}
	</div>

	<!-- DOTS -->
	<div class="dots">
		{#each slides as _, i}
			<button
				class={i === current ? "dot active" : "dot"}
				onclick={() => (current = i)}
				aria-label={`Go to slide ${i + 1}`}
			></button>
		{/each}
	</div>
</section>

<style>
	.hero {
		margin-top: 1rem;
		margin-bottom: 2rem;
	}

	.slider {
		position: relative;
		width: 100%;
		min-height: 450px;
		border-radius: 16px;
		overflow: hidden;
	}

/* ---------------- IMAGES ---------------- */
	img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;

		opacity: 0;
		transition: opacity 0.6s ease;
		z-index: 1;
	}

	img.active {
		opacity: 1;
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		z-index: 2;

		display: flex;
		flex-direction: column;
    align-items: center;
		justify-content: flex-end;

		padding: 1.5rem;

		color: white;

		background: linear-gradient(
			to top,
			rgba(0, 0, 0, 0.55),
			transparent 60%
		);
	}

	.hero-overlay h2 {
		font-size: 1.8rem;
		margin: 0;
		font-family: var(--font-heading);
	}

	.hero-overlay p {
		margin: 0.5rem 0 1rem;
		opacity: 0.85;
	}

	.shop-now {
		background: white;
		color: black;
		text-decoration: none;

		padding: 0.6rem 1rem;
		border-radius: 8px;
		width: fit-content;

		font-weight: 500;
	}

	.dots {
		display: flex;
		justify-content: center;
		margin-top: 0.5rem;
		gap: 0.4rem;
	}

	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		border: none;
		background: #ccc;
		cursor: pointer;
	}

	.dot.active {
		background: #111;
	}
</style>