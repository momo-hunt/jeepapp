<script>
  import ApForm from "./Ap-Form.svelte";
  import CoHeader from "$lib/component/Co-Header.svelte";
</script>

<main>
  <CoHeader>Tambah Pemakaian</CoHeader>
  <a href="/pemakaian/tambah/pilih-spj" role="button">Pilih SPJ</a>
  <hr />
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
