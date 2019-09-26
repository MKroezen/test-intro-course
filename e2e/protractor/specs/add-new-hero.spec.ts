import {browser} from 'protractor';
import {DashboardPage} from '../web-components/dashboard.page';
import {HeroesOverviewPage} from '../web-components/heroes-overview.page';

const dashboardPage: DashboardPage = new DashboardPage(browser);
const heroesOverviewPage: HeroesOverviewPage = new HeroesOverviewPage(browser);

describe('As a user I want to be able to add a new hero', () => {

    it('When I visit the application', async () => {
        browser.get('http://localhost:4200');
    });

    it(`And I click on the 'heroes' button`, async () => {
        await dashboardPage.failIfDashboardTitleDoesNotMatchString('Top Heroes');
        await dashboardPage.clickHeroesOverviewNavigationButton();
    });

    it('Then I should be able to add a new hero', async () => {
        await heroesOverviewPage.throwErrorIfHeroesComponentIsNotVisible();
        await heroesOverviewPage.throwErrorIfBrowserUrlDoesNotContainHeroes();
    });
    
    it('When I visit the heroes page', async () => {
        await browser.get(browser.baseUrl + '/heroes');
    });
    
    it('And I add a new hero', async () => {
        await heroesOverviewPage.addNewHEro('IamSomeHero');
    });
    
    it('Then that hero should be added to the list of heroes', async () => {
        await heroesOverviewPage.throwErrorIfHeroIsNotInListOfHeroes('IamSomeHero');
    });

    let amountOfHeroes: number;
    
    it('Given there are 10 heroes', async () => {
        amountOfHeroes = 10;
    });

    it('When I visit the heroes overview page', async () => {
        await browser.get('http://localhost:4200/heroes');
    });

    it('And I add a new hero', async () => {
        await heroesOverviewPage.addNewHEro('AnotherHero');
    });

    it('Then the total amount of heroes should be increased', async () => {
        await heroesOverviewPage.throwErrorIfHeroIsNotInListOfHeroes('AnotherHero');
        await heroesOverviewPage.throwErrorIfAmountOfHeroesInListDidNotIncrease(amountOfHeroes);
    });
});
