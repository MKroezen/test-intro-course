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
        await dashboardPage.failIfExactNumberOfHeroesAreNotBeingDisplayed(4);
    });

    it('Then I should see the heroes overview page', async () => {
        browser.get(browser.baseUrl);
        browser.sleep(1000);
    });
});
