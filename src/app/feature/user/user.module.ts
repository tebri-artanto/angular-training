import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [DetailUserComponent],
  imports: [CommonModule],
  providers: [UserService],
  exports: [DetailUserComponent],
})
export class UserModule {}
