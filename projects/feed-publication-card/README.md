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
        // add more BackgroundPostModel...
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
// get the event file, can be an 'image', 'poster' or 'video'
this.feedPublicationCardService
  .getfileValue('image')
  .subscribe((data: File[]) => {
    // obtain the selected file here and send to your chosen providers
  });

// optional, set up the progress bar at e.g. 50%. Can be an 'image', 'poster' or 'video'
this.feedPublicationCardService.setProgressFileValue('image', 50);

this.feedPublicationCardService.feedPublicationValue$.subscribe(
  (
    publication:
      | PicturePublicationModel
      | PostPublicationModel
      | VideoPublicationModel
  ) => {
    // your publication will be here after saving it
  }
);
```

## Properties

### FeedPublicationModel

We can return 3 types of publications:

1 - The post publication
| name| type | description |
| --- | ------ | ------- |
| type | string | The type will be `PostPublication` for this type |
| title| string | The description of the publication |
| hashtags | string[] | The list of hashtags found in the publication text |
| signAts | string[] | The list of signAts found in the publication text |

2 - The picture publication
| name| type | description |
| --- | ------ | ------- |
| type | string | The type will be `PicturePublication` for this type |
| title| string | The description of the publication |
| hashtags | string[] | The list of hashtags found in the publication text |
| signAts | string[] | The list of signAts found in the publication text |
| imgUrl | string | The name of the image file |

3 - The video publication
| name| type | description |
| --- | ------ | ------- |
| type | string | The type will be `VideoPublication` for this type |
| title| string | The description of the publication |
| hashtags | string[] | The list of hashtags found in the publication text |
| signAts | string[] | The list of signAts found in the publication text |
| posterUrl | string | The name of the poster file |
| videoUrl | string | The name of the video file |

### BackgroundPostModel

| name         | type                           | example                      | description                                                               |
| ------------ | ------------------------------ | ---------------------------- | ------------------------------------------------------------------------- |
| colors       | string[]                       | `['#11998e', '#38ef7d']`     | This list of colors will be implemented to the linear gradient background |
| orientations | start: number[], end: number[] | `start: [0, 0], end: [1, 1]` | The orirentation of the linear gradient                                   |

### Progress bar (optional)

| name                                              | type | description                                                                                                                                                                |
| ------------------------------------------------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| setProgressFileValue(type: string, value: number) | void | This function will update the progress bar animation. 3 progress bar animations are implemented for each category of the file. It can be an `image`, `poster` or a `video` |

### Subscriptions Event

| name                       | type                                                                                         | description                                                                     |
| -------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| feedPublicationValue$      | Observable<PicturePublicationModel &#124; PostPublicationModel &#124; VideoPublicationModel> | This will return the publication object after clicking on the send button       |
| getfileValue(type: string) | Observable<File[]>                                                                           | This will return the file uploaded. It can be an `image`, `poster` or a `video` |

## Community

Join the Wiins community today and let's grow TEA's worth together 🚀
<br />
<br />
<br />

<p align="center">
<a href="https://discord.gg/bBE6xmR">
<img src="https://bafybeietl6rjafvrc6dq6upt5qoxxobr4ems6if5yukwlrnb4j2j5awqba.ipfs.dweb.link/woufghwriofuwehfpe2ifjh2oipfh2efo280hf24970tgyh35024cg78thf582476gh.png" alt="Logo" width="380">
</a>
</p>
