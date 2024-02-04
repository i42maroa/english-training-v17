import { NgModule } from '@angular/core';
import { NewWordModalComponent } from './word-operations/new/new.component';
import { ModifyWordModalComponent } from './word-operations/modify/modify.component';
import { DeleteWordModalComponent } from './word-operations/delete/delete.component';
import { NewTranslationModalComponent } from './translation-operations/new/new.component';
import { ModifyTranslationModalComponent } from './translation-operations/modify/modify.component';
import { DeleteTranslationModalComponent } from './translation-operations/delete/delete.component';
import { NewExampleModalComponent } from './example-operations/new/new.component';
import { ModifyExampleModalComponent } from './example-operations/modify/modify.component';
import { DeleteExampleModalComponent } from './example-operations/delete/delete.component';


@NgModule({
  declarations: [],
  imports: [
    NewWordModalComponent,
    ModifyWordModalComponent,
    DeleteWordModalComponent,
    NewTranslationModalComponent,
    ModifyTranslationModalComponent,
    DeleteTranslationModalComponent,
    NewExampleModalComponent,
    ModifyExampleModalComponent,
    DeleteExampleModalComponent
  ],
  exports: [
    NewWordModalComponent,
    ModifyWordModalComponent,
    DeleteWordModalComponent,
    NewTranslationModalComponent,
    ModifyTranslationModalComponent,
    DeleteTranslationModalComponent,
    NewExampleModalComponent,
    ModifyExampleModalComponent,
    DeleteExampleModalComponent
  ]
})
export class TemplatesModalModule { }
