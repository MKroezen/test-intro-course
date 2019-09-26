import {by, element, ElementArrayFinder, ElementFinder} from 'protractor';
import {StringValidator} from '../validators/string.validator';
import {Page} from './page';
import {NumberValidator} from '../validators/number.validator';
import {VisibilityValidator} from '../validators/visibility.validator';

export class DashboardPage extends Page {
    private readonly dashboardNavigationButton: ElementFinder = this.browser.element(by.id('dashboard-page-nav-button'));
    private readonly heroesOverviewButton: ElementFinder = this.browser.element(by.id('heroes-overview-nav-button'));
    private readonly titleText: ElementFinder = this.browser.element(by.id('dashboard-title'));
    private readonly topHeroes: ElementArrayFinder = this.browser.element.all(by.className('top-heroes'));

    private readonly messageComponent: ElementFinder = this.browser.element(by.tagName('app-messages'));
    private readonly dashboardComponent: ElementFinder = this.browser.element(by.tagName('app-dashboard'));

    private readonly stringValidator: StringValidator = new StringValidator();
    private readonly countValidator: NumberValidator = new NumberValidator();
    private readonly visibilityValidator: VisibilityValidator = new VisibilityValidator(this.browser);

    public async clickHeroesOverviewNavigationButton(): Promise<void> {
        await this.heroesOverviewButton.click()
    }

    public async searchAndClickOnTopHero(heroSearched: string): Promise<void> {
        for (const hero of await this.topHeroes) {
            if (this.stringValidator.isEqual(await hero.getText(), heroSearched)) {
                console.log(`Hero ${await hero.getText()} found we should do something`, await hero.getText());
            }
        }
    }

    public async failIfDashboardTitleDoesNotMatchString(string: string): Promise<void> {
        await this.stringValidator.throwErrorIfStringsAreNotEqual(await this.titleText.getText(), string)
    }

    public async failIfExactNumberOfHeroesAreNotBeingDisplayed(number: number): Promise<void> {
        await this.countValidator.validateNumbersAreEqual(number, await this.topHeroes.count());
    }

    public async failIfMessageComponentIsNotVisible(): Promise<void> {
        await this.visibilityValidator.throwErrorIfElementIsNotVisible(this.messageComponent, 'Message component');
    }

    public async failIfDashboardComponentIsNotVisible(): Promise<void> {
        await this.visibilityValidator.throwErrorIfElementIsNotVisible(this.dashboardComponent, 'Dashboard component');
    }
}
