import { Injectable } from '@angular/core';
import{FaceSnap} from "../models/face-snap.model";
@Injectable ({
  providedIn: 'root'
})
export class FaceSnapsService{
  faceSnaps:FaceSnap[]=[


  ]
  ngOnInit(): void {
    this.faceSnaps=this.faceSnapsnapsService.faceSnaps;


  }

}

