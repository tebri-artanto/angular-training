import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
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
import { InputNumberModule } from 'primeng/inputnumber';
import { DrawerModule } from 'primeng/drawer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AuthService } from '../../services/auth.service';
import { RealtimeDatabaseService } from '../../services/realtime-database.service';
import { RegisterComponent } from './register/register.component';


import { TabsModule } from 'primeng/tabs';
import { AuthComponent } from './auth.component';

export class TabsBasicDemo {}
@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthComponent],
  imports: [
    CommonModule,
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
    ReactiveFormsModule,
    InputGroup,
    SelectModule,
    InputNumberModule,
    InputGroup,
    InputGroupModule,
    InputGroupAddonModule,
    DrawerModule,
    ConfirmDialogModule,
    TabsModule
  ],
  providers: [AuthService, MessageService, RealtimeDatabaseService],
  exports: [LoginComponent, RegisterComponent, AuthComponent],
})
export class AuthModule {}
