<script lang="ts">
  import { aesthetics } from "$lib/data/aesthetics";

  type AestheticItem = typeof aesthetics[number];
  const cards: AestheticItem[] = aesthetics.slice(0, 10);
  const itemsPerPage = 4;

  let page = $state(0);
  const maxPage = Math.max(0, Math.ceil(cards.length / itemsPerPage) - 1);
  let visibleCards = $state(cards.slice(0, itemsPerPage));

  function updateVisibleCards(newPage: number) {
    visibleCards = cards.slice(newPage * itemsPerPage, newPage * itemsPerPage + itemsPerPage);
  }

  function prev() {
    if (page > 0) {
      page -= 1;
      updateVisibleCards(page);
    }
  }

  function next() {
    if (page < maxPage) {
      page += 1;
      updateVisibleCards(page);
    }
  }
</script>

<section class="item-carousel">
  <div class="carousel-header">
    <div>
      <p class="subtitle">Handpicked for you</p>
      <h2>Browse Themes</h2>
    </div>
  </div>

  <div class="carousel-frame">
    <button class="nav-button prev" onclick={prev} disabled={page === 0} aria-label="Previous items">
      ‹
    </button>

    <div class="cards-row">
      {#each visibleCards as item}
        <a class="item-card" href={`/aesthetics/${item.slug}`}>
          <div class="image-wrap">
            <img src={item.image} alt={item.name} />
          </div>
          <div class="card-text">
            <strong>{item.name}</strong>
            <p>{item.description}</p>
          </div>
        </a>
      {/each}
    </div>

    <button class="nav-button next" onclick={next} disabled={page === maxPage} aria-label="Next items">
      ›
    </button>
  </div>

  {#if page === maxPage}
    <div class="carousel-footer">
      <a class="view-more-end" href="/aesthetics">View more</a>
    </div>
  {/if}
</section>

<style>
  .item-carousel {
    width: 100%;
    max-width: 1180px;
    margin: 2rem auto;
    padding: 0 0.5rem;
    box-sizing: border-box;
  }

  .carousel-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    margin: 0 0 0.35rem;
    color: #555;
    font-size: 0.88rem;
    text-transform: uppercase;
    letter-spacing: 0.14em;
  }

  h2 {
    margin: 0;
    font-size: clamp(1.7rem, 2.2vw, 2.3rem);
  }

  .carousel-frame {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 1rem;
  }

  .cards-row {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
  }

  .item-card {
    display: flex;
    flex-direction: column;
    border-radius: 18px;
    overflow: hidden;
    background: white;
    color: #111;
    text-decoration: none;
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .item-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 22px 55px rgba(15, 23, 42, 0.12);
  }

  .image-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: #f5f5f5;
  }

  .image-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .card-text {
    padding: 1rem;
  }

  .card-text strong {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  .card-text p {
    margin: 0;
    color: #555;
    line-height: 1.6;
    font-size: 0.95rem;
  }

  .nav-button {
    width: 3rem;
    height: 3rem;
    border: 1px solid #ddd;
    border-radius: 50%;
    background: white;
    color: #111;
    font-size: 1.25rem;
    cursor: pointer;
    display: grid;
    place-items: center;
  }

  .nav-button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .carousel-footer {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  .view-more-end {
    border: 1px solid #111;
    background: #111;
    color: #fff;
    padding: 0.8rem 1.2rem;
    border-radius: 999px;
    cursor: pointer;
    text-decoration: none;
  }

  @media (max-width: 1024px) {
    .cards-row {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (max-width: 780px) {
    .carousel-header {
      flex-direction: column;
      align-items: stretch;
    }

    .carousel-frame {
      grid-template-columns: 1fr;
    }

    .cards-row {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .nav-button {
      justify-self: center;
    }
  }

  @media (max-width: 560px) {
    .cards-row {
      grid-template-columns: 1fr;
    }
  }
</style>