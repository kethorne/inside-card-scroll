import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { CharacterModel } from "../models/character.model";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CharacterService {
  private _characterData = new BehaviorSubject<CharacterModel[]>([]);

  constructor(private http: HttpClient) {}

  get returnCharacters() {
    return this._characterData.asObservable();
  }

  // getAllCharacters() {
  //   return this.http
  //     .get(
  //       "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=8a0dbaae29615169248c24bf7842a922&hash=059c914782874dbc2220a1d05e6b036c"
  //     )
  //     .pipe(
  //       tap((resCharData: CharacterModel[]) => {
  //         console.log(resCharData);
  //         this._characterData.next(resCharData);
  //       })
  //     );
  // }

  getAllCharacters() {
    this.http
      .get(
        "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=8a0dbaae29615169248c24bf7842a922&hash=059c914782874dbc2220a1d05e6b036c"
      )
      .subscribe((resCharData: CharacterModel[]) => {
        console.log(resCharData);
        this._characterData.next(resCharData);
      });
  }

  // getAllCharacters() {
  //   return this.http.get(
  //     "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=8a0dbaae29615169248c24bf7842a922&hash=059c914782874dbc2220a1d05e6b036c"
  //   );
  // }
}
