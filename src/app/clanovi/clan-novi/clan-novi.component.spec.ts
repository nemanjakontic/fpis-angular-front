import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanNoviComponent } from './clan-novi.component';

describe('ClanNoviComponent', () => {
  let component: ClanNoviComponent;
  let fixture: ComponentFixture<ClanNoviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanNoviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanNoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
