import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanoviListComponent } from './clanovi-list.component';

describe('ClanoviListComponent', () => {
  let component: ClanoviListComponent;
  let fixture: ComponentFixture<ClanoviListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanoviListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanoviListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
