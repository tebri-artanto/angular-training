
import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css'],
  standalone: false
})

export class ConfirmationModalComponent {
  @Input() message: any;
  @Output() cancel = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();
  // @Input() header: string = 'Confirmation';
  //   @Input() message: string = 'Are you sure you want to proceed?';
  //   @Input() icon: string = 'pi pi-exclamation-triangle';
  //   @Input() acceptLabel: string = 'Confirm';
  //   @Input() rejectLabel: string = 'Cancel';
  //   @Input() dialogStyle: any = {};
  //   @Input() acceptButtonStyleClass: string = 'p-button-primary';
  //   @Input() rejectButtonStyleClass: string = 'p-button-secondary p-button-text';

  //   @Output() confirmed = new EventEmitter<void>();
  //   @Output() rejected = new EventEmitter<void>();

  //   constructor(
  //       private confirmationService: ConfirmationService,
  //       private messageService: MessageService
  //   ) {}

  //   /**
  //    * Trigger the confirmation dialog
  //    * @param event The event target that triggered the dialog
  //    */
  //   confirm(event: Event) {
  //       this.confirmationService.confirm({
  //           target: event.target as EventTarget,
  //           message: this.message,
  //           header: this.header,
  //           icon: this.icon,
  //           acceptLabel: this.acceptLabel,
  //           rejectLabel: this.rejectLabel,
  //           accept: () => this.onAccept(),
  //           reject: () => this.onReject()
  //       });
  //   }

  //   /**
  //    * Handle confirmation action
  //    */
  //   onAccept() {
  //       this.confirmed.emit();
  //       this.messageService.add({
  //           severity: 'info',
  //           summary: 'Confirmed',
  //           detail: 'Action completed'
  //       });
  //   }

  //   /**
  //    * Handle rejection action
  //    */
  //   onReject() {
  //       this.rejected.emit();
  //       this.messageService.add({
  //           severity: 'error',
  //           summary: 'Rejected',
  //           detail: 'Action cancelled',
  //           life: 3000
  //       });
  //   }
//   constructor(
//     private confirmationService: ConfirmationService,
//     private messageService: MessageService
// ) {}


// openConfirmDialog(config: {
//     message: string,
//     header?: string,
//     icon?: string,
//     acceptLabel?: string,
//     rejectLabel?: string,
//     accept: () => void,
//     reject?: () => void
// }) {
//     this.confirmationService.confirm({
//         message: config.message,
//         header: config.header || 'Confirmation',
//         icon: config.icon || 'pi pi-exclamation-triangle',
//         acceptLabel: config.acceptLabel || 'Save',
//         rejectLabel: config.rejectLabel || 'Cancel',
//         rejectButtonProps: {
//             label: config.rejectLabel || 'Cancel',
//             severity: 'secondary',
//             outlined: true,
//         },
//         acceptButtonProps: {
//             label: config.acceptLabel || 'Save',
//         },
//         accept: () => {
//             config.accept();
//             this.messageService.add({
//                 severity: 'info',
//                 summary: 'Confirmed',
//                 detail: 'Action completed'
//             });
//         },
//         reject: () => {
//             if (config.reject) {
//                 config.reject();
//             }
//             this.messageService.add({
//                 severity: 'error',
//                 summary: 'Rejected',
//                 detail: 'Action cancelled',
//                 life: 3000,
//             });
//         },
//     });
// }
}
