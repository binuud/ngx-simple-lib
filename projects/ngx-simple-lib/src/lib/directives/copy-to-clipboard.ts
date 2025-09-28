import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appCopyToClipboard]'
})
export class CopyToClipboard {

  @Input('appCopyToClipboard') textToCopy: string = '';
  @Output() copySuccess = new EventEmitter<void>();
  @Output() copyError = new EventEmitter<void>();

  @HostListener('click')
  copyText() {
    if (!this.textToCopy) {
      this.copyError.emit();
      return;
    }
    try {
      navigator.clipboard.writeText(this.textToCopy).then(() => {
        this.copySuccess.emit();
      }, () => {
        this.copyError.emit();
      });
    } catch {
      this.copyError.emit();
    }
  }

}
