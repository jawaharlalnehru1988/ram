import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {
  acharyaFormGroup!: FormGroup;
  constructor(private formbuilder: FormBuilder, private httpClient: HttpClient, private dialogRef: MatDialogRef<AddDialogComponent>, @Inject(MAT_DIALOG_DATA) public editData:any) { }

  ngOnInit(): void {
    this.acharyaFormGroup = this.formbuilder.group({
      id: ['', Validators.required],
      acharyaName: ['', Validators.required],
      photo: ['', Validators.required],
      details: ['', Validators.required]
    });
    // console.log(this.editData);
    if(this.editData){
      this.acharyaFormGroup.controls['id'].setValue(this.editData.id);
      this.acharyaFormGroup.controls['acharyaName'].setValue(this.editData.acharyaName);
      this.acharyaFormGroup.controls['photo'].setValue(this.editData.photo);
      this.acharyaFormGroup.controls['details'].setValue(this.editData.details);
    } 
  }
  addDetails(){
  if(!this.editData){
    this.httpClient.post('https://sheetdb.io/api/v1/ufofhn680ebn3?sheet=guruParampara', this.acharyaFormGroup.value).subscribe({
      next:((res:any)=>{
        console.log("successfully added", res);
        this.acharyaFormGroup.reset();
        this.dialogRef.close()
      }), 
      error: (err)=>{
        console.log('error while adding the details');
        
      }
    })
  } else {
    this.httpClient.put<any>('https://sheetdb.io/api/v1/ufofhn680ebn3?sheet=guruParampara', this.acharyaFormGroup.value)
  }
  }
}
