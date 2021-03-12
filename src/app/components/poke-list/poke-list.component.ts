import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PokemonService } from './../../services/pokemon.service';


@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  displayedColumns: string[] = ['name'];
  data: any[] = [];
  results: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);
  nameSearch = '';
  addListStart = 0;
  addListEnd = 5;

  constructor(private pokeService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getIdPokemon(url: string): string {
    return url.split('/')[6];
  }

  getPokemons(): void {

    this.pokeService.getPokemons('/pokemon?limit=1118').subscribe(
      (response: any) => {
        this.data = response.results;
        this.rangeArray(0, 5, this.data);
      },
      (error: any) => {
      }

    );
  }

  search(): void{
    this.addListStart = 0;
    this.addListEnd = 5;
    this.results = [];
    if (this.nameSearch !== ''){
      this.data = this.data.filter(res => {
        return res.name.toLocaleLowerCase().match(this.nameSearch.toLocaleLowerCase());
      });
      this.rangeArray(0, 5, this.data);
    }else if (this.nameSearch === ''){
      this.ngOnInit();
    }
  }

  rangeArray(start: number, end: number, array: any[]): void{
    for (let i = start; i < end; i++){
      this.results.push(array[i]);
    }
  }

  goToPokemon(url: string): void{
    this.router.navigateByUrl(`home/${this.getIdPokemon(url)}`);
  }

  addList(): void{
    this.addListStart = this.addListStart + 5;
    this.addListEnd = this.addListEnd + 5;
    this.rangeArray(this.addListStart, this.addListEnd, this.data);
  }

}
