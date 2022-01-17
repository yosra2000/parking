import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeParkingsComponent } from './liste-parkings.component';

describe('ListeParkingsComponent', () => {
  let component: ListeParkingsComponent;
  let fixture: ComponentFixture<ListeParkingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeParkingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeParkingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
