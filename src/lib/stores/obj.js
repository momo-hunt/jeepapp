import { writable } from "svelte/store";

const stored = () => {
  const { subscribe, set, update } = writable({});
  return {
    subscribe,

    // get:async(collection)=>{

    // }

    set: (name, data) => {
      return update((n) => ({ ...n, [name]: data }));
    },
  };
};

export const obj = stored();
