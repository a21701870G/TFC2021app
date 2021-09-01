import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './conteudos.page.html',
  styleUrls: ['./conteudos.page.scss'],
})
export class ConteudosPage implements OnInit {
  public back() {
    this.location.back();
  }
  constructor(private location: Location) { }

  ngOnInit() {
  }

}
