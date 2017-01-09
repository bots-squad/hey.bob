# Google Speech API

## En 1er:

- créer une clé et projet sur https://console.cloud.google.com
- activer speech api
- créer un "service account": https://console.cloud.google.com/project/_/apiui/credential/serviceaccount
- create key (JSON)

```shell
# Variables d'environnement à modifier
export GCLOUD_PROJECT=your-project-id
export GOOGLE_APPLICATION_CREDENTIALS=/path/to/service_account_file.json
```

Installer le google cloud sdk (si on utilise les exemples en python)
- https://cloud.google.com/sdk/docs/quickstart-debian-ubuntu

## Version Python

Sur le raspberryPi:
```shell
git clone https://github.com/GoogleCloudPlatform/python-docs-samples.git
cd python-docs-samples/speech/api-client
pip install -r requirements.txt
# y copier le fichier JSON
```

Modifier `transcribe.py`

```python
import os
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "./bob.json"

# Change language
'languageCode': 'fr-FR',  # a BCP-47 language tag
```

Lancer (pour tests): `python transcribe.py ./resources/audio.raw`

### Générer un fichier raw à partir du micro

```shell
# https://linux.die.net/man/1/arecord
arecord -D plughw:1,0 -t RAW -f S16_LE -r 16000 -d 3.0 ./resources/test.raw
# Recording raw data 'test.raw' : Signed 16 bit Little Endian, Rate 16000 Hz, Mono
python transcribe.py ./resources/test.raw
# {"results": [{"alternatives": [{"confidence": 0.82364905, "transcript": "the build is failing"}]}]}
```

## Version NodeJS

Normalement pas besoin d'installer le google cloud sdk

```shell
git clone https://github.com/GoogleCloudPlatform/nodejs-docs-samples.git
cd nodejs-docs-samples/speech/api-client
npm install shelljs --save # pas obligatoire c'est pour mes bidouilles plus tard
npm install
```

Modifier `recognize.js`

```javascript
process.env["GCLOUD_PROJECT"] = "hey-bob-desktop";
process.env["GOOGLE_APPLICATION_CREDENTIALS"] = "./bob.json";

// et modifier tous les:
  const config = {
    // Configure these settings based on the audio you're transcribing
    encoding: 'LINEAR16',
    sampleRate: 16000
  };

// par:
  const config = {
    // Configure these settings based on the audio you're transcribing
    encoding: 'LINEAR16',
    sampleRate: 16000,
    languageCode: 'fr-FR'
  };

```

### Générer un fichier raw à partir du micro

```shell
# https://linux.die.net/man/1/arecord
arecord -D plughw:1,0 -t RAW -f S16_LE -r 16000 -d 3.0 ./resources/test.raw
node recognize.js sync ./resources/test.raw
```
