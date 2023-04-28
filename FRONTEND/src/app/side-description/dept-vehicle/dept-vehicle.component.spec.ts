import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptVehicleComponent } from './dept-vehicle.component';

describe('DeptVehicleComponent', () => {
  let component: DeptVehicleComponent;
  let fixture: ComponentFixture<DeptVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
