import { Component} from '@angular/core';
import { AreaPicker} from 'dolphinng';
@Component({
    selector: 'area-picker-demo',
    templateUrl: './area-picker-demo.component.html',
    styleUrls: ['./area-picker-demo.component.less'],
  providers:[]
})
export class AreaPickerDemoComponent {
  areaPicker:AreaPicker=new AreaPicker();
  tabIndex:number=1;
  constructor(

  ){
    this.areaPicker.items = [{
      label: '省份',
      key: 'name',
      data: [],
      selected: (data)=> {
        setTimeout(()=>{
          this.areaPicker.setData([{
            name: '广州'
          },{
            name: '阳江'
          },{
            name: '佛山'
          }]);
        },500);
      }
    },{
      label: '城市',
      key: 'name',
      data: [],
      selected: (data)=> {
        setTimeout(()=>{
          this.areaPicker.setData([{
            name: '天河区'
          },{
            name: '海珠区'
          },{
            name: '番禺区'
          }]);
        },500);
      }
    },{
      label: '地区',
      key: 'name',
      data: [],
      selected: (data)=> {
      }
    }];
    this.areaPicker.init=()=>{
      setTimeout(()=>{
        this.areaPicker.setData([{
          name: '广东省'
        },{
          name: '广西壮族自治区'
        },{
          name: '日本省'
        }]);
      },500);
    };
    this.areaPicker.done=(values)=>{
      console.log(values);
    };
  }
  changTab(index:number){
    this.tabIndex=index;
  }

}
