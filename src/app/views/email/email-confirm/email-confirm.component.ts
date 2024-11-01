import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-email-confirm',
  templateUrl: './email-confirm.component.html',
  styleUrls: ['./email-confirm.component.scss'],
})
export class EmailConfirmComponent implements OnInit {
  token = '';
  tokenId = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParam) => {
      this.token = queryParam.token;
      this.tokenId = queryParam.tokenId;
      this.confirmUser();
    });
  }

  confirmUser() {
    // this.registerService.confirmUser( this.token, this.tokenId).then( res=>console.log(res));
  }
}
