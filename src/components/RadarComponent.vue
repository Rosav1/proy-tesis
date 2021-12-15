<script>
import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
  mounted() {
    if (localStorage.getItem("Heydru_keyword") == "startup") {
      this.renderChart(
        {
          labels: [
            "Enojo",
            "Miedo",
            "Desagrado",
            "Felicidad",
            "Tristeza",
            "Sorpresa",
            "Orgullo",
          ],
          datasets: [
            {
              label: "Hombres (Miles)",
              backgroundColor: "rgba(154, 219, 255,0.2)",
              borderColor: "rgba(100, 163, 255)",
              pointBackgroundColor: "rgba(30,144,255)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(179,181,198,1)",
              data: [3, 15, 12, 39, 7, 42, 26],
            },
            {
              label: "Mujeres (Miles)",
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              pointBackgroundColor: "rgba(255,99,132,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(255,99,132,1)",
              data: [3, 12, 17, 26, 9, 37, 28],
            },
          ],
        },
        { responsive: true, maintainAspectRatio: false }
      );
    } else if (localStorage.getItem("Heydru_keyword") == "digitalizacion") {
      this.renderChart(
        {
          labels: [
            "Enojo",
            "Miedo",
            "Desagrado",
            "Felicidad",
            "Tristeza",
            "Sorpresa",
            "Orgullo",
          ],
          datasets: [
            {
              label: "Hombres (Miles)",
              backgroundColor: "rgba(154, 219, 255,0.2)",
              borderColor: "rgba(100, 163, 255)",
              pointBackgroundColor: "rgba(30,144,255)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(179,181,198,1)",
              data: [5, 19, 4, 35, 14, 15, 11],
            },
            {
              label: "Mujeres (Miles)",
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              pointBackgroundColor: "rgba(255,99,132,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(255,99,132,1)",
              data: [4, 24, 8, 29, 16, 9, 8],
            },
          ],
        },
        { responsive: true, maintainAspectRatio: false }
      );
    } else if (localStorage.getItem("Heydru_keyword") == "coronavirus") {
      this.renderChart(
        {
          labels: [
            "Enojo",
            "Miedo",
            "Desagrado",
            "Felicidad",
            "Tristeza",
            "Sorpresa",
            "Orgullo",
          ],
          datasets: [
            {
              label: "Hombres (Miles)",
              backgroundColor: "rgba(154, 219, 255,0.2)",
              borderColor: "rgba(100, 163, 255)",
              pointBackgroundColor: "rgba(30,144,255)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(179,181,198,1)",
              data: [146, 125, 138, 15, 162, 152, 18],
            },
            {
              label: "Mujeres (Miles)",
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              pointBackgroundColor: "rgba(255,99,132,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(255,99,132,1)",
              data: [126, 137, 145, 18, 150, 138, 7],
            },
          ],
        },
        { responsive: true, maintainAspectRatio: false }
      );
    } else if (localStorage.getItem("Heydru_keyword") == "machine learning") {
      this.renderChart(
        {
          labels: [
            "Enojo",
            "Miedo",
            "Desagrado",
            "Felicidad",
            "Tristeza",
            "Sorpresa",
            "Orgullo",
          ],
          datasets: [
            {
              label: "Hombres (Miles)",
              backgroundColor: "rgba(154, 219, 255,0.2)",
              borderColor: "rgba(100, 163, 255)",
              pointBackgroundColor: "rgba(30,144,255)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(179,181,198,1)",
              data: [10, 17, 4, 25, 6, 48, 23],
            },
            {
              label: "Mujeres (Miles)",
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              pointBackgroundColor: "rgba(255,99,132,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(255,99,132,1)",
              data: [7, 10, 5, 18, 3, 22, 10],
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
            "Enojo",
            "Miedo",
            "Desagrado",
            "Felicidad",
            "Tristeza",
            "Sorpresa",
            "Orgullo",
          ],
          datasets: [
            {
              label: "Hombres (Miles)",
              backgroundColor: "rgba(154, 219, 255,0.2)",
              borderColor: "rgba(100, 163, 255)",
              pointBackgroundColor: "rgba(30,144,255)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(179,181,198,1)",
              data: [108, 5, 85, 25, 37, 42, 9],
            },
            {
              label: "Mujeres (Miles)",
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              pointBackgroundColor: "rgba(255,99,132,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(255,99,132,1)",
              data: [97, 16, 64, 46, 40, 24, 12],
            },
          ],
        },
        { responsive: true, maintainAspectRatio: false }
      );
    } else if (localStorage.getItem("Heydru_keyword") == "aeropuerto") {
      this.renderChart(
        {
          labels: [
            "Enojo",
            "Miedo",
            "Desagrado",
            "Felicidad",
            "Tristeza",
            "Sorpresa",
            "Orgullo",
          ],
          datasets: [
            {
              label: "Hombres (Miles)",
              backgroundColor: "rgba(154, 219, 255,0.2)",
              borderColor: "rgba(100, 163, 255)",
              pointBackgroundColor: "rgba(30,144,255)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(179,181,198,1)",
              data: [78, 60, 52, 50, 32, 12, 8],
            },
            {
              label: "Mujeres (Miles)",
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              pointBackgroundColor: "rgba(255,99,132,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(255,99,132,1)",
              data: [73, 45, 57, 42, 25, 17, 5],
            },
          ],
        },
        { responsive: true, maintainAspectRatio: false }
      );
    } else {
      this.renderChart(
        {
          labels: [
            "Enojo",
            "Miedo",
            "Desagrado",
            "Felicidad",
            "Tristeza",
            "Sorpresa",
            "Orgullo",
          ],
          datasets: [
            {
              label: "Hombres (Miles)",
              backgroundColor: "rgba(154, 219, 255,0.2)",
              borderColor: "rgba(100, 163, 255)",
              pointBackgroundColor: "rgba(30,144,255)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(179,181,198,1)",
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
              label: "Mujeres (Miles)",
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              pointBackgroundColor: "rgba(255,99,132,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(255,99,132,1)",
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