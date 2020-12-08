import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadodeClienteComponent } from './listadode-cliente.component';

describe('ListadodeClienteComponent', () => {
  let component: ListadodeClienteComponent;
  let fixture: ComponentFixture<ListadodeClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadodeClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadodeClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
