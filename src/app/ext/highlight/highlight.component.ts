import { Component, Input, ElementRef, ViewChild } from '@angular/core';

declare var hljs: any;

@Component({
    selector: 'high-light',
    template: `
        <pre>
            <code class="hljs {{lang}}" [innerHTML]="html">
            </code>
        </pre>
    `
})
export class HighlightComponent {
    @Input() lang: string;
    @Input() trim: boolean = true;
    @Input() content: string;
    html: string;
    constructor() { }

    ngAfterContentChecked() {
        //this.runCheck();
    }

    ngAfterViewInit() {
        //this.runCheck();
    }

    ngDoCheck() {
        this.runCheck();
    }

    runCheck() {
        if (this.content) {
            let input = this.trim ? this.content.trim() : this.content;
            this.html = hljs.highlight(this.lang, input).value;
        }
    }
}