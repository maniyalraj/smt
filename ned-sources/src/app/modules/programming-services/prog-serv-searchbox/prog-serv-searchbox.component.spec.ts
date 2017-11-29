import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgServSearchboxComponent } from './prog-serv-searchbox.component';

describe('ProgServSearchboxComponent', () => {
  let component: ProgServSearchboxComponent;
  let fixture: ComponentFixture<ProgServSearchboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgServSearchboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgServSearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
