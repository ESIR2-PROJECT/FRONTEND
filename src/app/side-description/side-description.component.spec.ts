import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideDescriptionComponent } from './side-description.component';

describe('SideDescriptionComponent', () => {
  let component: SideDescriptionComponent;
  let fixture: ComponentFixture<SideDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
