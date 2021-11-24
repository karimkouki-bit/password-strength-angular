import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password-strength-angular';
  public account = {
    password: ""
};
public barLabel: string = "Password strength:";
public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
public thresholds = [90, 75, 45, 25];
// ...


}
