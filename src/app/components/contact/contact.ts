import { Component } from '@angular/core';
import { FormsModule, NgModel, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  userName:string = '';
  userAge:number|string = '';
  userEmail:string = '';
  userPassword:string = '';
}
