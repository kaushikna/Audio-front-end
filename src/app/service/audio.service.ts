import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})

export class AudioService {
  private apiUrl = environment.baseURl;

  constructor(private http: HttpClient) {}

  getAudioList(page: number, limit: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/audio}`);
  }

  addAudio(audioData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/audio/create`, audioData);
  }

  updateAudio(id: string, audioData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, audioData);
  }

  deleteAudio(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  playPause(audio: any) {
    audio.isPlaying = !audio.isPlaying;
    if (audio.isPlaying) {
      console.log(`Play audio: ${audio.name}`);
    } else {
      console.log(`Pause audio: ${audio.name}`);
    }
  }
}
