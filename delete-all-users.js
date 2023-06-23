const admin = require('firebase-admin');
const serviceAccount = require('./credentials.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const auth = admin.auth();

const batchSize = 10;
const delayBetweenBatches = 1000;

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function deleteUsersInBatches(batchSize, delayBetweenBatches) {
    try {
        const listUsersResult = await auth.listUsers();
        const users = listUsersResult.users;
        const totalUsers = users.length;
        let deletedCount = 0;

        while (deletedCount < totalUsers) {
            const batchIds = users.slice(deletedCount, deletedCount + batchSize);
            const deletePromises = batchIds.map((user) => auth.deleteUser(user.uid));
            await Promise.all(deletePromises);

            deletedCount += batchIds.length;

            console.log(`Deleted ${deletedCount} out of ${totalUsers} users.`);

            if (deletedCount < totalUsers) {
                await delay(delayBetweenBatches);
            }
        }

        console.log('All users have been deleted successfully.');
    } catch (error) {
        console.error('Error deleting users:', error);
    }
}

deleteUsersInBatches(batchSize, delayBetweenBatches);
