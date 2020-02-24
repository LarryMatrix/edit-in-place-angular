import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  TableData: any;
  ShowEditTable: boolean = false;
  EditRowId: any = '';

  constructor () {
    this.TableData = [
      {
        id: 1,
        name: "Lawrance",
        mobile: "000000",
        email: "lawrance@gmail.com"
      },
      {
        id: 2,
        name: "Jackson",
        mobile: "111222",
        email: "jackson@gmail.com"
      },
      {
        id: 3,
        name: "Massanja",
        mobile: "333333",
        email: "massanja@gmail.com"
      },
      {
        id: 4,
        name: "Sanja",
        mobile: "777777",
        email: "sanja@gmail.com"
      },
      {
        id: 5,
        name: "Leticia",
        mobile: "66666",
        email: "leticia@gmail.com"
      },
      {
        id: 6,
        name: "Wilfrida",
        mobile: "44444",
        email: "wilfrida@gmail.com"
      }
    ]
  }

  Edit(val){
    this.EditRowId = val
  }


}
