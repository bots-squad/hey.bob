# Installation de la GrovePi

> pour les manipulation je suis avec un RPI connecté à un clavier et un écran, mais tout pourrait se faire en SSH. (eg: `ssh pi@bob.local` on OSX)
> ⚠️ sur la dernière Raspbian (PIXEL) le SSH est désactivé
> https://www.raspberrypi.org/blog/a-security-update-for-raspbian-pixel/

See https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/

## SetUp

```shell
sudo git clone https://github.com/DexterInd/GrovePi
cd GrovePi/Script
sudo chmod +x install.sh
sudo ./install.sh
```

... wait 🤔

- le RPI va rebooter
- arrêter le RPI: `sudo shutdown -h now`
- plugger la GrovePI (le shield GrovePI)
- re lancer la bête
- dans un terminal (ou en SSH):
  ```shell
  sudo i2cdetect -y 1
  # si on obtient ça en sortie c'est ok
  #      0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
  # 00:          -- 04 -- -- -- -- -- -- -- -- -- -- --
  ```
- "plugguer" une led sur le port `D4`
- lancer:
  ```shell
  cd GrovePi/Software/Python/
  sudo python grove_led_blink.py
  ```
- si ça clignote, on est bon 🍾 👯

## Python ou NodeJS ???

> 🚧 à suivre...



> 🎃 bob morane
