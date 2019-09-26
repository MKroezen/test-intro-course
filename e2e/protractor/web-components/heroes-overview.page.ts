import {by, element, ElementArrayFinder, ElementFinder} from 'protractor';
import {Page} from './page';
import {VisibilityValidator} from '../validators/visibility.validator';

export class HeroesOverviewPage extends Page {
    private readonly dashboardNavigationButton: ElementFinder = this.browser.element(by.id('dashboard-page-nav-button'));
    private readonly heroesOverviewButton: ElementFinder = this.browser.element(by.id('heroes-overview-nav-button'));
    private readonly heroesComponent: ElementFinder = this.browser.element(by.className('heroes'));
    private readonly heroesArray: ElementArrayFinder = this.browser.element.all(by.className('hero-name-text'));

    private readonly visibilityValidator: VisibilityValidator = new VisibilityValidator(this.browser);

    public async clickHeroesOverviewNavigationButton(): Promise<void> {
        await this.heroesOverviewButton.click()
    }

    public async clickDashboardNavigationButton(): Promise<void> {
        await this.dashboardNavigationButton.click()
    }
    
    public async throwErrorIfHeroesComponentIsNotVisible(): Promise<void> {
        await this.visibilityValidator.throwErrorIfElementIsNotVisible(this.heroesComponent, 'Heroes component');
    }
}
