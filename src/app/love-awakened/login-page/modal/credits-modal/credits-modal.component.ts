import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-credits-modal',
  templateUrl: './credits-modal.component.html',
  styleUrls: ['./credits-modal.component.scss']
})
export class CreditsModalComponent implements OnInit {

  constructor(
   public modal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

}
