import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaArchivosComponent } from './carga-archivos.component';

describe('CargaArchivosComponent', () => {
  let component: CargaArchivosComponent;
  let fixture: ComponentFixture<CargaArchivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaArchivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaArchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
