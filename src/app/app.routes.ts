import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./employee-list/employee-list.component')        
    },
    {
        path:'new',
        loadComponent: () => import('./employee-form/employee-form.component')
    },
    {
        path: ':id/edit',
        loadComponent: () => import('./employee-form/employee-form.component')
    }
];
