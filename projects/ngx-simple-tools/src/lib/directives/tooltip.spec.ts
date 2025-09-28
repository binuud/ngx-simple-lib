import { Component, ElementRef } from '@angular/core';
import { Tooltip } from './tooltip';

describe('Tooltip', () => {
  it('should create an instance', () => {
    
    const mockElementRef = {
      nativeElement: document.createElement('div')
    } as ElementRef;
    
    const directive = new Tooltip(mockElementRef);

    expect(directive).toBeTruthy();
  });
});
