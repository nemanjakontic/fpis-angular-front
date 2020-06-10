import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UplatniceListComponent } from './uplatnice-list.component';

describe('UplatniceListComponent', () => {
  let component: UplatniceListComponent;
  let fixture: ComponentFixture<UplatniceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UplatniceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UplatniceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
