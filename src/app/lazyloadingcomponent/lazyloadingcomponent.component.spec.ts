import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadingcomponentComponent } from './lazyloadingcomponent.component';

describe('LazyloadingcomponentComponent', () => {
  let component: LazyloadingcomponentComponent;
  let fixture: ComponentFixture<LazyloadingcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyloadingcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyloadingcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
