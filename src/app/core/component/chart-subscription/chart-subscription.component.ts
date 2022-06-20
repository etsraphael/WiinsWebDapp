import { Component, Input, ViewChild } from '@angular/core';
import { ApexDataLabels, ApexLegend, ChartComponent } from 'ng-apexcharts';
import {
  ApexChart,
  ApexNonAxisChartSeries,
  ApexResponsive,
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
    fontSize: '13px',
    itemMargin: {
      vertical: 5,
    },
  };
  // Labels
  @Input() dataLabels: ApexDataLabels = {
    enabled: true,
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
        'Content creators (65%)',
        'Legal managers (15%)',
        'Other expenses (9%)',
        'Investments (9%)',
        'Benefits (2%)',
      ],
      responsive: [
        {
          breakpoint: 415,
          options: {
            legend: {
              position: 'bottom',
              fontSize: '13px',
              itemMargin: {
                vertical: 5,
              },
            },
          },
        },
      ],
    };
  }
}
