import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from 'src/app/services/users.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

	public users: any[] = [];
	public chart: boolean = false;
	public filter = new FormControl('', [
		Validators.required,
		Validators.minLength(4),
		Validators.pattern(/^(?!(?:doublevpartners|t)$).*$/)
	]);
	public icons: any = {
		faSearch: faSearch
	}
	public alert: any = { type: '', message: '' };

	constructor(private usersService: UsersService) { }

	ngOnInit(): void {
	}

	public search = (): void => {
		this.users = [];
		this.chart = false;

		if (this.filter.errors) {
			this.alert.type = 'danger';

			if (this.filter.errors.required) this.alert.message = 'Escriba un nombre de usuario';
			if (this.filter.errors.minlength) this.alert.message = 'Debe escribir más de cuatro carácteres';
			if (this.filter.errors.pattern) this.alert.message = 'Busqueda no válida';

			return;
		}		

		this.usersService.getUsers(this.filter.value).subscribe((users: any) => {
			this.users = users.items;
			this.drawChart();
		});
	}

	private drawChart = () => {
		this.users.forEach(async (user, key) => {
			const u = await this.usersService.getUser(user.login);
			user.followers = u.followers;
			
			if (key === (this.users.length - 1)) this.chart = true;
		});
	}
}
