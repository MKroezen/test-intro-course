import {browser} from 'protractor';
import {DashboardPage} from '../web-components/dashboard.page';

const dashboardPage: DashboardPage = new DashboardPage(browser);

describe('As a user I want a working dashboard page', () => {

    it('When I visit the dashboard page', async () => {
        await browser.get(browser.baseUrl);
    });

    it('Then I should see the dashboard title and top heroes', async () => {
        await dashboardPage.failIfDashboardTitleDoesNotMatchString('Top Heroes');
        await dashboardPage.failIfExactNumberOfHeroesAreNotBeingDisplayed(4);
    });

    it('When I visit the dashboard page', async () => {
        await browser.get(browser.baseUrl);
    });

    it('Then I should the dashboard components', async () => {
        await dashboardPage.failIfMessageComponentIsNotVisible();
        await dashboardPage.failIfDashboardComponentIsNotVisible();
    });
    
});
