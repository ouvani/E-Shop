<!-- Aesthetic overview grid-->
<script lang="ts">
  import { aesthetics } from '$lib/data/aesthetics';
  import type { Aesthetic, AestheticCategory } from '$lib/data/aesthetics';

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

{#each Object.entries(grouped) as [catalog, items]}
  {#if items.length> 0}
    <section>
      <h2>{catalog}</h2>
      <div>
        {#each items as item}
          <a class="card" href={`/aesthetics/${item.slug}`}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>          
          </a>
        {/each}
      </div>

    </section>
  {/if}
{/each}
