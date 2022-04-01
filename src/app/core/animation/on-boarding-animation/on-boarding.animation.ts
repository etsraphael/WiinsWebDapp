import { state, style, trigger } from "@angular/animations";

export const NewsFeedAnimation = [
    trigger('onboardingState', [
        state('previous', style({
            transform: 'translateX(0)',
            transition: 'all 1s'
        })),
        state('next', style({
            transform: 'translateX(-100%)',
            transition: 'all 1s'
        }))
    ])
];

export const MessengerAnimation = [
    trigger('onboardingState', [
        state('previous', style({
            transform: 'translateX(0)',
            transition: 'all 1s'
        })),
        state('next', style({
            transform: 'translateX(-100%)',
            transition: 'all 1s'
        }))
    ])
];

export const MusicVideoAnimation = [
    trigger('onboardingState', [
        state('default', style({
            transform: 'translateX(0)',
            transition: 'all 1s'
        })),
        state('step-1', style({
            transform: 'translateX(-100%)',
            transition: 'all 1s'
        })),
        state('step-2', style({
            transform: 'translateX(-200%)',
            transition: 'all 1s'
        })),
        state('final-step', style({
            transform: 'translateX(-300%)',
            transition: 'all 1s'
        }))
    ])
];