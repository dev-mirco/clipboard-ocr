# Clipboard OCR

This website lets you paste an image from your clipboard then displays the text found on tht image.
This project is just a simple and dirty implementation using tesseract-ocr.

## Running the application

In order for the application to work, the [Tesseract-CLI](https://github.com/tesseract-ocr/tesseract) and a preferred language resource must be installed on the system where the server runs. Also the npm packages must be installed with `npm install`.  
Then you can start the application with `npm start`.

## Use the Website

The website can be accessed via https://localhost:8080/.
Simply hit <kbd>Ctrl</kbd> + <kbd>V</kbd> with an image in the Clipboard and then the found text should appear on the page.

## Problems

I tried to use the Tesseract JS implementation, which would be a lot cleaner than writing directly to standard input of a CLI process, but the CLI was just waaaay faster for me.  
Because of that, the system which runs the application needs to have the tesseract CLI installed. I tried to make this work on Heroku but the CLI somehow didn't work :(
