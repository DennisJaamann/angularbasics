#angularbasics


## Prerequisites
1. Install Git - http://git-scm.com/downloads
    a. Make sure git is also set on your path so you can access it from a command line
2. (Optional) install sourcetree - http://sourcetreeapp.com/
3. Install NodeJs - http://nodejs.org/
4. Configure NodeJS

Own your own modules (OSX only)
-------------------------------
This step is needed since NodeJS is installed on the super user's account (admin).
By doing this you will not have to prepend every node or npm command with the sudo keyphrase.

Open a terminal
<code>
sudo chown -R $USER ~/.npm
sudo chown -R $USER /usr/local/lib/node_modules
</code>

Update npm (OSX)
----------------
Open a terminal
<code>npm install -g npm</code>

Update npm (Windows)
--------------------
Open a cmd
navigate to the installation folder
<code>
cd C:\Program Files (x86)\nodejs
npm install -g npm
</code>

Install necessary npm packages globally
---------------------------------------
<code>npm install -g grunt-cli karma-cli bower</code>

##Checking out the code

Clone the git repo
------------------
Open up a cmd or use sourcetree to clone the repository

<code>git clone https://github.com/DennisJaamann/angularbasics.git</code>

##Using the project

Initialize node modules needed by the project
---------------------------------------------
Open up a cmd or terminal and navigate to you project root

Run following command:
<code>npm install</code>

Install missing npm packages
----------------------------
Open up a cmd or terminal and navigate to you project root

Run following command:
<code>npm install imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-pngquant</code>

