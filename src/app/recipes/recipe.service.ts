import { from } from 'rxjs';
import {Receipe} from './receipes.model';


export class ReceipeService
{
    private receipes : Array<Receipe> = [
        new Receipe('A Test Receipe' , 
        'this is simply a test' , 
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872'),
    
        new Receipe('A Test Receipe 2' , 
        'this is simply a test 2' , 
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872')
      ];


      getReceipe(){
          return this.receipes.slice(); //slice() will return a new copy from the receipes array not a refrence to it
      }
}