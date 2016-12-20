# Paramétrages du RPI - prérequis

> WIP :construction:

## Ressources

- https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/
- ...

## Matériel

- Raspberry PI 3
- Clavier: https://www.adafruit.com/product/2876
- Ecran: https://www.adafruit.com/product/2260


## Installation

- Flasher une SD avec https://www.raspberrypi.org/downloads/raspbian/ (Version "with PIXEL")
- Modifier la résolution d'écran comme expliqué ici: https://learn.adafruit.com/adafruit-5-800x480-tft-hdmi-monitor-touchscreen-backpack/raspberry-pi-config
  ```
  # uncomment if hdmi display is not detected and composite is being output
  hdmi_force_hotplug=1

  # uncomment to force a specific HDMI mode (here we are forcing 800x480!)
  hdmi_group=2
  hdmi_mode=1
  hdmi_mode=87
  hdmi_cvt=800 480 60 6 0 0 0

  max_usb_current=1
  ```
- Paramétrer le WIFI (pour le moment je passe par mon téléphone)
  - TODO (:construction:) aller modifier de cette manière:
  ```
  sudo pico /etc/wpa_supplicant/wpa_supplicant.conf
  # restart
  sudo ifdown wlan0
  sudo ifup wlan0
  # check
  ifconfig wlan0
  ```
- Changer le hostname: (http://www.howtogeek.com/167195/how-to-change-your-raspberry-pi-or-other-linux-devices-hostname/)
  ```
  sudo nano /etc/hosts
  # change the name `raspberrypi` by eg `bob`
  sudo nano /etc/hostname
  # change the name `raspberrypi` by eg `bob`
  sudo /etc/init.d/hostname.sh
  sudo reboot
  ```
