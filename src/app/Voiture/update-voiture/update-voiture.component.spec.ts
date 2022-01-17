import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVoitureComponent } from './update-voiture.component';

describe('UpdateVoitureComponent', () => {
  let component: UpdateVoitureComponent;
  let fixture: ComponentFixture<UpdateVoitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVoitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
