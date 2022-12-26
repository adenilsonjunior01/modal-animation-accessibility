import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FocusTrapDirective } from '../../directives/focus-trap/focus-trap.directive';
import { FocusBackDirective } from './../../directives/focus-back/focus-back.directive';
import { ModalComponent } from './modal.component';
import { ModalService } from './services/modal.service';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    FocusBackDirective,
    FocusTrapDirective
  ],
  exports: [ModalComponent],
  providers: [ModalService]
})
export class ModalModule {}
