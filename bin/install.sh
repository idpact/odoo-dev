#!/bin/bash
echo "Install docker images :"
docker pull postgres:10
docker pull odoo:14
docker pull odoo:13
docker pull odoo:12

docker run -d -e POSTGRES_USER=odoo -e POSTGRES_PASSWORD=odoo -e POSTGRES_DB=postgres --name db postgres:10
