<script>
import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
  mounted() {
    this.renderChart(
      {
        labels: [
          "Enojo",
          "Miedo",
          "Desagrado",
          "Felicidad",
          "Tristeza",
          "Sorpresa",
          "Orgullo"
        ],
        datasets: [
          {
            label: "Hombres",
            backgroundColor: "rgba(154, 219, 255,0.2)",
            borderColor: "rgba(100, 163, 255)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
            label: "Mujeres",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [28, 48, 40, 19, 96, 27, 100]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>