import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

interface ChatMessage {
  text: string;
  sender: 'user' | 'assistant';
}

@Component({
  selector: 'app-ai-chat',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, MatIconModule],
  templateUrl: './ai-chat.component.html',
  styleUrls: ['./ai-chat.component.scss'],
})
export class AiChatComponent implements OnDestroy {
  isOpen = false;
  isReplying = false;
  draft = '';
  messages: ChatMessage[] = [
    {
      text: 'Hi! I’m your LifePlanner assistant. Ask me anything about planning your day.',
      sender: 'assistant',
    },
  ];

  private replyTimer?: ReturnType<typeof setTimeout>;
  @ViewChild('launcherButton') launcherButton?: ElementRef<HTMLButtonElement>;
  @ViewChild('chatInput') chatInput?: ElementRef<HTMLTextAreaElement>;

  openChat(): void {
    this.isOpen = true;
    setTimeout(() => this.chatInput?.nativeElement.focus(), 0);
  }

  closeChat(): void {
    this.isOpen = false;
    setTimeout(() => this.launcherButton?.nativeElement.focus(), 0);
  }

  sendMessage(): void {
    const text = this.draft.trim();
    if (!text || this.isReplying) {
      return;
    }

    this.messages.push({ text, sender: 'user' });
    this.draft = '';
    this.isReplying = true;
    this.replyTimer = setTimeout(() => {
      this.messages.push({
        text: 'That sounds like a great plan. I’ll be able to help organize boards, tasks, and activities here soon.',
        sender: 'assistant',
      });
      this.isReplying = false;
      this.replyTimer = undefined;
    }, 900);
  }

  onInputKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  ngOnDestroy(): void {
    if (this.replyTimer) {
      clearTimeout(this.replyTimer);
    }
  }
}
