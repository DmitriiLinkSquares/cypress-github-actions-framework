import { navigationMenuComponent } from '../components/NavigationMenuComponent'

describe('Menu buttons tests', () => {

  it('Verify if all menu buttons are clickable and opens appropriate page', () => {
    cy.visit('/')
    navigationMenuComponent.goToStepperPage()
    navigationMenuComponent.goToAccordionPage()
    navigationMenuComponent.goToFormLayoutsPage()
    navigationMenuComponent.goToDatepickerPage()
    navigationMenuComponent.goToDialogPage()
    navigationMenuComponent.goToWindowPage()
    navigationMenuComponent.goToPopoverPage()
    navigationMenuComponent.goToToastrPage()
    navigationMenuComponent.goToTooltipPage()
    navigationMenuComponent.goToCalendarPage()
    navigationMenuComponent.goToSmartTablePage()
    navigationMenuComponent.goToTreeGridPage()
  })
})

