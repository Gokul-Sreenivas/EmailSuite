let i = 0;

export class Email {
  id?: number;
  formEmail: string;
  toEmail: string;
  subject: string;
  body?: string;

  constructor(formEmail, toEmail, subject, body) {
    this.id = i++;
    this.formEmail = formEmail;
    this.toEmail = toEmail;
    this.subject = subject;
    this.body = body;
  }
}
