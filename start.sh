#!/bin/bash

# exécuter la commande docker-compose build
docker-compose build

# vérifier si la commande a échoué
if [ $? -ne 0 ]; then
  echo "La commande docker-compose build a échoué" | mail -s "Erreur de construction de Docker Compose" "archisabatier@gmail.com"
  else 
  docker-compose up -d 
fi
