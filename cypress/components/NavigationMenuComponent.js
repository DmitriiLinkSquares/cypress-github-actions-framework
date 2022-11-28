import { mainMenuButtons, subMenuButtons, urlParts } from '../support/constants'

class NavigationMenuComponent {

  menuButtonByName(menuName) {
    return cy.get(`a[title="${menuName}"]`)
  }

  chevronByMenuName(menuName) {
    return cy.get(`a[title="${menuName}"] .expand-state`)
  }

  openMenuByName(menuName) {
    this.chevronByMenuName(menuName).invoke('attr', 'ng-reflect-icon').then(icon => {
      if (icon === 'chevron-left-outline') this.menuButtonByName(menuName).click()
    })
    this.chevronByMenuName(menuName)
      .should('have.attr', 'ng-reflect-icon', 'chevron-down-outline')
  }

  goToStepperPage() {
    this.openMenuByName(mainMenuButtons.LAYOUT)
    this.menuButtonByName(subMenuButtons.LAYOUT.STEPPER)
      .should('be.visible')
      .and('contain.text', subMenuButtons.LAYOUT.STEPPER)
      .click()
    cy.url().should('include', urlParts.STEPPER_PAGE)
  }

  goToAccordionPage() {
    this.openMenuByName(mainMenuButtons.LAYOUT)
    this.menuButtonByName(subMenuButtons.LAYOUT.ACCORDION)
      .should('be.visible')
      .and('contain.text', subMenuButtons.LAYOUT.ACCORDION)
      .click()
    cy.url().should('include', urlParts.ACCORDION_PAGE)
  }

  goToFormLayoutsPage() {
    this.openMenuByName(mainMenuButtons.FORMS)
    this.menuButtonByName(subMenuButtons.FORM.FORM_LAYOUTS)
      .should('be.visible')
      .and('contain.text', subMenuButtons.FORM.FORM_LAYOUTS)
      .click()
    cy.url().should('include', urlParts.FORM_LAYOUTS_PAGE)
  }

  goToDatepickerPage() {
    this.openMenuByName(mainMenuButtons.FORMS)
    this.menuButtonByName(subMenuButtons.FORM.DATEPICKER)
      .should('be.visible')
      .and('contain.text', subMenuButtons.FORM.DATEPICKER)
      .click()
    cy.url().should('include', urlParts.DATEPICKER_PAGE)
  }

  goToDialogPage() {
    this.openMenuByName(mainMenuButtons.MODAL_AND_OVERLAYS)
    this.menuButtonByName(subMenuButtons.MODAL_AND_OVERLAYS.DIALOG)
      .should('be.visible')
      .and('contain.text', subMenuButtons.MODAL_AND_OVERLAYS.DIALOG)
      .click()
    cy.url().should('include', urlParts.DIALOG_PAGE)
  }

  goToWindowPage() {
    this.openMenuByName(mainMenuButtons.MODAL_AND_OVERLAYS)
    this.menuButtonByName(subMenuButtons.MODAL_AND_OVERLAYS.WINDOW)
      .should('be.visible')
      .and('contain.text', subMenuButtons.MODAL_AND_OVERLAYS.WINDOW)
      .click()
    cy.url().should('include', urlParts.WINDOW_PAGE)
  }

  goToPopoverPage() {
    this.openMenuByName(mainMenuButtons.MODAL_AND_OVERLAYS)
    this.menuButtonByName(subMenuButtons.MODAL_AND_OVERLAYS.POPOVER)
      .should('be.visible')
      .and('contain.text', subMenuButtons.MODAL_AND_OVERLAYS.POPOVER)
      .click()
    cy.url().should('include', urlParts.POPOVER_PAGE)
  }

  goToToastrPage() {
    this.openMenuByName(mainMenuButtons.MODAL_AND_OVERLAYS)
    this.menuButtonByName(subMenuButtons.MODAL_AND_OVERLAYS.TOASTR)
      .should('be.visible')
      .and('contain.text', subMenuButtons.MODAL_AND_OVERLAYS.TOASTR)
      .click()
    cy.url().should('include', urlParts.TOASTR_PAGE)
  }

  goToTooltipPage() {
    this.openMenuByName(mainMenuButtons.MODAL_AND_OVERLAYS)
    this.menuButtonByName(subMenuButtons.MODAL_AND_OVERLAYS.TOOLTIP)
      .should('be.visible')
      .and('contain.text', subMenuButtons.MODAL_AND_OVERLAYS.TOOLTIP)
      .click()
    cy.url().should('include', urlParts.TOOLTIP_PAGE)
  }

  goToCalendarPage() {
    this.openMenuByName(mainMenuButtons.EXTRA_COMPONENTS)
    this.menuButtonByName(subMenuButtons.EXTRA_COMPONENTS.CALENDAR)
      .should('be.visible')
      .and('contain.text', subMenuButtons.EXTRA_COMPONENTS.CALENDAR)
      .click()
    cy.url().should('include', urlParts.CALENDAR_PAGE)
  }

  goToSmartTablePage() {
    this.openMenuByName(mainMenuButtons.TABLES_AND_DATA)
    this.menuButtonByName(subMenuButtons.TABLES_AND_DATA.SMART_TABLE)
      .should('be.visible')
      .and('contain.text', subMenuButtons.TABLES_AND_DATA.SMART_TABLE)
      .click()
    cy.url().should('include', urlParts.SMART_TABLE_PAGE)
  }

  goToTreeGridPage() {
    this.openMenuByName(mainMenuButtons.TABLES_AND_DATA)
    this.menuButtonByName(subMenuButtons.TABLES_AND_DATA.TREE_GRID)
      .should('be.visible')
      .and('contain.text', subMenuButtons.TABLES_AND_DATA.TREE_GRID)
      .click()
    cy.url().should('include', urlParts.TREE_GRID_PAGE)
  }
}

export const navigationMenuComponent = new NavigationMenuComponent()
