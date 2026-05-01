<script lang="ts">
  const { name, description, slug, image} = $props<{
    name : string;
    description: string;
    slug: string;
    image: string;
  }>();
</script>

<a class="card" href={`/aesthetics/${slug}`}>
	<img src={image} alt={name} class="media image" />

	<div class="overlay"> </div>
  <div class="content">
		<h2>{name}</h2>
    <p>{description}</p>
  </div>
</a>

<style>

	.card {
		position: relative;
		display: block;
		aspect-ratio: 1 / 1;
		border-radius: 14px;
		overflow: hidden;
		text-decoration: none;
		color: white;

		transition: transform 0.2s ease;
	}
  
  img {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;

		transition: transform 0.3s ease;
	}


  	/* DARK OVERLAY */
	.overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to top,
			rgba(0, 0, 0, 0.7),
			rgba(0, 0, 0, 0.2),
			transparent
		);
	}

	.content {
		position: absolute;
		bottom: 0;
		padding: 0.75rem;
		z-index: 2;
	}


  h2 {
		margin: 0 0 0.25rem 0;
    color: #d5d5d5;
	}

	p {
		margin: 0;
		color: #d5d5d5;
		font-size: 0.9rem;
	}

  /**Hover affect*/

  .card:hover img {
		transform: scale(1.08);
	}

	.card:hover {
		transform: translateY(-4px);
	}
</style>