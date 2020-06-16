import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotvrdaNovaComponent } from './potvrda-nova.component';

describe('PotvrdaNovaComponent', () => {
  let component: PotvrdaNovaComponent;
  let fixture: ComponentFixture<PotvrdaNovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotvrdaNovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotvrdaNovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
