import { Component, VERSION } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "ANGULAR " + VERSION;

  constructor() {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    console.log(f);
  }
}
