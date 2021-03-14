import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from './../../services/pokemon.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})

export class PokeListComponent implements OnInit {
  data: any[] = [];
  results: any[] = [];
  filtered: any[] = [];
  nameSearch = '';
  addListStart = 0;
  addListEnd = 15;
  count = 0;

  constructor(private pokeService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getIdPokemon(url: string): string {
    return url.split('/')[6];
  }


  async getPokemons(): Promise<void> {

    this.pokeService.getPokemons(`/pokemon?limit=1118`).subscribe(
      (response: any) => {
        this.data = response.results;
        this.filtered = response.results;
        this.results = this.getRangeArray(this.data);
      },
      (error: any) => {
      }
    );
  }

  search(): void{

    this.addListStart = 0;
    this.addListEnd = 15;
    this.results = [];
    this.filtered = [];

    this.filtered = this.data.filter(res => {
      return res.name.toLocaleLowerCase().match(this.nameSearch.toLocaleLowerCase());
    });

    this.results = this.getRangeArray(this.filtered);
  }

  getRangeArray(array: any[]): any[]{
    const res = [];
    for (let i = 0; i < (array.length < 15 ? array.length : 15); i++){
      res.push(array[i]);
    }
    return res;
  }

  addRangeArray(start: number, end: number, array: any[]): void{
    for (let i = start; i < (end - 1 > array.length ? array.length : end); i++){
      this.results.push(array[i]);
    }
  }

  goToPokemon(name: string): void{
    this.router.navigateByUrl(`home/${name}`);
    window.scroll(0, 0);
  }

  addList(): void{
    this.addListStart = this.addListEnd;
    this.addListEnd = (this.filtered.length - this.addListEnd) < 15 ? this.filtered.length : this.addListEnd + 15;
    this.addRangeArray(this.addListStart, this.addListEnd, this.filtered);
  }

}
