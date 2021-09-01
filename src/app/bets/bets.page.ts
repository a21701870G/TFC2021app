import { Component, OnInit } from '@angular/core';
import {FireStorageService} from "../fire-storage.service";
import {FireAuthService} from "../fire-auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bets',
  templateUrl: './bets.page.html',
  styleUrls: ['./bets.page.scss'],

})
export class BetsPage implements OnInit {

  constructor(public fireStorageService: FireStorageService, private authService: FireAuthService,
              private router: Router) { }

  ngOnInit() {
  }
  public goRankingPage(): void {
    this.router.navigate(['/ranking']);
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
  public goBetClick(): void{
    this.router.navigate(['/betclick'])
  }
  public goNovo(): void{
    this.router.navigate(['/novo'])
  }

}
