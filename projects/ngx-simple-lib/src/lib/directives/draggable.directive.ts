import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
  private offsetX = 0;
  private offsetY = 0;
  private isDragging = false;

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.position = 'absolute';
    this.el.nativeElement.style.cursor = 'grab';
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.offsetX = event.clientX - this.el.nativeElement.getBoundingClientRect().left;
    this.offsetY = event.clientY - this.el.nativeElement.getBoundingClientRect().top;
    this.el.nativeElement.style.cursor = 'grabbing';
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;
    this.el.nativeElement.style.left = `${event.clientX - this.offsetX}px`;
    this.el.nativeElement.style.top = `${event.clientY - this.offsetY}px`;
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.isDragging = false;
    this.el.nativeElement.style.cursor = 'grab';
  }
}
