<script>
  import ApForm from "./Ap-Form.svelte";
  import CoHeader from "$lib/component/Co-Header.svelte";
</script>

<main>
  <CoHeader>Tambah Pemakaian</CoHeader>

  <ApForm />
</main>
<slot />

<style>
  main {
    position: absolute;
    inset: 0;
    padding: 0 1rem;
    background: white;
  }
</style>
