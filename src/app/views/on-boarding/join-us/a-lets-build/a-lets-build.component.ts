import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth/auth.service';

@Component({
  selector: 'app-a-lets-build',
  templateUrl: './a-lets-build.component.html',
  styleUrls: ['./a-lets-build.component.scss']
})
export class ALetsBuildComponent implements OnInit {

  constructor(
    public authService: AuthService) { }

  ngOnInit(): void { }
}
