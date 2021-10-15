import { Component, OnInit ,ViewChild, ElementRef  } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Chart, registerables } from 'chart.js';
import { forkJoin } from 'rxjs';
import { AllInvoicesModalComponent } from 'src/app/modalComponents/all-invoices-modal/all-invoices-modal.component';
import { ApiCallsService } from 'src/app/services/api-calls.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
Chart.register(...registerables);

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.page.html',
  styleUrls: ['./invoices.page.scss'],
})
export class InvoicesPage implements OnInit{
  @ViewChild("barCanvas") barCanvas;
  @ViewChild("doughnutCanvas") doughnutCanvas;
  @ViewChild("lineCanvas") lineCanvas;

  barChart: any;
  doughnutChart: any;
  lineChart: any;


  constructor(
    private apicalls:ApiCallsService,
    private modalCtrl: ModalController,
    private httpClient: HttpClient,
  ) {
    apicalls.encodeURL();
   }

   ngOnInit(){
    this.getRevenueByBrand(this.today(),this.tommorrow())
    this.getSalesByBrand(this.today(),this.tommorrow());

    // var week = this.week()

    // const httpCalls = [];
    
    // for(let i=0;i< 7; i++){
    //   var startDate = week[i+1]
    //   var endDate = week[i]
    //   httpCalls.push(this.apicalls.getRevenueByBranch(startDate,endDate));
    // }
    // forkJoin(httpCalls).subscribe(res => {
    //   console.log(res)
    //   var x = 0;
    //   //for(let i in res){
    //     //this.addDataToChart(this.barChart,week[x+1],Object.values(res[x])[0]);
    //     //x+=1
    //   //}
    // });
   }

  ionViewDidEnter() {  
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: [],
        datasets: [
          {
            label: "Sales per brand",
            data: [],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
            
        }
      }
    });

    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: "doughnut",
      data: {
        labels: [],
        datasets: [
          {
            //label: "# of Votes",
            data: [],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
            ],
            hoverBackgroundColor: ["#FF6384"]
          }
        ]
      }
    });

    // this.lineChart = new Chart(this.lineCanvas.nativeElement, {
    //   type: "line",
    //   data: {
    //     labels: ["January", "February", "March", "April", "May", "June", "July"],
    //     datasets: [
    //       {
    //         label: "My First dataset",
    //         fill: false,
    //         backgroundColor: "rgba(75,192,192,0.4)",
    //         borderColor: "rgba(75,192,192,1)",
    //         borderCapStyle: "butt",
    //         borderDash: [],
    //         borderDashOffset: 0.0,
    //         borderJoinStyle: "miter",
    //         pointBorderColor: "rgba(75,192,192,1)",
    //         pointBackgroundColor: "#fff",
    //         pointBorderWidth: 1,
    //         pointHoverRadius: 5,
    //         pointHoverBackgroundColor: "rgba(75,192,192,1)",
    //         pointHoverBorderColor: "rgba(220,220,220,1)",
    //         pointHoverBorderWidth: 2,
    //         pointRadius: 1,
    //         pointHitRadius: 10,
    //         data: [65, 59, 80, 81, 56, 55, 40],
    //         spanGaps: false
    //       }
    //     ]
    //   }
    // });
  }

  async getInvoicesEvent(){
    const modal = await this.modalCtrl.create({
      component : AllInvoicesModalComponent
    })
    await modal.present()
  }

  getInvoices(){
    this.getInvoicesEvent()
  }

  today(){
    var date = new Date();
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();

    var today = yyyy + '-' + mm + '-' + dd;
    return today;
  }

  tommorrow(){
    const tomorrow_date = new Date(this.today())
    tomorrow_date.setDate(tomorrow_date.getDate() + 1)
    var _dd = String(tomorrow_date.getDate()).padStart(2, '0');
    var _mm = String(tomorrow_date.getMonth() + 1).padStart(2, '0'); 
    var _yyyy = tomorrow_date.getFullYear();

    var tommorrow = _yyyy + '-' + _mm + '-' + _dd;
    return tommorrow;
  }

  week(){
    var week = []

    for(var i= 0;i<8;i++){
      var date = new Date();
      const yesterday_date = new Date(date); 
      yesterday_date.setDate(yesterday_date.getDate() - (i+1));
      var _dd = String(yesterday_date.getDate()).padStart(2, '0');
      var _mm = String(yesterday_date.getMonth() + 1).padStart(2, '0'); 
      var _yyyy = yesterday_date.getFullYear();
  
      var day = _yyyy + '-' + _mm + '-' + _dd;
      
      week.push(day)
    }
    return(week);
  }

  getRevenueDaily(startDate,endDate,pop:boolean){
    if(pop){
      this.apicalls.presentLoading("Generating daily Revenue");
    }
    this.apicalls.getRevenueByBranch(startDate,endDate)
      .subscribe(
        (response) => {  
          if(pop){
            this.apicalls.loadingController.dismiss();
            this.apicalls.presentAlert( "Rs. " + response.KUL,false);
          }else{
            //this.addDataToChart(this.barChart,startDate,response);
            console.log(startDate,endDate)
            console.log(response)
          }
        },
        (error) => {                            
          console.error('Request failed with error')
        })
  }

  getRevenueByBrand(startDate,endDate){
    this.apicalls.getRevenueByBrand(startDate,endDate)
    .subscribe(
      (response) => {  
       var data = {}
        var resultArray = Object.keys(response).map(function(index){
          data[index] = response[index]
        });

        for (let key in data) {
          var color = this._randomColor();
          this.addDataToChart(this.doughnutChart,key,data[key],color)
        }

      },
      (error) => {                            
        console.error('Request failed with error')
      })
  }

  getSalesByBrand(startDate,endDate){
    this.apicalls.getSalesByBrand(startDate,endDate)
    .subscribe(
      (response) => {  
       var data = {}
        var resultArray = Object.keys(response).map(function(index){
          data[index] = response[index]
        });

        for (let key in data) {
          var color = this._randomColor();
          this.addDataToChart(this.barChart,key,data[key],color)
        }

      },
      (error) => {                            
        console.error('Request failed with error')
      })
  }

  addDataToChart(chart, label, data,color) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.data.datasets.forEach((dataset) => {
      dataset.backgroundColor.push(color);
    });
    chart.update();
}

  _randomColor(){
    var r =this.getRandomInt(1,255);
    var g =this.getRandomInt(1,255);
    var b =this.getRandomInt(1,255);
    
    return(`rgba(${r}, ${g}, ${b}, 0.2)`);
  }

  //helper method
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

}
