import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room } from '../../../models/room.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lightcontrol',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lightcontrol.component.html',
  styleUrl: './lightcontrol.component.css'
})
export class LightcontrolComponent {
  room: Room;
  rooms: Room[];

  constructor(
  ) {
    this.rooms = [
      { id: 1, name: 'Quarto', on: false },
      { id: 2, name: 'Cozinha', on: false },
      { id: 3, name: 'Sala', on: false },
      { id: 4, name: 'Banheiro', on: false },
      { id: 5, name: 'Lavanderia', on: false },
    ];
    this.room = this.rooms[0];
  }

  lightBulb() {
    this.room.on = this.room.on ? false : true;
  }

  setCurrentRoom(room: Room) {
    this.room = room;
  }
}