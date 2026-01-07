import { Component, inject } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TrackService } from '../../../../core/service/track.service';
import { Track } from '../../../../core/models/track.model';

@Component({
  selector: 'app-track-list',
  imports: [NgIcon],
  templateUrl: './track-list.html',
  styleUrl: './track-list.css',
})
export class TrackList {

  public trackService = inject(TrackService);

  dataTrack : Track[] = []

  ngOnInit(){
    this.trackService.loadTracks();
  }

}
