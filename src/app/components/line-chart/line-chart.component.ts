import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  public chart: any;
  constructor() { 
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
	       datasets: [
          {
            label: "Offline Hours",
            data: ['1','3', '3', '4', '4', '3', '3'],
            backgroundColor: '#88A5FB',
            borderColor: '#88A5FB',
            tension: 0.5,
            borderWidth: 2
          },
          {
            label: "Online Hours",
            data: ['1', '2', '2', '2', '4', '4', '5'],
            backgroundColor: '#91d095',
            borderColor: '#91d095',
            tension: 0.5,
            borderWidth: 2
          }  
        ]
      },
      options: {
        responsive:true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            align: 'end',
              labels: {
                  // This more specific font property overrides the global property
                  usePointStyle: true,
                  boxHeight: 7,
                  font: {
                      size: 14,
                      family: 'DM Sans'
                  }
              }
          }
      }, 
      scales: {
        x: {
          ticks: {
            font: {
              family: 'DM Sans'
            }
          },
          border: {
            display: false
          },
          grid: {
            display: false,
          },
          
      },
        y: {
          ticks: {
            font: {
              family: 'DM Sans'
            }
          },
          border: {
            display: false
          },
          grid: {
            color: "#f2f5ff"
          },
      },
      },
    }
    });
  }

}
