import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipsTabComponent } from './relationships-tab.component';

describe('RelationshipsTabComponent', () => {
  let component: RelationshipsTabComponent;
  let fixture: ComponentFixture<RelationshipsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationshipsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationshipsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
