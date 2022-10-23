import { makeAutoObservable } from "mobx";

export default class GameStore{
  constructor() {
    this._categories = [
      
    ];
    this._developers = [
      
    ];
    this._years = [

    ];
    this._games = [
      
    ];
    makeAutoObservable(this);
  }

  setCategories(categories) {
    this._categories = categories;
  }

  setYears(years) {
    this._years = years;
  }

  setDevelopers(developers) {
    this._developers = developers;
  }

  setGames(games) {
    this._games = games;
  }


  get categories() {
    return this._categories;
  }

  get years() {
    return this._years;
  }

  get developers() {
    return this._developers;
  }

  get games() {
    return this._games;
  }
}