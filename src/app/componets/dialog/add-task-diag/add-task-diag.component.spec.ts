import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskDiagComponent } from './add-task-diag.component';

describe('AddTaskDiagComponent', () => {
  let component: AddTaskDiagComponent;
  let fixture: ComponentFixture<AddTaskDiagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaskDiagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskDiagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
