import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f', {static: false}) form: NgForm;
  subTypeDefault = 'Pro';

  subTypes = [ 'Basic', 'Advanced', 'Pro'];

  submit() {
    console.log(this.form.value);
  }

}
