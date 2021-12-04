import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComprasComponent } from './carrito_compra/carrito-compras/carrito-compras.component'; 
// import { AppComponent } from './app.component';
import { PaginaprincipalComponent}  from './paginaprincipal/paginaprincipal.component';

const routes: Routes = [
  {path: 'PaginaprincipalComponent', component: PaginaprincipalComponent},
  {path: 'CarritoComprasComponent', component: CarritoComprasComponent},
  {path: '**', component: PaginaprincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
