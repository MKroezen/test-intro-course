import {browser} from 'protractor';
import {DashboardPage} from '../web-components/dashboard.page';

describe('As a user I want a working dashboard page', () => {
    let dashboardPage: DashboardPage;

    beforeEach(() => {
        dashboardPage = new DashboardPage(browser);
    });

    it('When I visit the dashboard page', async () => {
        browser.get(browser.baseUrl);
        browser.sleep(1000);
    });

    it('Then I should see the dashboard page', async () => {
        await dashboardPage.failIfDashboardTitleDoesNotMatchString('Top Heroes');
        await dashboardPage.failIfExactNumberOfHeroesAreNotBeingDisplayed(4)
    });

    it('When I visit the dashboard page', async () => {
        browser.get(browser.baseUrl);
        browser.sleep(1000);
    });

    it('Then I should see the top heroes', async () => {
        await dashboardPage
    })
});
