import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { auth } from 'firebase/app';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: Observable<firebase.User>;
  userDetails: firebase.User = null;

  userData: Observable<any>;
  userDataRef: AngularFireObject<any>;

  constructor(public afAuth: AngularFireAuth,
    public afDb: AngularFireDatabase,
    private router: Router
    ) {
  //   this.user = afAuth.authState;
  //   this.user.subscribe(
  //   (user) => {
  //     if (user) {
  //       this.userDetails = user;
  //     }
  //     else {
  //       this.userDetails = null;
  //     }
  //   }
  // );
}

  // doGoogleLogin(){
  //   return new Promise<any>((resolve, reject) => {
  //     let provider = new firebase.auth.GoogleAuthProvider();
  //     provider.addScope('profile');
  //     provider.addScope('email');
  //     this.afAuth
  //     .signInWithPopup(provider)
  //     .then(res => {
  //       resolve(res);
  //     })
  //   })
  // }

  // signInWithGoogle() {
  //   return this.afAuth.signInWithPopup(
  //     new firebase.auth.GoogleAuthProvider()
  //   )
  // }

  isLoggedIn() {
    if (this.userDetails == null ) {
        return false;
      } else {
        return true;
      }
    }

    login(): void {
      this.afAuth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      ).then(user => {
        this.userDetails = user.user;
        this.router.navigate(['home']);
      });
    }
    
    logout(): void {
      this.afAuth.signOut().then();
    }

    addFavorite(sysID: string, stationID: string): Promise<void> {
      let data = {};
      data['/'+sysID+'/'+stationID]=true;
      return this.userDataRef.update(data);
    }

    removeFavorite(sysID: string, stationID: string): Promise<void> {
      return this.afDb.object('users/'+this.userDetails.uid+'/'+sysID+'/'+stationID).remove();
    }

    getFavoritesBySystem(sysID: string): Observable<any> {
      return this.userData.pipe(map(data => data[sysID]));
    }

    setFakeData() {
      this.userDataRef.update({
          test: 'value',
          test2: 'this is also a value'
        });
        console.log(this.userDataRef);
    }

    getUserData(): Observable<any> {
      if(this.isLoggedIn){
          const userId = 'users/' + this.userDetails.uid;
          // console.log(userId);
          this.userDataRef = this.afDb.object(userId);
          // console.log('userdataref:', this.userDataRef);
          this.userData = this.afDb.object(userId).valueChanges(); 
          return this.userData;
      }
      return of(null);
    }
  }
