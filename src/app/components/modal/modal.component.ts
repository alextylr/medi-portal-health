import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  displayModal: Observable<boolean>;

  @Input() modalTitle: string;
  @Input() modalStyle: string;
  @Input() modalBody: string;
  @Input() isConfirm: string;
  @Input() isAlert: string;
  @Input() isDelete: string;


  constructor(
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.displayModal = this.modalService.watch();
  }

  close() {
    this.modalService.close();
  }

  confirm() {
    alert('confirmed!');
  }
}