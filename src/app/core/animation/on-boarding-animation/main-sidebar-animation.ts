import { state, style, trigger } from "@angular/animations";

export const SidebarAnimation = [
    trigger('onOpenSidebar', [
        state('previous', style({
            width: '88px',
            transition: 'all 1s'
        })),
        state('next', style({
            width: '145px',
            transition: 'all 1s'
        }))
    ])
];