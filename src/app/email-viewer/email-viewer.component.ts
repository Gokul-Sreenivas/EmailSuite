import { Component, OnInit } from '@angular/core';
import { EmailInterface } from '../interfaces/email.interface';
import { EmailService } from '../email.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Location } from '@angular/common';
import { Email } from '../email.model';

@Component({
  selector: 'app-email-viewer',
  templateUrl: './email-viewer.component.html',
  styleUrls: ['./email-viewer.component.css'],
})
export class EmailViewerComponent implements OnInit {
  emailList: Email[] = [];
  currentEmail: Email;
  constructor(
    private readonly emailService: EmailService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  value: string;

  qparam1: string;
  qparam2: string;
  newvalue: string;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.emailList = this.emailService.getAllEmails();
      this.value = params.get('value');
      console.log(this.value, this.emailList);
      this.currentEmail = this.fetchEmail(this.value)[0];
    });
  }

  fetchEmail(id) {
    return this.emailList.filter((i) => i.id == id);
  }
}
