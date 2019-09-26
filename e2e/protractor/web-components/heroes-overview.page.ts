import {by, ElementArrayFinder, ElementFinder} from 'protractor';
import {Page} from './page';
import {VisibilityValidator} from '../validators/visibility.validator';
import {StringValidator} from '../validators/string.validator';
import {NumberValidator} from '../validators/number.validator';

export class HeroesOverviewPage extends Page {
    private readonly heroesComponent: ElementFinder = this.browser.element(by.tagName('app-heroes'));
    private readonly heroesArray: ElementArrayFinder = this.browser.element.all(by.className('hero-name-text'));
    private readonly heroInputString: ElementFinder = this.browser.element(by.id('hero-input-string'));
    private readonly addNewHeroButton: ElementFinder = this.browser.element(by.id('add-hero-button'));

    private readonly visibilityValidator: VisibilityValidator = new VisibilityValidator(this.browser);
    private readonly numberValidator: NumberValidator = new NumberValidator();
    private readonly stringValidator: StringValidator = new StringValidator();

    public async throwErrorIfHeroesComponentIsNotVisible(): Promise<void> {
        await this.visibilityValidator.throwErrorIfElementIsNotVisible(this.heroesComponent, 'Heroes component');
    }

    public async throwErrorIfBrowserUrlDoesNotContainHeroes(): Promise<void> {
        await this.stringValidator.throwErrorIFString1DoesNotContainString2(await this.browser.getCurrentUrl(), '/heroes')
    }

    public async addNewHEro(heroName: string): Promise<void> {
        await this.heroInputString.sendKeys(heroName);
        await this.clickAddNewHeroButton();
        await this.browser.waitForAngular();
    }

    public async clickAddNewHeroButton(): Promise<void> {
        await this.addNewHeroButton.click();
    }

    public async throwErrorIfAmountOfHeroesInListDidNotIncrease(oldAmountOfHeroes: number): Promise<void> {
        this.numberValidator.throwErrorIfNumber1IsGreaterAsNumber2(await this.heroesArray.count(), oldAmountOfHeroes);
    }

    public async throwErrorIfHeroIsNotInListOfHeroes(searchedHero: string): Promise<void> {
        for (const hero of await this.heroesArray) {
            if (this.stringValidator.doesString1ContainString2(await hero.getText(), searchedHero)) {
                return;
            }
        }

        throw new Error(`The Hero searched for ${searchedHero} cannot be found in the list of heroes`)
    }
    
    public async clickOnHeroInList(heroToClick: string): Promise<void> {
        for (const hero of await this.heroesArray) {
            if (this.stringValidator.doesString1ContainString2(await hero.getText(), heroToClick)) {
                await hero.click();

                break;
            }
        }
    }
}
