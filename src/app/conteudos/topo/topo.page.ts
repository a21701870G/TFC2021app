import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.page.html',
  styleUrls: ['./topo.page.scss'],
})
export class TopoPage implements OnInit {
  public back() {
    this.location.back();
  }
  constructor(private location: Location) { }

  ngOnInit() {
  }

}
