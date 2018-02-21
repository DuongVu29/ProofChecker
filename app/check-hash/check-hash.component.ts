import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
//import { ProofService } from '../shared/services/proof.service';
//import { MessageService } from '../shared/services/message.service';
import {
  ProofService,
  MessageService
} from '../shared/shared';

@Component({
  selector: 'check-hash',
  templateUrl: 'app/check-hash/check-hash.component.html',
  styleUrls: ['app/check-hash/check-hash.component.css']
})

export default class CheckHashComponent implements OnInit {
  hash: string = '';
  hashFound: boolean = false;
  proofDetails: any;
  data: any;
  fakeApiData: any;

  constructor(
    private router: Router,
    private proofService: ProofService,
    private messageService: MessageService
  ) {}

  getData(): void {
    this.proofService.getData().then(res => this.data = res);
    this.proofService.getFakeDataApi().then(res => this.fakeApiData = res);
  }

  ngOnInit(): void {
    this.getData();
  }

  checkHash() {
    //alert(this.data.string);
    this.proofDetails = this.data.find((item: any) => item.hash === this.hash);

    if (this.proofDetails) {
      this.hashFound = true;
      this.messageService.clear();
    } else {
      this.hashFound = false;
      this.messageService.add('No proof found with the hash supplied');
    }
  }

  checkInput() {
    // console.log('hash', this.hash)
    if(this.hash && this.hashFound == true) {
      this.router.navigate(['CheckInputComponent', 'CheckInput', this.hash]);
    }
  }
}