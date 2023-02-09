import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-kirtan-dialog',
  templateUrl: './kirtan-dialog.component.html',
  styleUrls: ['./kirtan-dialog.component.css']
})
export class KirtanDialogComponent implements OnInit {
  constructor( private api: ApiService, private fb: FormBuilder,  @Inject(MAT_DIALOG_DATA) public editData: any, private dialogRef: MatDialogRef<KirtanDialogComponent>) { }
    mritangaForm! : FormGroup;

  ngOnInit(): void {
    this.mritangaForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      youtubeId: ['', Validators.required],
      detail: ['', Validators.required]
    });
    console.log(this.editData);
    if(this.editData){
      this.mritangaForm.controls['title'].setValue(this.editData.title);
      this.mritangaForm.controls['author'].setValue(this.editData.author);
      this.mritangaForm.controls['youtubeId'].setValue(this.editData.youtubeId);
      this.mritangaForm.controls['detail'].setValue(this.editData.detail);
    }
    
  }
  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
  saveForm(){
    if (this.mritangaForm.valid) {
      this.api.postLesson(this.mritangaForm.value).subscribe(
        {
          next:(response)=>{
            alert("added successfully");
            this.mritangaForm.reset();
            this.dialogRef.close("our form is saved");
          },
          error: ()=>{
            alert("error while adding the lessons")
          }
        })
      
    }
    
  }
}
