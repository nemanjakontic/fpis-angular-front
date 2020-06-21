import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanarineComponent } from './clanarine.component';

describe('ClanarineComponent', () => {
  let component: ClanarineComponent;
  let fixture: ComponentFixture<ClanarineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanarineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanarineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
