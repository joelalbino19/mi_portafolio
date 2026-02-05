import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({ providedIn: 'root' })
export class ContactService {

  private readonly SERVICE_ID = 'service_ewgtert';
  private readonly TEMPLATE_ID = 'template_2qq83oa';
  private readonly PUBLIC_KEY = 'gMr8Fm8gsTvDt7plg';

  sendContact(data: any) {
    return emailjs.send(
      this.SERVICE_ID,
      this.TEMPLATE_ID,
      data,
      this.PUBLIC_KEY
    );
  }
}
