import { Component, OnInit } from "@angular/core";
import { CharacterService } from "../marvel-services/character.service";
import { ActivatedRoute } from "@angular/router";
import { CharacterModel } from "../models/character.model";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  characterList: CharacterModel[];
  name: string;
  listOfCharacters: any[];
  constructor(
    private charService: CharacterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.charService.getAllCharacters();
    this.charService.returnCharacters.subscribe((resData) => {
      console.log(resData);
      console.log(resData.data);
      // console.log(resData.data.results[0]);
      console.log((this.characterList = resData["data"]));
    });
  }
}
