import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AqProjectComponent } from './aq-project.component';

describe('AqProjectComponent', () => {
  let component: AqProjectComponent;
  let fixture: ComponentFixture<AqProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AqProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AqProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
