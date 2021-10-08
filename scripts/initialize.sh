#!/bin/bash
cd /home/ubuntu/AnimalChat/server
npm install
npm install pm2@latest -g
sudo apt-get update

sudo npm cache clean --force
sudo npm install -g n
sudo n stable
sudo npm install -g npm

sudo apt-get install authbind
sudo touch /etc/authbind/byport/80
sudo chown ubuntu /etc/authbind/byport/80
sudo chmod 755 /etc/authbind/byport/80