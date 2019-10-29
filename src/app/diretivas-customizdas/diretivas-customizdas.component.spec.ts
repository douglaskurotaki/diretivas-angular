import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasCustomizdasComponent } from './diretivas-customizdas.component';

describe('DiretivasCustomizdasComponent', () => {
  let component: DiretivasCustomizdasComponent;
  let fixture: ComponentFixture<DiretivasCustomizdasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivasCustomizdasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasCustomizdasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
