#!/bin/bash
echo "This will sync _site/ to the server, overwriting existing files and removing files that don't exist locally."
echo "Are you sure you want to continue? (y/n)"
read CONFIRM
if [ "$CONFIRM" != "y" ]; then
    echo "Deployment cancelled"
    exit 1
fi

rsync -avz --delete --progress -u -e "ssh -o HostKeyAlgorithms=+ssh-rsa -o PubkeyAcceptedKeyTypes=+ssh-rsa" _site/ li1@einstein.franklin.edu:/home/li1/public_html/datafest/