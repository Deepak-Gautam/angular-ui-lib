import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuiLibComponent } from './dui-lib.component';

describe('DuiLibComponent', () => {
  let component: DuiLibComponent;
  let fixture: ComponentFixture<DuiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuiLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
