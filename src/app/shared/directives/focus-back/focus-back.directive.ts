import { Directive, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocusBack]',
  standalone: true
})
export class FocusBackDirective implements OnInit, OnDestroy {

  constructor() { }

  private lastFocusedElement!: Element | null;

  public ngOnInit(): void {
    this.lastFocusedElement = document.activeElement;
  }

  public ngOnDestroy(): void {
    if (this.lastFocusedElement) {
      (this.lastFocusedElement as HTMLElement).focus();
    }
  }
}
