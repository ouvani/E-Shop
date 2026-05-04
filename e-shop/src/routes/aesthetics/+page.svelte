<!-- Aesthetic overview grid-->
<script lang="ts">
  import { aesthetics } from '$lib/data/aesthetics';
  import type { Aesthetic, AestheticCategory } from '$lib/data/aesthetics';

  import AestheticCard from '$lib/components/AestheticCard.svelte';

  let grouped: Record<AestheticCategory, Aesthetic[]> = {
    home: [],
    tech: [],
    lifestyle: [],
    fashion: [],
    "": []
  };

  aesthetics.forEach((item) => {
    grouped[item.category].push(item);
  });

</script>

<h1>Aesthetics</h1>

{#each Object.entries(grouped) as [category, items]}
  {#if items.length> 0}
    <section>

      {#if category == "home"}
        <h2>Home</h2>
      {:else if category == "tech"}
        <h2>Tech</h2>
      {:else if category == "lifestyle"}
        <h2>Lifestyle</h2>
      {:else if category == "fashion"}
        <h2>Fashion</h2>
      {/if}

      
      <div class="grid">
        {#each items as item}
            <AestheticCard name={item.name} description={item.description} slug={item.slug} image={item.image} />
        {/each}
      </div>

    </section>
  {/if}
{/each}

<style>
.grid {
	display: grid;
	gap: 1rem;

	/* mobile default */
	grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 768px) {
	.grid {
		grid-template-columns: repeat(3, 1fr);
	}
}

@media (min-width: 1024px) {
	.grid {
		grid-template-columns: repeat(4, 1fr);
	}
}



h2{
  text-align: center;
  margin-top: 1.5rem;
}

</style>
