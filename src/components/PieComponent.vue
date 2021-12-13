<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  mounted() {
    if (localStorage.getItem("Heydru_keyword") == "startup") {
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
              data: [4.4, 75.8],
            },
          ],
        },
        { responsive: true, maintainAspectRatio: false }
      );
    } else if (localStorage.getItem("Heydru_keyword") == "digitalizacion") {
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
              data: [7.2, 45.6],
            },
          ],
        },
        { responsive: true, maintainAspectRatio: false }
      );
    } else if (localStorage.getItem("Heydru_keyword") == "coronavirus") {
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
              data: [235.7, 12.9],
            },
          ],
        },
        { responsive: true, maintainAspectRatio: false }
      );
    } else if (localStorage.getItem("Heydru_keyword") == "machine learning") {
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
              data: [15.6, 48.9],
            },
          ],
        },
        { responsive: true, maintainAspectRatio: false }
      );
    } else if (
      localStorage.getItem("Heydru_keyword") == "atencion al cliente"
    ) {
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
              data: [150.6, 123.7],
            },
          ],
        },
        { responsive: true, maintainAspectRatio: false }
      );
    } else if (localStorage.getItem("Heydru_keyword") == "aeropuerto") {
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
              data: [85.9, 13.7],
            },
          ],
        },
        { responsive: true, maintainAspectRatio: false }
      );
    } else {
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
              data: [
                Math.floor(Math.random() * (100 - 5)) + 5,
                Math.floor(Math.random() * (100 - 5)) + 5,
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