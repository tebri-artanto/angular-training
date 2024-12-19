import { Component, OnInit, ViewChild } from '@angular/core';
import { RealtimeDatabaseService } from '../../../services/realtime-database.service';
import { Router } from '@angular/router';
import { ConfirmationModalComponent } from '../../confirmation-modal/confirmation-modal.component';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.css'],
  standalone: false,

})
export class PokemonTableComponent implements OnInit {
  // @ViewChild('confirmDialog') confirmDialog!: ConfirmationModalComponent;
  formSubmissions: any[] = [];

  constructor(private realtimeDatabaseService: RealtimeDatabaseService,
    private messageService: MessageService,
    private router: Router, private confirmationService: ConfirmationService) {}

  async ngOnInit(): Promise<void>  {
    await this.getHistoryData();

  }

  async getHistoryData(): Promise<void> {
    try {
      const data = await this.realtimeDatabaseService.getFormSubmissions();
    console.log(data)
    this.formSubmissions = Object.keys(data || {}).map((key) => ({
      id: key,
      ...data[key],
    }));
    } catch (error) {
      console.error('Error fetching form submissions:', error);
      this.formSubmissions = [];
    }
  }

  editHistory(id: string) {
    this.router.navigate(['/edit-form-submission', id]);
  }



  async deleteHistory(id: string) {
    const response = await this.realtimeDatabaseService.deleteFormSubmission(id);
    console.log(response);
  }

//   onDeleteClicked(id: string) {
//     this.confirmDialog.openConfirmDialog({
//         message: 'Do you want to delete this record?',
//         header: 'Danger Zone',
//         icon: 'pi pi-info-circle',
//         acceptLabel: 'Delete',
//         accept: () => {
//           const response = this.realtimeDatabaseService.deleteFormSubmission(id);
//           console.log(response);
//             console.log('Delete confirmed');
//         }
//     });
// }

confirm(id: string) {
  this.confirmationService.confirm({
      header: 'Confirmation',
      message: 'Do you want to delete this record?',
      icon: 'pi pi-exclamation-circle',
      rejectButtonProps: {
          label: 'Cancel',
          icon: 'pi pi-times',
          outlined: true,
          size: 'small'
      },
      acceptButtonProps: {
          label: 'Delete',
          icon: 'pi pi-check',
          size: 'small'
      },
      accept: () => {
          this.onDeleteConfirmed(id),
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Data Deleted', life: 3000 });
      },
      reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
      }
  });
}



onSaveConfirmed(id: string) {
  // Perform save logic
  console.log('Save confirmed');
}



onDeleteConfirmed(id: string) {
  console.log(id);
  const response = this.realtimeDatabaseService.deleteFormSubmission(id);
            console.log(response);
              console.log('Delete confirmed');
              this.getHistoryData();
              return;
}

onDeleteRejected() {
  // Handle delete cancellation
  console.log('Delete cancelled');
}




}
