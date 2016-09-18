import 'script!highlight.js/lib/highlight.js';

declare var hljs: any;
hljs.registerLanguage('html', require('highlight.js/lib/languages/xml.js'));
hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript.js'));
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash.js'));

import { NgModule } from '@angular/core';
import { HighlightComponent } from './highlight.component';

@NgModule({
    declarations: [HighlightComponent],
    exports: [HighlightComponent]
})
export class HighlightModule { }