import { Component, OnInit } from '@angular/core';
import { LOREM_IPSUM } from 'src/environments/constants';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsPageComponent implements OnInit {
  public notifications: { title: string, description: string, icon: string }[] = [
    {
      title: 'A new issue related to your report was raised',
      description: LOREM_IPSUM,
      icon: 'exclamation-circle'
    },
    {
      title: 'Issue "The pollution of Tô Lịch river" was verified and reported to local authorities',
      description: LOREM_IPSUM,
      icon: 'send'
    },
    {
      title: 'Issue "The pollution of Tô Lịch river" is now under investigation by local authorities',
      description: LOREM_IPSUM,
      icon: 'search'
    },
    {
      title: 'Issue "The pollution of Tô Lịch river" was resolve. See how.',
      description: LOREM_IPSUM,
      icon: 'check'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
