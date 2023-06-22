<script>
  import { onMount } from "svelte";
  import { list } from "$lib/stores";
  import CoLoader from "../../../../../lib/component/Co-Loader.svelte";

  let collection = "spj";
  onMount(() => {
    list.get(collection, { filter: { pemakaian_id: "null" } });
  });

  //   $: console.log("List of ", collection, $list?.[collection]);
</script>

<section>
  <article>
    <h2>Pilih SPJ</h2>
    <CoLoader loading={$list?.[collection]?.loading}>Masih memuat...</CoLoader>

    {#if !$list?.[collection]?.loading && $list?.[collection]?.data}
      <ul>
        {#each $list?.[collection]?.data as d}
          <li>
            <button class="overlay" />
            <h3>No : {d?.no_spj}</h3>
            <div>{d?.keperluan} ({d?.tujuan})</div>
          </li>
        {/each}
      </ul>

      <a href="./" role="button">Batal</a>
    {/if}
  </article>
</section>

<style>
  section {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
  article {
    margin: 2rem;
    padding: 2rem;
    background-color: white;
  }

  button.overlay {
    position: absolute;
    inset: 0;
    /* background: yellow; */
  }
</style>
