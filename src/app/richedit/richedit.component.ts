import { create, createOptions, RichEdit, Options, RibbonTabType, FileTabItemId, HomeTabItemId, RibbonItem,
   RibbonSubMenuItem, RibbonMenuItem, RibbonButtonItem, FirstLevelRibbonItem, RibbonTab } from 'devexpress-richedit';
import { AfterViewInit, Component, ElementRef, OnDestroy, Output, EventEmitter, OnInit } from '@angular/core';
import { RicheditService } from 'src/app/_services/richedit.service'
import { Observable, map, observable, of } from 'rxjs';

@Component({
  selector: 'app-richedit',
  template: '<div></div>  <button (click)="sendData()" >Send</button>',
  styleUrls: ['./richedit.component.css']
})

export class RicheditComponent implements AfterViewInit, OnDestroy, OnInit{
  private rich: RichEdit | null = null;
  exportVal : any;
  comboVal : any;


  @Output() pComponent: EventEmitter<any> = new EventEmitter();

  constructor(private element: ElementRef, private rchEditService: RicheditService) { 
  }
 
  ngOnInit(): void{
  }
  

  ribbonCustomization(options: Options) {

    // remove items
    // const fileTab = options.ribbon.getTab(RibbonTabType.File);
    // fileTab!.removeItem(FileTabItemId.OpenDocument);
    // fileTab!.removeItem(FileTabItemId.CreateNewDocument);
    // fileTab!.removeItem(FileTabItemId.PrintDocument);
    // fileTab!.removeItem(FileTabItemId.ExportDocument);
  

    const homeTab = options.ribbon.getTab(RibbonTabType.Home);
    homeTab!.removeItem(HomeTabItemId.Copy);
    homeTab!.removeItem(HomeTabItemId.Cut);
    homeTab!.removeItem(HomeTabItemId.Paste);

    homeTab!.removeItem(HomeTabItemId.DecreaseFontSize);
    homeTab!.removeItem(HomeTabItemId.IncreaseFontSize);

    homeTab!.removeItem(HomeTabItemId.ChangeStyle);

    // remove an element from a drop-down list
    // fileTab!.removeItem(FileTabItemId.DownloadRtf);
    // fileTab!.removeItem(FileTabItemId.DownloadTxt);

    // create an item based on the default item options to allow users to download documents in docx format only
    // const downloadDocxItem = fileTab!.getItem(FileTabItemId.DownloadDocx) as RibbonSubMenuItem;
    // const downloadItem = fileTab!.getItem(FileTabItemId.Download) as RibbonMenuItem;
    // fileTab!.removeItem(FileTabItemId.Download);
    // // icons: https://js.devexpress.com/Documentation/Guide/Themes_and_Styles/Icons/
    // fileTab!.insertItem(new RibbonButtonItem(downloadDocxItem.id, downloadItem.text, {icon: downloadItem.icon, showText: true}), 2);

    // move items to new tab
    // const findElem: RibbonItem = homeTab!.getItem(HomeTabItemId.Find)!;
    // const replaceElem: RibbonItem = homeTab!.getItem(HomeTabItemId.Replace)!;
    // // homeTab!.removeItem(findElem);
    // // homeTab!.removeItem(replaceElem);
  

    // // remove tab
    options.ribbon.removeTab(RibbonTabType.File);
    options.ribbon.removeTab(RibbonTabType.References);
    options.ribbon.removeTab(RibbonTabType.PageLayout);
    options.ribbon.removeTab(RibbonTabType.MailMerge);
    options.ribbon.removeTab(RibbonTabType.Insert);
    options.ribbon.removeTab(RibbonTabType.View);

    // // insert tab
    // const findTabId = 'FindTabId';
    // const newFindTab = options.ribbon.insertTab(new RibbonTab('Find', findTabId, [findElem as FirstLevelRibbonItem, replaceElem as FirstLevelRibbonItem]), 2);

    // // add custom item
    // const findInGoogleId = 'FindInGoogleId';
    // newFindTab.insertItem(new RibbonButtonItem(findInGoogleId, 'Find in Google', { beginGroup: true }));
    // options.events.customCommandExecuted = (s, e) => {
    //   if (e.commandName === findInGoogleId) {
    //     const selectedInterval = s.selection.intervals[0];
    //     if (selectedInterval.length > 0) {
    //       const selectedText = s.selection.activeSubDocument.getText(selectedInterval);
    //       window.open(`https://www.google.com/search?q=${selectedText}`, '_blank');
    //     }
    //   }
    // };


  
  }  
    

  ngAfterViewInit(): void {
    const options = createOptions();
    this.ribbonCustomization(options);
    options.width = '1000px';
    options.height = '300px';
    //options.ribbon.visible=false;  //show hide ribbons

    this.rich = create(this.element.nativeElement.firstElementChild, options);
  
  
    this.exportVal = options.events.pdfExporting = function(s,e) {
        e.handled = true;
        console.log(e.base64);
    };
  }


  ngOnDestroy() {
    if (this.rich) {
      this.rich.dispose();
      this.rich = null;
    }
  }

  sendData(){
    // this.rich.exportToBase64(e =>{
    //   console.log(e);
    // })

    this.rich.exportToFile(e=>{
      console.log(e)
    })
  }
 
  coverValue(){
    this.comboVal = this.rchEditService.getCoverList().subscribe({
       next: response => {
        console.log(response);
       },
       error: error=>console.log(error)
    });

    
  }

}