import { Component, inject } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TrackService } from '../../../../core/service/track.service';
import { Track } from '../../../../core/models/track.model';
import { PlayerService } from '../../../../core/service/player-service';
import { DurationFormatPipe } from '../../../../shared/pipes/duration-format-pipe-pipe';

@Component({
  selector: 'app-track-list',
  imports: [DurationFormatPipe],
  templateUrl: './track-list.html',
  styleUrl: './track-list.css',
})
export class TrackList {

  public trackService = inject(TrackService);
  private playerService = inject(PlayerService)

  dataTrack : Track[] = []

  ngOnInit(){
    this.trackService.loadTracks();
  }

  playTrack(track : any){
    this.playerService.playTrack(track);
  }

}
