import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges, ViewChild } from '@angular/core';
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
export class AiChatComponent implements OnChanges, OnDestroy {
  @Input() userEmail: string | null = null;
  isOpen = false;
  isReplying = false;
  draft = '';
  messages: ChatMessage[] = this.getInitialMessages();

  private replyTimer?: ReturnType<typeof setTimeout>;
  private focusTimer?: ReturnType<typeof setTimeout>;
  @ViewChild('launcherButton') launcherButton?: ElementRef<HTMLButtonElement>;
  @ViewChild('chatInput') chatInput?: ElementRef<HTMLTextAreaElement>;

  ngOnChanges(changes: SimpleChanges): void {
    const userEmailChange = changes['userEmail'];
    if (!userEmailChange?.firstChange && userEmailChange.currentValue !== userEmailChange.previousValue) {
      this.resetChatState();
    }
  }

  openChat(): void {
    if (!this.userEmail) {
      return;
    }

    this.clearFocusTimer();
    this.isOpen = true;
    this.focusTimer = setTimeout(() => {
      this.chatInput?.nativeElement.focus();
      this.focusTimer = undefined;
    }, 0);
  }

  closeChat(): void {
    this.clearFocusTimer();
    this.isOpen = false;
    this.focusTimer = setTimeout(() => {
      this.launcherButton?.nativeElement.focus();
      this.focusTimer = undefined;
    }, 0);
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
    this.clearFocusTimer();
  }

  private clearFocusTimer(): void {
    if (this.focusTimer) {
      clearTimeout(this.focusTimer);
      this.focusTimer = undefined;
    }
  }

  private resetChatState(): void {
    if (this.replyTimer) {
      clearTimeout(this.replyTimer);
      this.replyTimer = undefined;
    }

    this.clearFocusTimer();
    this.isOpen = false;
    this.isReplying = false;
    this.draft = '';
    this.messages = this.getInitialMessages();
  }

  private getInitialMessages(): ChatMessage[] {
    return [
      {
        text: 'Hi! I’m your LifePlanner assistant. Ask me anything about planning your day.',
        sender: 'assistant',
      },
    ];
  }
}
