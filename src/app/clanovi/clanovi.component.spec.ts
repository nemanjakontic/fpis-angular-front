import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanoviComponent } from './clanovi.component';

describe('ClanoviComponent', () => {
  let component: ClanoviComponent;
  let fixture: ComponentFixture<ClanoviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanoviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
