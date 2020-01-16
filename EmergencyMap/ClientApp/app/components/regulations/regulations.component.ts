import { Component } from '@angular/core';

@Component({
    selector: 'regulations',
    templateUrl: './regulations.component.html'
})
export class RegulationsComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }
}
