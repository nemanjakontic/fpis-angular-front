import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotvrdeComponent } from './potvrde.component';

describe('PotvrdeComponent', () => {
  let component: PotvrdeComponent;
  let fixture: ComponentFixture<PotvrdeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotvrdeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotvrdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
