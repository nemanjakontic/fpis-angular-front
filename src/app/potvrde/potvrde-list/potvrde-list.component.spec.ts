import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotvrdeListComponent } from './potvrde-list.component';

describe('PotvrdeListComponent', () => {
  let component: PotvrdeListComponent;
  let fixture: ComponentFixture<PotvrdeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotvrdeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotvrdeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
