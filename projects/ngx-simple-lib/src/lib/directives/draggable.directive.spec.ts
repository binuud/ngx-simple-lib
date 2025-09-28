import { Component } from '@angular/core';
import { DraggableDirective } from './draggable.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';


@Component({
  template: `<div appDraggable></div>`
})
class TestComponent {}


describe('DraggableDirective', () => {  
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DraggableDirective, TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directiveElem = fixture.debugElement.children[0];
    const directiveInstance = directiveElem.injector.get(DraggableDirective);
    expect(directiveInstance).toBeTruthy();
  });
});
