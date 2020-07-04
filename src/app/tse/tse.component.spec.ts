import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TseComponent } from './tse.component';

describe('TseComponent', () => {
  let component: TseComponent;
  let fixture: ComponentFixture<TseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
