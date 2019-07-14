import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  statuses = ['Stable', 'Critical', 'Finished'];
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      'pname' : new FormControl(null, Validators.required, this.noTest),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'status' : new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.form);
  }

  noTest(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      if (control.value === 'Test') {
        resolve({'NoTest': true});
      } else {
        resolve(null);
      }
    });
  }
}
