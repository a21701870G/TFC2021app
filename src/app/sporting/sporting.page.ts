import { Component, OnInit } from '@angular/core';
import {FireStorageService} from "../fire-storage.service";
import {FireAuthService} from "../fire-auth.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-sporting',
  templateUrl: './sporting.page.html',
  styleUrls: ['./sporting.page.scss'],
})
export class SportingPage implements OnInit {

  constructor(private location: Location, public fireStorageService: FireStorageService, private authService: FireAuthService,
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
  public back(){
    this.location.back()
  }
  public goPaginaApostas(): void{
    this.router.navigate(['/pagina-apostas'])
  }
}
