import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  helloWorld(){
    console.log("Works");
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeToPage(path : String) {
      this.router.navigate([path]);
  }

}
