<template>
  <div id="app">
    <wordcloud
      :data="defaultWords"
      nameKey="name"
      valueKey="value"
      :color="myColors"
      :showTooltip="true"
      :wordClick="wordClickHandler"
    >
    </wordcloud>
  </div>
</template>

<script>
import wordcloud from "vue-wordcloud";

export default {
  name: "app",
  components: {
    wordcloud,
  },
  methods: {
    wordClickHandler(name, value, vm) {
      console.log("wordClickHandler", name, value, vm);
    },
  },
  data() {
    if (localStorage.getItem("Heydru_keyword") == "startup") {
      return {
        myColors: ["#F0216C", "#F7518D", "#FC9DBF", "#F8D2DF"],
        defaultWords: [
          {
            name: "start up",
            value: 102,
          },
          {
            name: "logic pro",
            value: 45,
          },
          {
            name: "starting a business",
            value: 29,
          },
          {
            name: "lean startup",
            value: 20,
          },
          {
            name: "startup ideas",
            value: 14.5,
          },
          {
            name: "startup jobs",
            value: 11,
          },
          {
            name: "startup manager",
            value: 11,
          },
          {
            name: "500 startups",
            value: 9,
          },
          {
            name: "start up business",
            value: 7,
          },
          {
            name: "startup weekend",
            value: 7,
          },
          {
            name: "startup programs",
            value: 5.8,
          },
          {
            name: "start up companies",
            value: 4,
          },
          {
            name: "startup company",
            value: 4,
          },
          {
            name: "business start up",
            value: 3.3,
          },
          {
            name: "tech startups",
            value: 3.3,
          },
          {
            name: "startup funding",
            value: 3.3,
          },
          {
            name: "startup news",
            value: 3.3,
          },
          {
            name: "startup series",
            value: 3.3,
          },
          {
            name: "how to start a startup",
            value: 3.3,
          },
          {
            name: "how to start a company",
            value: 3.3,
          },
          {
            name: "startup podcast",
            value: 3.3,
          },
        ],
      };
    } else if (localStorage.getItem("Heydru_keyword") == "digitalizacion") {
      return {
        myColors: ["#F0216C", "#F7518D", "#FC9DBF", "#F8D2DF"],
        defaultWords: [
          {
            name: "internet",
            value: 26,
          },
          {
            name: "digital transformation",
            value: 19,
          },
          {
            name: "globalization",
            value: 18,
          },
          {
            name: "social media",
            value: 6,
          },
          {
            name: "big data",
            value: 15,
          },
          {
            name: "industrie 4.0",
            value: 9,
          },
          {
            name: "e-commerce",
            value: 9,
          },
          {
            name: "development",
            value: 9,
          },
          {
            name: "automation",
            value: 6,
          },
          {
            name: "technology",
            value: 15,
          },
          {
            name: "communication",
            value: 15,
          },
          {
            name: "data",
            value: 9,
          },
          {
            name: "iot",
            value: 9,
          },
          {
            name: "networking",
            value: 9,
          },
          {
            name: "network",
            value: 16,
          },
          {
            name: "security",
            value: 9,
          },
          {
            name: "privacy",
            value: 6,
          },
          {
            name: "data integrity",
            value: 15,
          },
          {
            name: "regulations",
            value: 15,
          },
          {
            name: "latency",
            value: 9,
          },
          {
            name: "storage",
            value: 9,
          },
          {
            name: "energy",
            value: 9,
          },
          {
            name: "standardization",
            value: 6,
          },
        ],
      };
    } else if (localStorage.getItem("Heydru_keyword") == "coronavirus") {
      return {
        myColors: ["#F0216C", "#F7518D", "#FC9DBF", "#F8D2DF"],
        defaultWords: [
          { name: "covid-19", value: 456 },
          { name: "confirmed diagnosis", value: 319 },
          { name: "case", value: 318 },
          { name: "masks", value: 316 },
          { name: "epidemic", value: 335 },
          { name: "startup", value: 109 },
          { name: "first case", value: 159 },
          { name: "pneumonia", value: 149 },
          { name: "patient", value: 226 },
          { name: "death", value: 416 },
          { name: "eliminate", value: 326 },
          { name: "leave hospital", value: 219 },
          { name: "unknown cause", value: 318 },
          { name: "wuhan", value: 236 },
          { name: "virus", value: 415 },
          { name: "identification", value: 329 },
          { name: "infection", value: 309 },
          { name: "expression", value: 259 },
          { name: "central nervous system", value: 276 },
          { name: "gene", value: 215 },
          { name: "disease", value: 265 },
          { name: "antibodies", value: 249 },
          { name: "genome sequence", value: 169 },
          { name: "protein", value: 89 },
          { name: "home", value: 315 },
          { name: "keep home", value: 269 },
          { name: "receptor", value: 329 },
          { name: "hong kong", value: 159 },
          { name: "replication", value: 236 },
        ],
      };
    } else if (localStorage.getItem("Heydru_keyword") == "machine learning") {
      return {
        myColors: ["#F0216C", "#F7518D", "#FC9DBF", "#F8D2DF"],
        defaultWords: [
          {
            name: "ML",
            value: 26,
          },
          {
            name: "data modeling",
            value: 19,
          },
          {
            name: "evaluation",
            value: 18,
          },
          {
            name: "software engineering",
            value: 16,
          },
          {
            name: "data analysis",
            value: 15,
          },
          {
            name: "data",
            value: 29,
          },
          {
            name: "interpretation",
            value: 9,
          },
          {
            name: "system design",
            value: 9,
          },
          {
            name: "algorithms",
            value: 26,
          },
          {
            name: "libraries",
            value: 6,
          },
          {
            name: "techniques",
            value: 26,
          },
          {
            name: "predictive analysis",
            value: 19,
          },
          {
            name: "data mining",
            value: 18,
          },
          {
            name: "web scrapping",
            value: 6,
          },
          {
            name: "python",
            value: 15,
          },
          {
            name: "r",
            value: 9,
          },
          {
            name: "pandas",
            value: 9,
          },
          {
            name: "typescript",
            value: 9,
          },
          {
            name: "tensorflow",
            value: 6,
          },
          {
            name: "scala",
            value: 15,
          },
          {
            name: "regex",
            value: 15,
          },
          {
            name: "js",
            value: 9,
          },
          {
            name: "solidity",
            value: 9,
          },
          {
            name: "informatic",
            value: 9,
          },
        ],
      };
    } else if (
      localStorage.getItem("Heydru_keyword") == "atencion al cliente"
    ) {
      return {
        myColors: ["#F0216C", "#F7518D", "#FC9DBF", "#F8D2DF"],
        defaultWords: [
          { name: "Account Management", value: 26 },
          { name: "Administration", value: 19 },
          { name: "Bookkeeping", value: 18 },
          { name: "Brand Management", value: 16 },
          { name: "Call Centre Management", value: 15 },
          { name: "Case Management", value: 29 },
          { name: "Clerical Support", value: 9 },
          { name: "Complaint Resolution", value: 9 },
          { name: "Contract Negotiations", value: 26 },
          { name: "Corporate Communications", value: 6 },
          { name: "Cost Control", value: 26 },
          { name: "Customer Communications", value: 19 },
          { name: "Customer Relations", value: 18 },
          { name: "Customer Retention", value: 6 },
          { name: "Customer Satisfaction", value: 15 },
          { name: "Customer Surveys", value: 9 },
          { name: "Data Management", value: 9 },
          { name: "Field Operations", value: 9 },
          { name: "Incentive Programs", value: 6 },
          { name: "Issues Management", value: 15 },
          { name: "Loyalty Programs", value: 15 },
          { name: "Media Relations", value: 9 },
          { name: "Merchandising", value: 9 },
          { name: "Needs Assessment", value: 9 },
          { name: "Networking", value: 15 },
          { name: "Order Processing", value: 9 },
          { name: "Policies & Procedures", value: 9 },
          { name: "Post Sales Support", value: 9 },
          { name: "Pre Sales Support", value: 6 },
          { name: "Problem Resolution", value: 15 },
          { name: "Process Improvement", value: 15 },
          { name: "Product Development", value: 9 },
          { name: "Product Management", value: 15 },
          { name: "Program Management", value: 9 },
        ],
      };
    } else if (localStorage.getItem("Heydru_keyword") == "aeropuerto") {
      return {
        myColors: ["#F0216C", "#F7518D", "#FC9DBF", "#F8D2DF"],
        defaultWords: [
          { name: "Airline", value: 26 },
          { name: "Arrivals", value: 19 },
          { name: "Baggage reclaim", value: 18 },
          { name: "To board", value: 16 },
          { name: "Boarding pass", value: 15 },
          { name: "Boarding time", value: 29 },
          { name: "To book", value: 9 },
          { name: "Carry-on bag", value: 9 },
          { name: "To check in / check-in", value: 26 },
          { name: "Customs", value: 6 },
          { name: "Delayed", value: 26 },
          { name: "Departures", value: 19 },
          { name: "Departure lounge", value: 18 },
          { name: "Domestic", value: 6 },
          { name: "Flight", value: 15 },
          { name: "Fragile", value: 9 },
          { name: "Gate", value: 9 },
          { name: "Identification / I.D.", value: 9 },
          { name: "Last call", value: 6 },
          { name: "Luggage", value: 15 },
          {
            name: "Long-haul flight (opposite is short-haul flight)",
            value: 6,
          },
          { name: "On time", value: 9 },
          { name: "One-way", value: 9 },
          { name: "Oversized", value: 9 },
          { name: "Overweight Bag", value: 15 },
          { name: "Priority boarding", value: 9 },
          { name: "Stopover", value: 9 },
          { name: "Terminal", value: 9 },
          { name: "Trolley", value: 6 },
          { name: "To upgrade", value: 15 },
          { name: "Visa", value: 25 },
        ],
      };
    } else {
      return {};
    }
  },
};
</script>