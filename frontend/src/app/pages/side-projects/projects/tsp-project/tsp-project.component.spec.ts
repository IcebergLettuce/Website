import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TspProjectComponent } from './tsp-project.component';

describe('TspProjectComponent', () => {
  let component: TspProjectComponent;
  let fixture: ComponentFixture<TspProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TspProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TspProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
