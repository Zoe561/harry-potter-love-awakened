import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DEVICE } from 'src/app/core/const/device.const';
import { ROUTING_PATH } from 'src/app/core/const/routing-path.const';
import { SharedService } from 'src/app/share/shared.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  ROUTING_PATH = ROUTING_PATH;
  constructor(
    public sharedService: SharedService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  routerClick(type:string): void {
    this.router.navigate([ROUTING_PATH.CHOOSE_LOVER]);
 }
}
