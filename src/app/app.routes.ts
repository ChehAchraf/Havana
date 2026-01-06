import { Routes } from '@angular/router';

export const routes: Routes = [
    {path : "add-track" , loadComponent : ()=> import('./features/add-track/add-track/add-track').then((c)=>c.AddTrackComponent)}
];
