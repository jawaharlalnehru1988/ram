
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ApiService } from 'src/app/services/api.service';


@Component({
  standalone: true,
  imports: [MatFormFieldModule, MatDialogModule, FormsModule, ReactiveFormsModule, MatIconModule],
  selector: 'app-kirtan-dialog',
  templateUrl: './kirtan-dialog.component.html',
  styleUrls: ['./kirtan-dialog.component.css']
})
export class KirtanDialogComponent implements OnInit {

  mritangaForm! : FormGroup;
  data: any;
  constructor( private api: ApiService, private fb: FormBuilder,  @Inject(MAT_DIALOG_DATA) public editData: any, private dialogRef: MatDialogRef<KirtanDialogComponent>) { }

  ngOnInit(): void {
    this.mritangaForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      youtubeId: ['', Validators.required],
      detail: ['', Validators.required]
    });
    this.editdata();
    console.log(this.editData.message);
    this.data = this.editData;
  }
editdata(){
  if(this.editData && this.editData.routerName === 'arati-songs'){   
    // this.actionBtn = "Update";
    this.mritangaForm.controls['title'].setValue(this.editData.title);
    this.mritangaForm.controls['author'].setValue(this.editData.name);
    this.mritangaForm.controls['youtubeId'].setValue(this.editData.youLink);
    this.mritangaForm.controls['detail'].setValue(this.editData.timing);
    
  } else { 
    this.mritangaForm.controls['title'].setValue(this.editData.title);
    this.mritangaForm.controls['author'].setValue(this.editData.author);
    this.mritangaForm.controls['youtubeId'].setValue(this.editData.youtubeId);
    this.mritangaForm.controls['detail'].setValue(this.editData.detail);
  }
}

  saveForm(){
  if(!this.editData){
    if (this.mritangaForm.valid) {
      this.api.postLesson(this.mritangaForm.value).subscribe(
        {
          next:(response)=>{
            alert("added successfully");
            this.mritangaForm.reset();
            this.dialogRef.close("save");
          },
          error: ()=>{
            alert("error while adding the lessons")
          }
        })
  

    }
  } else {
  
  if (this.mritangaForm.valid) {
    this.api.updateLessons(this.mritangaForm.value, this.editData.id).subscribe({
      next:(res)=>{
        alert("product has been updated");
        this.mritangaForm.reset();
        this.dialogRef.close("update");
      },
      error:()=>{
        alert("Error while updating the record");
      }
    });
        
  }
    
  }
}
}


  

