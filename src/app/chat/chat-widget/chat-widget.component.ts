import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core'
import { Subject } from 'rxjs'
import { fadeIn, fadeInOut } from '../animations'
import { HttpClient } from '@angular/common/http'

const rand = max => Math.floor(Math.random() * max)

@Component({
  selector: 'chat-widget',
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.css'],
  animations: [fadeInOut, fadeIn],
})

export class ChatWidgetComponent implements OnInit {
  
  constructor(private http: HttpClient) { 
  }
  
  
  @ViewChild('bottom') bottom: ElementRef
  @Input() public theme: 'blue' | 'grey' | 'red' = 'blue'

  public _visible = false

  public get visible() {
    return this._visible
  }

  @Input() public set visible(visible) {
    this._visible = visible
    if (this._visible) {
      setTimeout(() => {
        this.scrollToBottom()
        this.focusMessage()
      }, 0)
    }
  }

  public focus = new Subject()

  public operator = {
    name: 'Sentiment Neuron',
    status: 'online',
    avatar: `https://image.ibb.co/nA9DLd/Intro_researchneuron_M.jpg`,
  }

  public client = {
    name: 'Guest User',
    status: 'online',
    avatar: `https://randomuser.me/api/portraits/men/${rand(100)}.jpg`,
  }

  // bound to ng-container of chat widget
  public messages = []

  public getResponse = (message) => {

    this.http.get(`http://localhost:5000/?text=${message}`).subscribe(value =>{
      
      const val = JSON.parse(JSON.stringify(value))

      this.addMessage(this.operator, val.output[0], 'received')
      
    },
    error => {
        
      const err = JSON.parse(JSON.stringify(error))

      this.addMessage(this.operator, err.message, 'received')
    });
  }

  public addMessage(from, text, type: 'received' | 'sent') {
    this.messages.unshift({
      from,
      text,
      type,
      date: new Date().getTime(),
    })
    this.scrollToBottom()
  }

  public scrollToBottom() {
    if (this.bottom !== undefined) {
      this.bottom.nativeElement.scrollIntoView()
    }
  }

  @Input()
  public set _focus(_) {
    this.focusMessage()
  }

  public focusMessage() {
    this.focus.next(true)
  }

  ngOnInit() {
    setTimeout(() => this.visible = true, 1000)
    setTimeout(() => {
      this.addMessage(this.operator, 'Hi. Say anything and I\'ll score your sentiment from negative to positive!', 'received')
    }, 1500)
  }

  public toggleChat() {
    this.visible = !this.visible
  }

  public sendChatMessage({ message }) {
    if (message.trim() === '') {
      return
    }
    this.addMessage(this.client, message, 'sent')
    this.getResponse(message)
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {

    if (event.key === '?' && !this._visible) {
      this.toggleChat()
      this.focusMessage()
    }
  }

}
