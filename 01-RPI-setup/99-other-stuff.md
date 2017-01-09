# Autres petites choses...

## Outils

J'ai installé:

- Midnight Commander (ça me rappelle un peu PCTools): `sudo apt-get install mc`
- Micro (un super éditeur)

  ``` shell
  cd /bin
  sudo wget https://github.com/zyedidia/micro/releases/download/nightly/micro-1.1.4-60-linux-arm.tar.gz
  sudo tar xvzf micro-1.1.4-60-linux-arm.tar.gz
  sudo rm -f micro-1.1.4-60-linux-arm.tar.gz
  su
  echo "/bin/micro-1.1.4-60/micro \$1" > micro
  chmod +x micro
  exit
  ```

- Samba:

  ```shell
  sudo apt-get install samba samba-common-bin
  # Ensuite, il faudra éditer le fichier de configuration :
  sudo pico /etc/samba/smb.conf
  # Chercher la rubrique ####### Authentication #######
  # et créez l'entrée suivante : security = user

  # puis chercher la rubrique [homes] et précisez :
  # comment = Home Directories
  # browseable = yes
  # read only = no
  ```
  - sauvegardez, quittez l'éditeur
  - Associez un mot de passe samba à l'utilisateur `pi` : `sudo smbpasswd -a pi`
  - Re-démarrez le serveur samba : `sudo /etc/init.d/samba restart`
  - sous OSX, vous allez dans le menu `Go` du Finder, sélectionnez `Connect to server` ..., saisissez `smb://adresse_ip_du_raspberry`


## Divers

- changer le password de `root`: `sudo passwd root`

## Ressources

- guide très complet: http://thisdavej.com/beginners-guide-to-installing-node-js-on-a-raspberry-pi/
