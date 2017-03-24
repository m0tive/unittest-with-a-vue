import { Selector } from 'testcafe';

fixture `Index page`
    .page('http://localhost:8080');

test('Check logo alt text', async t=> {
    const logo = await Selector('#app img');
    await t
        .expect(logo.exists).ok()
        .expect(logo.getAttribute("alt")).notEql(undefined, "logo alt text is empty");
});

