import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdCardModule } from '@angular2-material/card';
import { MdInputModule } from '@angular2-material/input';
import { MdTabsModule } from '@angular2-material/tabs';
import { AppComponent } from './app.component';
import { HighlightModule } from './ext/highlight/highlight.module';
import { FormsComponent } from './forms/forms.component';
import { LoaderService } from './loader/loader.service';

import { EmailComponent } from './email/email.component';
import { EmailDemoComponent } from './email-demo/email-demo.component';

import { DemoRegexComponent } from './regex/regex.component';
import { RegexDemoComponent } from './regex/demo/demo.component';

@NgModule({
    declarations: [
        AppComponent,
        FormsComponent,
        
        EmailComponent,
        EmailDemoComponent,

        DemoRegexComponent,
        RegexDemoComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        MdCardModule,
        HighlightModule,
        MdInputModule,
        MdTabsModule
    ],
    providers: [LoaderService],
    bootstrap: [AppComponent]
})
export class AppModule { }
