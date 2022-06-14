import { Component, Input, ViewChild } from '@angular/core';

import { ApexDataLabels, ApexLegend, ChartComponent } from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTheme,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: string[];
  theme: ApexTheme;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-chart-subscription',
  templateUrl: './chart-subscription.component.html',
  styleUrls: ['./chart-subscription.component.scss'],
})
export class ChartSubscriptionComponent {
  // Select Chart
  @ViewChild('chart') chart: ChartComponent;
  // Color Palette
  @Input() colors: string[] = [
    '#2BB1D6',
    '#2284BB',
    '#2E5896',
    '#322D6A',
    '#2A0039',
  ];
  // Legend
  @Input() legend: ApexLegend = {
    fontSize: '15px',
    itemMargin: {
      vertical: 5,
    },
  };
  // Labels
  @Input() dataLabels: ApexDataLabels = {
    enabled: true,
    style: {
      fontSize: '18px',
    },
  };
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    // Construct the Chart
    this.chartOptions = {
      series: [65, 15, 9, 9, 2],
      chart: {
        width: '100%',
        type: 'pie',
        foreColor: 'white',
      },
      labels: [
        'Content creators',
        'Legal managers',
        'Other expenses',
        'Investments',
        'Benefits',
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }
}
