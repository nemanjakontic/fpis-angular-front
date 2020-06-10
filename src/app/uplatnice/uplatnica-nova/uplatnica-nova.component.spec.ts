import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UplatnicaNovaComponent } from './uplatnica-nova.component';

describe('UplatnicaNovaComponent', () => {
  let component: UplatnicaNovaComponent;
  let fixture: ComponentFixture<UplatnicaNovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UplatnicaNovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UplatnicaNovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
