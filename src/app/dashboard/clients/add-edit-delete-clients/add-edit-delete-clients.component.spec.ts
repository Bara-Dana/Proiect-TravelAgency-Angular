import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDeleteClientsComponent } from './add-edit-delete-clients.component';

describe('AddEditDeleteClientsComponent', () => {
  let component: AddEditDeleteClientsComponent;
  let fixture: ComponentFixture<AddEditDeleteClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDeleteClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDeleteClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
