  import { Commande } from 'src/app/models/Commande.model';
  import { ForumService } from './../../services/forum.service';
  import { Component } from '@angular/core';
  import { DirectionFinanciere } from 'src/app/models/DirectionFinanciere.model';
  import { Forum } from 'src/app/models/Fourm.model';
  import { CommadnService } from 'src/app/services/commadn.service';
  import { DirectionFinanciereService } from 'src/app/services/direction-financiere.service';


  @Component({
    selector: 'app-command-add',
    templateUrl: './command-add.component.html',
    styleUrls: ['./command-add.component.css']
  })
  export class CommandAddComponent {
    
  constructor(private service:CommadnService,private DFService:DirectionFinanciereService,private ForumService:ForumService ) { }

  command!: Commande;
  inputMessage: string = '';
  badWords: string[] =["abortion", "anal", "anus", "arse", "ass", "ass-fucker", "asses", "asshole", "assholes", "ballbag", "balls", "bastard", "bellend", "bestial", "bestiality", "bitch", "bitches", "bitching", "bloody", "blowjob", "bollok", "boob", "boobs", "breasts", "buceta", "bum", "butt", "carpet muncher", "chink", "cipa", "clitoris", "cock", "cock-sucker", "cocks", "coon", "crap", "cum", "cumshot", "cunillingus", "cunt", "damn", "dick", "dildo", "dildos", "dink", "dog-fucker", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculation", "fag", "fagging", "faggot", "fagot", "fagots", "fanny", "felching", "fellatio", "flange", "fuck", "fucked", "fucker", "fuckers", "fucking", "fuckings", "fucks", "fudge packer", "god-damned", "goddamn", "hell", "hore", "horny", "jerk-off", "kock", "labia", "lust", "lusting", "masochist", "masturbate", "mother fucker", "nazi", "nigger", "niggers", "orgasim", "orgasm", "orgasms", "pecker", "penis", "piss", "pissed", "pisser", "pisses", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "prick", "pricks", "pube", "pussies", "pussy", "rape", "rapist", "rectum", "retard", "rimming", "sadist", "screwing", "scrotum", "semen", "sex", "shag", "shagging", "shemale", "shit", "shite", "shits", "shitted", "shitting", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "testicle", "tit", "tits", "titt", "turd", "vagina", "viagra", "vulva", "wang", "wank", "whore", "xrated", "xxx"];
  errbadwords:boolean = false;
  inputmissing:boolean = false;
  selectedObject: DirectionFinanciere | null = null; 
  selectedForum: Forum | null = null; 
  date !:Date;
  DirectionFinancieres: DirectionFinanciere[] = [];
  fourms:Forum[]=[];
  montant !:number ; 
  etat !:string;


  onSelectObject() {
    console.log(this.selectedObject);
  }
  onselectedForum() {
    console.log(this.selectedForum);
  }

  ngOnInit(){
    this.DFService.fetchAll().subscribe(data => {
      this.DirectionFinancieres = data;
      console.log(this.DirectionFinancieres);
    });
    this.ForumService.getAllForums().subscribe(data => {
      this.fourms = data;
      console.log(this.fourms);
    });
    
  }

  onSubmit(event: Event) {
    // Reset error flags
    this.errbadwords = false;
    this.inputmissing = false;

    // Check if input message is null or empty
    if ( !this.selectedObject || !this.selectedForum ) {
      console.log("Inputs are empty or recipient is not selected. Please re-enter your message.");
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
this.command = new Commande();
    // Set properties on this.mes
    this.command.forum = this.selectedForum;
    this.command.directionFinanciere = this.selectedObject;
    this.command.montantTotal = this.montant;
    this.command.dateCommande=new Date();
    this.command.dateCommande = this.date;
    this.command.etat = this.etat;
    // console.log(this.mes);
    this.service.add(this.command).subscribe({
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
