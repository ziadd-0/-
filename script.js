
const ctx = document.getElementById('speedChart').getContext('2d');
const speedChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["4:00", "4:30", "5:00", "5:30", "6:00", "6:30", "7:00", "8:00"],
    datasets: [{
      label: 'نوع الجري',
      data: [1, 1, 2, 2, 3, 3, 3, 4],
      backgroundColor: ['red', 'red', 'orange', 'orange', 'green', 'green', 'green', 'blue'],
      borderRadius: 5
    }]
  },
  options: {
    scales: {
      y: {
        ticks: {
          callback: function(value) {
            return {
              1: 'جري سريع',
              2: 'جري مريح',
              3: 'جري بطيء',
              4: 'مشي'
            }[value];
          },
          stepSize: 1,
          beginAtZero: true,
          max: 4
        }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function(ctx) {
            return {
              1: 'جري سريع',
              2: 'جري مريح',
              3: 'جري بطيء',
              4: 'مشي'
            }[ctx.raw];
          }
        }
      }
    }
  }
});
