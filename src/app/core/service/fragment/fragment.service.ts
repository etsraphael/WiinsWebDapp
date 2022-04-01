import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class FragmentService {
    ecosystemFragment = new BehaviorSubject<string>('');
    tokenFragment = new BehaviorSubject<string>('');
    teamFragment = new BehaviorSubject<string>('');
    contactFragment = new BehaviorSubject<string>('');

    constructor() { }

    onNavigateTo(fragment: string) {
        if (fragment === 'token') {
            this.tokenFragment.next(fragment);
        }
        if (fragment === 'team') {
            this.teamFragment.next(fragment);
        }
        if (fragment === 'ecosystem') {
            this.ecosystemFragment.next(fragment);
        }

        if (fragment === 'contact') {
            this.contactFragment.next(fragment);
        }
    }
}