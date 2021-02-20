import { Component, OnInit } from "@angular/core";
import { NgForm, Validators } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  nameValidators = [Validators.required, Validators.minLength(4)];
  ageValidators = [Validators.pattern("^(0|[1-9][0-9]*)$")];
  emailValidators = [Validators.required, Validators.email];

  ngOnInit() {}

  onSubmit(f: NgForm) {
    console.log(f);
  }
}
