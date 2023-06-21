<script>
  import { createEventDispatcher } from "svelte";
  import { enhance } from "$app/forms";

  const dispatch = createEventDispatcher();
  export let action;
  export let title;
</script>

<form
  {action}
  {title}
  method="post"
  use:enhance={({ submitter }) => {
    submitter.focus();
    dispatch("process");

    return async ({ result }) => {
      console.log("form->", result.type, result.data);
      if (result.type == "success") return dispatch("success", result.data);
      return dispatch("error", result.data);
    };
  }}
>
  <slot />
</form>
