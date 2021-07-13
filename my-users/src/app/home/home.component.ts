import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService],
})
export class HomeComponent implements OnInit {

  public nameList;
  public selectedPageSize = 3;
  public pageSizeArray;
  public nameFilterQuery;
  public userDetails;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getAllNamesList();
    this.getPageSizeArray();
  }

  getPageSizeArray() {
    for(let i=1; i<10; i++){
      this.pageSizeArray.push(i);
    }
  }

  getAllNamesList() {
    this.homeService.getAllNamesList(this.selectedPageSize).subscribe(data => {
      this.nameList = data;
    });
  }

  getFilteredNameList() {
    this.nameList = this.nameList.filter( currentName => 
      currentName.firstName == this.nameFilterQuery || currentName.lastName  == this.nameFilterQuery
    );
  }

  openAddUserModal() {
    document.getElementById("addUserModal").style.setProperty('display', 'block');
  }

  hideAddUserModal() {
    document.getElementById("addUserModal").style.setProperty('display', 'none');
  }
  
  addNewUser() {
    this.nameList.push(this.userDetails);
  }

}
