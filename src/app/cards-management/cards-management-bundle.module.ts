import {NgModule} from "@angular/core";
import {CardsManagementJourneyModule} from "@backbase/cards-management-journey-ang";
import {TemplateRegistry} from "@backbase/foundation-ang/core";

@NgModule({
imports: [
  CardsManagementJourneyModule.forRoot()
],
  providers: [
    TemplateRegistry,
  ]
})
export class CardsManagementBundleModule {
}