import { OnInit, Component } from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';
import { Http } from '@angular/http';

@Component({
  templateUrl: './getting-started.component.html',
})
export class TranslateGettingStartedComponent implements OnInit {

  showComponent: boolean = false;
  rightSidebarLinks: any = [{ "id": "getting-started", "title": "Quick Start", "subLink": null }, { "id": "getting-started", "title": "Quick Start", "subLink": null }];
  pageTitle: any = this.rightSidebarLinks[0];
  titleData: any = { codeContent: {} };
  mainTab: string = "installation"

  constructor(private applicationBroadCaster: ApplicationBroadcaster, private http: Http
  ) {
    this.applicationBroadCaster.topSubscriber.subscribe(t => {
      this.titleData = t;
    })
  }

  ngOnInit(): void {
    document.title = "Getting Started Translate - RxWeb Docs";
    this.showComponent = true;
    this.applicationBroadCaster.topSubject.next(this.pageTitle);
  }

}