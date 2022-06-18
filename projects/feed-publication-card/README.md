# Feed publication card for angular

A simple solution to post a publication card in a feed.

## Sample

### Home screen
<img src="https://bafybeibxrhzysssvatep2736ef3kif6o7cc2q37qe5edvsieovthicsmka.ipfs.dweb.link/sdljgfnwerofin24mgpf924hgjwigponwg0phw4r9surfgmwqr9mvgwp%20orgbjwrp9bvwrhbvjliwsbvfprwpb3bvhkn.png" alt="Logo" width="380">
</a>

### Post mode
<img src="https://bafybeibkfxm6iwp4wp5dzhtn3jbxi5wneu7cqjgoalfy3m4eapicoxf7xm.ipfs.dweb.link/nj438tgf24h9024hg408pgh208gpiwh8fcv743gf0hw45ghewg0.png" alt="Logo" width="380">
</a>

### File mode
<img src="https://bafybeib4prasiwvjx5jkyy3kofvyixqd7sfuwckoo2elpwehj66jngl32i.ipfs.dweb.link/smdlfpikjwnfoiwe%20nfw%20pfgjw4mgnmfgoweihg40238ghgpin035g835g3j5gv9.png" alt="Logo" width="380">
</a>

## Installation

Install the npm package.

```
  npm i @wiins/feed-publication-card
```

Import module:

```ts
  import { FeedPublicationCardModule } from '@wiins/feed-publication-card';

  @NgModule({
      imports: [FeedPublicationCardModule]
  })
```

## Usage

```ts

import { 
  FeedPublicationCardService,
  BackgroundPostModel,
  IFeedPublicationPayload,
  PicturePublicationModel,
  PostPublicationModel,
  VideoPublicationModel 
} from '@wiins/feed-publication-card';

  constructor(
    ...
    private feedPublicationCardService: FeedPublicationCardService,
  ) {}

  onCreatePublication(): void {

    const linearBgPost: BackgroundPostModel[] = [
        new BackgroundPostModel(['#11998e', '#38ef7d'], {
          start: [0, 0],
          end: [1, 1],
        }),
        new BackgroundPostModel(['#ffb347', '#ffcc33'], {
          start: [0, 0],
          end: [1, 1],
        }),
        // your others BackgroundPostModel...
    ];

    const payload: IFeedPublicationPayload = {
      linearBackgroundList: this.linearBgPost,
      backgroundSelected: 0,
    };

    return this.feedPublicationCardService.openModalPublication(payload);
  }
```

You can listen the event with theses fonctions:

```ts

// get the event file. Coud be an image/poster/video
this.feedPublicationCardService
      .getfileValue('image').subscribe((data: File[]) => {
  // catch the image selected here and send to your providers
});

// optional, set up the progress bar at 50%
this.feedPublicationCardService.setProgressFileValue('image', 50)

this.feedPublicationCardService.feedPublicationValue$
  .subscribe(
    (
      publication:
        | PicturePublicationModel
        | PostPublicationModel
        | VideoPublicationModel
    ) => {
      // your publication will be here after to save it
    }
  );
```

## Properties

### BackgroundPostModel
| name | type | default | description |
|------|------|---------|-------------|
| colors | string[] |  | description |
| orientations | start: number[], end: number[] |  | description |

### Progress bar (optional)
| name | type | description |
|------|------| -------------|
| setProgressFileValue(type: string, value: number) | void | description |

### Subscriptions Event
| name | type | description |
|------|------|------------|
| feedPublicationValue$ | Observable<PicturePublicationModel &#124; PostPublicationModel &#124; VideoPublicationModel> | description |
| getfileValue(type: string) | Observable<File[]> | description |



## Community

Join the winns comuntiy today and lets grow TEA worth together 🚀
<br />
<br />
<br />

<p align="center">
<a href="https://discord.gg/JXs3MxAn">
<img src="./../../src/assets/img/readme/readme-banner.png" alt="Logo" width="380">
</a>
</p>
