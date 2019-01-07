import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appExpandMenu]',
})
export class ExpandMenuDirective {
    @HostBinding('class.active') isOpen = true;
    @HostListener('click') toggleOpen($event) {
        this.isOpen = !this.isOpen;
    }
}
