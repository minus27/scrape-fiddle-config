# scrape-fiddle-config

## Overview
This is a [Tampermonkey](https://tampermonkey.net/) script for Google Chrome that adds a big, ugly, orange "SCRAPE CONFIG" button to [Fastly Fiddle](https://fiddle.fastlydemo.net/) to capture its configuration components.
Upon clicking said button, the Fiddle's configuration is captured, formatted, and dumped into a new page in your browser.

This script should work in [Greasemonkey](https://www.greasespot.net/), which is essentially Tampermonkey for other browsers, but it has not been tested, i.e. your mileage may vary.

## Installation
1. If it is not installed already, install the [Tampermonkey Addon to Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)
2. Go to the [JavaScript file for this project](https://github.com/minus27/scrape-fiddle-config/blob/master/Add%20Scrape%20Config%20to%20Fiddle.user.js)
3. Click on the **Raw** button
4. If Tampermonkey is installed and enabled, it will recognize the UserScript and ask you to (re-)install it
5. Follow Tampermonkey's instructions...
## Screen Captures
A Fastly Fiddle:

![Fiddle Screen Capture](https://raw.githubusercontent.com/minus27/scrape-fiddle-config/master/fiddleScreenCapture.jpg)

The corresponding script output:

![Output Screen Capture](https://raw.githubusercontent.com/minus27/scrape-fiddle-config/master/outputScreenCapture.jpg)
