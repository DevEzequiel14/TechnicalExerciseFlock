import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { TokenService } from 'src/app/core/authentication/token.service';
import { ProvinceService } from 'src/app/data/services/province.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  textInput: string = null
  provinces: any

  constructor(
    private provinceService: ProvinceService,
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  valueChange(newValue) {
    this.provinceService.getProvinces(newValue).subscribe(res => {
      this.provinces = res.provincias
    }, error => {
      this.provinces = []
    })
  }

  logout() {
    this.tokenService.clearToken();
    this.router.navigate(['/'])
   }

}
