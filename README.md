angularbasics
=============

Prerquisites
------------
1. Install Git - http://git-scm.com/downloads
2. (Optional) install sourcetree - http://sourcetreeapp.com/
3. Install NodeJs - http://nodejs.org/

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
<code>npm install -g npm</code>

Install npm packages globally
-----------------------------
<code>npm install -g grunt-cli karma-cli bower</code>

Clone the git repo
------------------
<code>git clone https://github.com/DennisJaamann/angularbasics.git</code>

Or use sourcetree to clone the repository

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

