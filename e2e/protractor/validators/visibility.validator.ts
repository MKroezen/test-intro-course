import {ElementFinder, ProtractorBrowser} from 'protractor';

export class VisibilityValidator {
    public constructor(private readonly browser: ProtractorBrowser) {
    }

    public async throwErrorIfElementIsNotVisible(element: ElementFinder, elementName: string) {
        this.browser.waitForAngular();

        if(!await element.isDisplayed()) {
            throw new Error(`Expected element ${elementName} to be visible`);
        }
    }
}
