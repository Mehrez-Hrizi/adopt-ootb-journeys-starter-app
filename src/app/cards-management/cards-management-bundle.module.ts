import {NgModule} from "@angular/core";
import {CardsManagementJourneyModule} from "@backbase/cards-management-journey-ang";
import {TemplateRegistry} from "@backbase/foundation-ang/core";

import { CardsManagementJourneyConfigurationToken, CardsManagementJourneyConfiguration } from "@backbase/cards-management-journey-ang";

@NgModule({
imports: [
  CardsManagementJourneyModule.forRoot()
],
  providers: [
    TemplateRegistry,
    {
      provide: CardsManagementJourneyConfigurationToken,
      useValue: <Partial<CardsManagementJourneyConfiguration>> {
        notificationTtl: 5000,
        groupByPaymentCardTypes: '',
        enableTravelNotice: false
      }
    }
  ]
})
export class CardsManagementBundleModule {
}