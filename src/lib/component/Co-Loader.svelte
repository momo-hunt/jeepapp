<script>
  export let loading = false;
</script>

{#if loading}
  <section>
    <svg viewBox="0 0 100 100">
      <circle r="40" cx="50" cy="50" />
    </svg>
    {#if $$slots.default}
      <span><slot /></span>
    {/if}
  </section>
{/if}

<style>
  /* * {
    border: 1px solid pink;
  } */

  section {
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 0.5rem;
  }

  svg {
    fill: none;
    width: 1.5rem;
    animation: rotate 3s linear infinite;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  svg circle {
    stroke: currentColor;
    stroke-width: 10;
    stroke-linecap: round;
    stroke-dasharray: 230;
    stroke-dashoffset: 230;
    animation: ani 2s linear infinite;
  }

  @keyframes ani {
    0%,
    100% {
      stroke-dashoffset: 230;
    }

    50% {
      stroke-dashoffset: 0;
    }
    50.1% {
      stroke-dashoffset: 460;
    }
  }
</style>
