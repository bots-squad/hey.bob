# Microphone

- J'utilise un microphone usb Kinobo (comme pour le projet Jasper) https://www.amazon.com/USB-2-0-Microphone-Recognition-Software/%20dp/B008CNZOJY/ref=sr_1_1?s=electronics

- Pour le tester:
  - https://www.sunfounder.com/wiki/index.php?title=To_use_USB_mini_microphone_on_Raspbian
  ```shell
  lsusb
  arecord -l
  arecord -D plughw:1,0 -d 3.0 test.wav && aplay test.wav
  ```
