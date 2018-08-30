import { Component, OnInit } from '@angular/core';
import { SawaalService } from './sawaal.service'

@Component({
  selector: 'quiz-sawaal',
  templateUrl: './sawaal.component.html',
  styleUrls: ['./sawaal.component.css']
})
export class SawaalComponent implements OnInit {

  constructor(private _sawaalService: SawaalService) { }

  ngOnInit() {
    this._sawaalService.getSawaal(1).subscribe(sawaal =>
      {
        this.question = sawaal[0].sawaal;
        this.choices = sawaal[0].choices;
        if (sawaal[0].bahutSahiJawaab == undefined){
          this.correctChoice = sawaal[0].sahiJawaab;
          this.singleCorrect = true;
          console.log(this.singleCorrect);
        }
        else{
          this.correctChoices = sawaal[0].bahutSahiJawaab;
          this.singleCorrect = false;
          for(var i=0; i<this.correctChoices.length; i++){
            this.currentSelectedMultiple[i] = false;
          }
        }

      })
  }

  questionMax: number = 4;
  questionNo: number = 1;
  singleCorrect: boolean = true;
  evaluate: boolean = false;
  question: string;
  choices: string[];
  correctChoice: string;
  correctChoices: boolean[];
  score: number = 0;

  currentSelectedMultiple: boolean[] = [];
  currentSelectedSingle: string;
  selected: any[] = [];
  answerKey: any[] = [];

  onSelectSingle(selected){
    if(this.currentSelectedSingle != selected){
      this.currentSelectedSingle = selected;
      console.log(this.currentSelectedSingle);
    }

    else this.currentSelectedSingle = "";
  }

  onSelectMultiple(selected){
    var index = this.choices.indexOf(selected);
    this.currentSelectedMultiple[index] = !this.currentSelectedMultiple[index];
  }

  onNextSingle(){
    this.answerKey[this.questionNo - 1] = this.correctChoice;
    this.selected[this.questionNo - 1] = this.currentSelectedSingle;
    this.questionNo = this.questionNo + 1;
    this.currentSelectedMultiple = [];
    console.log(this.selected);
    console.log(this.answerKey);
    this._sawaalService.getSawaal(this.questionNo).subscribe(sawaal =>
      {
      this.question = sawaal[0].sawaal;
      this.choices = sawaal[0].choices;
      if (sawaal[0].bahutSahiJawaab == undefined){
        this.correctChoice = sawaal[0].sahiJawaab;
        this.singleCorrect = true;
        this.currentSelectedSingle = this.selected[this.questionNo-1]
      }
      else{
        this.correctChoices = sawaal[0].bahutSahiJawaab;
        this.singleCorrect = false;
        if(this.selected[this.questionNo-1] == undefined || 
          this.selected[this.questionNo-1] == []){
          for(var i=0; i<this.correctChoices.length; i++){
            this.currentSelectedMultiple[i] = false;
          }
        }
        else this.currentSelectedMultiple = this.selected[this.questionNo - 1]
      }
      })
  }

  onNextMultiple(){
    this.answerKey[this.questionNo - 1] = this.correctChoices;
    this.selected[this.questionNo - 1] = this.currentSelectedMultiple;
    this.questionNo = this.questionNo + 1;
    this.currentSelectedMultiple = [];
    this._sawaalService.getSawaal(this.questionNo).subscribe(sawaal =>
      {
      this.question = sawaal[0].sawaal;
      this.choices = sawaal[0].choices;
      if (sawaal[0].bahutSahiJawaab == undefined){
        this.correctChoice = sawaal[0].sahiJawaab;
        this.singleCorrect = true;
        this.currentSelectedSingle = this.selected[this.questionNo-1];
      }
      else{
        this.correctChoices = sawaal[0].bahutSahiJawaab;
        this.singleCorrect = false;
        if(this.selected[this.questionNo-1] == undefined || 
          this.selected[this.questionNo-1] == []){
          for(var i=0; i<this.correctChoices.length; i++){
            this.currentSelectedMultiple[i] = false;
          }
        }
        else this.currentSelectedMultiple = this.selected[this.questionNo - 1]
      }
      })
  }
  onBackMultiple(){
    this.answerKey[this.questionNo - 1] = this.correctChoices;
    this.selected[this.questionNo - 1] = this.currentSelectedMultiple;
    if(this.questionNo != 1){
      this.questionNo = this.questionNo - 1;
      this.currentSelectedMultiple = [];
      this._sawaalService.getSawaal(this.questionNo).subscribe(sawaal =>
        {
        this.question = sawaal[0].sawaal;
        this.choices = sawaal[0].choices;
        if (sawaal[0].bahutSahiJawaab == undefined){
          this.correctChoice = sawaal[0].sahiJawaab;
          this.singleCorrect = true;
          this.currentSelectedSingle = this.selected[this.questionNo-1];
        }
        else{
          this.correctChoices = sawaal[0].bahutSahiJawaab;
          this.singleCorrect = false;
          if(this.selected[this.questionNo-1] == undefined || 
            this.selected[this.questionNo-1] == []){
            for(var i=0; i<this.correctChoices.length; i++){
              this.currentSelectedMultiple[i] = false;
            }
          }
          else this.currentSelectedMultiple = this.selected[this.questionNo - 1]
        }
      })
    }
  }
  onBackSingle(){
    this.answerKey[this.questionNo - 1] = this.correctChoices;
    this.selected[this.questionNo - 1] = this.currentSelectedSingle;
    if(this.questionNo != 1){
      this.questionNo = this.questionNo - 1;
      this.currentSelectedMultiple = [];
      this._sawaalService.getSawaal(this.questionNo).subscribe(sawaal =>
        {
        this.question = sawaal[0].sawaal;
        this.choices = sawaal[0].choices;
        if (sawaal[0].bahutSahiJawaab == undefined){
          this.correctChoice = sawaal[0].sahiJawaab;
          this.singleCorrect = true;
          this.currentSelectedSingle = this.selected[this.questionNo-1];
        }
        else{
          this.correctChoices = sawaal[0].bahutSahiJawaab;
          this.singleCorrect = false;
          if(this.selected[this.questionNo-1] == undefined || 
            this.selected[this.questionNo-1] == []){
            for(var i=0; i<this.correctChoices.length; i++){
              this.currentSelectedMultiple[i] = false;
            }
          }
          else this.currentSelectedMultiple = this.selected[this.questionNo - 1]
        }
      })
    }
  }

  onEvaluateSingle(){
    this.evaluate = true;
    this.answerKey[this.questionNo - 1] = this.correctChoice;
    this.selected[this.questionNo - 1] = this.currentSelectedSingle;
    console.log(this.selected);
    console.log(this.answerKey);
    console.log(typeof this.answerKey[1]);

    for(var i=0; i<this.answerKey.length; i++){
      if(typeof this.answerKey[i] == 'string'){
        if(this.selected[i] == this.answerKey[i]){
          this.score++;
        }
      }
      else{
        var match = true;
        for(var j=0; j<this.answerKey[i].length; j++){
          match = match && (this.answerKey[i][j] == this.selected[i][j])
        }
        if(match){
          this.score++;
        }
      }
    }
  }

  onEvaluateMultiple(){
    this.evaluate = true;
    this.answerKey[this.questionNo - 1] = this.correctChoices;
    this.selected[this.questionNo - 1] = this.currentSelectedMultiple;
    console.log(this.selected);
    console.log(this.answerKey);

    for(var i=0; i<this.answerKey.length; i++){
      if(typeof this.answerKey[i] == 'string'){
        if(this.selected[i] == this.answerKey[i]){
          this.score++;
        }
      }
      else{
        var match = true;
        for(var j=0; j<this.answerKey[i].length; j++){
          match = match && (this.answerKey[i][j] == this.selected[i][j])
        }
        if(match){
          this.score++;
        }
      }
    }
  }
}
