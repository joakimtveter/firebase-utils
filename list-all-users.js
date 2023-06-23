const admin = require('firebase-admin');
const serviceAccount = require('./credentials.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const auth = admin.auth();

async function listAllUsers() {
    try {
        // List all users
        const listUsersResult = await auth.listUsers();
        const users = listUsersResult.users;
        console.log('users : ', users);
    } catch (error) {
        console.error('Error deleting users:', error);
    }
}

listAllUsers();
