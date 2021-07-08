import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { AppService } from '../app.service';
import { User } from '../models/user';
import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/authentication.service';
import { MyProfileService } from '../services/myProfile.service';
import { UserService } from '../services/user.Service';

@Component({
  selector: 'app-my-port-folio',
  templateUrl: './my-port-folio.component.html',
  styleUrls: ['./my-port-folio.component.css']
})
export class MyPortFolioComponent implements OnInit {

  data : any [];
  currentUser: User;
 currentUserSubscription: Subscription;
  constructor(
    private app:AppService, private dataService : MyProfileService,   private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService, private router: Router
) {
  this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
    this.currentUser = user;
});
}

ngOnInit() {
    this.loadAllData();
}

private loadAllData() {
  this.dataService.getAll().pipe(first()).subscribe(d => {
      this.data = d;

      this.data = d.filter(
        p => p.UserName === this.currentUser.username);
  });
}
}
