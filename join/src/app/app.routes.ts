import { Routes } from '@angular/router';
import { Contacts } from './pages/contacts/contacts';
import { MainLayout } from './core/layouts/main-layout/main-layout';

export const routes: Routes = [{
    path: "", component: MainLayout, children: [
        { path: "contacts", component: Contacts },
        { path: "", redirectTo: "contacts", pathMatch: "full" }
    ]
}];
