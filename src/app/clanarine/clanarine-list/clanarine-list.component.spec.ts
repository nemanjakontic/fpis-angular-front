import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanarineListComponent } from './clanarine-list.component';

describe('ClanarineListComponent', () => {
  let component: ClanarineListComponent;
  let fixture: ComponentFixture<ClanarineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanarineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanarineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
