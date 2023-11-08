/* Crea una página en la que representarás 2 gráficas diferentes haciendo uso de Google Charts sobre los siguientes conjuntos de datos:

a) Representación en el Congreso de los Diputados por partidos en las últimas elecciones generales. Estos datos los deberás representar mediante un gráfico de barras y mediante uno de sectores (PieChart).

b) Ránking mundial de países más turísticos (por número de visitantes). Deberás representar estos datos mediante un gráfico Geográfico.

*/

//a

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Escaños', 'Porcentaje',{role: "style"}],
    ["PSOE", 31.70, 'color: #1b9e77'],
    ["SUMAR", 12.31, 'color: #d95f02'],
    ["ERC", 1.89, 'color: #7570b3'],
    ["EH Bildu", 1.36, 'color: #e7298a'],
    ['BNG', 0.62, 'color: #66a61e'],
    ['CCa',0.46, 'color: #e6ab02'],
    ['UPN',0.21, 'color: #a6761d'],
    ['EAJ-PNV',1.12, 'color: #666666'],
    ['JUNTS',1.60, 'color: #1b9e77'],
    ['VOX',12.39, 'color: #d95f02'],
    ['PP',33.05, 'color: #7570b3'],
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
                   { calc: "stringify",
                     sourceColumn: 1,
                     type: "string",
                     role: "annotation" },
                   2]);

  var options = {
    title: "Escaños de los partidos politicos en porcentaje",
    width: 600,
    height: 300,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };
  var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
  chart.draw(view, options);
};

//Circular

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {

  var data = google.visualization.arrayToDataTable([
    ['Escaños', 'Porcentaje',{role: "style"}],
    ["PSOE", 31.70, 'color: #1b9e77'],
    ["SUMAR", 12.31, 'color: #d95f02'],
    ["ERC", 1.89, 'color: #7570b3'],
    ["EH Bildu", 1.36, 'color: #e7298a'],
    ['BNG', 0.62, 'color: #66a61e'],
    ['CCa',0.46, 'color: #e6ab02'],
    ['UPN',0.21, 'color: #a6761d'],
    ['EAJ-PNV',1.12, 'color: #666666'],
    ['JUNTS',1.60, 'color: #1b9e77'],
    ['VOX',12.39, 'color: #d95f02'],
    ['PP',33.05, 'color: #7570b3'],
  ]);

  var data2 = google.visualization.arrayToDataTable([
    ['Votos', 'Porcentaje',{role: "style"}],
    ["7.760.970", 31.70, 'color: #1b9e77'],
    ["3.014.006", 12.31, 'color: #d95f02'],
    ["462.883", 1.89, 'color: #7570b3'],
    ["333.362", 1.36, 'color: #e7298a'],
    ['152.327', 0.62, 'color: #66a61e'],
    ['114.718',0.46, 'color: #e6ab02'],
    ['51.764',0.21, 'color: #a6761d'],
    ['275.782',1.12, 'color: #666666'],
    ['392.634',1.60, 'color: #1b9e77'],
    ['3.033.744',12.39, 'color: #d95f02'],
    ['8.091.840',33.05, 'color: #7570b3'],
  ]);

  var options = {
    title: 'Escaños de los partidos politicos en porcentaje',
    is3D: true,
    slices: {
      0: { color: '#1b9e77', offset: 0.15  },
      1: { color: '#d95f02', offset: 0.10 },
      2: { color: '#7570b3', offset: 0.10 },
      3: { color: '#e7298a', offset: 0.10 },
      4: { color: '#66a61e', offset: 0.10 },
      5: { color: '#e6ab02', offset: 0.10 },
      6: { color: '#a6761d', offset: 0.10 },
      7: { color: '#666666', offset: 0.10 },
      8: { color: '#1b9e77', offset: 0.10 },
      9: { color: '#d95f02', offset: 0.10 },
      10: { color: '#7570b3', offset: 0.15 },
    },
    pieSliceText: 'label',
    pieSliceTextStyle: {
      color: 'black',
    },
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);

  // Cada dos segundos muestra los datos del array "data2"
  setInterval(()=>{
    chart.draw(data2,options);
  },2000);

  // Cada cuatro segundos muestra los datos iniciales otra vez.
  setInterval(()=>{
    chart.draw(data,options);
  },4000);


}