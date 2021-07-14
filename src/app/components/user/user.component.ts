import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

	private login: any = '';
	public user: any = {};

	constructor(private route: ActivatedRoute, private usersService: UsersService) { }

	ngOnInit(): void {
		this.login = this.route.snapshot.paramMap.get('login');
		this.getUser();
	}

	private getUser = async () => {
		this.user = await this.usersService.getUser(this.login);
	}

}
