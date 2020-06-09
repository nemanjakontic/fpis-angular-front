import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanItemComponent } from './clan-item.component';

describe('ClanItemComponent', () => {
  let component: ClanItemComponent;
  let fixture: ComponentFixture<ClanItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
