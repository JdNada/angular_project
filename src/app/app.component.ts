import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnap } from './models/face-snap.model';
import { FaceSnapDSI22Component } from './face-snap-dsi22/face-snap-dsi22.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaceSnapDSI22Component, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
 mySnap!: FaceSnap;
 faceSnaps!:FaceSnap[];

  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Archibad',
      'Mon premier ami depuis tout petit !',
      'https://picsum.photos/200/300',
      new Date(),
      0
    );
    this.faceSnaps=[
      {
        title:'Archibald',
        description:'Mon meilleur ami depuis tous petit !',
        imageUrl:'https://picsum.photos/200/300',
        createdDate:new Date(),
        snaps:0
      },
      {
        title:'three rock mountain',
        description:'endroit magnifique',
        imageUrl:'https://picsum.photos/200/300',
        createdDate:new Date(),
        snaps: 0
      },
      {
        title:'un bon repas',
        description:'yumm c bon !',
        imageUrl:'https://picsum.photos/200/300',
        createdDate: new Date(),
        snaps:0
      }
    ];


  }
}


