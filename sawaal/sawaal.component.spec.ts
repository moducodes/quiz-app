import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SawaalComponent } from './sawaal.component';

describe('SawaalComponent', () => {
  let component: SawaalComponent;
  let fixture: ComponentFixture<SawaalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SawaalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SawaalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
