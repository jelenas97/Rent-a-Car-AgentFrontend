import { Component, OnInit } from '@angular/core';
import {StatisticService} from "../service/statistic.service";
import {User} from "../shared/model/user";
import {AuthService} from "../service/auth.service";
import {StatisticDto} from "../shared/model/statistic-dto";

@Component({
  selector: 'app-advertisement-statistics',
  templateUrl: './advertisement-statistics.component.html',
  styleUrls: ['./advertisement-statistics.component.css']
})
export class AdvertisementStatisticsComponent implements OnInit {
  currUser : User;
  statisticKm : StatisticDto [];
  statisticRate : StatisticDto [];
  statisticComments : StatisticDto [];

  padding: any = { left: 5, top: 5, right: 5, bottom: 5 };
  titlePadding: any  = { left: 0, top: 0, right: 0, bottom: 10 };

  dataAdapter1:  any[] = [];
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

  dataAdapter2:  any[] = [];

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

  dataAdapter3:  any[] = [];

  seriesGroups3: any[] =
    [
      {
        type: 'column',
        columnsGapPercent: 50,
        valueAxis:
          {
            title: { text: 'Number of comments' },
            minValue: 0,
            maxValue: 200,
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
  private numberOfStats: number;


  constructor(private statisticService: StatisticService, private authService: AuthService) { }

  ngOnInit(): void {
    this.currUser=this.authService.getCurrUser();
    this.statisticService.getBestRate(this.currUser.id).subscribe(statisticRate=> {
      console.log(statisticRate);
      this.statisticRate = statisticRate;
      this.statisticService.getMostComments(this.currUser.id).subscribe(statisticComments=> {
        console.log(statisticComments);
        this.statisticComments = statisticComments;
        this.statisticService.getMostKm(this.currUser.id).subscribe(statisticKm=> {
          console.log(statisticKm);
          this.statisticKm = statisticKm;
          this.fill();
        });
      });
    });

  }

  fill() {
    this.numberOfStats = 0;
    for (const statisticRate of this.statisticRate) {
      if(this.numberOfStats == 3)
      {
        break;
      } else {
        this.dataAdapter2 = [
          ...this.dataAdapter2,
          {
            Car: statisticRate.carName,
            Rating: statisticRate.rate,
          }
        ];
        this.numberOfStats++;
      }

    }
    this.numberOfStats = 0;

    for (const statisticKm of this.statisticKm) {
      if(this.numberOfStats == 3)
      {
        break;
      } else {
      this.dataAdapter1 = [
        ...this.dataAdapter1,
        {
          Car: statisticKm.carName,
          KM: statisticKm.km,
        }
      ];
        this.numberOfStats++;
      }
    }
    this.numberOfStats = 0;

    for (const statisticComment of this.statisticComments) {
      if(this.numberOfStats == 3)
      {
        break;
      } else {
      this.dataAdapter3 = [
        ...this.dataAdapter3,
        {
          Car: statisticComment.carName,
          Comments: statisticComment.comment,
        }
      ];
      this.numberOfStats++;
      }
    }
  }

}
