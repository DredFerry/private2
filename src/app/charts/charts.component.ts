import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  public chartData!:object[]
  public chartData2!:object[]
  public primaryXAxis!:Object
  public c=0
  public title!:String
  public title2!:String

  ngOnInit(): void {
   this.title="Power(kW)"
   this.title2="Power Factor"
    this.chartData=[
      { power:0.19,time:this.getTime()},
      { power:0.16,time:this.getTime()},
      { power:0.18,time:this.getTime()},
      { power:0.14,time:this.getTime()},
    ];
    this.chartData2=[
      { power:0.7,time:this.getTime()},
      { power:0.4,time:this.getTime()},
      { power:0.9,time:this.getTime()},
      { power:0.3,time:this.getTime()},
      { power:0.8,time:this.getTime()},
      { power:0.3,time:this.getTime()},
    ];
    this.primaryXAxis={valueType:'Category'};
  }
   getTime(): any {
    // var date=new Date().toLocaleTimeString();
    this.c=this.c+2;
    var hour=new Date().getHours()
    var min=new Date().getMinutes()
    var sec=new Date().getSeconds()+this.c
    var date=hour+":"+min+":"+sec
    return date
  }

}
