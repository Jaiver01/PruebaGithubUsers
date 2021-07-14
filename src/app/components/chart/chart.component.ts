import { Component, Input, OnInit } from '@angular/core';
import { ChartDataset, ChartType } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

	@Input() users: any[] = [];

	public barChartOptions: any = { responsive: true };
	public barChartType: ChartType = 'bar';
	public barChartLegend = true;
	public barChartLabels: string[] = [];
	public barChartData: ChartDataset[] = [
		{ data: [], label: 'Seguidores', backgroundColor: ["#7EC699"] }
	];

	constructor() { }

	ngOnInit(): void {
		this.users.forEach((user) => {
			this.barChartLabels.push(user.login);
			this.barChartData[0].data.push(user.followers);
		});
	}

}
