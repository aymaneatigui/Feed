#!/bin/bash
echo "Waiting for mongo to start..."
sleep 10

echo "Setting up replica set..."
mongosh --host rs0 --eval 'rs.initiate({_id: "rs", members: [
    {_id: 0, host: "rs0:27017", priority: 1.0},
    {_id: 1, host: "rs1:27017", priority: 0.5},
    {_id: 2, host: "rs2:27017", priority: 0.5}
]})'

echo "Replica set configured! ^_^"

echo "Setting up database..."
sleep 35

mongosh --host rs0 --eval 'db.getSiblingDB("feed").createUser({
        user: "docker",
        pwd: "docker",
        roles: [{ role: "readWrite", db: "feed" }]})'
echo "Database configured! ^_^"

sleep 3

echo "Importing JSON files to collections..."
for file in ./app-data/json/*; do
        filename=$(basename "$file")
        collection="${filename%.*}"
        mongoimport --host rs0 --db feed --collection "$collection" --file "$file" --jsonArray --username docker --password docker
        echo "\nImport of $collection completed! ^_^ \n"
done
