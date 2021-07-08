import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cryptoapp';

  cryptoData : any;

  constructor(private app:AppService)
  {
    this.app.getData().subscribe(data=>{
      this.cryptoData = data;
    })
  }
}
