import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StadimTableComponent } from './stadim-table.component';

describe('StadimTableComponent', () => {
  let component: StadimTableComponent;
  let fixture: ComponentFixture<StadimTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StadimTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StadimTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
