import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

declare const bootstrap: any;

@Directive({
  selector: '[title]'
})
export class Tooltip {

  @Input() title?: string;
  @Input() placement?: string = 'top'; // default placement
  @Input() container?: string | boolean =false;          // container selector or 'body'

  private tooltipInstance: any;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    this.initTooltip();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['title'] || changes['placement'] || changes['container']) {
      this.updateTooltip();
    }
  }

  private initTooltip() {
    if (this.title) {
      this.tooltipInstance = new bootstrap.Tooltip(this.el.nativeElement, {
        title: this.title,
        placement: this.placement,
        container: this.container
      });
    }
  }

  private updateTooltip() {
    if (this.tooltipInstance) {
      this.tooltipInstance.dispose();
    }
    this.initTooltip();
  }

  ngOnDestroy() {
    if (this.tooltipInstance) {
      this.tooltipInstance.dispose();
    }
  }

}

