import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-ngmodel',
    templateUrl: './ngmodel.component.html',
    styleUrls: ['./ngmodel.component.scss']
})
export class NgmodelComponent implements OnInit {

    username: string = 'ma valeur d\'origine';
    firstname: string = '';
    firstnameAfterModification: string = '';

    constructor() {
    }

    ngOnInit(): void {
    }

    handleFirstnameChange(event: string): void {
        this.firstnameAfterModification = event.toUpperCase();
    }
}
