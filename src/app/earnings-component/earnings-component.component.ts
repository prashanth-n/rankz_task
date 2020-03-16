import { Component, NgZone, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { MockapiService } from '../services/mock-api.service';
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-earnings-component',
  templateUrl: './earnings-component.component.html',
  styleUrls: ['./earnings-component.component.scss']
})

export class EarningsComponentComponent implements AfterViewInit, OnDestroy, OnInit {
  private chart: am4charts.XYChart;
  constructor(private zone: NgZone, private earningsService: MockapiService) { }
  earningsData;
  ngOnInit(): void {
    this.earningsService.getEarningsData().subscribe(data => {
      this.earningsData = data;
      console.log(this.earningsData);
    });
  }
  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      const chart = am4core.create('chartdiv', am4charts.XYChart);

      chart.paddingRight = 20;

      const data = [];
      let visits = 10;
      for (let i = 1; i < 10; i++) {
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        data.push({ date: new Date(2018, 0, i), name: 'name' + i, value: visits });
      }

      chart.data = data;

      const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;

      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.minWidth = 35;

      const series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.dateX = 'date';
      series.dataFields.valueY = 'value';

      series.tooltipText = '{valueY.value}';
      chart.cursor = new am4charts.XYCursor();

      const scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series);
      chart.scrollbarX = scrollbarX;

      this.chart = chart;
    });
  }
  ngOnDestroy(): void {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }


}
