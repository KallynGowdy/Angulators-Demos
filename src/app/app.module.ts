import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MdCardModule } from '@angular2-material/card';
import { MdInputModule } from '@angular2-material/input';
import { MdTabsModule } from '@angular2-material/tabs';
import { MdButtonModule } from '@angular2-material/button';

import { HighlightModule } from './ext/highlight/highlight.module';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { LoaderService } from './loader/loader.service';

import { EmailComponent } from './email/email.component';
import { EmailDemoComponent } from './email-demo/email-demo.component';

import { DemoRegexComponent } from './regex/regex.component';
import { RegexDemoComponent } from './regex/demo/demo.component';

import { DemoEqualsComponent } from './equals/equals.component';
import { EqualsDemoComponent } from './equals/demo/demo.component';

@NgModule({
    declarations: [
        AppComponent,
        FormsComponent,
        
        EmailComponent,
        EmailDemoComponent,

        DemoRegexComponent,
        RegexDemoComponent,

        DemoEqualsComponent,
        EqualsDemoComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        
        HighlightModule,
        
        MdCardModule,
        MdInputModule,
        MdTabsModule,
        MdButtonModule
    ],
    providers: [LoaderService],
    bootstrap: [AppComponent]
})
export class AppModule { }
