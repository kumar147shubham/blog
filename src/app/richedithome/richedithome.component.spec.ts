import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichedithomeComponent } from './richedithome.component';

describe('RichedithomeComponent', () => {
  let component: RichedithomeComponent;
  let fixture: ComponentFixture<RichedithomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RichedithomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RichedithomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
