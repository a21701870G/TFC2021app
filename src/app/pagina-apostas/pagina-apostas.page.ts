import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {FireStorageService} from "../fire-storage.service";
import {FireAuthService} from "../fire-auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pagina-apostas',
  templateUrl: './pagina-apostas.page.html',
  styleUrls: ['./pagina-apostas.page.scss'],
})
export class PaginaApostasPage implements OnInit {

  constructor(private location: Location, public fireStorageService: FireStorageService, private authService: FireAuthService,
              private router: Router) { }

  ngOnInit() {
  }
  public back(){
    this.location.back()
  }
  public goBet365(): void{
    this.router.navigate(['/bet365'])

  }
  public goBetclick(): void{
    this.router.navigate(['/betclick'])
  }
  public goBetpt(): void{
    this.router.navigate(['/betpt'])
  }
}
