import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./auth/auth.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {MyAccountComponent} from "./my-account/my-account.component";
import {HomeComponent} from "./home/home.component";
import {NgModule} from "@angular/core";
// import {SearchOfferComponent} from "./search-offer/search-offer.component";

const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch: "full",},
  {path: "auth", component: AuthComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "my-account", component: MyAccountComponent},
  {path: "home", component: HomeComponent},
  // {path: "search",component: SearchOfferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
