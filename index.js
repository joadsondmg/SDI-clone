
document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('.buttons .btn-ocorrencia'); // Correção no seletor

    buttons.forEach(function(button) {
        button.addEventListener("click", function(e) {
            // Remova a classe 'selected' de todos os links
            buttons.forEach(function(otherButton) {
                otherButton.classList.remove("selected");
            });

            // Adicione a classe 'selected' apenas ao link clicado
            button.classList.add("selected");
        });
    });
})

document.addEventListener('DOMContentLoaded', function(){
  const buttons = document.querySelectorAll('.graph-control-panel button'); // Correção no seletor

  buttons.forEach(function(button) {
      button.addEventListener("click", function(e) {
          // Remova a classe 'selected' de todos os links
          buttons.forEach(function(otherButton) {
              otherButton.classList.remove("selected");
          });

          // Adicione a classe 'selected' apenas ao link clicado
          button.classList.add("selected");
      });
  });
})


var ctx = document.getElementById('myChart').getContext('2d');

    // Define os dados para os três gráficos
    var chartData = [
      {
        labels: ['Categoria 1', 'Categoria 2', 'Categoria 3'],
        datasets: [{
          label: 'OC Total  |  Logística Norte',
          data: [10, 20, 15],
          backgroundColor: ['rgba(236,177,31)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
          borderWidth: 1
        }]
      },
      {
        labels: ['Categoria A', 'Categoria B', 'Categoria C'],
        datasets: [{
          label: 'OC Total Crítica  |  Logística Norte',
          data: [5, 15, 25],
          backgroundColor: ['rgba(236,177,31)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
          borderWidth: 1
        }]
      },
      {
        labels: ['Categoria X', 'Categoria Y', 'Categoria Z'],
        datasets: [{
          label: 'Neutralizado X Não Neutralizado  |  Logística Norte',
          data: [8, 18, 12],
          backgroundColor: ['rgba(236,177,31)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
          borderWidth: 1
        }]
      }
    ];

    var options = {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };

    var currentChart = null;

    function updateChart(index) {
      if (currentChart) {
        currentChart.destroy(); // Destroi o gráfico atual
      }

      currentChart = new Chart(ctx, {
        type: 'bar',
        data: chartData[index],
        options: options
      });
    }

    // Inicialmente, exibe o primeiro gráfico
    updateChart(0);