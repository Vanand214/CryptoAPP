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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  title = 'cryptoapp';

  cryptoData : any;

  currentUser: User;
 currentUserSubscription: Subscription;

  constructor(private app:AppService, private dataService : MyProfileService,   private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService, private router: Router)
  {
    this.app.getData().subscribe(data=>{
      this.cryptoData = data;
    })

    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
  });
  }

  onSubmitData(data) {
    debugger;
 
    data.UserName = this.currentUser.username;
    
    this.dataService.addData(data)
        .pipe(first())
        .subscribe(
            data => {
            
                this.router.navigate(['/MyProfile']);
            },
            error => {
                this.alertService.error(error);
              
            });
}

ngOnDestroy() {
  // unsubscribe to ensure no memory leaks
  this.currentUserSubscription.unsubscribe();
}


}
