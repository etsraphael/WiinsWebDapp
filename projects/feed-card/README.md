## FeedCard

This library is used to generated a Feed card usually used for social networks.<br>
A demo can be found on <a href="https://www.figma.com/proto/8Y1DNZuCCrOtYNgLejRltJ/FeedCard-Demo?page-id=0%3A1&node-id=2%3A7&viewport=-486%2C178%2C0.43&scaling=scale-down&starting-point-node-id=2%3A7" target="_blank">Figma Prototype</a>.<br>

⚠️<strong>This package does not include the masonry used in the prototype</strong>.

## Suggestion

The <a href="https://www.npmjs.com/package/@wiins/common-models" target="_blank">@wiins/common-models</a> is recommanded to use this package.<br>
 You will get all your interfaces and models in one place for all the ecosystem.

## Installation

* Install the npm package:
  ```sh
  npm i @wiins/feed-card
  ```
  
* Import module:
```ts
  import {FeedCardModule} from '@wiins/feed-card';

  @NgModule({
      imports: [FeedCardModule]
  })
  ```

## Usage

Put your feed tag in a container like this:
  ```html
  <ngx-masonry [ordered]="true">
    <div class="container-cards" ngxMasonryItem *ngFor="let item of feedPublication">
      <wiins-feed-card [feedPublication]="item"></wiins-feed-card>
    </div>
  </ngx-masonry>
  ```
  
 Where [feedPublication] is the package that we had previously recommended to use

## Community

Be the first to contribute to our project by purchasing and staking our token !<br>
You'll be able to:<br>

✔️ Stake and earn Zion at the same time.<br>
✔️ Use 100% of the platform with full content available to a subscription.<br>
✔️ Wiin's certified Artist can be rewarded to personalize monetary gifts.<br>

Join the winns comuntiy today and lets grow Zion's worth together 🚀
