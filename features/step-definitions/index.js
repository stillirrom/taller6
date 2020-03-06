const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

Given('I go to Ghost login screen', async() => {
    console.log("'I go to Ghost login screen'" + Date.now());
    await browser.url('#/signin');
});

Given(/^I fill with (.*) and (.*)$/, async(email, password) => {
    var mailInput = await $('#ember8');
    await mailInput.click();
    await mailInput.keys(email);

    var passwordInput = await $('#ember10');
    await passwordInput.click();
    await passwordInput.keys(password)
});

When('I try to login', async() => {
    var signInButton = await $('#ember12');
    await signInButton.click();
});

Given('I login', async() => {
    var signInButton = await $('#ember12');
    await signInButton.click();
});

Then('I expect to see {string}', async error => {
    await browser.$('.main-error').then((element) => {
        element.getText().then((alertText) => {
            expect(alertText).to.include(error);
        });
    });
});

Then('The button text should be {string}', async buttonText => {
    await $('#ember12').then((signInButton) => {
        signInButton.getText().then((text) => {
            expect(text).to.include(buttonText);
        })
    });
});

Then('The title {string} should be displayed', async title => {
    await $('.gh-nav-menu-details-blog').then((pageTitle) => {
        pageTitle.getText().then((text) => {
            expect(text).to.include(title);
        })
    });
});

Then('The url should be {string}', async url => {
    await browser.getUrl().then((actualUrl) => {
        expect(actualUrl).to.include(url);
    });
})

When('I click the option {string}', async option => {
    switch (option) {
        case 'View site':
            await $('#ember774').then((button) => {
                button.click();
            });
    }
});