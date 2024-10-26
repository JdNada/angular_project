import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapDSI22Component } from '../face-snap-dsi22/face-snap-dsi22.component';
import { FaceSnapsService } from '../services/face-snaps-service';
import { HeaderComponent } from "../header/header.component";
@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [CommonModule, FaceSnapDSI22Component, HeaderComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!:FaceSnap[];
  constructor(private readonly faceSnapsService: FaceSnapsService) { }

  ngOnInit():void{
    this.faceSnaps=this.faceSnapsService.faceSnaps;
  }


}
