#!/bin/bash

echo "Deploying next-holidays"
now --public

echo "Attaching holidays-canada alias to new deployment"
now alias holidays-canada

echo "Removing previous deployment"
now rm next-holidays --safe --yes
