import { state, style, trigger } from "@angular/animations";

export const SpaceStoryCreatePostAnimation = [
    // Written Post
    trigger('onWrittenPost', [
        // Default State
        state('defaultWrittenPost', style({

        })),
        // State when Written Post is selected
        state('selectedWrittenPost', style({
            'border-top-right-radius': '20px',
            'border-bottom-right-radius': '20px',
            width: '100%',
            'z-index': '999'
        })),
        // State Written post is completed
        state('isCompletingWrittenPost', style({
            'border-top-right-radius': '20px',
            'border-bottom-right-radius': '20px',
            width: '100%',
            'z-index': '999',
            height: '15em',
            margin: 'auto',
            right: '0',
            bottom: '0'
        })),
        // State When user want to go Back
        state('goBack', style({
            'border-top-right-radius': '20px',
            'border-bottom-right-radius': '20px',
            width: '100%',
            'z-index': '999',
            margin: 'auto',
            right: '0',
            bottom: '0'
        })),
    ]),
    // Picture Post
    trigger('onPicturePost', [
        // Default State
        state('defaultPicturePost', style({

        })),
        // State when Picture Post is selected
        state('selectedPicturePost', style({
            'border-top-left-radius': '20px',
            'border-bottom-left-radius': '20px',
            width: '100.2%',
            'z-index': '999',
        })),
        // State Picture post is completed
        state('isCompletingPicturePost', style({
            'border-top-left-radius': '20px',
            'border-bottom-left-radius': '20px',
            width: '100%',
            'z-index': '999',
            height: '15em',
            margin: 'auto',
            right: '0',
            bottom: '0'
        })),
        // State When user want to go Back
        state('goBack', style({
            'border-top-left-radius': '20px',
            'border-bottom-left-radius': '20px',
            width: '100%',
            'z-index': '999',
            margin: 'auto',
            right: '0',
            bottom: '0'
        })),
    ]),
    // To Hashtag
    trigger('onCommentToHashtag', [
        state('defaultCommentToHashtag', style({
            transform: 'translateY(0px)',
            transition: 'all .5s',
        })),
        state('selectedCommentToHashtag', style({
            transform: 'translateY(100px)',
            transition: 'all .5s',
        })),
    ]),
    // To Comment
    trigger('onHashtagToComment', [
        state('defaultHashtagToComment', style({
            transform: 'translateY(100px)',
            transition: 'all .5s',
        })),
        state('selectedHashtagToComment', style({
            transform: 'translateY(0px)',
            transition: 'all .5s',
        })),
    ]),
];