import { writable } from "svelte/store";

const stored = () => {
  const { subscribe, set, update } = writable([]);

  let processId;
  let data = [];

  return {
    subscribe,

    process: (text) => {
      const id = crypto.randomUUID();
      processId = id;
      data = [{ id, title: "Proses", type: "process", text }, ...data];
      set(data);
    },

    success: (text) => {
      const id = crypto.randomUUID();
      if (processId) {
        data = data.filter((d) => d.id != processId);
        set(data);
      }

      data = [{ id, title: "Berhasil", type: "success", text }, ...data];
      set(data);

      setTimeout(() => {
        set(data.filter((d) => d.id != id));
      }, 4000);
    },

    error: (text) => {
      const id = crypto.randomUUID();
      if (processId) set(data.filter((d) => d.id != processId));

      data = [{ id, title: "Kesalahan", type: "danger", text }, ...data];
      set(data);

      setTimeout(() => {
        set(data.filter((d) => d.id != id));
      }, 5000);
    },
  };
};

export const toast = stored();
