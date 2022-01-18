import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraProjectComponent } from './infra-project.component';

describe('InfraProjectComponent', () => {
  let component: InfraProjectComponent;
  let fixture: ComponentFixture<InfraProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfraProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
