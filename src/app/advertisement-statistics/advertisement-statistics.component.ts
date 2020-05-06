import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertisement-statistics',
  templateUrl: './advertisement-statistics.component.html',
  styleUrls: ['./advertisement-statistics.component.css']
})
export class AdvertisementStatisticsComponent implements OnInit {
  padding: any = { left: 5, top: 5, right: 5, bottom: 5 };
  titlePadding: any  = { left: 0, top: 0, right: 0, bottom: 10 };

  dataAdapter1:  any[] = [
    { Car: 'Audi Q5', KM: 14423},
    { Car: 'BMW M5', KM: 10056},
    { Car: 'Audi TT', KM: 7054}
  ];
  xAxis1: any =
    {
      position: 'top',
      dataField: 'Car',
      gridLines: { visible: true }
    };
  seriesGroups1: any[] =
    [
      {
        type: 'column',
        columnsGapPercent: 50,
        valueAxis:
          {
            title: { text: 'Kilometres driven by car' },
            minValue: 0,
            maxValue: 50000,
          },
        series: [
          {
            dataField: 'KM',
            displayText: 'Mileage of the vehicle',
            labels: {
              visible: true,
              verticalAlignment: 'top',
              offset: {x: 0, y: -20}
            },
            formatFunction: (value: any) => {
              return value + ' km';
            }
          }
        ]
      }
    ];

  dataAdapter2:  any[] = [
    { Car: 'Audi Q5', Rating: 9},
    { Car: 'BMW M5', Rating: 8.2},
    { Car: 'Audi TT', Rating: 7.3}
  ];

  seriesGroups2: any[] =
    [
      {
        type: 'column',
        columnsGapPercent: 50,
        valueAxis:
          {
            title: { text: 'Car rating' },
            minValue: 0,
            maxValue: 10,
          },
        series: [
          {
            dataField: 'Rating',
            displayText: 'Rating of the vehicle',
            labels: {
              visible: true,
              verticalAlignment: 'top',
              offset: {x: 0, y: -20}
            }
          }
        ]
      }
    ];

  dataAdapter3:  any[] = [
    { Car: 'Audi Q5', Comments: 341},
    { Car: 'BMW M5', Comments: 124},
    { Car: 'Audi TT', Comments: 56}
  ];

  seriesGroups3: any[] =
    [
      {
        type: 'column',
        columnsGapPercent: 50,
        valueAxis:
          {
            title: { text: 'Number of comments' },
            minValue: 0,
            maxValue: 1000,
          },
        series: [
          {
            dataField: 'Comments',
            displayText: 'Number of comments on the vehicle',
            labels: {
              visible: true,
              verticalAlignment: 'top',
              offset: {x: 0, y: -20}
            }
          }
        ]
      }
    ];


  constructor() { }

  ngOnInit(): void {
  }

}
