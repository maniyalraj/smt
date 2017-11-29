import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceHistoryTabComponent } from './source-history-tab.component';

describe('SourceHistoryTabComponent', () => {
  let component: SourceHistoryTabComponent;
  let fixture: ComponentFixture<SourceHistoryTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceHistoryTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceHistoryTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
