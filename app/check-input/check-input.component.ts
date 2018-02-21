import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'check-input',
  templateUrl: 'app/check-input/check-input.component.html',
  styleUrls: ['app/check-input/check-input.component.css']
})

export default class CheckInputComponent implements OnInit {
  @Input() hash: string;
  constructor() {}
  
  ngOnInit(): void {}
}