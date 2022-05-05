import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class landingPageCardAnimationService {

    // Default State Landing Page
    defaultNewsDisc: string = 'previous';
    defaultMessenger: string = 'previous';
    defaultMusVid: string = 'default';
    count: number = 0;

    // Previous & Next => News Feed - Discover
    onPreviousNewsDisc(): void {
        if (this.defaultNewsDisc === 'next') {
            this.defaultNewsDisc = 'previous';
        }
    }

    onNextNewsDisc(): void {
        if (this.defaultNewsDisc === 'previous') {
            this.defaultNewsDisc = 'next';
        }
    }

    // Previous & Next => Messenger
    onPreviousMessenger(): void {
        if (this.defaultMessenger === 'next') {
            this.defaultMessenger = 'previous';
        }
    }

    onNextMessenger(): void {
        if (this.defaultMessenger === 'previous') {
            this.defaultMessenger = 'next';
        }
    }

    // Previous & Next => Music - Video
    onPreviousMusVid(): void {
        if (this.count === 0) {
            return;
        }
        if (this.count === 1) {
            this.count--
            this.defaultMusVid = 'default';
        } else if (this.count === 2) {
            this.count--
            this.defaultMusVid = 'step-1';
        } else {
            this.count--
            this.defaultMusVid = 'step-2';
        }
    }

    onNextMusVid(): void {
        if (this.count === 3) {
            return;
        }
        if (this.count === 0) {
            this.count++
            this.defaultMusVid = 'step-1';
        } else if (this.count === 1) {
            this.count++
            this.defaultMusVid = 'step-2';
        } else {
            this.count++
            this.defaultMusVid = 'final-step';
        }
    }
}