// import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

import { EmailInterface } from '../interfaces/email.interface';
import { EmailService } from '../email.service';
import { Email } from '../email.model';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css'],
})
export class EmailListComponent implements OnInit {
  emailList: Email[] = [];
  FilterEmailId: string = '';

  constructor(
    public readonly activatedRoute: ActivatedRoute,
    private readonly emailService: EmailService,
    private readonly router: Router
  ) {
    this.emailList = emailService.getAllEmails();
  }

  ngOnInit(): void {}

  removeEmail(id) {
    // console.log(id);
    this.emailService.removeEmail(id);
    this.emailList = this.emailService.getAllEmails();
  }

}
