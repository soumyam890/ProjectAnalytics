import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {
  LineChart = [];

  ngOnInit() {
    /// Just Dummy data for displaying Chart. need to call an API and fetch data
    this.LineChart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
          '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23',
          '24', '25', '26', '27', '28', '29', '30'],
        datasets: [{
          data: [5, 2, 6, 15, 22, 33, 6, 8, 19, 11, 6, 12, 5, 2, 6, 15, 22, 33, 6, 8, 19, 11, 6, 12, 12, 5, 2, 6, 15, 22],
          fill: true,
          backgroundColor: 'green',
          borderWidth: 0,
          barThickness: 1,
          maxBarThickness: 1
        }]
      },
      options: {
        layout: {
          padding: {
            top: 15,
            bottom: 25,
          },
        },
        legend: {
          display: false,
        },
        tooltips: {
          // Disable the on-canvas tooltip
          enabled: true,
        },
        responsive: true,
        scales: {
          xAxes: [{
            barPercentage: 0.2,
            ticks: {
              display: true,
            },
            gridLines: {
              display: false,
              drawBorder: false,
            }
          }],
          yAxes: [{
            ticks: {
              display: true,
              beginAtZero: true,
              // Include a dollar sign in the ticks
              callback: function (value, index, values) {
                return value + 'k';
              },
            },
            gridLines: {
              drawBorder: false,
              display: false,
            }
          }]
        }
      }
    });
  }
}
