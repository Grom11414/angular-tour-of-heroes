import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

    public selectedHero: Hero;

    public heroes: Hero[];

    constructor(private heroService: HeroService) { }

    public onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    private getHeroes(): void {
        this.heroes = this.heroService.getHeroes();
    }

    ngOnInit(): void {
        this.getHeroes();
    }
}
