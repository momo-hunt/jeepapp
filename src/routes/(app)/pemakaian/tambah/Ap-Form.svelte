<script>
  import { goto } from "$app/navigation";
  import CoForm from "$lib/component/Co-Form.svelte";
  import ApField from "./Ap-Field.svelte";

  function onProcess() {
    goto("./");
  }

  function onSuccess(e) {
    console.log("success", e.detail);
  }
</script>

<CoForm
  action="/?/add"
  title="Tambah Pemakaian"
  on:process={onProcess}
  on:success={onSuccess}
  on:error
>
  <ApField data={{ km_awal: 24123 }} />
</CoForm>
