import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'ngx-shop-side-menu',
	templateUrl: './side-menu.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {


}


// В этом задании предлагаю сделать компонент меню выбора подкатегории товара. 
// Вам нужно сформирвать вложеный список категорий и подкатегорий. 
// Данные должны приходить из родительского компонента. 
// А так же обработать событие перехода на соответствующую подкатегорию. 
// Вам необходимо ознакомиться с документацией(README в папке модуля). 
// Также вы можете ознакомиться со скринкастами по данной теме.

