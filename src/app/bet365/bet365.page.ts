import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {FireStorageService} from "../fire-storage.service";
import {FireAuthService} from "../fire-auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bet365',
  templateUrl: './bet365.page.html',
  styleUrls: ['./bet365.page.scss'],
})
export class Bet365Page implements OnInit {

  constructor(private location: Location,  public fireStorageService: FireStorageService, private authService: FireAuthService,
              private router: Router) { }

  ngOnInit() {
  }
  public back(){
    this.location.back()
  }
}
