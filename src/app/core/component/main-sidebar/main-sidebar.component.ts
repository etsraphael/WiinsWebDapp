import { Component, OnInit } from '@angular/core';
import { sidebarAnimationService } from '../../service/slide-navbar-animation/animation.service';
import { Renderer2, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss']
})
export class MainSidebarComponent implements OnInit {
  @ViewChild('sidebar') sidebar: ElementRef;

  constructor(
    private authService: AuthService,
    public sidebarAnimation: sidebarAnimationService,
    private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  onOpenSidebar() {
    const sidebarIsActive = this.sidebar.nativeElement.classList.contains('close');
    if (sidebarIsActive) {
      this.renderer.removeClass(this.sidebar.nativeElement, 'close');
    } else {
      this.renderer.addClass(this.sidebar.nativeElement, 'close');
    }
  }

  onLogOut(): void {
    return this.authService.logout();
  }

}
