import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


// PrimeNG Imports
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';

import { ProductComponent } from './product.component';
import { ProductFormsComponent } from './product-forms/product-forms.component';
import { ProductService } from '../../services/product.service';
import { RealtimeDatabaseService } from '../../services/realtime-database.service';
import { TableModule } from 'primeng/table';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,



    ButtonModule,
    CardModule,
    PanelModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    ToastModule,
    InputGroup,
    InputGroupAddonModule,
    InputGroupModule,
    InputTextModule,
    SelectModule,
    InputNumberModule,
    TableModule

  ],
  declarations: [ProductComponent, ProductFormsComponent, ],
  providers: [MessageService, ProductService, RealtimeDatabaseService],
  exports: [ProductComponent, ProductFormsComponent,],
})
export class ProductModule {}
