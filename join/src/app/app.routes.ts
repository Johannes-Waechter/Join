import { Routes } from '@angular/router';
import { Contacts } from './pages/contacts/contacts';
import { MainLayout } from './core/layouts/main-layout/main-layout';
import { Summary } from './pages/summary/summary';
import { Board } from './pages/board/board';
import { AddTask } from './pages/add-task/add-task';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { LegalNotes } from './pages/legal-notes/legal-notes';
import { Help } from './pages/help/help';

/**
 * Angular application routes configuration.
 * 
 * Defines the routing structure for the Join application using a parent-child layout.
 * All routes are rendered within the `MainLayout` component, which provides the main
 * application structure (header, sidebar, content area).
 * 
 * @type {Routes}
 * 
 * @property {Route[]} routes - Array of route configurations
 * @property {string} routes[].path - URL path segment
 * @property {Component} routes[].component - Component to render for this route
 * @property {Route[]} routes[].children - Child routes nested within the parent layout
 * 
 * @description
 * Route Structure:
 * - `/contacts` - Contact list and management
 * - `/contacts/add` - Add new contact (lazy-loaded DialogContact)
 * - `/contacts/:id/edit` - Edit existing contact by ID (lazy-loaded DialogContact)
 * - `/summary` - Dashboard summary view
 * - `/board` - Kanban board view
 * - `/add-task` - Task creation form
 * - `/privacy-policy` - Privacy policy page
 * - `/legal-notice` - Legal notice/imprint page
 * - `/help` - Help and documentation
 * - `/` - Redirects to `/contacts` by default
 * 
 * @example
 * // Navigate to contacts list
 * router.navigate(['/contacts']);
 * 
 * @example
 * // Navigate to add new contact (lazy-loaded)
 * router.navigate(['/contacts/add']);
 * 
 * @example
 * // Navigate to edit contact with ID "abc123" (lazy-loaded)
 * router.navigate(['/contacts/abc123/edit']);
 */
export const routes: Routes = [{
    path: "", component: MainLayout, children: [
        { path: "contacts", component: Contacts },
        { path: "summary", component: Summary },
        { path: "board", component: Board },
        { path: "add-task", component: AddTask },
        { path: "privacy-policy", component: PrivacyPolicy },
        { path: "legal-notice", component: LegalNotes },
        { path: "help", component: Help },
        { path: "", redirectTo: "contacts", pathMatch: "full" },

        {
            path: 'contacts/add',
            loadComponent: () => import('./pages/contacts/dialog-contact').then(m => m.DialogContact),
        },
        {
            path: 'contacts/:id/edit',
            loadComponent: () => import('./pages/contacts/dialog-contact').then(m => m.DialogContact),
        },

        { path: '', redirectTo: 'contacts', pathMatch: 'full' },
    ]
}];
