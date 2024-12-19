import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
      private authService: AuthService,
      private messageService: MessageService,
      private router: Router
    ) {}

    ngOnInit() {

    }



    onSubmit(form: any) {
      try {
        console.log('Form Data:', form.value);
        // const response = this.authService.register(form.value.email, form.value.password);
        // console.log(response);
        this.router.navigate(['/login']);

      } catch (error) {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to load Pokemon details',
        });
      }

    }

}
