# @some-angular-utils/selector

[![github stars](https://img.shields.io/github/stars/some-angular-utils/selector.svg?style=social&label=Star)](https://github.com/some-angular-utils/selector)

[![NPM Version](https://img.shields.io/npm/v/@some-angular-utils/selector)](https://www.npmjs.com/package/@some-angular-utils/selector)
[![NPM Downloads](https://img.shields.io/npm/dm/@some-angular-utils/selector)](https://www.npmjs.com/package/@some-angular-utils/selector)

[![npm bundle size](https://img.shields.io/bundlephobia/min/@some-angular-utils/selector)](https://www.npmjs.com/package/@some-angular-utils/selector)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@some-angular-utils/selector)](https://www.npmjs.com/package/@some-angular-utils/selector)

---

[DEMO](https://some-angular-utils.github.io/selector)

[NPM](https://www.npmjs.com/package/@some-angular-utils/selector)

---

## IMPORT
```ts
import { SAUselectorModule } from '@some-angular-utils/selector';
```

## HTML
```ts
<sau-selector
    [totalPages]="totalPages"
    [currentPage]="currentPage"
    (pageChange)="onPageChange($event)"
></sau-selector>
```

## COLORS

```css
.sau-selector{
    --sau-color-primary: rgb(147, 51, 234);
    --sau-color-secondary: var(--sau-color-primary);
    --sau-color-background: rgb(255, 255, 255);
    --sau-color-edit: rgb(34, 197, 94);
    --sau-color-delete: rgb(239, 68, 68);
    --sau-color-text: rgb(31, 41, 55);
}
```