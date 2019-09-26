import {browser} from 'protractor';
import {DashboardPage} from '../web-components/dashboard.page';
import {HeroesOverviewPage} from '../web-components/heroes-overview.page';

const dashboardPage: DashboardPage = new DashboardPage(browser);
const heroesOverviewPage: HeroesOverviewPage = new HeroesOverviewPage(browser);

describe('As a user I want to be able to add a new hero', () => {

    it('When I visit the application', async () => {
        browser.get(browser.baseUrl);
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
});
