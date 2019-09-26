import {Page} from './page';
import {by, ElementFinder} from 'protractor';
import {expect} from 'chai';
import {VisibilityValidator} from '../validators/visibility.validator';

export class HeroDetailPage extends Page {
    private readonly dashboardNavigationButton: ElementFinder = this.browser.element(by.id('dashboard-page-nav-button'));
    private readonly heroesOverviewButton: ElementFinder = this.browser.element(by.id('heroes-overview-nav-button'));
    private readonly heroDetailsComponent: ElementFinder = this.browser.element(by.tag('app-hero-detail'));

    private readonly visibilityValidator: VisibilityValidator = new VisibilityValidator(this.browser);

    public async clickHeroesOverviewNavigationButton(): Promise<void> {
        await this.heroesOverviewButton.click()
    }
    public async clickDashboardNavigationButton(): Promise<void> {
        await this.dashboardNavigationButton.click()
    }

    public async throwErrorIfHeroesDetailComponentDoesNotExist(): Promise<void> {
        await this.visibilityValidator.throwErrorIfElementIsNotVisible(this.heroDetailsComponent, 'Heroes detail component');
    }
}
