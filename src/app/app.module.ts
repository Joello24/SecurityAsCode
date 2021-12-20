import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { HomeComponent } from './home';
import { LoginComponent } from './login';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent
    ],
    providers: [
        
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }