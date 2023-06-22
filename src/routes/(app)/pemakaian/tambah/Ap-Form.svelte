<script>
  import { onMount } from "svelte";
  import { list, obj } from "$lib/stores";
  import { goto } from "$app/navigation";
  import CoForm from "$lib/component/Co-Form.svelte";
  import ApField from "./Ap-Field.svelte";
  import CoLoader from "$lib/component/Co-Loader.svelte";
  import { date } from "$lib/util";

  let collection = "rekap";

  // $: console.log($list?.[collection]);
  let defaultData = {
    tanggal_berangkat: date().defaultFormDate(),
    jam_berangkat: date().defaultFormTime(),
    tanggal_kembali: date().defaultFormDate(),
    jam_kembali: date().defaultFormTime(),
  };

  $: loading = $list?.[collection]?.loading;
  $: data = $list?.[collection]?.data
    ? {
        ...$obj?.["pilih-spj"],
        ...defaultData,
        ...$list?.[collection]?.data[0],
      }
    : { ...$obj?.["pilih-spj"], ...defaultData };

  function onProcess() {
    goto("./");
  }

  function onSuccess(e) {
    console.log("success", e.detail);
  }

  onMount(() => {
    list.get(collection);
  });

  $: console.log(data);
</script>

<CoLoader {loading}>Tunggu ya...</CoLoader>

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
