import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AudioService } from 'src/app/service/audio.service';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

  audioList!: any[];
  config = {
    itemsPerPage: 5,
    currentPage: 1,
    totalItems:0
  };

  constructor(private audioService: AudioService) {}

  ngOnInit(): void {
    this.loadAudioList();
  }

  loadAudioList() {
    this.audioService.getAudioList(this.config.currentPage, this.config.itemsPerPage)
      .subscribe((data: any) => {
        this.audioList = data.audioList;
        this.config.totalItems = data.totalItems;
      });
  }

  playPause(audio: any) {
    this.audioService.playPause(audio);
  }

  onPageChange(event: number) {
    this.config.currentPage = event;
    this.loadAudioList();
  }
}


