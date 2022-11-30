import { Component } from '@angular/core';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faUser,faClock,faRotateRight,faBars,faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app2';

  faCross=faTimes;
  faBars=faBars
  faRotateRight=faRotateRight;
  faUser=faUser;
  faClock=faClock;

  sideMenuActive(){
    document.getElementById("sideMenu")!.style.width="15vw";
    document.getElementById("hamIcon")!.style.display="none";
    document.getElementById("faCross")!.style.display="inline";
    document.getElementById("menuUl")!.style.visibility="visible";
  }
  sideMenuDeactive(){
    document.getElementById("sideMenu")!.style.width="0";
    document.getElementById("menuUl")!.style.visibility="collapse";
    document.getElementById("hamIcon")!.style.display="inline";
    document.getElementById("faCross")!.style.display="none";
  }
}
