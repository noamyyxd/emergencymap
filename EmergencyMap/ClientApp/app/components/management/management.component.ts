import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'management',
    templateUrl: './management.component.html'
})
export class ManagementComponent {
    public users: User[];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/Management/GetUsers').subscribe(result => {
            this.users = result.json() as User[];
        }, error => console.error(error));
    }
}

interface User {
    Name: string;
    LastName: string;
    id: string;
    phone: string;
}
