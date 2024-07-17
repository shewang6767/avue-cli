<template>
    <div>   
        <div class="header">
            <div v-for="item in headerItems" :key="item.title">   
                <div class="header-item-left">
                    <div :class="[item.icon, 'icon']" />
                </div>
                <div class="header-item-right">
                    <div class="header-text">{{ item.text }}</div>
                    <div class="header-title">{{ item.title }}</div>
                </div>
            </div>
        </div>
        <div style="display: flex;">   
            <div style="width: calc((100% - 60px) / 5 * 3 + 30px); height: calc(80vh + 30px);">
                <el-row class="content-table" style="height: 40vh;">
                    <el-col :span="24" style="height: 100%;"><login-chart /></el-col>
                </el-row>
                <el-row  class="content-table" style="height: 40vh;">
                    <el-col :span="24" style="height: 100%;"><dept-member-chart /></el-col>
                </el-row>
            </div>
            <div style="width: calc((100% - 60px) / 5 * 2 + 15px); height: calc(80vh + 30px); margin-left: 15px; display: flex; flex-direction: column; justify-content: space-between;">
                <el-row  class="content-table" style="height: calc(80vh / 3 - 5px); min-height: 320px;">
                    <el-col :span="24" style="height: 100%;"><user-total-chart /></el-col>
                </el-row>
                <el-row class="content-table" style="height: calc(80vh / 3 - 5px); min-height: 320px; overflow: auto;">
                    <el-col :span="24" style=" overflow: hidden; border-bottom: 1px solid #EBEBEB; padding: 0 10px; height: 50px; line-height: 50px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap;">
                        <span :style="{ color: '#000000',
                            fontSize: '20px',
                            fontWeight: '400',
                            fontFamily: 'Noto Sans SC',
                            marginLeft: '15px'
                        }">平台授权人数排行</span>
                    </el-col>
                    <el-col :span="24" v-for="(item, index) in plateUserRank" :key="item.deviceType" class="device-box">
                        <!-- <span style="width: 50px">{{ index + 1 }}</span> -->
                        <span class="label" :title="item.name.replace('授权人数', '')">{{ item.name.replace('授权人数', '') }}</span>
                        <span class="progress">
                          <el-progress :percentage="Math.round(item.count / plateUserRank[0].count * 100)" color="#FFB54C" define-back-color="rgba(255, 181, 76, 0.15)" :stroke-width="12" :show-text="false" />
                        </span>
                        <span style="margin-left: 15px">{{ item.count }}人</span>
                    </el-col>
                </el-row>
                <el-row class="content-table" style="height: calc(80vh / 3 - 5px); min-height: 320px; overflow: auto;">
                    <el-col :span="24" style=" overflow: hidden; border-bottom: 1px solid #EBEBEB; padding: 0 10px; height: 50px; line-height: 50px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap;">
                        <span :style="{ color: '#000000',
                            fontSize: '20px',
                            fontWeight: '400',
                            fontFamily: 'Noto Sans SC',
                            marginLeft: '15px'
                        }">平台访问次数排行(近一月)</span>
                    </el-col>
                    <el-col :span="24" v-for="(item, index) in plateVisitRank" :key="item.deviceType" class="device-box">
                        <!-- <span style="width: 50px">{{ index + 1 }}</span> -->
                        <span class="label" :title="item.name.replace('授权人数', '')">{{ item.name.replace('授权人数', '') }}</span>
                        <span class="progress">
                        <el-progress :percentage="Math.round(item.count / plateVisitRank[0].count * 100)" color="#3399FF" define-back-color="rgba(51, 153, 255, 0.15)" :stroke-width="12" :show-text="false" />
                        </span>
                        <span style="margin-left: 15px">{{ item.count }}次</span>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
import loginChart from './loginChart.vue';

    export default {
        components: {
            loginChart,
        },
        data() {
            return {
                headerItems: [
                    { title: '账号总数', text: 0, icon: 'icon-toal', border: '#1A8CFF' },
                    { title: '长期账号', text: 0, icon: 'icon-long', border: '#FFAA33' },
                    { title: '短期账号', text: 0, icon: 'icon-short', border: '#13C2C2' },
                    { title: '锁定账号', text: 0, icon: 'icon-lock', border: '#FF4D4F' },
                    { title: '应用总数', text: 0, icon: 'icon-app', border: '#FF4D4F' }
                ],

            }
        }
    }
</script>

<style scoped>
.app-container {
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  min-height: calc(100vh - 134px);
  background-color: #EFF0F6 !important;
  box-shadow: none !important;
  padding: 5px 15px 0 15px;
  overflow: auto;
  height: calc(100vh - 200px);
}
.header {
  /* position: relative; */
  /* min-width: 990px; */
  border-radius: 4px;
  display: flex;
}
.header-item {
  display: flex;
  width: calc((100% - 60px) / 5);
  height: 10vh;
  padding: 1vw;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}
.header>.header-item:not(:last-child) {
  margin-right: 15px;
}
.header-item-left {
  float: left;
  width: 8vh;
  height: 8vh;
}
.header-item-right {
  float: left;
  margin-left: 20%;
}
.header-text {
  height: 40px;
  line-height: 40px;
  font-size: 1.5vw;
  font-weight: 600;
  color: #262626
}
.header-title {
  color: #999999;
  font-size: 0.8vw;
  font-weight: 400;
}
.icon {
  display: inline-block;
  width:100%;
  height: 100%;
  background-size: 100% 100%;
  margin: 0 auto;
}

.icon-toal {
  background-image: url(/svg/total.svg)
}
.icon-long {
  background-image: url(/svg/long.svg)
}
.icon-short {
  background-image: url(/svg/short.svg)
}
.icon-lock {
  background-image: url(/svg/lock.svg)
}
.icon-app {
  background-image: url(/svg/app.svg)
}
 .content-table {
  border-radius: 4px;
  padding: 10px 0;
  margin-top: 15px;
  flex: 1;
  background-color: #fff;
  min-height: 487.5px;
}
.content-table .title {
  display: inline-block;
  height: 50px;
  line-height: 50px;
  font-size: 30px;
  color: #000000;
  font-weight: lighter;
  margin-right: 40px;
}
.workflow-overview-table-div {
  padding-top: 1vh;
}
.device-box {
  height: 40px;
  line-height: 40px;
}
.label {
  width: 100px;
  display: inline-block;
  text-align: right;
  margin-right: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 40px;
  line-height: 62px;
  margin-left: 25px;
}
.progress {
  display: inline-block;
  width: calc(100% - 220px);
}
</style>