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
By doing this you will not have to prepend every node or npm comment with the sudo keyphrase.

Open a terminal
<code>
sudo chown -R $USER ~/.npm
sudo chown -R $USER /usr/local/lib/node_modules
</code>

Update npm
----------
Open a cmd (Windows) or terminal(OSX)
<code>npm install -g npm@latest</code>

Install missing npm packages
----------------------------
In root of your project run following command:

<code>npm install imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-pngquant</code>

