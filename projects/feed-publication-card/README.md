# Feed publication card for angular

A simple solution to post a publication card. Feel free to make any suggestions in our [Discord's channel](https://discord.gg/dNmDYgX98H)

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

You can listen the event with these functions:

```ts
// get the event file. Coud be an 'image', 'poster' or 'video'
this.feedPublicationCardService
  .getfileValue('image')
  .subscribe((data: File[]) => {
    // catch the image selected here and send to your providers
  });

// optional, set up the progress bar at 50%. Coud be an 'image', 'poster' or 'video'
this.feedPublicationCardService.setProgressFileValue('image', 50);

this.feedPublicationCardService.feedPublicationValue$.subscribe(
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

### FeedPublicationModel

We can return 3 types of publication:

1 - The post publication
| name| type | description |
| --- | ------ | ------- |
| type | string | The type will be `PostPublication` for this type |
| title| string | The description of the publication |
| hastags | string[] | The list of hastags found in the publication text |
| signAt | string[] | The list of signAt found in the publication text |

2 - The picture publication
| name| type | description |
| --- | ------ | ------- |
| type | string | The type will be `PicturePublication` for this type |
| title| string | The description of the publication |
| hastags | string[] | The list of hastags found in the publication text |
| signAt | string[] | The list of signAt found in the publication text |
| imgUrl | string | The name of the image file |

3 - The video publication
| name| type | description |
| --- | ------ | ------- |
| type | string | The type will be `VideoPublication` for this type |
| title| string | The description of the publication |
| hastags | string[] | The list of hastags found in the publication text |
| signAt | string[] | The list of signAt found in the publication text |
| posterUrl | string | The name of the poster file |
| videoUrl | string | The name of the video file |

### BackgroundPostModel

| name         | type                           | example                      | description                                                                |
| ------------ | ------------------------------ | ---------------------------- | -------------------------------------------------------------------------- |
| colors       | string[]                       | `['#11998e', '#38ef7d']`     | This list of colours will be implemented to the linear gradient background |
| orientations | start: number[], end: number[] | `start: [0, 0], end: [1, 1]` | The orirentation of the linear gradient                                    |

### Progress bar (optional)

| name                                              | type | description                                                                                                                                                               |
| ------------------------------------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| setProgressFileValue(type: string, value: number) | void | This function will update the progress bar animation. 3 progress bar animations are implemented for each categorie of file. It could be an `image`, `poster` or a `video` |

### Subscriptions Event

| name                       | type                                                                                         | description                                                                       |
| -------------------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| feedPublicationValue$      | Observable<PicturePublicationModel &#124; PostPublicationModel &#124; VideoPublicationModel> | This will return the publication object only after to click on the send button    |
| getfileValue(type: string) | Observable<File[]>                                                                           | This will return the file uploaded. It could be an `image`, `poster` or a `video` |

## Community

Join the winns comumnity today and lets grow TEA's worth together 🚀
<br />
<br />
<br />

<p align="center">
<a href="https://discord.gg/bBE6xmR">
<img src="./../../src/assets/img/readme/readme-banner.png" alt="Logo" width="380">
</a>
</p>
