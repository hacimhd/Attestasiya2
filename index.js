class Message {
    constructor(authorName, text, time) {
        this.authorName = authorName;
        this.time = time;
        this.text = text;
    }

    toString() {
        console.log(`${this.time}  ${this.authorName}: ${this.text}`);
    }
}

class Messenger extends Message{

    constructor(authorName,text) {
        super(authorName,text)
        this.messages = [];
    }

    send(author, text) {
        let message = new Message(author, text, new Date().getHours() + ':' + new Date().getMinutes());
        this.messages.push(message);
    }

    show_history() {
        this.messages.map(message => message.toString());
    }
}

let messenger = new Messenger();
messenger.send('Adil', 'Hello Meryem');
messenger.send('Meryem', 'Hi Adil');
messenger.show_history();