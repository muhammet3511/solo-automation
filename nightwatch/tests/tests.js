const functions = require('../test_data/functions')
const selectors = require('../test_data/selectors')
const data = require('../test_data/test_data')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },

    after: browser => {
        browser.end()
    },
    // just changed data to test more range.
    'Do we get the correct results after submitting even and odd numbers': browser => {
        browser
        .waitForElementVisible(selectors.evensAndOddsBoxs.inputLine, 5000)
        .setValue(selectors.evensAndOddsBoxs.inputLine, data.goodData.evenOddBox.searhbar2)
        .click(selectors.evensAndOddsBoxs.button)
        .pause(200)
        browser.expect.element(selectors.evensAndOddsBoxs.evens).text.to.equal(data.goodData.evenOddBox.evenresult2)
        browser.expect.element(selectors.evensAndOddsBoxs.Odds).text.to.equal(data.goodData.evenOddBox.oddresult2)

        
    }

    }


