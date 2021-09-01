import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {FireStorageService} from "../fire-storage.service";
import {FireAuthService} from "../fire-auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-betclick',
  templateUrl: './betclick.page.html',
  styleUrls: ['./betclick.page.scss'],
})
export class BetclickPage implements OnInit {

  constructor(private location: Location,  public fireStorageService: FireStorageService, private authService: FireAuthService,
              private router: Router) { }

  ngOnInit() {
  }
  public back(){
    this.location.back()
  }

  public goBetsPage(): void{
    this.router.navigate(['/bets'])
  }
  public goForumPage(): void{
    this.router.navigate(['/forum'])
  }
  public goProfilePage(): void{
    this.router.navigate(['/home'])
  }
  public goSportingPage(): void{
    this.router.navigate(['/sporting'])
  }
  public goUpload(): void{
    this.router.navigate(['/uploadficheiros'])
  }
  public goBetpt(): void{
    this.router.navigate(['/betpt'])
  }
}
