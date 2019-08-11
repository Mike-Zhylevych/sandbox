import axios from 'axios';

interface StandupRequest {
  channel: string,
  text: string,
  attachments: any[],
}

class Standup {
  constructor(public request: StandupRequest) {}
   sendStandupRequest = async () => {
    try {
      const res = await axios({
        url: 'https://slack.com/api/chat.postMessage',
        method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': process.env.AUTH_KEY,
          },
          data: this.request,
       })
       return res.data
   }
   catch (err) {
       console.error(err);
   }
  }
}

export default Standup;

const request = 
  {
    "channel":"DM752HC4C",
     // "channel":"#bot-test-channel",
    "text":"Hello, it's time to start your daily standup Please answer following questions (reply *skip* to not report today).What did you complete today?",
    "attachments": [{
      "text":"Who wins the lifetime supply of chocolate?",
      "fallback":"You could be telling the computer exactly what it can do with a lifetime supply of chocolate.",
      "color":"#3AA3E3",
      "attachment_type":"default",
      "callback_id":"select_simple_1234",
      "actions":[{
        "name":"winners_list",
        "text":"Who should win?",
        "type":"select",
        "data_source":"users"
      }]
    }]
};

const standup = new Standup(request);
standup.sendStandupRequest().then( response => console.log(response));

const minutes = 1, the_interval = minutes * 60 * 1000;

setInterval(() => console.log('tick'), the_interval);
