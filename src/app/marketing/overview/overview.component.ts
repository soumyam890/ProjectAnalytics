import { Component, OnInit, Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

@Injectable()
export class OverViewComponent implements OnInit {
  title = 'Analytics';
  public summary: OverView[];
  private apiUrl: string = environment.apiUrl;
  constructor(http: HttpClient) {
    http.get<OverView[]>(this.apiUrl).subscribe(result => {
      this.summary = result;
    }, error => console.error(error));
  }
  ngOnInit() {
  }
}

interface OverView {
  amount: string;
  country: string;
  date: number;
  datess: number;
  difference: number;
  points: number;
  segment: number;
}
