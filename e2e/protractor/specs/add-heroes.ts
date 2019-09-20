import {browser, element, by, ElementFinder, ElementArrayFinder} from 'protractor';
import * as chai from 'chai'
const expect = chai.expect;

describe('protractor with typescript typings', () => {
    beforeEach(() => {
        browser.get('http://www.angularjs.org');
    });

    it('should greet the named user', async () => {
        await element(by.model('yourName')).sendKeys('Julie');
        let greeting = await element(by.binding('yourName'));
        browser.sleep(1000);
        expect(await greeting.getText()).equal('Hello Julie!');
        await greeting.getText().then((text) => {
            console.log(text);
        });
        if (await greeting.getText() !== 'Hello max') {
            throw new Error('lolololol');
        }
    });

    it('should list todos', async () => {
        let todoList: ElementFinder = await element.all(by.repeater('todo in todoList.todos')) as unknown as ElementFinder;
        expect(await todoList.count()).equal(2);
        expect(await todoList.get(1).getText()).equal('build an angular app');
    });
});
