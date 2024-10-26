import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-face-snap-dsi22',
  standalone: true,
  imports: [NgClass],
  templateUrl: './face-snap-dsi22.component.html',
  styleUrl: './face-snap-dsi22.component.scss',
})

export class FaceSnapDSI22Component implements OnInit {
  title!: string;
  description!: string;
  createDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;
  @Input() faceSnap!: FaceSnap;

  ngOnInit() {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis tout petit !';
    this.createDate = new Date();
    this.snaps = 6;
    this.imageUrl = 'https://picsum.photos/200/300';
    this.buttonText = 'Oh Snap!';
    this.faceSnap = {
      createdDate: new Date(),
      description: '',
      imageUrl: '',
      snaps: 0,
      title:''
    }
  }
  onAddSnap() {
    this.snaps++;
  }
  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.snaps++;
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }
}
