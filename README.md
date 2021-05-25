# odoo-dev

## Install

List of pre-requisites

* Docker installation : https://docs.docker.com/engine/install/
* Nodejs installation : https://nodejs.org/en/download/
* NGinx (optional) : https://www.nginx.com/resources/wiki/start/topics/tutorials/install/


```
npm install -g odoo-dev
```

### Start as a daemon

```
npm install -g pm2
pm2 start odoo-dev
pm2 startup
pm2 save 
```

This will install PM2 library, and attach `odoo-dev` library on it. If you want to start or stop it see the PM2 commands list.

https://pm2.keymetrics.io/docs/usage/process-management/


### Quick start

```
odoo-dev create default --path=~/odoo-dev/default --host=odoo.localhost --repo=[your-git]
odoo-dev mount default --version=12 --branch=master --key=master
odoo-dev list
```

## Cli commands

### Handle the server

```
odoo-dev start --port=1337
odoo-dev stop
```

* start : starts the web server on specified port (1337 by default)
* stop : stops the server


### Initialize a workspace

```
odoo-dev create  [name] --path="/home/dev/odoo" --host=[domain name] --repo=[https://github.com/...]
```

Options :

* name : The workspace name, an workspace is about a list of addons
* path : The workspace root folder, used to centralize assets and store data
* host : used to redirect http requests to the workspace (by default `name`.localhost)
* repo : Defines the main git repository to be cloned

### List workspaces

```
odoo-dev list
```

Shows the list of workspaces, and for each the list mounted end-points

### Mount a workspace

```
odoo-dev mount [name] --version=12 --branch=master --key=UNIQUE-ID
```

Options :

* name : the workspace name to mount
* version : odoo version to use
* branch : the branch to checkout from registered repository
* key : unique key to identify your mounting point

Note : the key will be used as subdomain for mapping http requests

### Managing a mounting point

```
odoo-dev status [name].[UNIQUE-ID]
odoo-dev start [name].[UNIQUE-ID]
odoo-dev restart [name].[UNIQUE-ID]
odoo-dev stop [name].[UNIQUE-ID]
odoo-dev kill [name].[UNIQUE-ID]
```

### Unmount a workspace

```
odoo-dev destroy [name].[UNIQUE-ID]
```

Unmounting a workspace entry will result in destroying it and its files. The deletion is not recuperable. You can instead
stop it if you need to free RAM/CPU ressources. This action will require a confirmation unless you pass the '-f' flag.





