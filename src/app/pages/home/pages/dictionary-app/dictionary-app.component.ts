import {Component} from '@angular/core';
import {DataService} from '../../../../services/data.service';
import {NavbarComponent} from '../navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-dictionary-app',
  imports: [
    NavbarComponent,
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './dictionary-app.component.html',
  styleUrl: './dictionary-app.component.css'
})
export class DictionaryAppComponent {

  word: any = '';
  result: any;
  audioPronunciationUrl: any;

  constructor(private dataService: DataService) {
  }

  getWordMeaning(event: any) {
    if (event.keyCode === 13) {
      this.dataService.getWordMeaning(this.word).subscribe(res => {
        this.result = res[0]
        console.log(res[0])
        this.audioPronunciationUrl = res[0].phonetics[0].audio;
      })
    }
  }

  playAudioPronunciation() {
    if (this.audioPronunciationUrl) {
      const audio = new Audio(this.audioPronunciationUrl);
      audio.play().then();
    } else {
      console.error('Audio URL not found!');
    }
  }

}
