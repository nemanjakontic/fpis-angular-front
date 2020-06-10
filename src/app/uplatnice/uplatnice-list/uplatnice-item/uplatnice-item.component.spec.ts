import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UplatniceItemComponent } from './uplatnice-item.component';

describe('UplatniceItemComponent', () => {
  let component: UplatniceItemComponent;
  let fixture: ComponentFixture<UplatniceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UplatniceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UplatniceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
