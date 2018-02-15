import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
     selector: '[appTxtSize]'
})
export class TxtSizeDirective {

    @Input('appTxtSize') appTxtSize: string;

    constructor(private elRef: ElementRef) {
    }

    @HostListener('click') onClick() {
        this.elRef.nativeElement.style.fontSize = this.appTxtSize;
    }
}
