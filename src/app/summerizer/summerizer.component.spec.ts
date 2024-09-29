import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerizerComponent } from './summerizer.component';

describe('SummerizerComponent', () => {
  let component: SummerizerComponent;
  let fixture: ComponentFixture<SummerizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummerizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummerizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
