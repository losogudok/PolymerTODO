# PolymerTODO
TODO, again?

# Installing Couch DB on Ubuntu 14.04

sudo apt-get install -y couchdb
You must then enable the couchdb admin account and set the admin password at the end of `/etc/couchdb/local.ini` 
Then set `bind_address = 0.0.0.0` in `/etc/couchdb/local.ini` 
Lastly, restart couchdb:

sudo service couchdb restart
sudo apt-get install couchdb

For CORS:

npm install -g add-cors-to-couchdb

npm install bower

"bower install" in static folder
