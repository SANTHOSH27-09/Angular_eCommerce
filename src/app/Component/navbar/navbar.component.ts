import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Service/auth-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartCount:any;
  searchWord: string = '';
  constructor(public data:AuthServiceService,private router:Router) {
    

  }
  ngOnInit(): void {}
  
  logout(){
    this.data.login.next({loggedIn:false,Name:"unknown"});
  }
  search(){
    const search=this.searchWord
    this.router.navigate(['mobiles',search]);
    
  }

}
