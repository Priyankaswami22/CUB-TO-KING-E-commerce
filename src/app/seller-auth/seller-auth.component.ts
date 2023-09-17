import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { signUp } from '../data-types';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor(private seller:SellerService){}
   showLogin=false;
   authError:string='';
  ngOnInit():void{
    this.seller.reloadSeller()
  }
  
  signUp(data:signUp):void{
    // console.warn(data);    
    this.seller.userSignUp(data)
    
  }

  login(data:signUp):void{
   
    // console.warn(data);    
   this.seller.userLogin(data);
   this.seller.isLoginError.subscribe((isError)=>{
    if(isError){
      this.authError="Email or Password is incorrect";
    }
   })    
    
    
  }

  openlogin(){
    this.showLogin=true
  }
  openSignUp(){
    this.showLogin=false
  }
}
