Ionic app for KL Parking app.

#### API

[Heroku](http://kl-parking-spots.herokuapp.com/)

#### Dependencies

'Contact Developer' link inside the sidemenu is powered by [inAppBrowser cordova plugin](http://cordova.apache.org/docs/en/3.0.0/cordova_inappbrowser_inappbrowser.md.html).

To install it, run this command inside the Terminal (make sure you are inside the project path):

`cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git`

Example HTML:

`<a class="item" href="#" onclick="window.open('http://www.twitter.com/YOUR_USERNAME', '_system', 'location=yes'); return false;">Open Twitter</a>`

*Note*: No need to include `<script></script>` tag for the inAppBrowser inside the HTML file.

Further tutorial can be found [here](https://blog.nraboy.com/2014/07/launch-external-urls-ionicframework/).

#### To Do List

- ~~Add 'pull to refresh' feature OR 'refresh' button~~ DONE
- Add [Moment.js](http://momentjs.com/) so that the 'Last update' datetime be like '2 minutes ago'

#### App Icon

Icon by [Pavel N.](https://thenounproject.com/term/parking/132839)
