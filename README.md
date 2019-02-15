# scrape-fiddle-config

## Overview
This is a [Tampermonkey](https://tampermonkey.net/) script for Google Chrome that adds a big, ugly, orange "SCRAPE CONFIG" button to [Fastly Fiddle](https://fiddle.fastlydemo.net/) to document its configuration components.
Upon clicking said button, the Fiddle's ID is captured and then snet over to a [Glitch project](https://fastly-fiddle-formatter.glitch.me/), where the Fiddle's config is captured, formatted, and displayed in a browser page.

This script should work in [Greasemonkey](https://www.greasespot.net/), which is essentially Tampermonkey for other browsers, but it has not been tested, i.e. your mileage may vary.

---

**Note: Never run a Tampermonkey/Greasemonkey script (including mine), or otherwise paste JavaScript code into your browser's address/location bar or Console, without first seeing what it is doing**

---

## Installation
1. If it is not installed already, install the [Tampermonkey Addon to Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)
2. Go to the [JavaScript file for this project](https://github.com/minus27/scrape-fiddle-config/blob/master/Add%20Scrape%20Config%20to%20Fiddle.user.js)
3. Click on the **Raw** button
4. If Tampermonkey is installed and enabled, it will recognize the UserScript and ask you to (re-)install it
5. Follow Tampermonkey's instructions...
## Screen Capture
[Fastly Fiddle f01adda8](https://fiddle.fastlydemo.net/fiddle/f01adda8):

![Fiddle Screen Capture](https://raw.githubusercontent.com/minus27/scrape-fiddle-config/master/fiddleScreenCapture.jpg)

To see the corresponding script output from the Glitch project, click [here](https://fastly-fiddle-formatter.glitch.me/?f01adda8).
