# Firebase Admin Utilies

Firebase Admin SDK utilities for managing Firebase Auth users.

## Installation

Clode the repository and install the dependencies.

```node
npm install
```

## Add Service Account JSON File

1. Go to the [Firebase console](https://console.firebase.google.com) and select your project.

2. Click on the gear icon (⚙️) next to "Project Overview" in the left sidebar, and then select "Project settings".

3. In the "Service Accounts" tab, scroll down to the "Firebase Admin SDK" section.

4. Click on the "Generate new private key" button. This will download a JSON file containing your service account credentials.

5. Rename the downloaded JSON file to `credentials.json`.

6. Move the JSON file to the project root directory.

## Usage

### List Users

```node
npm run list-users
```

### Delete all users

```node
npm run delete-all-users
```
