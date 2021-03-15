import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExportToExcelModule } from '../export-to-excel/export-to-excel.module';
import { UserComponent } from './user.component';
@NgModule({
    declarations: [UserComponent],
    imports: [
        BrowserModule,
        ExportToExcelModule
    ],
    exports: [UserComponent]
})
export class UserModule {
}