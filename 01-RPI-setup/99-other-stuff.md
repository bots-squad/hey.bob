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

## Divers

- changer le password de `root`: `sudo passwd root`

## Ressources

- guide très complet: http://thisdavej.com/beginners-guide-to-installing-node-js-on-a-raspberry-pi/
