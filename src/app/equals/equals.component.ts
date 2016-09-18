import { Component } from '@angular/core';

const usageShort = require('raw!./demo/demo.short.ts.txt');
const usageCode = require('raw!./demo/demo.component.ts.txt');
const usageHtml = require('raw!./demo/demo.component.html.txt');

@Component({
    selector: 'demo-equals',
    templateUrl: './equals.component.html',
    styleUrls: ['./equals.component.css']
})
export class DemoEqualsComponent {
    usageShort: string;
    usageCode: string;
    usageHtml: string;

    ngOnInit() {
        this.usageShort = usageShort;
        this.usageCode = usageCode;
        this.usageHtml = usageHtml;
    }
}