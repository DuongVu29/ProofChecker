import { Component, Input, OnInit } from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';
import { sha256 } from 'js-sha256';

@Component({
  selector: 'check-input',
  templateUrl: 'app/check-input/check-input.component.html',
  styleUrls: ['app/check-input/check-input.component.css']
})

export default class CheckInputComponent implements OnInit {
  // @Input() hash: string;

  inputHash: string;

  inputSource: string;

  hashedSource: string = '';

  isMatched: boolean = false;
  
  constructor(
    private router: Router,
    private routeParams: RouteParams
  ) {}
  
  ngOnInit(): void {
    this.inputHash =  this.routeParams.get('hash');
  }

  checkInput(source: string) {
    this.hashedSource = sha256(this.inputSource);
    // console.log('inputSource', this.inputSource);
    // console.log('hashedSource', sha256(this.inputSource));

    if (this.inputHash === this.hashedSource) {
      this.isMatched = true;
      console.log(this.isMatched);
    } else {
      this.isMatched = false;
      console.log(this.isMatched);
    }

  }
  goBack(): void {
    this.router.navigate(['CheckHashComponent', { hash: this.inputHash}]);
    //alert("back");
  }
}