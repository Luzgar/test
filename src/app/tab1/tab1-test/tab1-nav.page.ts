import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton, IonBackButton, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1-test',
  templateUrl: 'tab1-nav.page.html',
  styleUrls: ['tab1-nav.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class Tab1TestPage {
  constructor() {}
}
