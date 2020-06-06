import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { auth } from 'firebase/app';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: Observable<firebase.User>;
  userDetails: firebase.User = null;

  userData: Observable<any>;
  userDataRef: AngularFireObject<any>;
  private cookieValue: string;

  constructor(public afAuth: AngularFireAuth,
    public afDb: AngularFireDatabase,
    private router: Router,
    private cookieService: CookieService
  ) {
  }

  isLoggedIn(): boolean {
    if (this.userDetails) {
      return true;
    }
    if (this.cookieService.get('user') !== '') {
      this.userDetails = JSON.parse(this.cookieService.get('user'));
      return true;
    }
    return false;
  }

  login(): void {
    this.afAuth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    ).then(user => {
      this.userDetails = user.user;
      this.userDetails
      this.cookieService.set('user', JSON.stringify(this.userDetails));
      this.router.navigate(['home']);
    });
  }

  logout(): void {
    this.cookieService.set('user', '');
    this.userDetails = undefined;
    this.afAuth.signOut().then();
  }

  changeFavorite(sysID: string, stationID: string): Promise<boolean> {
    // returns true if station is a favorite after change, false if not
    return this.isFavorite(sysID, stationID).then(b => {
      // return true;

      if (b) {
        this.removeFavorite(sysID, stationID).then();
        return false;
      }
      this.addFavorite(sysID, stationID).then();
      return true;
    });
  }

  isFavorite(sysID: string, stationID: string): Promise<boolean> {
    if (!this.userDetails) {
      return new Promise((resolve, _) => resolve(false));
    }
    return this.afDb.object('users/' + this.userDetails.uid + '/' + sysID + '/' + stationID).query.once('value').then(x => (x.val() ? true : false));
    // return this.afDb.object('users/'+this.userDetails.uid+'/'+sysID+'/'+stationID).valueChanges()
    //   .pipe(map(x=> {console.log('isFavorite observable returned.'); return (x ? true : false)}));
  }

  addFavorite(sysID: string, stationID: string): Promise<void> {
    let data = {};
    data['/' + sysID + '/' + stationID] = true;
    return this.userDataRef.update(data);
  }

  removeFavorite(sysID: string, stationID: string): Promise<void> {
    return this.afDb.object('users/' + this.userDetails.uid + '/' + sysID + '/' + stationID).remove();
  }

  getUserData(): Observable<any> {
    if (this.isLoggedIn) {
      const userId = 'users/' + this.userDetails.uid;
      // console.log(userId);
      this.userDataRef = this.afDb.object(userId);
      // console.log('userdataref:', this.userDataRef);
      this.userData = this.afDb.object(userId).valueChanges().pipe(take(1));
      // console.log(this.afDb.object(userId).valueChanges())
      return this.userData;
    }
    return of(null);
  }
}
