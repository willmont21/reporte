import { Component, OnInit, ViewChild } from '@angular/core';
import { Reporte } from '../../models/reporte';
import { DxFileUploaderModule, DxButtonModule } from "devextreme-angular";
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ReporetesService } from '../../service/reporetes.service';
import { Router } from '@angular/router'
import * as moment from 'moment';

@Component({
  selector: 'app-carga-archivos',
  templateUrl: './carga-archivos.component.html',
  styleUrls: ['./carga-archivos.component.css'],
  providers: [DatePipe]
})
export class CargaArchivosComponent {

  data: Reporte[] = [];

  constructor(private reportes: ReporetesService,
    private router: Router, private datePipe: DatePipe) { }
  title = 'Angular7-readCSV';



  public records: any[] = [];
  @ViewChild('csvReader') csvReader: any;

  uploadListener($event: any): void {

    let text = [];
    let files = $event.srcElement.files;

    if (this.isValidCSVFile(files[0])) {

      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);

        let headersRow = this.getHeaderArray(csvRecordsArray);
        this.data = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);

      };

      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };

    } else {
      alert("Please import valid .csv file.");
      this.fileReset();
    }
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];
    for (let i = 1; i < csvRecordsArray.length; i++) {
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');
      if (curruntRecord.length == headerLength) {
        let vari: String = curruntRecord[5].trim().slice(1, -1);
        let printT: number = parseInt(curruntRecord[5].trim().slice(1, -1));
        let copyT: number = parseInt(curruntRecord[6].trim().slice(1, -1));
        let scanT: number = parseInt(curruntRecord[7].trim().slice(1, -1));
        let printC: number = parseInt(curruntRecord[8].trim().slice(1, -1));
        let printBw: number = parseInt(curruntRecord[13].trim().slice(1, -1));
        let copyC: number = parseInt(curruntRecord[14].trim().slice(1, -1));
        let copyBw: number = parseInt(curruntRecord[19].trim().slice(1, -1));
        let fecha = moment(curruntRecord[37].trim().slice(1, -1));

        console.log(fecha.format('YYYY-MM-DD'));
        //let stamp = new Date(curruntRecord[37].trim().slice(1, -1));
        let stamp = fecha.format('YYYY-MM-DD');
        //let fecha: Date = new Date(stamp. toDateString());
        let csvRecord: Reporte = new Reporte(
          curruntRecord[0].trim().slice(1, -1),
          curruntRecord[1].trim().slice(1, -1),
          curruntRecord[2].trim().slice(1, -1),
          curruntRecord[3].trim().slice(1, -1),
          curruntRecord[4].trim().slice(1, -1),
          this.validNaN(printT),
          this.validNaN(copyT),
          this.validNaN(scanT),
          this.validNaN(printC),
          this.validNaN(printBw),
          this.validNaN(copyC),
          this.validNaN(copyBw),
          stamp,
          1
        )
          ;
        csvArr.push(csvRecord);
        //console.log(csvArr)
      }
    }
    this.validNaN(csvArr)
    //console.log(csvArr)
    return csvArr;
  }
  validNaN(datos: any) {

    if (isNaN(datos)) {
      datos = 0;

    }
    return datos
  }

  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  fileReset() {
    this.csvReader.nativeElement.value = "";
    this.records = [];
  }

  onSubmint() {
    for (let i = 0; i < this.data.length; i++) {
      console.log(this.data[i])
      this.reportes.cargarReportes(this.data[i])
        .subscribe(
          res => {
            console.log(res + "guardados")
          },
          err => console.log(err))
    }

  }

}







