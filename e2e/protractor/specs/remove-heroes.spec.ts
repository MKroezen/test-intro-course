import {DashboardPage} from '../web-components/dashboard.page';
import {browser} from 'protractor';
import {HeroesOverviewPage} from '../web-components/heroes-overview.page';

const dashboardPage: DashboardPage = new DashboardPage(browser);
const heroesOverviewPage: HeroesOverviewPage = new HeroesOverviewPage(browser);

describe('As a user I want to delete heroes', () => {
    it('When I navigate to the heroes overview page', async () => {
        await dashboardPage.clickHeroesOverviewNavigationButton();
    })
});
