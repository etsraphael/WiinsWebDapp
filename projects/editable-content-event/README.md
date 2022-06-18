# EditableContentEvent

A simple library to highlight the `#` and `@` in a text. Feel free to make any suggestions in our [Discord's channel](https://discord.gg/rBaSrbJ6AT)

## Sample

<img src="https://bafybeifgh5lndt75tm22shrh4cb7rqs6kpf25iz3gmxuokfsyqh5yi7d2a.ipfs.dweb.link/kfjbweofiuhwefhiuw2ebf9247tgh249fu4bf248hf8940fg24f3.png" alt="Logo" width="380">
</a>

## Installation

Install the npm package.

```
  npm i @wiins/editable-content-event
```

Import module:

```ts
  import { EditableContentEventModule } from '@wiins/editable-content-event';

  @NgModule({
      imports: [EditableContentEventModule]
  })
```

## Usage

```html
<wiins-editable-content-event
  theme="light"
  [placeholder]="'Write your next post..'"
  (onWritting)="onWrittingText($event)">
</wiins-editable-content-event>
```

## Properties

| name        | type                  | description |
| ----------- | --------------------- | ----------- |
| theme       | string                | We can choose between `light` and `dark`|
| placeholder | string                | The placeholder by default when the text is empty |
| onWritting  | EventEmitter\<string> | A listener who's returning the current text for each new keydowns |

## Community

Join the winns comuntiy today and lets grow TEA worth together 🚀
<br />
<br />
<br />

<p align="center">
<a href="https://discord.gg/bBE6xmR">
<img src="./../../src/assets/img/readme/readme-banner.png" alt="Logo" width="380">
</a>
</p>
