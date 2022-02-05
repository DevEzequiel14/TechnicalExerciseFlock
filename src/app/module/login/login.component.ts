import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { TokenService } from 'src/app/core/authentication/token.service';
import { Login } from 'src/app/core/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user_login = {} as Login;
  message = "";
  checkbox = false
  hide = true
  
  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login(){
    this.authService.auth_login(this.user_login).subscribe(res =>{
      if (res['code'] == 200){
        this.tokenService.storeToken(res, !this.checkbox)
        this.router.navigate(['/home'])
      }
      else this.message = 'Clave o usuario, invalido'
    }, error => {
      this.message = 'Clave o usuario, invalido'
    })
  }

}
