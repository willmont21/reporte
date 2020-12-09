import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadodemesComponent } from './listadodemes.component';

describe('ListadodemesComponent', () => {
  let component: ListadodemesComponent;
  let fixture: ComponentFixture<ListadodemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadodemesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadodemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
