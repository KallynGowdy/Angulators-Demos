import { Component } from '@angular/core';
import { LoaderService } from '../loader/loader.service';
const usageShort = require('raw!../email-demo/email-demo.short.ts.txt');
const usageCode = require('raw!../email-demo/email-demo.component.ts.txt');
const usageHtml = require('raw!../email-demo/email-demo.html.txt');

@Component({
    selector: 'demo-email',
    templateUrl: './email.component.html',
    styleUrls: ['./email.component.css']
})
export class EmailComponent {
    public usageShort: string;
    public usageCode: string;
    public usageHtml: string;
    constructor(private loader: LoaderService) { }

    ngOnInit() {
        this.usageShort = usageShort;
        this.usageCode = usageCode;
        this.usageHtml = usageHtml;
    }
}
