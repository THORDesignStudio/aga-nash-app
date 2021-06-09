# AGA Nash App

This app was developed for the American Gastroenterological Association in order to help general practitioners
to determine the risk level of their patients for Non-Alcholic Fatty Liver Disease (NASH).

## Installation

Use the package manager [yarn](https://yarnpkg.com/) to install aga-nash-app.

```bash
yarn install
```

In order to run the app, you'll need Expo cli installed [expo](https://docs.expo.io/workflow/expo-cli/)

```bash
yarn install expo-cli
```

## Usage

When you run the app locally ( on Mac ), you can simply run:

```bash
expo start
```

This will start a local server where you can then start up an ios simulator to run the app.

If you would like to run it on Android, then using the same server, you can run an Android emulator using Android Studio. I've found this rather difficult however, and would recommend simply using the QR code that shows up on the local server that expo go has to then use the expo go app on your android device and run the app on your android device.

## Notes

We've chosen to utlize the Styled Components package for our styling needs. This provides more dynamic styling than what you would get with the out of the box stylesheet provided by react native. There are a few limitations to take not of however:

1. Not all css options are available that you're use to:
  An example of this is with the `borderStyle` style. Instead of having the 9 different options that you would with a web app, you only have 3. If you're not sure what the options are for certain styling, then I recommend pulling up the [react native docs](https://reactnative.dev/docs/style) or using the style sheet from react native, and try checking out what options are available for that style by hitting `ctrl-c`.

2. More on styles:
  There are some options you'll see in react native that you won't see in web development. An example of this is `marginHorizontal` and `marginVertical`. Again, recommend using the [react native docs](https://reactnative.dev/docs/style).


## License
[MIT](https://choosealicense.com/licenses/mit/)