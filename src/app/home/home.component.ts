﻿import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;


    constructor() { }

    ngOnInit() {
    }
}