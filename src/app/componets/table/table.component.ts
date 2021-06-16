// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-table',
//   templateUrl: './table.component.html',
//   styleUrls: ['./table.component.scss']
// })
// export class TableComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { element } from 'protractor';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddTaskDiagComponent } from '../dialog/add-task-diag/add-task-diag.component';

export interface PeriodicElement {
  task: string;
  id: any;
  name: string;
  details: string;
  priority: string;
}



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  ELEMENT_DATA: PeriodicElement[] = [
    {id: 1, task: 'Test aplication', name: 'Matei', priority: 'Medium', details: 'It was noticed that the application has some problems with navigation, you can check this and let the developer know why you met'},
    {id: 2, task: 'Discussed new design', name: 'Andrei', priority: 'Low', details: 'I would like to meet on Tuesday at 10 to discuss a better design'},
    {id: 3, task: 'Fix bug', name: 'Gabi', priority: 'High', details: 'A bug was noticed on the delete button, you can fix it when you have time'},
  ];
  displayedColumns: string[] = ['id', 'task', 'name', 'priority', 'dropdown', 'delete'];
  
  dataSource: any = this.ELEMENT_DATA;

  dialogs: any;

  
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }
  

  delete(id: number){
    this.ELEMENT_DATA = this.ELEMENT_DATA.filter((elem) => elem.id !== id);
    console.log(this.ELEMENT_DATA);
    this.dataSource = [...this.ELEMENT_DATA];
  }

  addTask(){
    let idFilter = () => {
      let newIds = this.ELEMENT_DATA.map(id => id.id);
      return newIds
    }
    let dialogRef = this.dialog.open(AddTaskDiagComponent, {
      height: '50em',
      width: '30em',
      data: idFilter(),
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(value => {
      if(value.id.typeof !== 'number'){
        this.dialogs = value;
      this.ELEMENT_DATA.push(this.dialogs);
      this.dataSource = [...this.ELEMENT_DATA];
      console.log(JSON.stringify(value)); 
      console.log(this.dialogs)
      }
      
    });
  }

  colors(val: any){
    if(val == "High"){
      return "red"
    }else if(val == "Medium"){
      return "yellow"
    }else {
      return "green"
    }
  }
}

