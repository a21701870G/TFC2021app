import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {FireStorageService} from "../fire-storage.service";
import {FireAuthService} from "../fire-auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-betpt',
  templateUrl: './betpt.page.html',
  styleUrls: ['./betpt.page.scss'],
})
export class BetptPage implements OnInit {

  constructor(private location: Location,  public fireStorageService: FireStorageService, private authService: FireAuthService,
              private router: Router) { }

  ngOnInit() {
  }
  public back(){
    this.location.back()
  }
  public goControl(): void{
    this.router.navigate(['/controlo'])
  }

}
