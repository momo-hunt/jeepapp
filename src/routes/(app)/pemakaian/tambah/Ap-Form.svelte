<script>
  import { onMount } from "svelte";
  import { list } from "$lib/stores";
  import { goto } from "$app/navigation";
  import CoForm from "$lib/component/Co-Form.svelte";
  import ApField from "./Ap-Field.svelte";
  import CoLoader from "$lib/component/Co-Loader.svelte";

  let collection = "rekap";

  // $: console.log($list?.[collection]);

  $: loading = $list?.[collection]?.loading;
  $: data = $list?.[collection]?.data ? $list?.[collection]?.data[0] : null;

  function onProcess() {
    goto("./");
  }

  function onSuccess(e) {
    console.log("success", e.detail);
  }

  onMount(() => {
    list.get(collection);
  });
</script>

<CoLoader {loading} />

{#if !loading && data}
  <CoForm
    action="/?/add"
    title="Tambah Pemakaian"
    on:process={onProcess}
    on:success={onSuccess}
    on:error
  >
    <ApField {data} />
  </CoForm>
{/if}
