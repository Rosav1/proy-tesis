<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  data() {
    return {
      gradient: null,
      gradient2: null,
    };
  },
  mounted() {
    if (localStorage.getItem("Heydru_keyword") == "startup") {
      this.gradient = this.$refs.canvas
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 450);
      this.gradient2 = this.$refs.canvas
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 450);

      this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
      this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
      this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

      this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
      this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
      this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");

      this.renderChart(
        {
          labels: [
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
              label: "Negativo",
              borderColor: "#FC2525",
              pointBackgroundColor: "white",
              borderWidth: 1,
              pointBorderColor: "white",
              backgroundColor: this.gradient,

              data: [7, 5.2, 5.4, 5.4, 5.5, 5.5, 5.5],
            },
            {
              label: "Positivo",
              borderColor: "#05CBE1",
              pointBackgroundColor: "white",
              pointBorderColor: "white",
              borderWidth: 1,
              backgroundColor: this.gradient2,
              data: [6.4, 7, 7.2, 7.4, 8.6, 7.8, 8],
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

      this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
      this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
      this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

      this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
      this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
      this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");

      this.renderChart(
        {
          labels: [
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
              label: "Negativo",
              borderColor: "#FC2525",
              pointBackgroundColor: "white",
              borderWidth: 1,
              pointBorderColor: "white",
              backgroundColor: this.gradient,

              data: [3.2, 3.2, 3.4, 3.7, 3.8, 3.9, 4.1],
            },
            {
              label: "Positivo",
              borderColor: "#05CBE1",
              pointBackgroundColor: "white",
              pointBorderColor: "white",
              borderWidth: 1,
              backgroundColor: this.gradient2,
              data: [15, 15.2, 15.8, 15.9, 16.3, 18, 18.7],
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

      this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
      this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
      this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

      this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
      this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
      this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");

      this.renderChart(
        {
          labels: [
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
              label: "Negativo",
              borderColor: "#FC2525",
              pointBackgroundColor: "white",
              borderWidth: 1,
              pointBorderColor: "white",
              backgroundColor: this.gradient,

              data: [73.2, 63.2, 58.4, 75.7, 83.8, 33.9, 14.1],
            },
            {
              label: "Positivo",
              borderColor: "#05CBE1",
              pointBackgroundColor: "white",
              pointBorderColor: "white",
              borderWidth: 1,
              backgroundColor: this.gradient2,
              data: [5, 3.2, 3.8, 1.9, 1.3, 1.8, 0.7],
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

      this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
      this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
      this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

      this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
      this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
      this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");

      this.renderChart(
        {
          labels: [
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
              label: "Negativo",
              borderColor: "#FC2525",
              pointBackgroundColor: "white",
              borderWidth: 1,
              pointBorderColor: "white",
              backgroundColor: this.gradient,

              data: [2.2, 1.2, 5.4, 1.7, 5.8, 2.9, 4.1],
            },
            {
              label: "Positivo",
              borderColor: "#05CBE1",
              pointBackgroundColor: "white",
              pointBorderColor: "white",
              borderWidth: 1,
              backgroundColor: this.gradient2,
              data: [5.8, 7.2, 9.8, 3.9, 5.3, 10, 8.7],
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

      this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
      this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
      this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

      this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
      this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
      this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");

      this.renderChart(
        {
          labels: [
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
              label: "Negativo",
              borderColor: "#FC2525",
              pointBackgroundColor: "white",
              borderWidth: 1,
              pointBorderColor: "white",
              backgroundColor: this.gradient,

              data: [63.2, 73.2, 83.5, 53.7, 93.8, 101.9, 84.1],
            },
            {
              label: "Positivo",
              borderColor: "#05CBE1",
              pointBackgroundColor: "white",
              pointBorderColor: "white",
              borderWidth: 1,
              backgroundColor: this.gradient2,
              data: [50.2, 45.2, 65.8, 35.9, 26.3, 18, 28.7],
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

      this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
      this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
      this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

      this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
      this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
      this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");

      this.renderChart(
        {
          labels: [
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
              label: "Negativo",
              borderColor: "#FC2525",
              pointBackgroundColor: "white",
              borderWidth: 1,
              pointBorderColor: "white",
              backgroundColor: this.gradient,

              data: [15.4, 13.2, 23.4, 45.7, 20, 23.9, 50.8],
            },
            {
              label: "Positivo",
              borderColor: "#05CBE1",
              pointBackgroundColor: "white",
              pointBorderColor: "white",
              borderWidth: 1,
              backgroundColor: this.gradient2,
              data: [5, 4.2, 6.2, 7.8, 2, 4.2, 3],
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

      this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
      this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
      this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

      this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
      this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
      this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");

      this.renderChart(
        {
          labels: [
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
              label: "Negativo",
              borderColor: "#FC2525",
              pointBackgroundColor: "white",
              borderWidth: 1,
              pointBorderColor: "white",
              backgroundColor: this.gradient,

              data: [
                Math.floor(Math.random() * (100 - 5)) + 5,
                Math.floor(Math.random() * (100 - 5)) + 5,
                Math.floor(Math.random() * (100 - 5)) + 5,
                Math.floor(Math.random() * (100 - 5)) + 5,
                Math.floor(Math.random() * (100 - 5)) + 5,
                Math.floor(Math.random() * (100 - 5)) + 5,
                Math.floor(Math.random() * (100 - 5)) + 5,
              ],
            },
            {
              label: "Positivo",
              borderColor: "#05CBE1",
              pointBackgroundColor: "white",
              pointBorderColor: "white",
              borderWidth: 1,
              backgroundColor: this.gradient2,
              data: [
                Math.floor(Math.random() * (100 - 5)) + 5,
                Math.floor(Math.random() * (100 - 5)) + 5,
                Math.floor(Math.random() * (100 - 5)) + 5,
                Math.floor(Math.random() * (100 - 5)) + 5,
                Math.floor(Math.random() * (100 - 5)) + 5,
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
