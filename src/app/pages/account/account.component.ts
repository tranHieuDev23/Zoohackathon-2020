import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountPageComponent implements OnInit {
  public members: any[] = [
    { name: 'Trần Minh Hiếu', email: 'tranhieu23.code@outlook.com', image: 'https://users.soict.hust.edu.vn/sinno/competitions/zoohackathon/assets/images/untitled5-420x520-420x520.jpg' },
    { name: 'Trương Quang Khánh', email: 'khanh.tq170083@gmail.com', image: 'https://users.soict.hust.edu.vn/sinno/competitions/zoohackathon/assets/images/untitled6-420x520-420x520.jpg' },
    { name: 'Trương Ngọc Giang', email: 'truongngocgiang99@gmail.com', image: 'https://users.soict.hust.edu.vn/sinno/competitions/zoohackathon/assets/images/untitled3-420x520.jpg' },
    { name: 'Vũ Đức Nhị', email: 'vdn1999bxvp@gmail.com', image: 'https://users.soict.hust.edu.vn/sinno/competitions/zoohackathon/assets/images/untitled2-420x520-420x520.jpg' },
    { name: 'Trần Đình Hùng', email: 'dinhhungt1k24@gmail.com', image: 'https://users.soict.hust.edu.vn/sinno/competitions/zoohackathon/assets/images/untitled-420x520.jpg' },
    { name: 'Mai Đặng Quân Anh', email: 'anhmdq@gmail.com', image: 'https://users.soict.hust.edu.vn/sinno/competitions/zoohackathon/assets/images/untitled4-420x520-420x520.jpg' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
