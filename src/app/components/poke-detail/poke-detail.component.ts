import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss']
})
export class PokeDetailComponent implements OnInit {
  pokemon: any = {};
  constructor(private pokeService: PokemonService, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(
      params => {
        this.getPokemon(params.id);
      }
    );
  }

  ngOnInit(): void {
  }

  getPokemon(id: string): void {

    this.pokeService.getPokemons(`/pokemon/${id}`).subscribe(
      (response: any) => {
        this.pokemon = response;
      },
      (error: any) => {
      }

    );
  }

}
