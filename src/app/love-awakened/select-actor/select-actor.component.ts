import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTING_PATH } from 'src/app/core/const/routing-path.const';
import { Actor } from 'src/app/core/enum/actor.enum';

@Component({
  selector: 'app-select-actor',
  templateUrl: './select-actor.component.html',
  styleUrls: ['./select-actor.component.scss']
})
export class SelectActorComponent implements OnInit {
  ROUTING_PATH = ROUTING_PATH;
  Actor = Actor;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  routerClick(type: Actor): void {
    switch (type) {
      case Actor.als:
        this.router.navigate([ROUTING_PATH.ALYUSS]);
        break;

      case Actor.ci:
        this.router.navigate([ROUTING_PATH.CYRUS]);
        break;

      case Actor.lcl:
        this.router.navigate([ROUTING_PATH.LI_CJI_LI]);
        break;

      case Actor.lk:
        this.router.navigate([ROUTING_PATH.RHEIN]);
        break;

      case Actor.rg:
        this.router.navigate([ROUTING_PATH.RUOGU]);
        break;

      case Actor.ys:
        this.router.navigate([ROUTING_PATH.YEH_SYUN]);

        break;

      default:
        break;
    }
  }


}
