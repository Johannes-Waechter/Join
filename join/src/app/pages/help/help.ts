import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../core/services/navigation.service';

@Component({
  selector: 'app-help',
  standalone: true,
  templateUrl: './help.html',
  styleUrl: './help.scss',
})
export class Help {
  private router = inject(Router);
  private navigationService = inject(NavigationService);

  goBack(): void {
    const previousUrl = this.navigationService.getPreviousUrl();

    if (previousUrl) {
      this.router.navigateByUrl(previousUrl);
      return;
    }

    this.router.navigate(['/summary']);
  }
}

