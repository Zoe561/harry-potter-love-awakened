import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DEVICE } from 'src/app/core/const/device.const';
import { ROUTING_PATH } from 'src/app/core/const/routing-path.const';
import { SharedService } from 'src/app/share/shared.service';
import { CreditsModalComponent } from './modal/credits-modal/credits-modal.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  ROUTING_PATH = ROUTING_PATH;
  constructor(
    public sharedService: SharedService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  routerClick(type: string): void {
    this.router.navigate([ROUTING_PATH.CHOOSE_LOVER]);
  }
  openCredit(): void {
    this.modalService.open(CreditsModalComponent, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log('closed');
    }, (reason) => {
      console.log('dismissed');
    });
  }
}
