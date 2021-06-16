// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-add-task-diag',
//   templateUrl: './add-task-diag.component.html',
//   styleUrls: ['./add-task-diag.component.scss']
// })
// export class AddTaskDiagComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, Inject, OnInit } from '@angular/core';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { add_task } from '../../data-structure/data-structure';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task-diag',
  templateUrl: './add-task-diag.component.html',
  styleUrls: ['./add-task-diag.component.scss']
})
export class AddTaskDiagComponent implements OnInit {

  prioritys = [
    {priority: 'High'},
    {priority: 'Medium'},
    {priority: 'Low'}
  ];

  addTask: add_task ={
    id: 0,
    task: '',
    name: '',
    details: '',
    priority: '',
  }
  priority: string = '';
  

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddTaskDiagComponent>,
    private formBuilder: FormBuilder,
  ) { 
    
  }
  addTaskValidator = this.formBuilder.group({
    // task: new FormControl('', Validators.required),
    // name: new FormControl('', Validators.required),
    // details: new FormControl('', Validators.required),
    // priority: new FormControl('', Validators.required),
    task: ['', Validators.required],
    name: ['', Validators.required],
    details: ['', Validators.required],
    priority: ['', Validators.required],
  });

  ngOnInit() {
    this.addTask.id = Math.max(...this.data) + 1;
    console.log(this.addTask.id)
  }

  getTaskName(val: any){
    this.addTask.task = val.target.value;
    console.warn(val.target.value)
  }

  getPersonName(val: any){
    this.addTask.name = val.target.value;
    console.warn(val.target.value)
  }
  onPrioritySelection(){
    this.addTask.priority = this.priority;
    console.log(this.addTask);
  }
  getDetails(val: any){
    this.addTask.details = val.target.value;
    console.warn(val.target.value);
  }
  addTasks(){

  }
  close(){
    this.dialogRef.close();
  }
}

