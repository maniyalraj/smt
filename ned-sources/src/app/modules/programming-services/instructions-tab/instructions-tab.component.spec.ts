import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionsTabComponent } from './instructions-tab.component';

describe('InstructionsTabComponent', () => {
  let component: InstructionsTabComponent;
  let fixture: ComponentFixture<InstructionsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
