import { Component } from '@angular/core';
import { Sidebar } from '../../../shared/components/sidebar/sidebar';
import { Header } from '../../../shared/components/header/header';
import { Contacts } from '../../../pages/contacts/contacts';

@Component({
  selector: 'app-main-layout',
  imports: [Sidebar, Header, Contacts],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {

}
