import { Component, Input, OnInit } from '@angular/core';
import { AudioService } from 'src/app/service/audio.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnInit {
  @Input() audio: any;

  constructor(private audioService: AudioService) {}

  playPause() {
    this.audioService.playPause(this.audio);
  }

  ngOnInit(): void {
  }

}
