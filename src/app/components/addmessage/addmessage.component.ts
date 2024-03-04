import { Message } from './../../models/Meassage.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgControlStatusGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/Contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { MessagesService } from 'src/app/services/messages.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-addmessage',
  templateUrl: './addmessage.component.html',
  styleUrls: ['./addmessage.component.css']
})
export class AddmessageComponent implements OnInit  {
  constructor(private service:MessagesService,private SC:ContactService ) { }
  mes!: Message;
  inputMessage: string = '';
  badWords: string[] =["abortion", "anal", "anus", "arse", "ass", "ass-fucker", "asses", "asshole", "assholes", "ballbag", "balls", "bastard", "bellend", "bestial", "bestiality", "bitch", "bitches", "bitching", "bloody", "blowjob", "bollok", "boob", "boobs", "breasts", "buceta", "bum", "butt", "carpet muncher", "chink", "cipa", "clitoris", "cock", "cock-sucker", "cocks", "coon", "crap", "cum", "cumshot", "cunillingus", "cunt", "damn", "dick", "dildo", "dildos", "dink", "dog-fucker", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculation", "fag", "fagging", "faggot", "fagot", "fagots", "fanny", "felching", "fellatio", "flange", "fuck", "fucked", "fucker", "fuckers", "fucking", "fuckings", "fucks", "fudge packer", "god-damned", "goddamn", "hell", "hore", "horny", "jerk-off", "kock", "labia", "lust", "lusting", "masochist", "masturbate", "mother fucker", "nazi", "nigger", "niggers", "orgasim", "orgasm", "orgasms", "pecker", "penis", "piss", "pissed", "pisser", "pisses", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "prick", "pricks", "pube", "pussies", "pussy", "rape", "rapist", "rectum", "retard", "rimming", "sadist", "screwing", "scrotum", "semen", "sex", "shag", "shagging", "shemale", "shit", "shite", "shits", "shitted", "shitting", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "testicle", "tit", "tits", "titt", "turd", "vagina", "viagra", "vulva", "wang", "wank", "whore", "xrated", "xxx"];
  errbadwords:boolean = false;
  inputmissing:boolean = false;
  selectedObject: Contact | null = null; // Define a variable to store the selected object
  objects: Contact[] = [];


  onSelectObject() {
    console.log(this.selectedObject);
  }
  
  ngOnInit(){
    this.SC.fetchAll().subscribe(data => {
      this.objects = data;
      console.log(this.objects);
    });
  }

  onSubmit(event: Event) {
    // Reset error flags
    this.errbadwords = false;
    this.inputmissing = false;
    this.mes = new Message();

    // Check if input message is null or empty
    if (!this.inputMessage || this.inputMessage.trim() === '' || !this.selectedObject) {
      console.log("Input message is empty or recipient is not selected. Please re-enter your message.");
      this.inputmissing = true; // Set inputmissing flag to true
      return;
    }
  
    // Check if input message contains bad words
    if (this.containsBadWords(this.inputMessage)) {
      console.log("Message contains bad words. Submission prevented.");
      this.errbadwords = true; // Set errbadwords flag to true
      return;
    }
  
    // Initialize this.mes as a new instance of Message
    this.mes = new Message();
  
    // Set properties on this.mes
    this.mes.receiverContact = this.selectedObject;
    this.mes.senderContact = this.selectedObject;
    this.mes.message = this.inputMessage;
    this.mes.dateSent = new Date();
    console.log(this.mes);
    this.service.add(this.mes).subscribe({
      next: (m) => { 
        alert("message sent successfully!!");
      }
    });;
    // Clear input message after successful submission
    this.inputMessage = '';
  }

  
  containsBadWords(input: string): boolean {
    // Regular expression to match bad words
    const regex = new RegExp(this.badWords.join('|'), 'gi');
    // Check if input message contains bad words
    return regex.test(input);
  }
}
