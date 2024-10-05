# Bynder Star Wars

Available here : https://bynder-star-wars.netlify.app

<img width="1728" alt="Capture d’écran 2024-10-05 à 15 41 38" src="https://github.com/user-attachments/assets/c3658b1c-9349-4695-9a97-97d5769d38c3">

Is an app you can see some characters from Star Wars.

You can sort the characters and filter them with the search bar.

You can perform a click on a character to get to his detail page.

In the detail page you can see the resident from the planet the character is and
click it to navigate to the detail page from this resident.

Enjoy !

# The project

To run the project in developement you have to run

```bash
npm install
```
The first time

and then 

```bash
npm run dev
```

# The tests


To run the test you have to run

```bash
npm run test
```

Here I use Vitest to simulate the DOM because it works more easily with Vite than Jest.

To run the test coverages

```bash
npm run coverage
```

You will see a folder coverage appearing in the root bynder-star-wars folder.


# The mocks


In the .env.development file you can activate or deactivate MSW (Mock Service Worker) by changing :

```bash
VITE_USE_MOCKS_SERVICE_WORKER=false/true
```
If you decide to activate MSW the API calls made to swapi will be mocked, it means that you can be offline you'll still get data that are stored in the project itself (locally only).
MSW should be used only during tests or development phase, it doesn't make sense to have it activated in production.
You can see that when you reach the URL above MSW is activated in the console, it's because when I build the app, the build provides the mockServiceWorker.js file it shouldn't be the case for production, but here is ok for this small demo app.

