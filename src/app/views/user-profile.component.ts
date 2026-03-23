import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AsyncPipe, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectUserProfile, selectUserProfileSaving } from '../store/user-profile.selector';
import * as profileActions from '../store/user-profile.actions';
import { UserProfileService } from '../services/user-profile.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    NgIf,
    AsyncPipe,
  ],
  template: `
    <div class="profile-container">
      <h2 class="profile-title has-gradient-text">My Profile</h2>

      <div class="avatar-section">
        <button type="button" class="avatar-wrapper" (click)="avatarInput.click()" aria-label="Change avatar photo">
          <img
            *ngIf="avatarUrl"
            [src]="avatarUrl"
            alt="User avatar"
            class="avatar-image"
          />
          <mat-icon *ngIf="!avatarUrl" class="avatar-placeholder">account_circle</mat-icon>
          <div class="avatar-overlay">
            <mat-icon>photo_camera</mat-icon>
          </div>
        </button>
        <input
          #avatarInput
          type="file"
          accept="image/png,image/jpeg,image/gif,image/webp"
          (change)="onAvatarSelected($event)"
          hidden
        />
        <div class="avatar-actions">
          <button mat-button color="primary" (click)="avatarInput.click()" [disabled]="saving$ | async">
            <mat-icon>upload</mat-icon>
            {{ avatarUrl ? 'Change Photo' : 'Upload Photo' }}
          </button>
          <button
            mat-button
            *ngIf="avatarUrl"
            (click)="onRemoveAvatar()"
            [disabled]="saving$ | async"
            class="remove-btn"
          >
            <mat-icon>delete</mat-icon>
            Remove
          </button>
        </div>
        <mat-spinner *ngIf="saving$ | async" diameter="24" class="upload-spinner"></mat-spinner>
      </div>

      <form class="profile-form" (ngSubmit)="onSaveProfile()">
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Display Name</mat-label>
          <input
            matInput
            [(ngModel)]="displayName"
            name="displayName"
            maxlength="100"
            placeholder="Enter your name"
          />
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Address</mat-label>
          <textarea
            matInput
            [(ngModel)]="address"
            name="address"
            rows="3"
            placeholder="Enter your address"
          ></textarea>
        </mat-form-field>

        <div class="form-actions">
          <button mat-raised-button color="primary" type="submit" [disabled]="saving$ | async">
            {{ (saving$ | async) ? 'Saving...' : 'Save Profile' }}
          </button>
          <button mat-button type="button" (click)="goBack()">Cancel</button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .profile-container {
      max-width: 600px;
      margin: 32px auto;
      padding: 24px;
    }

    .profile-title {
      font-size: 28px;
      font-family: "Yatra One", sans-serif;
      font-weight: bold;
      margin-bottom: 32px;
      text-align: center;
    }

    .avatar-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 32px;
    }

    .avatar-wrapper {
      position: relative;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
      border: 3px solid rgba(249, 208, 122, 0.3);
      transition: border-color 0.2s ease;
      padding: 0;
      background: transparent;
    }

    .avatar-wrapper:hover {
      border-color: #F9D07A;
    }

    .avatar-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .avatar-placeholder {
      width: 100%;
      height: 100%;
      font-size: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(249, 208, 122, 0.4);
    }

    .avatar-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.2s ease;
      color: #fff;
    }

    .avatar-wrapper:hover .avatar-overlay {
      opacity: 1;
    }

    .avatar-actions {
      display: flex;
      gap: 8px;
      margin-top: 12px;
    }

    .remove-btn {
      color: #ff8a80;
    }

    .upload-spinner {
      margin-top: 8px;
    }

    .profile-form {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .full-width {
      width: 100%;
    }

    .form-actions {
      display: flex;
      gap: 12px;
      justify-content: center;
      margin-top: 16px;
    }

    :host-context(.light-mode) .avatar-placeholder {
      color: rgba(92, 64, 0, 0.4);
    }

    :host-context(.light-mode) .avatar-wrapper {
      border-color: rgba(92, 64, 0, 0.3);
    }

    :host-context(.light-mode) .avatar-wrapper:hover {
      border-color: #5C4000;
    }

    :host-context(.light-mode) .remove-btn {
      color: #B00020;
    }
  `],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  private store = inject(Store);
  private userProfileService = inject(UserProfileService);
  private router = inject(Router);
  private destroy$ = new Subject<void>();

  saving$ = this.store.select(selectUserProfileSaving);

  displayName = '';
  address = '';
  avatarUrl = '';

  ngOnInit(): void {
    this.userProfileService.loadProfile();

    this.store.select(selectUserProfile).pipe(takeUntil(this.destroy$)).subscribe((profile) => {
      if (profile) {
        this.displayName = profile.display_name ?? '';
        this.address = profile.address ?? '';
        this.avatarUrl = profile.avatar_url ?? '';
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSaveProfile(): void {
    this.userProfileService.saveProfile({
      display_name: this.displayName.trim(),
      address: this.address.trim(),
    });
  }

  onAvatarSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    this.userProfileService.uploadAvatar(file);
    // Reset input so re-selecting the same file triggers change
    input.value = '';
  }

  onRemoveAvatar(): void {
    this.userProfileService.removeAvatar();
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}
