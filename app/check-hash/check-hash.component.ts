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
  message: string;
  jsonFile: any;

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
    console.log(this.fakeApiData);
  }

  checkHash() {
    //alert(this.data.string);
    this.proofDetails = this.data.find((item: any) => item.hash === this.hash);

    if (this.proofDetails) {
      this.hashFound = true;
      // this.messageService.clear();
      this.message = '';
    } else {
      this.hashFound = false;
      // this.messageService.add('No proof found with the hash supplied');
      this.message = 'No proof found with the hash supplied!';
    }
  }

  checkInput() {
    this.checkHash();
    // console.log('hash', this.hash)
    if(this.hash && this.hashFound == true) {
      this.router.navigate(['CheckInputComponent', { hash: this.hash}]);
      // this.router.navigate(['checkinput', { hash: this.hash}]);
      // console.log('ok to send', this.hash);
    } else {
      return;
    }
  }
}