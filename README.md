# AGA Nash App

This app was developed for the American Gastroenterological Association in order to help general practitioners determine the risk level of their patients for Non-Alcoholic Fatty Liver Disease (NASH).

## Installation

Use the package manager [yarn](https://yarnpkg.com/) to install aga-nash-app.

```bash
yarn install
```

In order to run the app, you'll need [expo cli](https://docs.expo.io/workflow/expo-cli/) installed:

```bash
npm install -g expo-cli
```

## Usage

When you run the app locally ( on Mac ), you can simply run:

```bash
expo start
```

This will start a local server, running at port somewhere around `localhost:19000` that acts as a dashboard for running simulators and tunneling to native mobile devices. 

From that dashboard, you can start and control any simulated device or point your smartphone at a QR code to view apps on your phone. To get your app running natively on your phone, you will need to use the Expo mobile app ([iOS](https://apps.apple.com/us/app/expo-go/id982107779) | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US&gl=US))

If you would like to run the NASH app on Android, in practice the simulated device setup works poorly and would recommend using the QR code htat shows up in the dashboard and Expo Go app on Android. 

## Notes

We've chosen to utilize the Styled Components package for our styling needs. This provides more dynamic styling than what you would get with the out of the box stylesheet provided by react native. There are a few limitations to take not of however:

### 1. Not all css options are available that you're used to:
  An example of this is with the `borderStyle` style. Instead of having the 9 different options that you would with a web app, you only have 3. If you're not sure what the options are for certain styling, then I recommend pulling up the [react native docs](https://reactnative.dev/docs/style) or using the style sheet from react native, and try checking out what options are available for that style by hitting `ctrl-c`.

### 2. More on styles:
  There are some options you'll see in react native that you won't see in web development. An example of this is `marginHorizontal` and `marginVertical`. Again, recommend using the [react native docs](https://reactnative.dev/docs/style).


## License
[MIT](https://choosealicense.com/licenses/mit/)