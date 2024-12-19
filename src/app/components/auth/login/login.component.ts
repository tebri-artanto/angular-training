import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { RealtimeDatabaseService } from '../../../services/realtime-database.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false
})
export class LoginComponent implements OnInit {


  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) {}



  ngOnInit() {

  }

  registerPage() {
    this.router.navigate(['/register']);
  }


  async onSubmit(form: any) {
    try {
      console.log('Form Data:', form.value);
      const response = await this.authService.login(form.value.email, form.value.password);
      console.log(response);

      await this.router.navigate(['']);
      // window.location.reload();

    } catch (error) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Failed to load Pokemon details',
      });
    }

  }


}


