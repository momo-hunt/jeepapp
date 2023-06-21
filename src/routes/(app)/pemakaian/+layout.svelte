<script>
  import CoHeader from "$lib/component/Co-Header.svelte";
  import ApList from "./Ap-List.svelte";
</script>

<CoHeader>Pemakaian</CoHeader>

<a href="/pemakaian/tambah" role="button">Tambah Pemakaian</a>

<ApList />

<slot />
