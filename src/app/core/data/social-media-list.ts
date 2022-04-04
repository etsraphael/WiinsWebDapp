export const socialMediaLists: socialLists[] = [
    { name: 'Facebook', path: 'https://www.facebook.com/pages/category/Photography-Videography/Wiins-109652504066491/', src: '../../../../../assets/img/Icon/Facebook.svg' },
    { name: 'Instagram', path: 'https://www.instagram.com/wiins___/', src: '../../../../../assets/img/Icon/Instagram.svg' },
    { name: 'Linkedin', path: 'https://www.linkedin.com/company/espace-wiin-s/', src: '../../../../../assets/img/Icon/Linkedin.svg' },
    { name: 'Twitter', path: 'https://twitter.com/espace_s', src: '../../../../../assets/img/Icon/Twitter.svg' },
    { name: 'Github', path: 'https://github.com/etsraphael/WiinsWebDapp', src: '../../../../../assets/img/Icon/Github.svg' },
]

export interface socialLists {
    name: string;
    path: string;
    src: string;
}