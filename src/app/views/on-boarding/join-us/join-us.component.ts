import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth/auth.service';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss'],
})
export class JoinUsComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
