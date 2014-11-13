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
navigate to the installation folder
<code>
cd C:\Program Files (x86)\nodejs
npm install -g npm
</code>

Install missing npm packages
----------------------------
In root of your project run following command:

<code>npm install imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-pngquant</code>

