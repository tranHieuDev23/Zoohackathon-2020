import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MapiResponse } from '@mapbox/mapbox-sdk/lib/classes/mapi-response';
import { LngLatBoundsLike, LngLatLike } from 'mapbox-gl';
import { NgGeocodeService } from 'src/app/services/geocode.service';
import { IssueService } from 'src/app/services/issue.service';
import { environment } from 'src/environments/environment';
import { Issue } from 'src/models/issue';
import { MapComponent } from 'ngx-mapbox-gl';
import { IssueStatus, getIssueStatusColor, getIssueStatusString } from 'src/models/issue-status';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapPageComponent implements OnInit {
  @ViewChild(MapComponent) map: MapComponent;
  public searchQuery: string = '';
  public style: string = environment.mapbox.style;
  public zoom: number = environment.mapbox.initialZoomLevel;
  public center: LngLatLike = [0, 0];
  public issues: Issue[] = [];
  public showPopup: boolean[] = [];
  public issuesWithPopup: Issue[] = [];

  constructor(
    private geocode: NgGeocodeService,
    private issueService: IssueService,
  ) { }

  async ngOnInit() {
    const currentLocation = await this.geocode.getCurrentLocation();
    this.issues = await this.issueService.getAllIssue();
    this.showPopup = new Array(this.issues.length);
    this.moveTo(currentLocation);
  }

  async search() {
    const trimmedQuery = this.searchQuery.trim();
    if (trimmedQuery.length === 0) {
      return;
    }
    const result: MapiResponse = await this.geocode.searchLocation(trimmedQuery, this.map.center);
    const locations: any[] = result.body.features;
    if (locations.length === 0) {
      return;
    }
    const match = locations[0];
    console.log(match);
    if (match.bbox) {
      this.moveToFit(match.bbox);
    } else {
      this.moveTo(match.center);
    }
  }

  async toCurrentLocation() {
    const currentLocation = await this.geocode.getCurrentLocation();
    this.moveTo(currentLocation);
    this.map.zoom = [environment.mapbox.initialZoomLevel];
  }

  hoverMarkerIn(id: number) {
    this.showPopup[id] = true;
    console.log(id);
    this.issuesWithPopup = this.issues.filter((item, index) => this.showPopup[index]);
  }

  hoverMarkerOut(id: number) {
    this.showPopup[id] = false;
    this.issuesWithPopup = this.issues.filter((item, index) => this.showPopup[index]);
  }

  getIssueStatusColor(status: IssueStatus): string {
    return getIssueStatusColor(status);
  }

  getIssueStatusString(status: IssueStatus): string {
    return getIssueStatusString(status);
  }

  private moveToFit(bbox: LngLatBoundsLike) {
    this.map.fitBounds = bbox;
  }

  private moveTo(center: LngLatLike) {
    this.center = center;
  }
}
