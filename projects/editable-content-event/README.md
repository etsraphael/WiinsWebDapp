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

| name        | type                  | description                                                       |
| ----------- | --------------------- | ----------------------------------------------------------------- |
| theme       | string                | We can choose between `light` and `dark`                          |
| placeholder | string                | The placeholder by default when the text is empty                 |
| onWritting  | EventEmitter\<string> | A listener who's returning the current text for each new keydowns |

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
