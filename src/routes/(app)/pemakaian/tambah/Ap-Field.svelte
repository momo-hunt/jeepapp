<script>
  export let data = {};

  let km = { awal: data?.["km_awal"], akhir: null, pemakaian: null };
  km.pemakaian = km.akhir - km.awal;
</script>

<div class="form">
  <article>
    <label for="sopir">Sopir</label>
    <select name="sopir" id="sopir" value={data?.["sopir"] ?? "1"}>
      <option value="1">Santoso</option>
    </select>
  </article>

  <article>
    <label for="tujuan">Tujuan</label>
    <input
      type="text"
      name="tujuan"
      id="tujuan"
      value={data?.["sopir"] ?? ""}
    />
  </article>

  <article>
    <label for="keperluan">Keperluan</label>
    <input type="text" name="keperluan" id="keperluan" />
  </article>

  <article>
    <div>Berangkat</div>
    <div class="row">
      <article>
        <label for="tanggal_berangkat">Tanggal</label>
        <input type="date" name="tanggal_berangkat" id="tanggal_berangkat" />
      </article>
      <article>
        <label for="jam_berangkat">Jam</label>
        <input type="time" name="jam_berangkat" id="jam_berangkat" />
      </article>
    </div>
  </article>

  <article>
    <div>Kembali</div>
    <div class="row">
      <article>
        <label for="tanggal_kembali">Tanggal</label>
        <input type="date" name="tanggal_kembali" id="tanggal_kembali" />
      </article>
      <article>
        <label for="jam_kembali">Jam</label>
        <input type="time" name="jam_kembali" id="jam_kembali" />
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
      bind:value={km.pemakaian}
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
