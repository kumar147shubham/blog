import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestngxextendedpdfviewerComponent } from './testngxextendedpdfviewer.component';

describe('TestngxextendedpdfviewerComponent', () => {
  let component: TestngxextendedpdfviewerComponent;
  let fixture: ComponentFixture<TestngxextendedpdfviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestngxextendedpdfviewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestngxextendedpdfviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
