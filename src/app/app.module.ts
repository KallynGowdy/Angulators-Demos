import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdCardModule } from '@angular2-material/card';
import { MdInputModule } from '@angular2-material/input';
import { MdTabsModule } from '@angular2-material/tabs';
import { AppComponent } from './app.component';
import { HighlightModule } from './ext/highlight/highlight.module';
import { FormsComponent } from './forms/forms.component';
import { EmailComponent } from './email/email.component';
import { MyComponent } from './my-component/my-component.component';

@NgModule({
    declarations: [
        AppComponent,
        FormsComponent,
        EmailComponent,
        MyComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MdCardModule,
        HighlightModule,
        MdInputModule,
        MdTabsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
