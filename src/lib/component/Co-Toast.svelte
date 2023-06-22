<script>
  import { toast } from "$lib/stores";
</script>

{#if $toast}
  <section class={$toast?.type}>
    {$toast?.text}
  </section>
{/if}

<style>
  section {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
  }

  section.error {
    background-color: red;
    color: white;
  }
</style>
