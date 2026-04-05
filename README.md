# Hide Amazon Brands

Hide Amazon Brands is a browser extension that removes products from specified brands while browsing Amazon. It is designed to filter out private-label brands or any other brands the user prefers not to see.

## Links

- **Chrome Web Store**: https://chromewebstore.google.com/detail/hide-amazon-brands/pmolajpcjkkfebphccejhohaodimhdno
- **Firefox Add-ons**: https://addons.mozilla.org/en-US/firefox/addon/hide-amazon-brands/

## Features

- **Brand Filtering**: Automatically hides products from a predefined list of Amazon-owned brands.
- **Customizable Blocklist**: Users can add or remove brand names using the extension popup.
- **Enable/Disable Toggle**: Quickly turn the blocking functionality on or off.
- **UI Themes**: Includes both light and dark modes for the configuration popup.
- **Broad Compatibility**: Supports multiple international Amazon domains.

## Installation

### Chrome

1. Clone or download this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** using the toggle in the top-right corner.
4. Click **Load unpacked** and select the directory containing the extension files.

### Firefox

1. Clone or download this repository to your local machine.
2. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
3. Click **Load Temporary Add-on...**.
4. Select any file within the extension directory (e.g., `manifest.json`).

## Usage

1. Navigate to a supported Amazon domain.
2. Click the extension icon in the toolbar to open the settings.
3. List the brands you wish to hide in the text area, with each brand on a new line.
4. Click **Save** to apply the changes. The current tab will reload to update the results.
5. Use the **👁️/🚫** button to toggle the filter and the **☀️/🌙** button to change the popup theme.

## Supported Domains

The extension works on the following domains:
- amazon.com
- smile.amazon.com
- amazon.co.uk
- amazon.ca
- amazon.de
- amazon.fr
- amazon.in
- amazon.it
- amazon.es

## Default Blocked Brands

By default, the following brands are included:
- Amazon Basics
- Solimo
- Rivet
- Happy Belly
- Mama Bear
- Goodthreads
- Amazon Essentials
