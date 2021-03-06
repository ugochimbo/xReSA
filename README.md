xReSA - Extensible ReSA / ReSA 2.0
====
xReSA is an upgrade of [ReSA](https://github.com/ali1k/resa) - making it an extensible platform. The adds the following functionality/capabilities to ReSA:
- New extensions can be added.
- Extensions are inheritable and thus extensible.
- Extensions contain a parameter and visualization object and a handler to handle parameter updates from the view (a little like angular's '$scope').
- Extensions are selected as a drop down list.
- Extension parameters are automatically displayed on select.
- Extension Visualizations are automatically loaded on select.
- Visualizations are re-usable.
- Visualizations are not limited to specific libraries (such as D3).
- Extensions can define a guarded object to protect its parameters from mass assignment (Visualizations is the default guarded attribute).
- Include location based filtering extension as proof of concept.
- Source code documentation.

### Requirements

Latest Node.js + NPM  
Latest MongoDB  
Bower (get by running "npm install -g bower")

### Installing

1. Install required NodeJS modules:
 - npm install --save
 
2. Install bower dependencies (see bower.json)
 - bower update

3. Configure DBpedia Spotlight endpoint and Twitter API keys:
 - open config.sample.js and fill in the required urls and keys
 - save it as config.js
 

### Running via Vagrant (Recommended)

Assuming you have [vagrant](http://www.vagrantup.com/) installed, you can run ReSA-LodSaFE with few simple commands:  

1. Execute `vagrant up` to init & start vagrant environment
2. Once ready, connect to vagrant box using `vagrant ssh`
3. Change to workdir with `cd /vagrant`
4. (optional) Install ReSA-LodSaFE with `npm install`
5. Run the app with `node app.js`
6. Open vagrant host via 5.5.5.5:5555 in browser and see xReSA running (*see Vagrantfile)

### Running (Without Vagrant)

1. To start NodeJS server:
 - node app.js [port number (default port is 5555)]

2. Run the web browser
 - http://localhost:5555
 
### ReSA Update/Upgrade Notification.
  The following core upgrades were made on ReSA:
 - Express upgraded from 3.x to 4.x
 - Socket.io (client/server) upgraded from 0.9.11 to ~1.2.0
 - nTwitter module (deprecated) replaced with 'twitter-1.1' module.
 - Refactored to use prototypical Inheritance.
 - Replace local spotlight.js file with dbpedia-spotlight module.
 - Implement location based filtering as proof of concept.
 - Source code documentation - see /out directory.