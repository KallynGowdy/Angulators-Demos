import { Component } from '@angular/core';

const usageShort = require('raw!./demo/demo.short.ts.txt');
const usageCode = require('raw!./demo/demo.component.ts.txt');
const usageHtml = require('raw!./demo/demo.component.html.txt');

@Component({
    selector: 'demo-regex',
    templateUrl: './regex.component.html',
    styleUrls: ['./regex.component.css']
})
export class DemoRegexComponent {
    usageShort: string;
    usageCode: string;
    usageHtml: string;

    ngOnInit() {
        this.usageShort = usageShort;
        this.usageCode = usageCode;
        this.usageHtml = usageHtml;
    }
}