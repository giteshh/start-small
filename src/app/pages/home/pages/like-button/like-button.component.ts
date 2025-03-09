import {Component} from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-like-button',
  imports: [
    NavbarComponent,
    NgIf,
    NgStyle
  ],
  templateUrl: './like-button.component.html',
  styleUrl: './like-button.component.css'
})
export class LikeButtonComponent {

  isLiked = false;
  likesCount = 999;
  isFollowed = false;
  followersCount = 5200;
  followButtonText = '+ Follow';
  followButtonBackgroundColor = '#ffffff';
  followButtonTextColor = '#4BBFAD';
  followButtonBorder = '2px solid #4BBFAD';
  notificationText = '';
  notificationTextColor = '';

  doLike() {
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.likesCount++;
      this.notificationText = 'Profile liked !'
      this.notificationTextColor = '#29AB87'
      setTimeout(() => {
        this.notificationText = ''
      }, 4000)
    } else {
      this.likesCount--;
      this.notificationText = 'Profile unliked !'
      this.notificationTextColor = '#FF033E'
      setTimeout(() => {
        this.notificationText = ''
      }, 4000)
    }
  }

  doFollow() {
    this.isFollowed = !this.isFollowed;
    if (this.isFollowed) {
      this.followButtonText = 'Following';
      this.followersCount++;
      this.followButtonBackgroundColor = '#0098A2';
      this.followButtonTextColor = '#ffffff';
      this.followButtonBorder = 'none';
      this.notificationText = 'Profile followed !'
      this.notificationTextColor = '#29AB87'
      setTimeout(() => {
        this.notificationText = ''
      }, 4000)
    } else {
      this.followButtonText = '+ Follow';
      this.followButtonBackgroundColor = '#ffffff';
      this.followButtonTextColor = '#4BBFAD';
      this.followButtonBorder = '2px solid #4BBFAD'
      this.followersCount--;
      this.notificationText = 'Profile unfollowed !'
      this.notificationTextColor = '#FF033E'
      setTimeout(() => {
        this.notificationText = ''
      }, 4000)
    }
  }

}
