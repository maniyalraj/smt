import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProgServiceComponent } from './edit-prog-service.component';

describe('EditProgServiceComponent', () => {
  let component: EditProgServiceComponent;
  let fixture: ComponentFixture<EditProgServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProgServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProgServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
