import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from './button/button.module';
import { ProductCardModule } from './product-card/product-card.module';
import { MenuModule } from './menu/menu.module';
import { DropdownMenuModule } from './dropdown-menu/dropdown-menu.module';
import { BageModule } from './product-card/bage/bage.module';
import { PopupCartModule } from './catalog/popup-cart/popup-cart.module';
import { ToggleModule } from './toggle/toggle.module';
import { AppComponent, NzDemoTableBasicComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';


import { registerLocaleData, CommonModule } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { SearchModule } from './search/search.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
registerLocaleData (localeRu, 'ru');


import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';


import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NavbarComponent } from './navbar.component';
import { NgxErrorModule } from './ngx-error/ngx-error.module';


const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};

const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    NavbarComponent,
    NzDemoTableBasicComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    ProductCardModule,
    MenuModule,
    DropdownMenuModule,
    BageModule,
    PopupCartModule,
    ToggleModule,
    CommonModule,
    AppRoutingModule,
    SearchModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzTableModule,
    NzButtonModule,
    DragDropModule,
    ScrollingModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,
    NzInputModule,
    NzIconModule,
    HttpClientModule,
    FormsModule,
    NgxErrorModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'ru' }, { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons }],
  bootstrap: [AppComponent]
})
export class AppModule { }
