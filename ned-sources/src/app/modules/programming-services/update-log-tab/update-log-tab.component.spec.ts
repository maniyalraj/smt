import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLogTabComponent } from './update-log-tab.component';

describe('UpdateLogTabComponent', () => {
  let component: UpdateLogTabComponent;
  let fixture: ComponentFixture<UpdateLogTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLogTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLogTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
