import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesPorClienteComponent } from './reportes-por-cliente.component';

describe('ReportesPorClienteComponent', () => {
  let component: ReportesPorClienteComponent;
  let fixture: ComponentFixture<ReportesPorClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesPorClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesPorClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
