<template>
    <div>
        <el-checkbox-group v-model="checkList" @change="changeCheckbox">
            <el-checkbox v-for="(item,index) in checkOptions" :label="item" :key="index"><span class="status" :style="renderStatus(index)"></span>{{item}}</el-checkbox>
        </el-checkbox-group>
        <div class="chart-wrap">
            <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                colors: ['#FF7D7A', '#18D976', '#01BDEC'],
                checkOptions: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
                checkList: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
            }
        },
        mounted() {
            this.drawLine();
        },
        methods: {
            changeCheckbox(value) {
                this.drawLine()
            },
            renderStatus(index) {
                let colors = this.colors; //遍历颜色，循环显示
                let xindex = index < (colors.length) ? index : (index - colors.length);
                let color = colors[xindex];
                return {
                    background: color,
                    boxShadow: '0 0px 3px ' + color
                }
            },
            drawLine() {
                let selected = {};
                this.checkOptions.forEach(item => {
                    selected[item] = this.checkList.includes(item)
                })
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                    color: this.colors,
                    title: {
                        text: ''
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        show: false,
                        selected: selected,
                        data: this.checkOptions
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    },
                    yAxis: {
                        type: 'value',
                        axisLine:{
                            show:false
                        },
                        axisTick:{
                            show:false
                        }
                    },
                    series: [{
                            name: '邮件营销',
                            type: 'line',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '联盟广告',
                            type: 'line',
                            stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '视频广告',
                            type: 'line',
                            stack: '总量',
                            data: [150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name: '直接访问',
                            type: 'line',
                            stack: '总量',
                            data: [320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name: '搜索引擎',
                            type: 'line',
                            stack: '总量',
                            data: [820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                });
            }
        }
    }
</script>

<style scoped>
    .status {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%
    }
</style>