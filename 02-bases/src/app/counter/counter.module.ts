import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
  declarations: [
    CounterComponent
  ],
  //Se exporta para que se pueda usar fuera del scope components
  exports: [
    CounterComponent
  ]
})
export class CounterModule { }
