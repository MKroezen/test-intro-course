import {by, element, ElementArrayFinder, ElementFinder} from 'protractor';
import {StringValidator} from '../validators/string.validator';
import {Page} from './page';
import {NumberValidator} from '../validators/number.validator';

export class DashboardPage extends Page {
    private readonly dashboardNavigationButton: ElementFinder = this.browser.element(by.id('dashboard-page-nav-button'));
    private readonly heroesOverviewButton: ElementFinder = this.browser.element(by.id('heroes-overview-nav-button'));
    private readonly titleText: ElementFinder = this.browser.element(by.id('dashboard-title'));
    private readonly heroes: ElementArrayFinder = this.browser.element.all(by.className('hero'));

    private readonly stringValidator: StringValidator = new StringValidator();
    private readonly countValidator: NumberValidator = new NumberValidator();

    public async clickHeroesOverviewNavigationButton(): Promise<void> {
        await this.heroesOverviewButton.click()
    }
    public async clickDashboardNavigationButton(): Promise<void> {
        await this.dashboardNavigationButton.click()
    }

    public async failIfDashboardTitleDoesNotMatchString(string: string): Promise<void> {
        await this.stringValidator.validateEquality(await this.getTitleText(), string)
    }

    private async getTitleText(): Promise<string> {
        return await this.titleText.getText();
    }

    public async failIfExactNumberOfHeroesAreNotBeingDisplayed(number: number): Promise<void> {
        await this.countValidator.validateNumbersAreEqual(number, await this.heroes.count());
    }
}
