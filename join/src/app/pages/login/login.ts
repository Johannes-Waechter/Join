/**
 * Login Component
 *
 * @description
 * Handles the user authentication process including:
 * - Standard email/password login
 * - Guest login access
 * - Intro animation control logic
 * - Error handling for failed login attempts
 *
 * This component is standalone and self-contained.
 */

import { Component, inject, NgZone, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { IntroAnimationService } from '../../core/services/intro-animation.service';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  /**
   * The user's email address entered in the form.
   */
  email = '';
  /**
   * The user's password entered in the form.
   */
  password = '';
  /**
   * Error message displayed to the user upon failed login attempts or validation errors.
   */
  errorMessage = '';

  /**
   * Flag controlling the visibility of the intro logo overlay.
   * If true, the intro animation overlay is displayed.
   */
  showIntroLogo = true;
  /**
   * Flag controlling the visibility of the header logo.
   * If true, the static logo in the header is fully visible.
   */
  showHeaderLogo = false;

  /** Service for authentication operations */
  private authService = inject(AuthService);
  /** Router for navigation */
  private router = inject(Router);
  /** Angular Zone to ensure navigation happens inside Angular's zone */
  private ngZone = inject(NgZone);
  /** ChangeDetectorRef for manual change detection triggering */
  private cdr = inject(ChangeDetectorRef);
  /** Service to track the state of the intro animation */
  private introAnimationService = inject(IntroAnimationService);

  /**
   * Lifecycle hook that initializes the component.
   *
   * @description
   * Controls the intro animation flow. Checks if the animation has already been shown
   * in the current session. If so, skips the animation; otherwise, plays it and
   * schedules the visibility transitions.
   */
  ngOnInit() {
    // Skip animation if already shown in this session
    if (this.introAnimationService.hasAnimationBeenShown()) {
      this.showIntroLogo = false;
      this.showHeaderLogo = true;
      return;
    }

    // Initial animation state
    this.showIntroLogo = true;
    this.showHeaderLogo = false;

    // Fade in header logo before intro disappears
    setTimeout(() => {
      this.showHeaderLogo = true;
      this.cdr.detectChanges();
    }, 1100);

    // Remove intro overlay and mark animation as shown
    setTimeout(() => {
      this.showIntroLogo = false;
      this.introAnimationService.markAnimationAsShown();
      this.cdr.detectChanges();
    }, 1700);
  }

  /**
   * Handles the standard user login submission.
   *
   * @description
   * Validates the input form. If valid, attempts to sign in via AuthService.
   * On success, waits for the user state to update and then navigates to the summary page.
   * On failure, sets an error message.
   *
   * @param event - Optional DOM event (e.g., form submit) to prevent default behavior.
   */
  login(event?: Event) {
    if (event) {
      event.preventDefault();
    }

    if (!this.email || !this.password) {
      this.errorMessage = 'Check your email and password. Please try again.';
      this.cdr.detectChanges();
      return;
    }

    this.errorMessage = '';

    this.authService.signIn(this.email, this.password).subscribe({
      next: () => {
        this.authService.user$
          .pipe(
            filter((u) => !!u),
            take(1)
          )
          .subscribe(() => {
            sessionStorage.setItem('just_logged_in', 'true');
            this.ngZone.run(() => {
              this.router.navigate(['/summary']);
            });
          });
      },
      error: () => {
        this.errorMessage = 'Check your email and password. Please try again.';
        this.cdr.detectChanges();
      },
    });
  }

  /**
   * Performs a guest login.
   *
   * @description
   * Authenticates the user as a guest using an anonymous login method or a predefined guest account.
   * Redirects to the summary page upon success or sets an error message on failure.
   */
  guestLogin() {
    this.authService.loginAsGuest().subscribe({
      next: () => {
        sessionStorage.setItem('just_logged_in', 'true');
        this.router.navigate(['/summary']);
      },
      error: () => {
        this.errorMessage = 'Guest login failed';
      },
    });
  }
}
