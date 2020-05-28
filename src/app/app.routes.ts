import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
<<<<<<< HEAD

export const ROUTES: Routes = [
    { path:'', component: HomeComponent},
    { path:'about', component: AboutComponent},
    {path: '**', component: NotFoundComponent}
]

=======
import { ProductListComponent } from './product/product-list/product-list.component';


export const ROUTES: Routes = [

    { path: '', component: HomeComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: NotFoundComponent },
    
]
>>>>>>> 6df1c91cda0b69b1a62a9bb1ab3b9d64d710539c
