import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AudioService } from 'src/app/service/audio.service';

@Component({
  selector: 'app-add-audio',
  templateUrl: './add-audio.component.html',
  styleUrls: ['./add-audio.component.css']
})
export class AddAudioComponent implements OnInit {

  audioForm!: FormGroup;

  constructor(private fb: FormBuilder, private audioService: AudioService) {}

  ngOnInit(): void {
    this.audioForm = this.fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      desc: ['', Validators.required],
      audio: [null, Validators.required], // Use a file input for audio
      duration: [null, Validators.min(30)] // Add duration field with minimum 30 seconds
    });
  }

  onAudioChange(event: any) {
    const file = event.target.files[0];
    this.audioForm.patchValue({
      duration: null
    });

    // Get audio duration and update form value
    this.getAudioDuration(file).then(duration => {
      this.audioForm.patchValue({
        duration
      });
    });
  }

  getAudioDuration(file: File): Promise<number> {
    return new Promise((resolve, reject) => {
      const audio = new Audio();
      audio.src = URL.createObjectURL(file);
      audio.onloadedmetadata = () => {
        const duration = Math.floor(audio.duration);
        resolve(duration);
      };
      audio.onerror = reject;
    });
  }

  submitForm() {
    if (this.audioForm.valid) {
      const formData = new FormData();
      formData.append('name', this.audioForm.value.name);
      formData.append('image', this.audioForm.value.image);
      formData.append('desc', this.audioForm.value.desc);
      formData.append('audio', this.audioForm.value.audio);
      formData.append('duration', this.audioForm.value.duration);

      this.audioService.addAudio(formData).subscribe((data: any) => {
        console.log('Audio added successfully:', data);
        // Optionally, you can redirect to the audio list page or perform other actions
      });
    }
  }
}
