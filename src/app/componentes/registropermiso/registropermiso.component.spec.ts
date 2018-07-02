import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistropermisoComponent } from './registropermiso.component';

describe('RegistropermisoComponent', () => {
  let component: RegistropermisoComponent;
  let fixture: ComponentFixture<RegistropermisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistropermisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistropermisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
