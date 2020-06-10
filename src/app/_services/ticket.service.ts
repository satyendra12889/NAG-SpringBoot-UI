import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Ticket } from '../_models/index';

@Injectable()
export class TicketService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Ticket[]>('http://localhost:8080/employeeApp/listTicket/');
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id);
    }

    create(ticket: Ticket) {
        return this.http.post('http://localhost:8080/employeeApp/createTicket', ticket);
    }

    update(ticket: Ticket) {
        return this.http.put('http://localhost:8080/employeeApp/update', ticket);
    }

    delete(id: number) {
        return this.http.delete('http://localhost:8080/employeeApp/delete/' + id);
    }
}