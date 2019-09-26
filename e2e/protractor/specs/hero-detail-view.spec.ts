import {DashboardPage} from '../web-components/dashboard.page';
import {browser} from 'protractor';
import {HeroesOverviewPage} from '../web-components/heroes-overview.page';
import {HeroDetailPage} from '../web-components/hero-detail.page';

const dashboardPage: DashboardPage = new DashboardPage(browser);
const heroesOverviewPage: HeroesOverviewPage = new HeroesOverviewPage(browser);
const heroDetailPage: HeroDetailPage = new HeroDetailPage(browser);

describe('As a user I want to see the details of my hero', function () {
    it('When I am on the dashboard page', async () => {
        await browser.get(browser.baseUrl);
    });
    
    it('And I click one of the top heroes', async() => {
        await dashboardPage.searchAndClickOnTopHero('Bombasto');
    });
    
    it('Then I should see the details of that hero', async() => {
        
    });
    
    it('When I am on the heroes overview page', async() => {
        
    });

    it('And select on of the heroes', async() => {

    });

    it('Then I should see the details of that hero', async() => {

    });
});
