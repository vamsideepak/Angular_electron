import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-carddata',
  templateUrl: './carddata.component.html',
  styleUrls: ['./carddata.component.css']
})
export class CarddataComponent implements OnInit, OnChanges {

  @Input()  public Carddata  ;

  constructor() { }

  printDiv() {
    // var printContents = document.getElementById(divName).innerHTML;
    // var originalContents = document.body.innerHTML;
    // document.body.innerHTML = printContents;
    // this.electronService.ipcRenderer.send("printPDF", printContents);
     window.print();
   //  document.body.innerHTML = originalContents;
}

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      console.log('data',this.Carddata);
    }
  }

}
