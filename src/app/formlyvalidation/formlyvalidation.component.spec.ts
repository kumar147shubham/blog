import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyvalidationComponent } from './formlyvalidation.component';

describe('FormlyvalidationComponent', () => {
  let component: FormlyvalidationComponent;
  let fixture: ComponentFixture<FormlyvalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormlyvalidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormlyvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
