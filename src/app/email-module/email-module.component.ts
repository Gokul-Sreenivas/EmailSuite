import { Component, OnInit, ViewChild } from '@angular/core';

import { EmailInterface } from '../interfaces/email.interface';
import { EmailService } from '../email.service';
import { Email } from '../email.model';

@Component({
  selector: 'app-email-module',
  templateUrl: './email-module.component.html',
  styleUrls: ['./email-module.component.css'],
})
export class EmailModuleComponent implements OnInit {
  @ViewChild('emailForm') emailForm: any;

  emailObject: Email = {
    formEmail: '',
    toEmail: '',
    subject: '',
    body: '',
  };

  emailList: Email[] = [];

  constructor(private readonly emailService: EmailService) {
    this.emailList = emailService.getAllEmails();
  }
  
  ngOnInit(): void {}

  sendForm() {
    if (this.emailForm.valid) {
      this.emailService.add(
        this.emailForm.value.formEmail,
        this.emailForm.value.toEmail,
        this.emailForm.value.subject,
        this.emailForm.value.body
      );
      this.emailList = this.emailService.getAllEmails();
      this.emailForm.reset();
    } else {
      alert('invalid');
    }
  }

  resetForm(): void {
    this.emailForm.reset();
  }
}
