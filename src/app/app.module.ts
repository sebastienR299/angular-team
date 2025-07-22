import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import { NgmodelComponent } from './modules/ngmodel/ngmodel.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { OnchangeComponent } from './modules/onchanges/onchange.component';
import { ChildOnchangeComponent } from './modules/onchanges/child-onchanges/child-onchange.component';
import { TemplateDrivenComponent } from './modules/template-driven/template-driven.component';

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        NgmodelComponent,
        OnchangeComponent,
        ChildOnchangeComponent,
        TemplateDrivenComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        // Material
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        MatExpansionModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
