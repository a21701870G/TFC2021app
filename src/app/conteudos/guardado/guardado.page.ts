import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-guardado',
  templateUrl: './guardado.page.html',
  styleUrls: ['./guardado.page.scss'],
})
export class GuardadoPage implements OnInit {
  public back() {
    this.location.back();
  }
  constructor(private location: Location) { }

  ngOnInit() {
  }

}
