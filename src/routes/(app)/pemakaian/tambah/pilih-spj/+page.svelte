<script>
  import { onMount } from "svelte";
  import { list, obj } from "$lib/stores";
  import CoLoader from "$lib/component/Co-Loader.svelte";
  import { goto } from "$app/navigation";

  let collection = "spj";
  onMount(() => {
    list.get(collection, { filter: { pemakaian_id: "null" } });
  });

  function onChoose(data) {
    obj.set("pilih-spj", data);
    goto("./");
  }

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
            <button class="overlay" on:click={() => onChoose(d)} />
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
    background: transparent;
    height: 100%;
    border: none;
  }
</style>
