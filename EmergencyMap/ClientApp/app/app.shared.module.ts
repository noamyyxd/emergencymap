import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
//import { GoogleMapsModule } from "@angular/google-maps";
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { MapComponent } from './components/map/map.component';
import { ManagementComponent } from './components/management/management.component';
import { RegulationsComponent } from './components/regulations/regulations.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        RegulationsComponent,
        ManagementComponent,
        MapComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        //GoogleMapsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'map', pathMatch: 'full' },
            { path: 'map', component: MapComponent },
            { path: 'regulations', component: RegulationsComponent },
            { path: 'management', component: ManagementComponent },
            { path: '**', redirectTo: 'map' }
        ])
    ]
})
export class AppModuleShared {
}
