import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-child-onchange',
    templateUrl: './child-onchange.component.html',
    styleUrls: ['./child-onchange.component.scss']
})
export class ChildOnchangeComponent implements OnChanges {

    @Input() firstname: string = '';

    previousFirstname: string = '';
    currentFirstname: string = '';
    isFirstChanged: boolean = false;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['firstname']) {
            this.previousFirstname = changes['firstname'].previousValue;
            this.currentFirstname = changes['firstname'].currentValue;
            this.isFirstChanged = changes['firstname'].isFirstChange();
        }
    }

}
