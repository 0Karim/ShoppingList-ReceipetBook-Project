import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  // @ViewChild('dropdownMenuToggle' ,{static: false}) dropdownMenuToggle : ElementRef;
  @HostBinding('class.show') isOpen : boolean = false;
  @Input() dropdownId : string = '#dropdownMenuToggle';

  constructor(private eleRef : ElementRef , private renderer : Renderer2  ) { }

  @HostListener('click') toggleOpen()
  {
    this.isOpen = !this.isOpen;
    let dropDown = this.eleRef.nativeElement.querySelector(this.dropdownId);

    if(this.isOpen)
    {
      this.renderer.addClass(dropDown, 'show');
    }
    else
    {
      this.renderer.removeClass(dropDown, 'show');
    }


  }

}
