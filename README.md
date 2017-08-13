# managerApp-ReactNative
This project is part of the Udemy course (https://www.udemy.com/the-complete-react-native-and-redux-course/). This project is a good example on how to integrate React Native, Redux and Firebase to build cross-platform mobile apps both for iOS and Android.

## Technologies
It is an serverless project built upon `React Native` and `Redux`, however it uses `Firebase` as a database and authentication.

##Installation

You should have installed Android studio and a Firebase account
Create a FirebaseConfig.js file with the Firebase config variables, like so:
export default const config = {
  apiKey: 'xxxxxxx',
  authDomain: 'xxxx',
  databaseURL: 'xxxxxx',
  projectId: 'xxxx',
  storageBucket: '',
  messagingSenderId: 'xxxx'
};

`npm install`

Start the packager

`react-native start`

Build the app

`react-native run-android`




## Built With

* [Atom](https://atom.io/) - Text editor

## Authors

* [Josep Otal](http://github.com/josepotal)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [Udemy]()
* [Stephen Grider](https://github.com/stephengrider)
