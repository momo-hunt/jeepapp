<script>
  export let data = {};

  let km = {
    awal: data?.["km_terakhir"] ?? 0,
    akhir: null,
  };

  // $: console.log("data field", data);

  $: pemakaian = km.akhir ? km.akhir - km.awal : 0;
</script>

<div class="form">
  <input type="hidden" name="spj_id" value={data?.["id"] ?? ""} />

  <article>
    <label for="no_spj"> No SPJ </label>
    <input type="text" value={data?.["no_spj"] ?? ""} readonly />
  </article>

  <article>
    <label for="sopir_id">Sopir</label>
    <select
      name="sopir_id"
      id="sopir_id"
      value={data?.["sopir_id"] ?? "b7085af5-3511-4930-8d45-27f644a6f3a4"}
    >
      <option value="b7085af5-3511-4930-8d45-27f644a6f3a4">Santoso</option>
    </select>
  </article>

  <article>
    <label for="tujuan">Tujuan</label>
    <input
      type="text"
      name="tujuan"
      id="tujuan"
      value={data?.["tujuan"] ?? ""}
    />
  </article>

  <article>
    <label for="keperluan">Keperluan</label>
    <input
      type="text"
      name="keperluan"
      id="keperluan"
      value={data?.["keperluan"] ?? ""}
    />
  </article>

  <article>
    <div>Berangkat</div>
    <div class="row">
      <article>
        <label for="tanggal_berangkat">Tanggal</label>
        <input
          type="date"
          name="tanggal_berangkat"
          id="tanggal_berangkat"
          value={data?.["tanggal_berangkat"] ?? ""}
        />
      </article>
      <article>
        <label for="jam_berangkat">Jam</label>
        <input
          type="time"
          name="jam_berangkat"
          id="jam_berangkat"
          value={data?.["jam_berangkat"] ?? ""}
        />
      </article>
    </div>
  </article>

  <article>
    <div>Kembali</div>
    <div class="row">
      <article>
        <label for="tanggal_kembali">Tanggal</label>
        <input
          type="date"
          name="tanggal_kembali"
          id="tanggal_kembali"
          value={data?.["tanggal_kembali"] ?? ""}
        />
      </article>
      <article>
        <label for="jam_kembali">Jam</label>
        <input
          type="time"
          name="jam_kembali"
          id="jam_kembali"
          value={data?.["jam_kembali"] ?? ""}
        />
      </article>
    </div>
  </article>

  <article>
    <div>Kilometer</div>
    <div class="row">
      <article>
        <label for="km_awal">Awal</label>
        <input type="number" name="km_awal" id="km_awal" bind:value={km.awal} />
      </article>
      <article>
        <label for="km_akhir">Akhir</label>
        <input
          type="number"
          name="km_akhir"
          id="km_akhir"
          bind:value={km.akhir}
          min={km.awal + 1}
        />
      </article>
    </div>
  </article>

  <article>
    <label for="km_pemakaian">Pemakaian</label>
    <input
      type="number"
      name="km_pemakaian"
      id="km_pemakaian"
      value={pemakaian}
      min="1"
      readonly
    />
  </article>

  <div class="button">
    <button type="submit">Tambah</button>
    <a href="./" role="button">Batal</a>
  </div>
</div>

<style>
  /* * {
    border: 1px solid lightcoral !important;
  } */

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form label {
    opacity: 0.8;
  }

  .form article {
    display: flex;
    flex-direction: column;
  }

  .form .button {
    text-align: right;
  }

  .form .row {
    display: flex;
    gap: 0 1rem;
  }

  .form .row article {
    width: calc(50% - 0.5rem);
  }
</style>
