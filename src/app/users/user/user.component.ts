import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter  } from '@angular/core';

import { User } from './../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
  @Input() user: User;
  @Output() edit = new EventEmitter<User>();

  editUser() {
    this.edit.emit(this.user);
  }
}

