<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover" class="mgb20" style="height:252px;">
          <div class="user-info">
            <img src="../../assets/img/img.jpg" class="user-avator" alt>
            <div class="user-info-cont">
              <div class="user-info-name">{{name}}</div>
              <div>{{role}}</div>
            </div>
          </div>
          <div class="user-info-list">
            上次登录时间：
            <span>2018-01-01</span>
          </div>
          <div class="user-info-list">
            上次登录地点：
            <span>东莞</span>
          </div>
        </el-card>
        <el-card shadow="hover" style="height:252px;">
          <div slot="header" class="clearfix">
            <span>语言详情</span>
          </div>Vue
          <el-progress :percentage="71.3" color="#42b983"></el-progress>JavaScript
          <el-progress :percentage="24.1" color="#f1e05a"></el-progress>CSS
          <el-progress :percentage="3.7"></el-progress>HTML
          <el-progress :percentage="0.9" color="#f56c6c"></el-progress>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-row :gutter="20" class="mgb20">
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
              <div class="grid-content grid-con-1">
                <i class="el-icon-lx-people grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">1234</div>
                  <div>用户访问量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
              <div class="grid-content grid-con-2">
                <i class="el-icon-lx-notice grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">321</div>
                  <div>系统消息</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
              <div class="grid-content grid-con-3">
                <i class="el-icon-lx-goods grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">5000</div>
                  <div>数量</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-card shadow="hover" style="height:403px;">
          <div slot="header" class="clearfix">
            <span>待办事项</span>
            <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
          </div>
          <el-table
            :data="todoList"
            :show-header="false"
            height="304"
            style="width: 100%;font-size:14px;"
          >
            <el-table-column width="40">
              <template slot-scope="scope">
                <el-checkbox v-model="scope.row.status"></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <div
                  class="todo-item"
                  :class="{'todo-item-del': scope.row.status}"
                >{{scope.row.title}}</div>
              </template>
            </el-table-column>
            <el-table-column width="60">
              <template slot-scope="scope">
                <i class="el-icon-edit"></i>
                <i class="el-icon-delete"></i>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
          <schart
            ref="bar"
            class="schart"
            canvasId="bar"
            :data="data"
            type="bar"
            :options="options"
          ></schart>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <schart
            ref="line"
            class="schart"
            canvasId="line"
            :data="data"
            type="line"
            :options="options2"
          ></schart>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Schart from "vue-schart";
import shortid from "shortid";
const treeData = [
  {
    id: "1301",
    typeId: "13",
    value: "1",
    name: "一岁",
    parentId: "0",
    comment: "一岁",
    dictDetailList: [
      {
        id: "130128",
        typeId: "13",
        value: "28",
        name: "九个月",
        parentId: "1301",
        comment: "一岁-九个月",
        dictDetailList: null
      },
      {
        id: "130129",
        typeId: "13",
        value: "29",
        name: "十个月",
        parentId: "1301",
        comment: "一岁-十个月",
        dictDetailList: null
      },
      {
        id: "130130",
        typeId: "13",
        value: "30",
        name: "十一个月",
        parentId: "1301",
        comment: "一岁-十一个月",
        dictDetailList: null
      },
      {
        id: "130131",
        typeId: "13",
        value: "31",
        name: "十二个月",
        parentId: "1301",
        comment: "一岁-十二个月",
        dictDetailList: null
      },
      {
        id: "130120",
        typeId: "13",
        value: "20",
        name: "一个月",
        parentId: "1301",
        comment: "一岁-一个月",
        dictDetailList: null
      },
      {
        id: "130121",
        typeId: "13",
        value: "21",
        name: "二个月",
        parentId: "1301",
        comment: "一岁-二个月",
        dictDetailList: null
      },
      {
        id: "130122",
        typeId: "13",
        value: "22",
        name: "三个月",
        parentId: "1301",
        comment: "一岁-三个月",
        dictDetailList: null
      },
      {
        id: "130123",
        typeId: "13",
        value: "23",
        name: "四个月",
        parentId: "1301",
        comment: "一岁-四个月",
        dictDetailList: null
      },
      {
        id: "130124",
        typeId: "13",
        value: "24",
        name: "五个月",
        parentId: "1301",
        comment: "一岁-五个月",
        dictDetailList: null
      },
      {
        id: "130125",
        typeId: "13",
        value: "25",
        name: "六个月",
        parentId: "1301",
        comment: "一岁-六个月",
        dictDetailList: null
      },
      {
        id: "130126",
        typeId: "13",
        value: "26",
        name: "七个月",
        parentId: "1301",
        comment: "一岁-七个月",
        dictDetailList: null
      }
    ]
  },
  {
    id: "1302",
    typeId: "13",
    value: "2",
    name: "二岁",
    parentId: "0",
    comment: "二岁",
    dictDetailList: [
      {
        id: "130127",
        typeId: "13",
        value: "27",
        name: "八个月",
        parentId: "1302",
        comment: "一岁-八个月",
        dictDetailList: null
      },
      {
        id: "130232",
        typeId: "13",
        value: "32",
        name: "一个月",
        parentId: "1302",
        comment: "二岁-一个月",
        dictDetailList: null
      },
      {
        id: "130233",
        typeId: "13",
        value: "33",
        name: "二个月",
        parentId: "1302",
        comment: "二岁-二个月",
        dictDetailList: null
      },
      {
        id: "130234",
        typeId: "13",
        value: "34",
        name: "三个月",
        parentId: "1302",
        comment: "二岁-三个月",
        dictDetailList: null
      },
      {
        id: "130235",
        typeId: "13",
        value: "35",
        name: "四个月",
        parentId: "1302",
        comment: "二岁-四个月",
        dictDetailList: null
      },
      {
        id: "130236",
        typeId: "13",
        value: "36",
        name: "五个月",
        parentId: "1302",
        comment: "二岁-五个月",
        dictDetailList: null
      },
      {
        id: "130237",
        typeId: "13",
        value: "37",
        name: "六个月",
        parentId: "1302",
        comment: "二岁-六个月",
        dictDetailList: null
      },
      {
        id: "130238",
        typeId: "13",
        value: "38",
        name: "七个月",
        parentId: "1302",
        comment: "二岁-七个月",
        dictDetailList: null
      },
      {
        id: "130239",
        typeId: "13",
        value: "39",
        name: "八个月",
        parentId: "1302",
        comment: "二岁-八个月",
        dictDetailList: null
      },
      {
        id: "130240",
        typeId: "13",
        value: "40",
        name: "九个月",
        parentId: "1302",
        comment: "二岁-九个月",
        dictDetailList: null
      },
      {
        id: "130241",
        typeId: "13",
        value: "41",
        name: "十个月",
        parentId: "1302",
        comment: "二岁-十个月",
        dictDetailList: null
      },
      {
        id: "130242",
        typeId: "13",
        value: "42",
        name: "十一个月",
        parentId: "1302",
        comment: "二岁-十一个月",
        dictDetailList: null
      },
      {
        id: "130243",
        typeId: "13",
        value: "43",
        name: "十二个月",
        parentId: "1302",
        comment: "二岁-十二个月",
        dictDetailList: null
      }
    ]
  },
  {
    id: "1303",
    typeId: "13",
    value: "3",
    name: "三岁",
    parentId: "0",
    comment: "三岁",
    dictDetailList: [
      {
        id: "130344",
        typeId: "13",
        value: "44",
        name: "一个月",
        parentId: "1303",
        comment: "三岁-一个月",
        dictDetailList: null
      },
      {
        id: "130345",
        typeId: "13",
        value: "45",
        name: "二个月",
        parentId: "1303",
        comment: "三岁-二个月",
        dictDetailList: null
      },
      {
        id: "130346",
        typeId: "13",
        value: "46",
        name: "三个月",
        parentId: "1303",
        comment: "三岁-三个月",
        dictDetailList: null
      },
      {
        id: "130347",
        typeId: "13",
        value: "47",
        name: "四个月",
        parentId: "1303",
        comment: "三岁-四个月",
        dictDetailList: null
      },
      {
        id: "130348",
        typeId: "13",
        value: "48",
        name: "五个月",
        parentId: "1303",
        comment: "三岁-五个月",
        dictDetailList: null
      },
      {
        id: "130349",
        typeId: "13",
        value: "49",
        name: "六个月",
        parentId: "1303",
        comment: "三岁-六个月",
        dictDetailList: null
      },
      {
        id: "130350",
        typeId: "13",
        value: "50",
        name: "七个月",
        parentId: "1303",
        comment: "三岁-七个月",
        dictDetailList: null
      },
      {
        id: "130351",
        typeId: "13",
        value: "51",
        name: "八个月",
        parentId: "1303",
        comment: "三岁-八个月",
        dictDetailList: null
      },
      {
        id: "130352",
        typeId: "13",
        value: "52",
        name: "九个月",
        parentId: "1303",
        comment: "三岁-九个月",
        dictDetailList: null
      },
      {
        id: "130353",
        typeId: "13",
        value: "53",
        name: "十个月",
        parentId: "1303",
        comment: "三岁-十个月",
        dictDetailList: null
      },
      {
        id: "130354",
        typeId: "13",
        value: "54",
        name: "十一个月",
        parentId: "1303",
        comment: "三岁-十一个月",
        dictDetailList: null
      },
      {
        id: "130355",
        typeId: "13",
        value: "55",
        name: "十二个月",
        parentId: "1303",
        comment: "三岁-十二个月",
        dictDetailList: null
      }
    ]
  },
  {
    id: "1304",
    typeId: "13",
    value: "4",
    name: "四岁",
    parentId: "0",
    comment: "四岁",
    dictDetailList: [
      {
        id: "130456",
        typeId: "13",
        value: "56",
        name: "一个月",
        parentId: "1304",
        comment: "四岁-一个月",
        dictDetailList: null
      },
      {
        id: "130457",
        typeId: "13",
        value: "57",
        name: "二个月",
        parentId: "1304",
        comment: "四岁-二个月",
        dictDetailList: null
      },
      {
        id: "130458",
        typeId: "13",
        value: "58",
        name: "三个月",
        parentId: "1304",
        comment: "四岁-三个月",
        dictDetailList: null
      },
      {
        id: "130459",
        typeId: "13",
        value: "59",
        name: "四个月",
        parentId: "1304",
        comment: "四岁-四个月",
        dictDetailList: null
      },
      {
        id: "130460",
        typeId: "13",
        value: "60",
        name: "五个月",
        parentId: "1304",
        comment: "四岁-五个月",
        dictDetailList: null
      },
      {
        id: "130461",
        typeId: "13",
        value: "61",
        name: "六个月",
        parentId: "1304",
        comment: "四岁-六个月",
        dictDetailList: null
      },
      {
        id: "130462",
        typeId: "13",
        value: "62",
        name: "七个月",
        parentId: "1304",
        comment: "四岁-七个月",
        dictDetailList: null
      },
      {
        id: "130463",
        typeId: "13",
        value: "63",
        name: "八个月",
        parentId: "1304",
        comment: "四岁-八个月",
        dictDetailList: null
      },
      {
        id: "130464",
        typeId: "13",
        value: "64",
        name: "九个月",
        parentId: "1304",
        comment: "四岁-九个月",
        dictDetailList: null
      },
      {
        id: "130465",
        typeId: "13",
        value: "65",
        name: "十个月",
        parentId: "1304",
        comment: "四岁-十个月",
        dictDetailList: null
      },
      {
        id: "130466",
        typeId: "13",
        value: "66",
        name: "十一个月",
        parentId: "1304",
        comment: "四岁-十一个月",
        dictDetailList: null
      },
      {
        id: "130467",
        typeId: "13",
        value: "67",
        name: "十二个月",
        parentId: "1304",
        comment: "四岁-十二个月",
        dictDetailList: null
      }
    ]
  },
  {
    id: "1305",
    typeId: "13",
    value: "5",
    name: "幼儿园小班",
    parentId: "0",
    comment: "幼儿园小班",
    dictDetailList: null
  },
  {
    id: "1306",
    typeId: "13",
    value: "6",
    name: "幼儿园中班",
    parentId: "0",
    comment: "幼儿园中班",
    dictDetailList: null
  },
  {
    id: "1307",
    typeId: "13",
    value: "7",
    name: "幼儿园大班",
    parentId: "0",
    comment: "幼儿园大班",
    dictDetailList: null
  },
  {
    id: "1308",
    typeId: "13",
    value: "8",
    name: "一年级",
    parentId: "0",
    comment: "一年级",
    dictDetailList: null
  },
  {
    id: "1309",
    typeId: "13",
    value: "9",
    name: "二年级",
    parentId: "0",
    comment: "二年级",
    dictDetailList: null
  },
  {
    id: "1310",
    typeId: "13",
    value: "10",
    name: "三年级",
    parentId: "0",
    comment: "三年级",
    dictDetailList: null
  },
  {
    id: "1311",
    typeId: "13",
    value: "11",
    name: "四年级",
    parentId: "0",
    comment: "四年级",
    dictDetailList: null
  },
  {
    id: "1312",
    typeId: "13",
    value: "12",
    name: "五年级",
    parentId: "0",
    comment: "五年级",
    dictDetailList: null
  },
  {
    id: "1313",
    typeId: "13",
    value: "13",
    name: "六年级",
    parentId: "0",
    comment: "六年级",
    dictDetailList: null
  },
  {
    id: "1314",
    typeId: "13",
    value: "14",
    name: "七年级",
    parentId: "0",
    comment: "七年级",
    dictDetailList: null
  },
  {
    id: "1315",
    typeId: "13",
    value: "15",
    name: "八年级",
    parentId: "0",
    comment: "八年级",
    dictDetailList: null
  },
  {
    id: "1316",
    typeId: "13",
    value: "16",
    name: "九年级",
    parentId: "0",
    comment: "九年级",
    dictDetailList: null
  },
  {
    id: "1317",
    typeId: "13",
    value: "17",
    name: "高中一年级",
    parentId: "0",
    comment: "高中一年级",
    dictDetailList: null
  },
  {
    id: "1318",
    typeId: "13",
    value: "18",
    name: "高中二年级",
    parentId: "0",
    comment: "高中二年级",
    dictDetailList: null
  },
  {
    id: "1319",
    typeId: "13",
    value: "19",
    name: "高中三年级",
    parentId: "0",
    comment: "高中三年级",
    dictDetailList: null
  }
];
const getAllParents = (key, childName, tree, arrKeys = []) => {
  if (!key || tree.length == 0) {
    return [];
  }
  const getParentKey = (key, tree) => {
    let parentKey;
    for (let i = 0; i < tree.length; i++) {
      const node = tree[i];
      if (node[childName]) {
        if (
          node[childName].some(item => item.id.toString() === key.toString())
        ) {
          parentKey = node.id;
        } else if (getParentKey(key, node[childName])) {
          parentKey = getParentKey(key, node[childName]);
        }
      }
    }
    return parentKey;
  };
  const getParentKeys = key => {
    if (!key) {
      return;
    }
    arrKeys.unshift(key);
    const parent = getParentKey(key, tree);
    if (parent) {
      getParentKeys(parent);
    }
  };
  getParentKeys(key);
  return arrKeys;
};
console.log(getAllParents("130232", "dictDetailList", treeData));
export default {
  name: "dashboard",
  data() {
    return {
      name: localStorage.getItem("ms_username"),
      todoList: [
        {
          title: "今天要修复100个bug",
          status: false
        },
        {
          title: "今天要修复100个bug",
          status: false
        },
        {
          title: "今天要写100行代码加几个bug吧",
          status: false
        },
        {
          title: "今天要修复100个bug",
          status: false
        },
        {
          title: "今天要修复100个bug",
          status: true
        },
        {
          title: "今天要写100行代码加几个bug吧",
          status: true
        }
      ],
      data: [
        {
          name: "2018/09/04",
          value: 1083
        },
        {
          name: "2018/09/05",
          value: 941
        },
        {
          name: "2018/09/06",
          value: 1139
        },
        {
          name: "2018/09/07",
          value: 816
        },
        {
          name: "2018/09/08",
          value: 327
        },
        {
          name: "2018/09/09",
          value: 228
        },
        {
          name: "2018/09/10",
          value: 1065
        }
      ],
      options: {
        title: "最近七天每天的用户访问量",
        showValue: false,
        fillColor: "rgb(45, 140, 240)",
        bottomPadding: 30,
        topPadding: 30
      },
      options2: {
        title: "最近七天用户访问趋势",
        fillColor: "#FC6FA1",
        axisColor: "#008ACD",
        contentColor: "#EEEEEE",
        bgColor: "#F5F8FD",
        bottomPadding: 30,
        topPadding: 30
      }
    };
  },
  components: {
    Schart
  },
  computed: {
    role() {
      return this.name === "admin" ? "超级管理员" : "普通用户";
    }
  },
  created() {
    this.handleListener();
    this.changeDate();
    console.log(shortid());
  },
  activated() {
    this.handleListener();
  },
  deactivated() {
    window.removeEventListener("resize", this.renderChart);
    this.$root.Bus.$off("collapse", this.handleBus);
  },
  methods: {
    changeDate() {
      const now = new Date().getTime();
      this.data.forEach((item, index) => {
        const date = new Date(now - (6 - index) * 86400000);
        item.name = `${date.getFullYear()}/${date.getMonth() +
          1}/${date.getDate()}`;
      });
    },
    handleListener() {
      this.$root.Bus.$on("collapse", this.handleBus);
      // 调用renderChart方法对图表进行重新渲染
      window.addEventListener("resize", this.renderChart);
    },
    handleBus(msg) {
      setTimeout(() => {
        this.renderChart();
      }, 300);
    },
    renderChart() {
      this.$refs.bar.renderChart();
      this.$refs.line.renderChart();
    }
  }
};
</script>


<style scoped>
.el-row {
  margin-bottom: 20px;
}

.grid-content {
  display: flex;
  align-items: center;
  height: 100px;
}

.grid-cont-right {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #999;
}

.grid-num {
  font-size: 30px;
  font-weight: bold;
}

.grid-con-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}

.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}

.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}

.user-avator {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.user-info-cont {
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}

.user-info-cont div:first-child {
  font-size: 30px;
  color: #222;
}

.user-info-list {
  font-size: 14px;
  color: #999;
  line-height: 25px;
}

.user-info-list span {
  margin-left: 70px;
}

.mgb20 {
  margin-bottom: 20px;
}

.todo-item {
  font-size: 14px;
}

.todo-item-del {
  text-decoration: line-through;
  color: #999;
}

.schart {
  width: 100%;
  height: 300px;
}
</style>
