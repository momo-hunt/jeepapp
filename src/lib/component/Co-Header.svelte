<script>
  import { ArrowLeft, Icon } from "svelte-hero-icons";
</script>

<header>
  <a href="./" role="button" class="icon" data-tooltip="Back">
    <Icon src={ArrowLeft} size="24" />
  </a>
  <h2><slot /></h2>
</header>

<style>
  header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: var(--bg-4);
    color: var(--bg-1);
    margin: 0 -1rem;
    margin-bottom: 1rem;
  }

  header a {
    background-color: inherit;
    border: none;
  }

  header a:hover {
    filter: brightness(1.2);
  }
</style>
