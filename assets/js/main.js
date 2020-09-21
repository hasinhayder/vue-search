const app = Vue.createApp({
  created () {
    fetch(
      'https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-name.json'
    )
      .then(response => response.json())
      .then(data => {
        this.countries = data
        document.getElementById("loader").style.display="none";
      })
  },
  data () {
    return { item: '', countries: [] }
  },
  computed: {
    filteredCountries () {
      return this.countries.filter(country =>
        country.country.toLowerCase().startsWith(this.item.toLowerCase())
      )
    }
  }
})
app.mount('#app')
