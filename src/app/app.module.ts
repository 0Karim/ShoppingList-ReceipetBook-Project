import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ReceipesListComponent } from './recipes/receipes-list/receipes-list.component';
import { ReceipesDetailComponent } from './recipes/receipes-detail/receipes-detail.component';
import { ReceipesItemComponent } from './recipes/receipes-list/receipes-item/receipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ReceipesListComponent,
    ReceipesDetailComponent,
    ReceipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
