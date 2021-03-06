import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";

import { SideDrawerEventsComponent } from './events/events.component';
import { SideDrawerGettingStartedComponent } from './getting-started/getting-started.component';
import { SideDrawerOverNavigationComponent } from './over-navigation/over-navigation.component';
import { SecondSideDrawerOverNavigationComponent } from './over-navigation/second-page/second-over-navigation.component';
import { SideDrawerPositionComponent } from './position/position.component';
import { SideDrawerTransitionsComponent } from './transitions/transitions.component';

import { routes } from './sidedrawer-examples.routing';
import { CommonDirectivesModule } from '../navigation/directives/common-directives.module';

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptModule,        
        CommonDirectivesModule,
        NativeScriptUISideDrawerModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routes)
    ],
    declarations: [
        SideDrawerEventsComponent,
        SideDrawerGettingStartedComponent,
        SideDrawerOverNavigationComponent,
        SecondSideDrawerOverNavigationComponent,
        SideDrawerPositionComponent,
        SideDrawerTransitionsComponent
    ]
})
export class SideDrawerExamplesModule { }