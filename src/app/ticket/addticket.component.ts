import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService, TicketService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'addticket.component.html'
})

export class AddTicketComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private ticketService: TicketService) { }

    ngOnInit() {
        
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    addTicket() {
        this.loading = true;
        this.ticketService.create(this.model)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
