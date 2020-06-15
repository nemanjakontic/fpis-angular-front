import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotvrdeItemComponent } from './potvrde-item.component';

describe('PotvrdeItemComponent', () => {
  let component: PotvrdeItemComponent;
  let fixture: ComponentFixture<PotvrdeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotvrdeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotvrdeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
