import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewDestinationsComponent } from './preview-destinations.component';

describe('PreviewDestinationsComponent', () => {
  let component: PreviewDestinationsComponent;
  let fixture: ComponentFixture<PreviewDestinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewDestinationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
