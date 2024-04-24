import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  titleInfo = 'Информация';
  titleHobbies = "Хобита и интереси";
  titleCreator = "Любим Content creator";
  titleChannel = "Информация за канала";
  titleFund = "Как може да ме подкрепите";

  infoIntro = "Здравейте! Казвам се Теодора и съм на 20 години.";
  infoHobbies = "В свободното си време рисувам и оцветявам, а по-конкретно през зимата карам кънки на лед. Имам интерес към естетика и увлекателни истории във всякакви форми (игри, филми/сериали, книги, манга и т.н).";
  infoCreator = "Харесвам много канали в ютуб, но на кратко съм фен на sims4 каналите като : lilsimsie, DrGluon, James Turner; някои OG-та :Pewdiepie и Jacksepticeye.";
  infoChannel = "За моя канал - той ще бъде съвкупност от различни идеи. Вдъхновенията са ми Mia Maples и Safiya Nygaard. Ще оставя креативността ми да ме води и за тези от вас, които обичат неочакваното и да хранят любитството си, може да се абонирате за канала ми! ";
  infoFund = "Може да се абонирате за моя ";

    

  public infoActions(){
    this.getDisplayData();

    if(this.info?.getAttribute("style") == "display: none;"){
      this.setDisplayNone();
      this.info?.setAttribute("style", "display: block;");
    }
    else{
      this.setDisplayNone();
    }

  }

  public hobbiesAction(){
    this.getDisplayData();

    if(this.hobbies?.getAttribute("style") == "display: none;"){
      this.setDisplayNone();
      this.hobbies?.setAttribute("style", "display: block;");
    }
    else if(this.hobbies?.getAttribute("style") == "display: block;"){
      this.setDisplayNone();
    }

  }

  public creatorActions(){
    this.getDisplayData();

    if(this.creator?.getAttribute("style") == "display: none;"){
      this.setDisplayNone();
      this.creator?.setAttribute("style", "display: block;");
    }
    else{
      this.setDisplayNone();
    }

  }

  public channelActions(){
    this.getDisplayData();

    if(this.channel?.getAttribute("style") == "display: none;"){
      this.setDisplayNone();
      this.channel?.setAttribute("style", "display: block;");
    }
    else{
      this.setDisplayNone();
    }

  }

  public fundActions(){
    this.getDisplayData();

    if(this.fund?.getAttribute("style") == "display: none;"){
      this.setDisplayNone();
      this.fund?.setAttribute("style", "display: block;");
    }
    else{
      this.setDisplayNone();
    }

  }

  private info = document.getElementById("info");
  private hobbies = document.getElementById("hobbies");
  private creator = document.getElementById("creator");
  private channel = document.getElementById("channel");
  private fund = document.getElementById("fund");

  private getDisplayData(){
    this.info = document.getElementById("info");
    this.hobbies = document.getElementById("hobbies");
    this.creator = document.getElementById("creator");
    this.channel = document.getElementById("channel");
    this.fund = document.getElementById("fund");
  }

  private setDisplayNone(){
    this.getDisplayData();
    this.info?.setAttribute("style", "display: none;");
    this.hobbies?.setAttribute("style", "display: none;");
    this.creator?.setAttribute("style", "display: none;");
    this.channel?.setAttribute("style", "display: none;");
    this.fund?.setAttribute("style", "display: none;");
  }
  

}

