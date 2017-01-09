# === BoB ===
import time
import sys
from noob import *

whiteLed = Led().initialize({
  'name': "WhiteLed",
  'digitalPort': 2,
  'pinMode': "OUTPUT"
})

blueLed = Led().initialize({
  'name': "WhiteLed",
  'digitalPort': 3,
  'pinMode': "OUTPUT"
})

redLed = Led().initialize({
  'name': "WhiteLed",
  'digitalPort': 4,
  'pinMode': "OUTPUT"
})

lcdDisplay = LCDDisplay().initialize({
  'name': "MyDisplay",
  'message': "BoB|SnowCamp"
})

ultrasonicRanger = UltrasonicRanger().initialize({
  'name': "Ranger",
  'digitalPort': 7
})

# see https://github.com/DexterInd/GrovePi/blob/master/Software/Python/grove_rgb_lcd/example2.py
# add clolors to noobs.py
while True:
  try:
    #Blink the LEDs
    lcdDisplay.setText("White").console()
    lcdDisplay.setRGB(255,255,255)
    whiteLed.blink(0.5)
    lcdDisplay.setText("Blue").console()
    lcdDisplay.setRGB(0,0,255)
    blueLed.blink(0.5)
    lcdDisplay.setText("Red").console()
    lcdDisplay.setRGB(255,0,0)
    redLed.blink(0.5)

    lcdDisplay.setText("dist:" + str(ultrasonicRanger.distance()) + " cm").console()
    lcdDisplay.setRGB(255,255,0)

    time.sleep(0.5)


  except KeyboardInterrupt:	# Turn LED off before stopping
    whiteLed.switchOff()
    break
  except IOError: # Print "Error" if communication error encountered
    print ("Error")
