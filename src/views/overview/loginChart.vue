<template>
    <el-row style="height: 100%; position: relative;">
        <el-col :span="24" style=" overflow: hidden; border-bottom: 1px solid #EBEBEB; padding: 0 10px; height: 50px; line-height: 50px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap;">
            <span :style="{ color: '#000000',
                fontSize: '20px',
                fontWeight: '400',
                fontFamily: 'Noto Sans SC',
                marginLeft: '15px'
            }">用户登录次数统计</span>
             <el-radio-group v-model="radio1">
                <el-radio-button label="近一周"></el-radio-button>
                <el-radio-button label="近一月"></el-radio-button>
                <el-radio-button label="近一年"></el-radio-button>
            </el-radio-group>
        </el-col>
        <el-col :span="24" style="height: 100%;">
            <div ref="loginChart" style="height: calc(100% - 100px); width:100%" />
        </el-col>
    </el-row>
</template>

<script>
import loginCount from '@/const/overview.js';
import * as echarts from 'echarts';

    export default {
        data() {
            return {
                radio1: '近一月',
                chart: null,
                loginCount: loginCount,
                option: {
                    title: {
              
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['海纳2.0', '超维·城市新基建管理平台', '海纳', '用户管理平台']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                        saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                        name: '海纳2.0',
                        type: 'line',
                        stack: 'Total',
                        data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                        name: '超维·城市新基建管理平台',
                        type: 'line',
                        stack: 'Total',
                        data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                        name: '海纳',
                        type: 'line',
                        stack: 'Total',
                        data: [150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                        name: '用户管理平台',
                        type: 'line',
                        stack: 'Total',
                        data: [320, 332, 301, 334, 390, 330, 320]
                        }
                    ]
                }
            }
        }, 
        mounted() {
            setTimeout(() => {
                console.log('挂在完成');
                this.initChart()
            }, 300)
        },
        methods: {
            initChart(){
                console.log(this.$refs.loginChart);
                this.chart = echarts.init(this.$refs.loginChart)
                this.option && this.chart.setOption(this.option);             
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>