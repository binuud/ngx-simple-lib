import { Component, ElementRef } from '@angular/core';
import { DraggableDirective } from './draggable.directive';

describe('DraggableDirective', () => {
  it('should create an instance', () => {
    
    const mockElementRef = {
      nativeElement: document.createElement('div')
    } as ElementRef;
    
    const directive = new DraggableDirective(mockElementRef);

    expect(directive).toBeTruthy();
  });
});
