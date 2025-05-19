<script>
import { loadPlantsFromGoogleSheet } from '@/utils/csvParser';

export default {
  data() {
    return {
      plantas: [],
    };
  },
  async mounted() {
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQYqb9IZZhTcWSU2NBQlYfoH0cbtH9TCiDwiiyC7BvPSZpPwIAlG9rYvisRPazIcXRC2HA0ZQrNb3It/pub?output=csv';
    try {
      this.plantas = await loadPlantsFromGoogleSheet(csvUrl);
      console.log(this.plantas); // aqui você pode alimentar o sistema de rotas ou lista
    } catch (e) {
      console.error('Erro ao carregar CSV:', e);
    }
  },
};
</script>
