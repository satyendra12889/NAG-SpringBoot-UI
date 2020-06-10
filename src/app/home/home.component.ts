import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { Ticket } from '../_models/index';
import { UserService } from '../_services/index';
import { TicketService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    tickets: Ticket[] = [];
    users: User[] = [];

    constructor(private userService: UserService,
                private ticketService: TicketService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
       this.loadAllTickets();
    }

    ngOnInit() {
        // this.loadAllUsers();
    }

    deleteTicket(id: number) {
         this.ticketService.delete(id).subscribe(() => { this.loadAllTickets()});
    }
    updateTicket(t: Ticket) {
         this.ticketService.update(t).subscribe(() => { this.loadAllTickets()});
    }
    // deleteUser(id: number) {
    //     this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    // }

     private loadAllTickets() {
        this.ticketService.getAll().subscribe(
            tickets => { 
                this.tickets = tickets; });
    }
    // private loadAllUsers() {
    //     this.userService.getAll().subscribe(users => { this.users = users; });
    // }
}