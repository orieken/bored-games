import { CoolChartComponent } from './cool-chart.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

fdescribe('CoolChartComponent', () => {
  let component: CoolChartComponent;
  let fixture: ComponentFixture<CoolChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoolChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate percentages based on input values', () => {
    component.actualValue = 500;
    component.goalValue = 750;
    component.ngOnInit();

    expect(component.percentage).toBe(50);  // since 500 is 50% of 1000
    expect(component.goalPercentage).toBe(75);  // since 750 is 75% of 1000
  });

  it('should display correct percentages in the DOM', () => {
    component.actualValue = 600;
    component.goalValue = 800;
    component.ngOnInit();
    fixture.detectChanges();  // trigger a change detection cycle

    const compiled = fixture.debugElement.nativeElement;
    const percentageElem = compiled.querySelector('.percentage');
    expect(percentageElem.textContent).toContain('60%');
  });

  it('should position goal line correctly', () => {
    component.actualValue = 600;
    component.goalValue = 800;
    component.ngOnInit();
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const goalLineElem = compiled.querySelector('.goal-line');
    expect(goalLineElem.style.left).toBe('80%');  // as 800 is 80% of 1000
  });

});
