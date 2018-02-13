import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Rx';

@Injectable()
export class PokeapiService {

  url = '//pokeapi.co/api/v2/';
  limit = '?limit=100';
  pokeList = [];

  constructor(private http: Http) { }

  listAll () {
    return this.http.get(`${this.url}pokemon/${this.limit}`)
      .map( response => response.json() )
      .subscribe( response => {
        return this.organizePokeListResponse(response);
      });
  }

  getPokemon (number: number) {
    return this.http.get(`${this.url}pokemon/${number}`)
      .map( response => response.json());
  }

  private organizePokeListResponse(response) {
    const pokemonList = this.filterPokemon(response.results);
    this.pokeList = this.sortPokemon(pokemonList);
    return this.pokeList;
  }

  private getNumberFromUrl(url) {
    const number = parseInt(url.replace(/.*\/(\d+)\/$/, '$1'));
    return number;
  }

  private filterPokemon(pokemonList) {
    return pokemonList
      .map( pokemon => {
        pokemon.number = this.getNumberFromUrl(pokemon.url);
        return pokemon;
      })
      .filter( pokemon => pokemon.number < 1000 );
  }

  private sortPokemon(pokemonList) {
    return pokemonList.sort((a, b) => {
      var aNumber = this.getNumberFromUrl(a.url);
      var bNumber = this.getNumberFromUrl(b.url);

      return (aNumber > bNumber ? 1 : -1);
    });
  }
}
