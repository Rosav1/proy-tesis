<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient2 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, "rgba(255, 41, 63)");


    this.gradient2.addColorStop(0, "rgba(60, 179, 113)");

    this.renderChart(
      {
        labels: ["Negativas", "Positivas"],
        datasets: [
          {
            backgroundColor: [this.gradient, this.gradient2, "#00D8FF"],
            data: [20, 10]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>