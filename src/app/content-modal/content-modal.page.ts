import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-content-modal',
  templateUrl: './content-modal.page.html',
  styleUrls: ['./content-modal.page.scss'],
})
export class ContentModalPage implements OnInit {
  address="170 Kessels Rd, Nathan QLD 4111";
  content:string;
  routeParamsSubscription;
  image = "";
  description = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //this.content=
    this.routeParamsSubscription = this.route.params.subscribe(params => {
      this.content = params['content'];
    });
    this.description=this.content;
    console.log(this.content);
    if(this.content == "Location"){
      this.image = "/assets/location.PNG";
    }else if(this.content == "Twitter") {
      this.image = "/assets/twitter.PNG";
    }
  }

}
