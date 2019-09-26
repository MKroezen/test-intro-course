import {Page} from './page';
import {by, ElementFinder} from 'protractor';
import {VisibilityValidator} from '../validators/visibility.validator';
import {StringValidator} from '../validators/string.validator';

export class HeroDetailPage extends Page {
    private readonly dashboardNavigationButton: ElementFinder = this.browser.element(by.id('dashboard-page-nav-button'));
    private readonly heroesOverviewButton: ElementFinder = this.browser.element(by.id('heroes-overview-nav-button'));
    private readonly heroDetailsComponent: ElementFinder = this.browser.element(by.tagName('app-hero-detail'));
    private readonly heroNameInputText: string = 'Mr Bombastic! I am fantastic';

    private readonly visibilityValidator: VisibilityValidator = new VisibilityValidator(this.browser);
    private readonly stringValidator: StringValidator = new StringValidator();

    public async throwErrorIfHeroesDetailComponentDoesNotExist(): Promise<void> {
        await this.visibilityValidator.throwErrorIfElementIsNotVisible(this.heroDetailsComponent, 'Heroes detail component');
    }

    public async throwErrorIfTheNameOfTheHeroDoesNotMatch(heroName: string): Promise<void> {
        this.stringValidator.throwErrorIfStringsAreNotEqual(this.heroNameInputText, heroName);
    }
}
