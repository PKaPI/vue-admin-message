<template>
  <div>
    <el-date-picker
      v-model="value1"
      type="daterange"
      @change="onHandleChangeDate"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"

    ></el-date-picker>
    <p>数据分析</p>
    <el-table :data="tableData" height="250" border style="width: 100%" :cell-class-name="cellClassName" @cell-click="cellClick" @cell-mouse-enter="cellMouseEnter">
      <el-table-column prop="a1" label="序号" width="180"></el-table-column>
      <el-table-column prop="a2" label="负责科目" width="180"></el-table-column>
      <el-table-column prop="a3" label="姓名" width="180"></el-table-column>
      <el-table-column prop="a4" label="9:00-10:00" :formatter="formatter"></el-table-column>
      <el-table-column prop="a5" label="9:00-10:00" :formatter="formatter"></el-table-column>
      <el-table-column prop="a6" label="9:00-10:00" :formatter="formatter"></el-table-column>
      <el-table-column prop="a7" label="9:00-10:00" :formatter="formatter"></el-table-column>
      <el-table-column prop="a8" label="9:00-10:00" :formatter="formatter"></el-table-column>
      <el-table-column prop="a9" label="9:00-10:00" :formatter="formatter"></el-table-column>
      <el-table-column prop="a10" label="9:00-10:00":formatter="formatter"></el-table-column>
      <el-table-column prop="a11" label="9:00-10:00":formatter="formatter"></el-table-column>
      <el-table-column prop="a12" label="9:00-10:00":formatter="formatter"></el-table-column>
      <el-table-column prop="a13" label="9:00-10:00":formatter="formatter"></el-table-column>
    </el-table>
    <div class="block">
        <span class="demonstration">折叠展示Tag</span>
        <el-cascader
          :options="options"
          :props="props"
          collapse-tags
          clearable></el-cascader>
      </div>
      <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>
<script>
import moment from 'moment';
import PopoverConfirm from './popoverConfirm';
export default {
  data() {
    return {
      value1: [],
      visible:false,
      props: { multiple: true },
        options: [{
          value: 1,
          label: '东南',
          children: [{
            value: 2,
            label: '上海',
            children: [
              { value: 3, label: '普陀' },
              { value: 4, label: '黄埔' },
              { value: 5, label: '徐汇' }
            ]
          }, {
            value: 7,
            label: '江苏',
            children: [
              { value: 8, label: '南京' },
              { value: 9, label: '苏州' },
              { value: 10, label: '无锡' }
            ]
          }, {
            value: 12,
            label: '浙江',
            children: [
              { value: 13, label: '杭州' },
              { value: 14, label: '宁波' },
              { value: 15, label: '嘉兴' }
            ]
          }]
        }, {
          value: 17,
          label: '西北',
          children: [{
            value: 18,
            label: '陕西',
            children: [
              { value: 19, label: '西安' },
              { value: 20, label: '延安' }
            ]
          }, {
            value: 21,
            label: '新疆维吾尔族自治区',
            children: [
              { value: 22, label: '乌鲁木齐' },
              { value: 23, label: '克拉玛依' }
            ]
          }]
        }],
      tableData: [
        {
          id:1,
          a1: 1,
          a2: '少儿编程',
          a3: "王小虎",
          a4: '班',
          a5: '班',
          a6: '班',
          a7: '班',
          a8: '班',
          a9: '班',
          a10: '班',
          a11: '班',
          a12: '班',
          a13: '班',
        },
        {
          id:2,
          a1: 2,
          a2: '少儿编程',
          a3: "王小虎",
          a4: '班',
          a5: '班',
          a6: '班',
          a7: '班',
          a8: '班',
          a9: '班',
          a10: '班',
          a11: '班',
          a12: '班',
          a13: '班',
        }
      ],
      title:"12:30~13:00",
      content:'(再次点击确认时段)',
      currentRowCell:{
          rowId:'',
          children:[]
      }
    };
  },
  methods: {
      onHandleChangeDate(value){
          let dateArr = [];
          let start = moment(value[0]).format('YYYY-MM-DD');
          let end = moment(value[1]).format('YYYY-MM-DD');
          dateArr = this.getBetweenDateStr(start, end);
          let date = dateArr.map(item=>{
              return {
                  date:item,
                  moment:moment(item).weekday()
              }
          });
      },
      handelCancle(){
        console.log('handelCancle')
      },
      onHandleOk() {
        console.log('onHandleOk')
      },
      formatter(row, column, cellValue, index){
          return (<PopoverConfirm title={this.title} content={this.content} on-onCancel={this.handelCancle} on-onOk={this.onHandleOk}>
          <div class="plan">{cellValue}</div>
          </PopoverConfirm>)
      },
      getBetweenDateStr(start,end){
            var result = [];
            var beginDay = start.split("-");
            var endDay = end.split("-");
            var diffDay = new Date();
            var dateList = new Array;
            var i = 0;
            diffDay.setDate(beginDay[2]);
            diffDay.setMonth(beginDay[1]-1);
            diffDay.setFullYear(beginDay[0]);
            result.push(start);
            while(i == 0){
                var countDay = diffDay.getTime() + 24 * 60 * 60 * 1000;
                diffDay.setTime(countDay);
                dateList[2] = diffDay.getDate();
                dateList[1] = diffDay.getMonth() + 1;
                dateList[0] = diffDay.getFullYear();
                if(String(dateList[1]).length == 1){dateList[1] = "0"+dateList[1]};
                if(String(dateList[2]).length == 1){dateList[2] = "0"+dateList[2]};
                result.push(dateList[0]+"-"+dateList[1]+"-"+dateList[2]);
                if(dateList[0] == endDay[0] && dateList[1] == endDay[1] && dateList[2] == endDay[2]){ i = 1;
                }
            };
            return result;
        },
    cellClassName({row, column, rowIndex, columnIndex}) {
      
    },
    cellClick(row, column, cell, event) {
       const {rowId="",children=[]} = this.currentRowCell;
       let item = {
                  id:row.id,
                  property:column.property,
                  label:column.label
       }
       if(rowId!=row.id){
           this.title=column.label;
           this.content='请再次确认！';
            this.currentRowCell = {
                rowId:row.id,
                children:[item]
            }
        } else {
            let newChildren = [...children,item];
            if(newChildren.length>2){
                 this.title=column.label;
                 this.content='请再次确认！';
                  this.currentRowCell={
                      rowId:row.id,
                      children:[item]
                  }
            }else{
              this.title=newChildren[0].label+'~'+newChildren[1].label;
              this.content='';
              this.currentRowCell={
                      rowId:row.id,
                      children:newChildren
              }
            }
            
        }
        
    },
    cellMouseEnter(row, column, cell, event) {
        // console.log('cellMouseEnter',row, column, cell, event)
    }
  }
};
</script>
<style>
    .plan {
       cursor: pointer;
    }
</style>