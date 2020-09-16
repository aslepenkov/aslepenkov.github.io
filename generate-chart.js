const ChartJsImage = require("chartjs-to-image");
const fs = require('fs');

const jsonData = fs.readFileSync("output/data.json", "utf8");
const data = JSON.parse(jsonData);

var colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "cyan",
];

// Generate the chart
const chart = new ChartJsImage();

// chart.setConfig({
//   type: 'bar',
//   data: {
//     labels: ['January', 'February', 'March', 'April', 'May'],
//     datasets: [
//       {
//         label: 'Dogs',
//         data: [50, 60, 70, 180, 190],
//       },
//     ],
//   },
//   options: {
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             callback: function (value) {
//               return '$' + value;
//             },
//           },
//         },
//       ],
//     },
//   },
// });
// chart.setWidth(500).setHeight(300).setBackgroundColor('#0febc2');

console.log(Object.keys(data))

chart.setConfig({
  type: "bar",
  data: {
    labels: Object.keys(data),
    datasets: [
      {
        label: "% of Programming Language Usage",
        data: Object.values(data),
        borderWidth: 1,
        backgroundColor: Object.keys(data).map(function (key, index) {
          return colors[index % colors.length];
        }),
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            reverse: false,
          },
        },
      ],
    },
  },
});
chart.setWidth(300).setHeight(200)
// Save it
chart.toFile("output/chart.png");

console.log("Chart created and saved as chart.png");
