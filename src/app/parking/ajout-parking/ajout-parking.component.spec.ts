import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutParkingComponent } from './ajout-parking.component';

describe('AjoutParkingComponent', () => {
  let component: AjoutParkingComponent;
  let fixture: ComponentFixture<AjoutParkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutParkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
