import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) { }
  events = []
  user: object = {}

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.homeService.getAllEvents().subscribe(
      (result: any[]) => {
        this.events = result;
        console.log(result)
      }
    )
  }

  postFavorite(event: any) {
    console.log(event.target.value);
    const fav = {
      id_event: event.target.value,
      id_user: this.user
    }
  }
  edit(event: any) {
    console.log(event.target.value);
    sessionStorage.setItem("id", event.target.value)
    location.href = "/modif";
  }
  delet(event: any) {
    event.preventDefault();
    console.log(event.target.value);
    let id = event.target.value;
    this.homeService.deleteEvent(id).subscribe(response => {
       this.events.filter((item) => {return item.id !== id});
       location.href = "modif";
    });
  }
  handleType(event: any, value: any) {
    event.preventDefault()
    console.log(value)
    // axios.get("http://localhost:3000/api/event/selectAll").then((result) => {
    //   this.events =  result.data.filter((event) => {
    //    return event.type == value;
    //   });
    //     console.log(this.events)
    this.homeService.getAllEvents().subscribe(
      (result: any[]) => {
        this.events =  result.filter((event) => {
      }
    )
    // });

  }

}
function result(result: any) {
  throw new Error('Function not implemented.');
}

function id(id: any) {
  throw new Error('Function not implemented.');
}

