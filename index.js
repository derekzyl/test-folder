const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

const admin = require('firebase-admin');
admin.initializeApp();
// Take the text parameter passed to this HTTP endpoint and insert it into 
// Firestore under the path /messages/:documentId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
    // Grab the text parameter.
    const original = req.query.text;
    // Push the new message into Firestore using the Firebase Admin SDK.
    const writeResult = await admin.firestore().collection('messages').add({ original: original });
    // Send back a message that we've successfully written the message
    res.json({ result: `Message with ID: ${writeResult.id} added.` });
});




exports.onUserDelete = functions.auth.user().onDelete(async (user) => {
    const snapshot = await database
        .collection("users")
        .where("uid", "==", user.uid)
        .get();
    if (snapshot.empty) {
        console.log("No matching documents.");
        return;
    }
    snapshot.forEach(async (doc) => {
        await doc.ref.delete();
    });
    const bucket = admin.storage().bucket();

    await bucket.deleteFiles(user.uid.toString() + "/");
    console.log("user: " + user.uid.toString() + "deleted with all belongings");
});

exports.newOrderAdded = functions.firestore
    .document("/order/{orderId}")
    .onCreate(async (snapshot, context) => {
        // send notification 
        const order = snapshot.data();
        // get the uid of the user who made the order
        const uid = order.uid;
        // send the notification
        return admin.firestore().collection("users").doc(uid).get().then(doc => {
            const user = doc.data();
            const token = user.token;
            const payload = {
                notification: {
                    title: "New Order",
                    body: "You have a new order",
                    click_action: "https://food-delivery-app.firebaseapp.com",
                }
            };
            return admin.messaging().sendToDevice(token, payload);
        }
            , error => {
                console.log(error);
            }
        );
});