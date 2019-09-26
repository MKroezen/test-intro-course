import {DashboardPage} from '../web-components/dashboard.page';
import {browser} from 'protractor';
import {HeroesOverviewPage} from '../web-components/heroes-overview.page';
import {HeroDetailPage} from '../web-components/hero-detail.page';

const dashboardPage: DashboardPage = new DashboardPage(browser);
const heroesOverviewPage: HeroesOverviewPage = new HeroesOverviewPage(browser);
const heroDetailPage: HeroDetailPage = new HeroDetailPage(browser);

describe('As a user I want to see and edit the details of my hero', function () {
    it('When I am on the dashboard page', async () => {
        await browser.get('http://localhost:4200');
    });

    it('And I click one of the top heroes', async () => {
        await dashboardPage.clickOnTopHero('Bombasto');
    });

    it('Then I should see the details page', async () => {
        await heroDetailPage.throwErrorIfHeroesDetailComponentDoesNotExist();
    });

    it('When I am on the heroes overview page', async () => {
        await browser.get('http://localhost:4200/heroes');
    });

    it('And click on one of the heroes', async () => {
        await heroesOverviewPage.clickOnHeroInList('Bombasto');
    });

    it('Then I should see the details of that hero', async () => {
        await heroDetailPage.throwErrorIfHeroesDetailComponentDoesNotExist();
        await heroDetailPage.throwErrorIfTheNameOfTheHeroDoesNotMatch('Bombasto');
    });
});
