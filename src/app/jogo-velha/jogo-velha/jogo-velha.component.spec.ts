import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoVelhaComponent } from './jogo-velha.component';

describe('JogoVelhaComponent', () => {
  let component: JogoVelhaComponent;
  let fixture: ComponentFixture<JogoVelhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JogoVelhaComponent]
    });
    fixture = TestBed.createComponent(JogoVelhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
