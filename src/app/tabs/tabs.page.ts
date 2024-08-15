import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  clientName!: string;
  constructor() {}
  ngOnInit() {
    this.clientName = "Joe";
  }
}
