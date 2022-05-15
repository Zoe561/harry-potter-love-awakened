import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTING_PATH } from 'src/app/core/const/routing-path.const';

@Component({
  selector: 'app-select-actor',
  templateUrl: './select-actor.component.html',
  styleUrls: ['./select-actor.component.scss']
})
export class SelectActorComponent implements OnInit {
  ROUTING_PATH = ROUTING_PATH;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  routerClick(type:string): void {
     this.router.navigate([ROUTING_PATH.CYRUS]);
  }


}
