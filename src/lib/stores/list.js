import { writable } from "svelte/store";

const stored = () => {
  const { subscribe, set, update } = writable({});
  let old = {};
  return {
    subscribe,

    get: async (collection, option, callback) => {
      set({ ...old, [collection]: { loading: true } });

      const params = new URLSearchParams(option);
      const res = await fetch(`/api/${collection}?` + params);
      const respon = await res.json();

      old = { ...old, [collection]: { loading: false, ...respon } };
      set(old);

      if (callback) callback();
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
