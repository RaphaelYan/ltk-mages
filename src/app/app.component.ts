import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Rx';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  spell: any = {};

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.items = af.list('/spells', {
      query: {
        limitToLast: 20
      }
    });
    this.user = this.afAuth.authState;
  }

  loginWithGithub() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  send() {
    this.items.push(this.spell);
    this.spell = {};
  }
}
