import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Contact } from './contactModel';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-formlyvalidation',
  templateUrl: './formlyvalidation.component.html',
  styleUrls: ['./formlyvalidation.component.css']
})
export class FormlyvalidationComponent {
  contactForm: FormGroup;
  contactModel: Contact;
  contactFields:Array<FormlyFieldConfig>

  constructor(){
    this.contactForm = new FormGroup({});
    this.contactModel = new Contact();
    this.contactFields = this.contactModel.formFields()
  }

  SubmitForm(contact: Contact){
    console.log(contact)
  }
}

