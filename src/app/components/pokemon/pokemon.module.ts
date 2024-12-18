import { TextareaModule } from 'primeng/textarea';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// PrimeNG Imports
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Dialog } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber'
import { DrawerModule } from 'primeng/drawer';



import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonMoreDetailComponent } from './pokemon-more-detail/pokemon-more-detail.component';
import { RealtimeDatabaseService } from '../../services/realtime-database.service';
import { BuyPokemonComponent } from './buy-pokemon/buy-pokemon.component';
import { PokemonTableComponent } from './pokemon-table/pokemon-table.component';
import { TableModule } from 'primeng/table';
import { EditHistoryComponent } from './edit-history/edit-history.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@NgModule({
  declarations: [
    PokemonDetailComponent,
    PokemonListComponent,
    PokemonMoreDetailComponent,
    BuyPokemonComponent,
    PokemonTableComponent,
    EditHistoryComponent,
    ConfirmationModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    CardModule,
    PanelModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    ToastModule,
    Dialog,
    InputTextModule,
    TextareaModule,
    ReactiveFormsModule,
    InputGroup,
    SelectModule,
    InputNumberModule,
    InputGroup,
    InputGroupModule,
    InputGroupAddonModule,
    DrawerModule,
    TableModule,
    ConfirmDialogModule

  ],
  providers: [
    PokemonService,
    MessageService,
    RealtimeDatabaseService
  ],
  exports: [
    PokemonDetailComponent,
    PokemonListComponent,
    PokemonMoreDetailComponent,
    BuyPokemonComponent,
    PokemonTableComponent,
    EditHistoryComponent,
    ConfirmationModalComponent
  ],
})
export class PokemonModule { }
