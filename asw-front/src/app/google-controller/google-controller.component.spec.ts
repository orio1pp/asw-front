import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleControllerComponent } from './google-controller.component';

describe('GoogleControllerComponent', () => {
  let component: GoogleControllerComponent;
  let fixture: ComponentFixture<GoogleControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
