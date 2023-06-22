import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  isEditMode = true;
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  userSettingsForm: FormGroup = this.fb.group({
    firstName: ['Sean', {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
    lastName: ['Maguire' ,   {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
    role: ['Doctor',  {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
    email: ['smaguire76@gmail.com', {validators: [Validators.required, Validators.pattern(this.emailPattern)], asyncValidators: [], updateOn: 'blur'}],
  })
  displayModal: boolean;

  constructor(private fb: FormBuilder,  private modalService: ModalService) { }

  ngOnInit(): void {
    this.modalService.watch().subscribe((res) => {
      this.displayModal = res;
    });
  }

  onSave() {
    if (this.userSettingsForm.invalid) {
      this.openModal();
    } else {
      this.isEditMode = !this.isEditMode;
    }
  }

  openModal() {
    this.modalService.open();
  }
}
