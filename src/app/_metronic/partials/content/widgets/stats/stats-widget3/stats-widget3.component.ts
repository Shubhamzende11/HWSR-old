import { Component, ElementRef, Input, OnInit, ViewChild , ChangeDetectorRef} from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';
import { getCSSVariableValue } from '../../../../../kt/_utils';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-stats-widget3',
  templateUrl: './stats-widget3.component.html',
})
export class StatsWidget3Component implements OnInit {
  @Input() title = '';
  @Input() color = '';
  @Input() description = '';
  @Input() change = '';
  @ViewChild('chartRef', { static: true }) chartRef: ElementRef;
  height: number;
  results : any ;
 
  chartOptions: any = {};
  labelColor: string;
  baseColor: string;
  lightColor: string;

  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.http.get('').subscribe((lineResult: any)=>{
      this.results=lineResult.data;
      this.height = 150;
      this.labelColor = getCSSVariableValue('--bs-gray-800');
      this.baseColor = getCSSVariableValue('--bs-' + this.color);
      this.lightColor = getCSSVariableValue('--bs-light-' + this.color);
      
      this.chartOptions = getChartOptions(
        this.height,
        this.labelColor,
        this.baseColor,
        this.lightColor,lineResult.data
      ),
      this.cd.detectChanges();
    })
   ;
  }
}

function getChartOptions(
  height: number,
  labelColor: string,
  baseColor: string,
  lightColor: string,data: any
): ApexOptions {
  const options: ApexOptions = {
    series: [
      {
        name: 'Net Profit',
        data: data,
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'area',
      height: height,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'solid',
      opacity: 1,
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: 3,
      colors: [baseColor],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
      crosshairs: {
        show: false,
        position: 'front',
        stroke: {
          color: '#E4E6EF',
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      min: 0,
      max: 80,
      labels: {
        show: false,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val) {
          return '$' + val + ' thousands';
        },
      },
    },
    colors: [lightColor],
    markers: {
      colors: [lightColor],
      strokeColors: [baseColor],
      strokeWidth: 3,
    },
  };
  return options;
}
