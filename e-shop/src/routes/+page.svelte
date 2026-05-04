<!-- Home (De*core dashboard) -->
<script>
  import HeroSlider from "$lib/components/HeroSlider.svelte";
  import Carousel from "../lib/components/Carousel.svelte";
  import { res } from "$lib/data/products";

  console.log(JSON.stringify(res));
</script>

<HeroSlider></HeroSlider>

<div class= "shop-by-theme">

</div>


<Carousel></Carousel>
<h1>Shop by Theme</h1>
<p>From Dark Academia to Bimbocore - find your vibe.</p>