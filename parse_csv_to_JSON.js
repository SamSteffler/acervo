import Papa from 'papaparse';

export async function loadPlantsFromGoogleSheet(csvUrl) {
  const response = await fetch(csvUrl);
  const csvText = await response.text();
  
  return new Promise((resolve, reject) => {
    Papa.parse(csvText, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: results => resolve(results.data),
      error: err => reject(err),
    });
  });
}
/*
<script>
import Papa from 'papaparse';

export default {
  data() {
    return {
      plant: null,
    };
  },
  mounted() {
    const id = this.$route.params.id;
    fetch('/data/plants-new.csv')
      .then(response => response.text())
      .then(csv => {
        Papa.parse(csv, {
          header: false,
          delimiter: ';',
          complete: (results) => {
            const match = results.data.find(p => p[0] === id);
            this.plant = {
              id: match[0],
              scientific_name: match[1],
              common_name: match[2],
              type: match[3],
              origin: match[4],
              latitude: match[5],
              longitude: match[6],
              description: match[7],
                images: match[8] ? match[8].split(',') : [],
            };
            console.log(this.plant);
          }
        });
      });
  }
};
</script>
*/