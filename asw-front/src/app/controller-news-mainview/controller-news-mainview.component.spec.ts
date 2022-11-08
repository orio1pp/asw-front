import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerNewsMainviewComponent } from './controller-news-mainview.component';

describe('ControllerNewsMainviewComponent', () => {
  let component: ControllerNewsMainviewComponent;
  let fixture: ComponentFixture<ControllerNewsMainviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControllerNewsMainviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerNewsMainviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
