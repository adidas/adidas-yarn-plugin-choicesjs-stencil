
// ChoicesJSStencil: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './choicesjsstencil.core.js';
import {
  ChoicesJSStencil
} from './choicesjsstencil.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    ChoicesJSStencil
  ], opts);
}
