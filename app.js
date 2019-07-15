const { openBrowser, goto, click, write, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("https://www.halowaypoint.com/en-us");
        await click("Sign In");
        await write(process.env.XBOX_LOGIN_EMAIL);
        await click("Next");
        await write(process.env.XBOX_LOGIN_PASSWORD);
        await click("Sign In");
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
