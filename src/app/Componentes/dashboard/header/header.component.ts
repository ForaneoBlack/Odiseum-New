import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  issloading=true;
  rol?:String="prueba";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


}
