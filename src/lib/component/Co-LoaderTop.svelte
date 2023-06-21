<script>
  export let loading = true;
</script>

{#if loading}
  <section />
{/if}

<style>
  section {
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--bg-1);
  }

  section::before {
    content: "";
    position: absolute;
    top: 0;
    left: -20%;
    width: 20%;
    height: 100%;
    background: var(--bg-5);
    border-radius: 8px;
    animation: ani 2s linear infinite;
  }

  @keyframes ani {
    to {
      left: 100%;
    }
  }
</style>
