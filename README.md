## *bulletproofology, n. The study of bulletproof @font-face syntaxes*

try it out online at [bulletproofology.org](http://bulletproofology.org)

### bulletproof? let's prove it.

Wouldn't it be nice to actually **see** how different recommended @font-face syntaxes work?

When I was doing the research for a recent [blog post](https://hacks.mozilla.org/2013/03/fantastic-front-end-performance-part-3-big-performance-wins-by-optimizing-fonts-a-node-js-holiday-season-part-8/) on fonty stuff, I got pretty annoyed that there wasn't a good place to compare different generations of 'bulletproof' syntax--not even screenshots.

So I built this little express app, which serves up different syntaxes at different endpoints.

You can see screenshots on the main page, or you can fire up some VMs and try it yourself, or you can use a cross-browser screenshotting service to do it for you all automated-like.

**Have an even better, bulletproofier syntax to add? Pull requests welcome.**

### how to use?

    $ npm install bulletproofology
    $ npm start

Note: by default, it runs on localhost:8888. You can specify your hostname and port like this:

    $ PORT=8765 HOSTNAME=partybus.local npm start

### how to hack?

Apache 2 licensed. knock yourself out.

### details, details

I'm using [connect-fonts](https://github.com/shane-tomlinson/connect-fonts) to actually serve the fonts & add CORS headers when needed.

The actual @font-face CSS varies from file to file and is pasted into the file itself, so that screenshots don't accidentally get mixed up.

#### brought to you by

the mysterious el hersho. last known hyperspace coordinates: http://6a68.net.
