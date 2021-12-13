<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  mounted() {
    if (localStorage.getItem("Heydru_keyword") == "startup") {
      this.renderChart(
        {
          labels: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Setiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
          ],
          datasets: [
            {
              label: "Opiniones (M)",
              backgroundColor: "#F0216C",
              data: [10, 12, 14, 11, 18, 13, 15, 17, 16, 12, 18, 12],
            },
          ],
        },
        { responsive: true, maintainAspectRatio: false }
      );
    } else if (localStorage.getItem("Heydru_keyword") == "digitalizacion") {
      this.renderChart(
        {
          labels: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Setiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
          ],
          datasets: [
            {
              label: "Opiniones (M)",
              backgroundColor: "#F0216C",
              data: [8, 7, 9, 11, 8, 3, 5, 10, 6, 5, 9, 4],
            },
          ],
        },
        { responsive: true, maintainAspectRatio: false }
      );
    } else if (localStorage.getItem("Heydru_keyword") == "coronavirus") {
      this.renderChart(
        {
          labels: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Setiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
          ],
          datasets: [
            {
              label: "Opiniones (M)",
              backgroundColor: "#F0216C",
              data: [68, 51, 76, 64, 71, 75, 80, 64, 72, 70, 65, 43],
            },
          ],
        },
        { responsive: true, maintainAspectRatio: false }
      );
    } else if (localStorage.getItem("Heydru_keyword") == "machine learning") {
      this.renderChart(
        {
          labels: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Setiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
          ],
          datasets: [
            {
              label: "Opiniones (M)",
              backgroundColor: "#F0216C",
              data: [8, 11, 26, 14, 7, 5, 9, 5, 7, 4, 5, 4],
            },
          ],
        },
        { responsive: true, maintainAspectRatio: false }
      );
    } else if (
      localStorage.getItem("Heydru_keyword") == "atencion al cliente"
    ) {
      this.renderChart(
        {
          labels: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Setiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
          ],
          datasets: [
            {
              label: "Opiniones (M)",
              backgroundColor: "#F0216C",
              data: [50, 41, 36, 22, 18, 35, 29, 35, 40, 49, 33, 38],
            },
          ],
        },
        { responsive: true, maintainAspectRatio: false }
      );
    } else if (localStorage.getItem("Heydru_keyword") == "aeropuerto") {
      this.renderChart(
        {
          labels: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Setiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
          ],
          datasets: [
            {
              label: "Opiniones (M)",
              backgroundColor: "#F0216C",
              data: [40, 25, 36, 12, 8, 5, 9, 5, 10, 9, 13, 28],
            },
          ],
        },
        { responsive: true, maintainAspectRatio: false }
      );
    } else {
      this.renderChart(
        {
          labels: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Setiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
          ],
          datasets: [
            {
              label: "Opiniones (M)",
              backgroundColor: "#F0216C",
              data: [
                Math.floor(Math.random() * (100 - 10)) + 10,
                Math.floor(Math.random() * (100 - 10)) + 10,
                Math.floor(Math.random() * (100 - 10)) + 10,
                Math.floor(Math.random() * (100 - 10)) + 10,
                Math.floor(Math.random() * (100 - 10)) + 10,
                Math.floor(Math.random() * (100 - 10)) + 10,
                Math.floor(Math.random() * (100 - 10)) + 10,
                Math.floor(Math.random() * (100 - 10)) + 10,
                Math.floor(Math.random() * (100 - 10)) + 10,
                Math.floor(Math.random() * (100 - 10)) + 10,
                Math.floor(Math.random() * (100 - 10)) + 10,
                Math.floor(Math.random() * (100 - 10)) + 10,
              ],
            },
          ],
        },
        { responsive: true, maintainAspectRatio: false }
      );
    }
  },
};
</script>
