
# Niraah Ayur Diet

## Development

1. Install dependencies

```
npm i
```

2. Run the dev server

```
npm run dev
```

## Firebase Setup

1. Create a `.env` file in the project root using the following keys:

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
# Optional (Analytics)
VITE_FIREBASE_MEASUREMENT_ID=
```

2. Obtain these from your Firebase Console (Project Settings) and paste the values.

3. Firebase is initialized in `src/lib/firebase.ts`. Example usage:

```
import { auth, db, googleProvider } from '@/lib/firebase';
```


