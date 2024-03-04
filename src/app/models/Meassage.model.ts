import { Contact } from "./Contact.model";

export class Message {
    id!: number;
    senderContact!: Contact;
    receiverContact!: Contact;
    message!: string;
    dateSent!: Date;


}