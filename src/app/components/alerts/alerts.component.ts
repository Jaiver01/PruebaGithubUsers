import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';


@Component({
	selector: 'app-alerts',
	templateUrl: './alerts.component.html',
	styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

	@Input() alert: any = '';

	@ViewChild('selfClosingAlert', {static: false}) selfClosingAlert!: NgbAlert;

	ngOnInit(): void {
		setTimeout(() => this.selfClosingAlert.close(), 5000);
	}
}