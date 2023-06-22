import { writable } from "svelte/store";
import { toast } from "$lib/stores";

const stored = () => {
  const { subscribe, set, update } = writable({});
  let old = {};
  return {
    subscribe,

    get: async (collection, option = null, callback) => {
      set({ ...old, [collection]: { loading: true } });

      const res = await fetch(
        `/api/${collection}?opt=` + JSON.stringify(option)
      );
      const respon = await res.json();
      if (respon?.status && respon?.status != 200) {
        toast.error(JSON.stringify(respon));
      }
      console.log("respon list->", respon);

      old = { ...old, [collection]: { loading: false, ...respon } };
      set(old);

      if (callback) callback(respon);
    },

    add: (collection, data) => {
      return update((n) => {
        n[collection].data = [data, ...n[collection].data];
        return n;
      });
    },

    delete: (collection, id) => {
      return update((n) => {
        n[collection].data = n[collection].data.filter((d) => d.id != id);
        return n;
      });
    },

    update: (collection, id, data) => {
      return update((n) => {
        n[collection].data = n[collection].data.map((d) => {
          if (d.id == id) {
            d = { ...d, ...data };
          }
          return d;
        });
        return n;
      });
    },
  };
};

export const list = stored();
