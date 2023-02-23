import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { getPopperClassPlacement } from '@ng-bootstrap/ng-bootstrap/util/positioning';
import { Idata } from './dataset';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class StationlistService {
  baseurl=environment.apiUrl;


  // windspeed1:any;
    constructor(private http:HttpClient) {}
    getDashboard()
    {
      var url=this.baseurl +'';
      return this.http.get(url);
    }

    //api of table
    postDashboard(createresource: any)
    {
      var url=this.baseurl +'getStationWindData';
      return this.http.post(url, {});
    }

    //active inactive count 
    postactiveinactivestations(activeinactive: any)
    {
      var url=this.baseurl +'getActiveInactiveStationsCount';
      return this.http.post(url, {});

    }

    //api of active inactive station list
    postactiveinactivestationslist(activeinactivelist: any)
    {
      var url=this.baseurl +'getActiveInactiveStationsList';
      return this.http.post(url, {});
    }

    //api for charts

    postCharts(stationId: string)
    {
      let data = {
        station_id: stationId
      }
      var url=this.baseurl+'getStationDataForGraph';
      return this.http.post(url,data);
    }
//average table
    postInstantdata(Instantaneous:any){
      var url=this.baseurl +'getInstantaneousCount';
      return this.http.post(url, {});
    }


}




