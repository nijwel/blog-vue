<template>
  <h1>Al-Quran</h1>
  <div class="card">
    <div class="card-header">
      <div class="d-flex align-items-center flex-wrap justify-content-between">
        <div class="mb-3">
          <select @change="getSpecificSurah" name="" id="" class="form-select">
            <option>Select Surah</option>
            <option
              v-for="surah in surahs"
              :key="surah.number"
              :value="surah.number"
            >
              {{ surah.name }} - {{ surah.englishName }}
            </option>
          </select>
        </div>
        <div>
          <p>
            <strong>{{ ayahs.name }} - {{ ayahs.englishName }}</strong>
            <span>({{ ayahs.numberOfAyahs }} Ayah)</span>
          </p>
          <p>{{ ayahs.englishNameTranslation }} ({{ ayahs.revelationType }})</p>
        </div>
        <!-- <div class="form-group">
          <select class="form-select" name="" id="">
            <option value="">Select Ayah</option>
          </select>
        </div> -->
      </div>
    </div>
    <div class="card-body">
      <div class="p-3">
        <div v-for="(ayah, index) in ayahs.ayahs" :key="ayah.number">
          <p>
            <span class="p-2 me-2 fw-bold">{{ ayah.numberInSurah }}.</span>
            <span class="fs-5">{{ ayah.text }}</span>
          </p>
          <small class="text-muted d-block mb-2 text-end">
            - {{ translations[index]?.text }}
          </small>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AlQuran",
  data() {
    return {
      surahs: [],
      ayahs: [],
      translations: [],
      selectedSurah: null,
    };
  },
  mounted() {
    this.fetchSurahs();
    this.getSpecificSurah({ target: { value: 1 } });
  },
  methods: {
    fetchSurahs() {
      axios
        .get("https://api.alquran.cloud/v1/surah")
        .then((response) => {
          this.surahs = response.data.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getSpecificSurah(event) {
      const surahNumber = event.target.value;
      axios
        .get(`https://api.alquran.cloud/v1/surah/${surahNumber}`)
        .then((response) => {
          this.ayahs = response.data.data;
        })
        .catch((error) => {
          console.error(error);
        });

      axios
        .get(`https://api.alquran.cloud/v1/surah/${surahNumber}/bn.bengali`)
        .then((response) => {
          this.translations = response.data.data.ayahs;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped></style>
