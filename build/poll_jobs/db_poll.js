"use strict";
const querystring = require('querystring');
const https = require('https');
const postData = {
    channel: "DM752HC4C",
    text: "Hello, it's time to start your daily standup for *GnE BP ME*. Please answer following questions (reply *skip* to not report today).What did you complete today?",
    attachments: [{
            text: "Who wins the lifetime supply of chocolate?",
            fallback: "You could be telling the computer exactly what it can do with a lifetime supply of chocolate.",
            color: "#3AA3E3",
            attachment_type: "default",
            callback_id: "select_simple_1234",
            actions: [{
                    name: "winners_list",
                    text: "Who should win?",
                    type: "select",
                    data_source: "users"
                }]
        }]
};
// postData = {   //the POST request's body data
//    type: deviceType,
//    id: deviceId,
//    metadata: {
//       address: {
//          number: deviceNumber,
//          street: deviceStreet
//       }
//    }            
// };
// console.log(JSON.stringify(postData));
const postBody = querystring.stringify(postData);
//console.log(postBody);
//init your options object after you call querystring.stringify because you  need
// the return string for the 'content length' header
const options = {
    //your options which have to include the two headers
    path: 'https://slack.com/api/chat.postMessage',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': postBody.length,
        'Authorization': 'Bearer xoxb-520125943203-721642352069-P5RpFjj6dkzTzAiwrT8eODIN',
    },
    json: true,
};
const postreq = https.request(options, function (res) {
    console.log(res);
});
postreq.on('error', function (e) {
    console.error(e);
});
process.on('uncaughtException', function (err) {
    console.log(err);
});
postreq.end();
const minutes = 1, the_interval = minutes * 60 * 1000;
setInterval(() => { console.log("I am doing my 1 minutes check"); }, the_interval);
