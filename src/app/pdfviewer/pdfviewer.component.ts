import { Component } from '@angular/core';

@Component({
  selector: 'app-pdfviewer',
  templateUrl: './pdfviewer.component.html',
  styleUrls: ['./pdfviewer.component.css']
})
export class PdfviewerComponent {

  

 
  //blob = this.Base64ToBlob(this.data, 'application/pdf');
  //blobUrl = URL.createObjectURL(this.blob)

  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";


  // Base64ToBlob(bdata, contenttype='', sliceSize=512){
  //   const byteCharactors = atob(bdata);
  //   const byteArrays =[];

  //   for(let offset =0; offset<byteCharactors.length; offset+=sliceSize ) {
  //     const slice = byteCharactors.slice(offset, offset + sliceSize);
  //     const byteNumbers = new Array(slice.length);

  //     for(let i = 0; i<slice.length; i++){
  //       byteNumbers[i] = slice.charCodeAt(i);
  //     }

  //     const byteArray = new Uint8Array(byteNumbers);
  //     byteArrays.push(byteArray);
  //   }

  //   const blob = new Blob(byteArrays, {type: contenttype});
  //   return blob;
  // }
}
