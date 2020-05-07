/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { AddInfoModule } from './addinfo.module';

/* Containers */
import * as chartsContainers from './containers';

/* Guards */
import * as chartsGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: chartsContainers.ChartsComponent,
        data: {
            title: 'Add Info - Add Information',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Add Information',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [AddInfoModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ChartsRoutingModule {}
