import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class sidebarAnimationService {

    // Default State Landing Page
    defaultSidebar: string = 'previous';

    // Previous & Next => News Feed - Discover
    onOpenSidebar() {
        if (this.defaultSidebar === 'next') {
            this.defaultSidebar = 'previous';
        } else {
            this.defaultSidebar = 'next';
        }
    }
}