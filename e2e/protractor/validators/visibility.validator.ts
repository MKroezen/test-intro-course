import {ElementFinder, ExpectedConditions, ProtractorBrowser} from 'protractor';

export class VisibilityValidator {
    public constructor(private readonly browser: ProtractorBrowser) {
    }

    public async throwErrorIfElementIsNotVisible(element: ElementFinder, elementName: string) {
        this.browser.wait(ExpectedConditions.visibilityOf(element), 2000);

        if(!element.isDisplayed()) {
            throw new Error(`Expected element ${elementName} to be visible`);
        }
    }
}
