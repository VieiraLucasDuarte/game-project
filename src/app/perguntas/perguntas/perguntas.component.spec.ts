import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerguntasComponent } from './perguntas.component';

describe('PerguntasComponent', () => {
  let component: PerguntasComponent;
  let fixture: ComponentFixture<PerguntasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerguntasComponent]
    });
    fixture = TestBed.createComponent(PerguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
