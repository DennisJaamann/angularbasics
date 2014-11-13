# Angular basics workshop


## Prerequisites

1. (Windows only) Install Git - http://git-scm.com/downloads

    a. Make sure git is also set on your path so you can access it from a command line, or use git bash

2. (Optional) install sourcetree - http://sourcetreeapp.com/
3. Install NodeJs - http://nodejs.org/

## Configure NodeJS

### Own your own modules (OSX only)

This step is needed since NodeJS is installed on the super user's account (admin).
By doing this you will not have to prepend every node or npm command with the sudo keyphrase.

Open a terminal and type the following commands:

<code>
sudo chown -R $USER ~/.npm<br/>
sudo chown -R $USER /usr/local/lib/node_modules
</code>

### Update npm (OSX)

Open a terminal and run the following command:

<code>
npm install -g npm
</code>

### Update npm (Windows)

Open a cmd and navigate to the installation folder

<code>
cd C:\Program Files (x86)\nodejs<br/>
npm install -g npm
</code>

### Install necessary npm packages globally

To be able to use these tools, we need to install them in the NodeJS global namespace

Open a cmd or terminal and execute the following command:

<code>npm install -g grunt-cli karma-cli bower</code>

## Getting started

### Clone the git repo

Open up a cmd or use sourcetree to clone the repository

<code>git clone https://github.com/DennisJaamann/angularbasics.git</code>

### Initialize node modules needed by the project

Open up a cmd or terminal and navigate to your project root

Run following command:

<code>npm install</code>

### Install missing npm packages

This step is needed due to an error in the template (archetype) used to generate the project.

Open up a cmd or terminal and navigate to your project root

Run following command:

<code>npm install imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-pngquant</code>

### Bower (Optional)

In some environments, typically behind a proxy the bower install step might fail.
This also fails mostly on windows systems.

1. At the root of your project, create a folder

<code>
mkdir bower_components
</code>

2. Set the proxy

<code>
</code>

3. Run bower install to install components

Open a cmd or terminal and type the following command where your bower.json file is located:

<code>
bower install
</code>

### Start grunt server

The project itself can be run locally. All files are served on a NodeJS instance

To run the project, open a cmd or terminal and run the following command where your Gruntfile.js is located:

<code>
grunt serve
</code>