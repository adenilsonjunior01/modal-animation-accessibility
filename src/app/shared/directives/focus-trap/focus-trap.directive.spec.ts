import { ElementRef, Inject } from '@angular/core';
import { FocusTrapDirective } from './focus-trap.directive';

describe('FocusTrapDirective', () => {
  it('should create an instance', () => {
    const element = Inject(ElementRef<any>);
    const directive = new FocusTrapDirective(element);
    expect(directive).toBeTruthy();
  });
});
