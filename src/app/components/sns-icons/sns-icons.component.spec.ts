import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnsIconsComponent } from './sns-icons.component';

describe('SnsIconsComponent', () => {
  let component: SnsIconsComponent;
  let fixture: ComponentFixture<SnsIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnsIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnsIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
