import {Component, Input, OnInit} from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
 selector: 'app-export-to-excel',
 templateUrl: './export-to-excel.component.html',
 styleUrls: ['./export-to-excel.component.css']
})
export class ExportToExcelComponent implements OnInit {
 private static FILE_NAME_SUFFIX = '_Report.xlsx';
 /**
 * Data that will be exported to excel
 */
 @Input()
 public data: Array<any> = [];

 @Input()
 public pageName!: string;

 @Input()
 public displayedRows!: Array<any>;
 /**
 * Name of the file to be downloaded
 */


 constructor() {
 }

 ngOnInit(): void {
 }

 public exportToExcel(): void {
 // table id is passed over here
 const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.displayedRows);

 // generate workbook and add the worksheet
 const wb: XLSX.WorkBook = XLSX.utils.book_new();
 XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

 // save to file
 XLSX.writeFile(wb, 'userData.xlsx');

 }

}