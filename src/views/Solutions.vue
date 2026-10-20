<template>
  <div class="solutions">
    <section class="page-banner">
      <div class="container">
        <h1>行业解决方案</h1>
        <p>深度理解行业需求，提供定制化智能保障方案</p>
      </div>
    </section>

    <section class="tabs-section">
      <div class="container">
        <div class="tabs-nav">
          <button
            v-for="(ind, idx) in industries"
            :key="ind.name"
            :class="{ active: activeIdx === idx }"
            @click="activeIdx = idx"
          >
            <span class="tab-icon">{{ ind.icon }}</span>
            <span class="tab-name">{{ ind.name }}</span>
          </button>
        </div>

        <div class="tab-content" v-if="currentIndustry">
          <div class="content-grid">
            <div class="content-main">
              <h2>{{ currentIndustry.name }}行业 PHM 解决方案</h2>
              <p class="content-desc">{{ currentIndustry.desc }}</p>

              <h3 class="sub-title">行业痛点</h3>
              <ul class="pain-list">
                <li v-for="pain in currentIndustry.pains" :key="pain">
                  <span class="dot"></span>{{ pain }}
                </li>
              </ul>

              <h3 class="sub-title">方案价值</h3>
              <div class="value-cards">
                <div class="value-card" v-for="v in currentIndustry.values" :key="v.title">
                  <div class="v-num">{{ v.percent }}</div>
                  <div class="v-title">{{ v.title }}</div>
                  <div class="v-desc">{{ v.desc }}</div>
                </div>
              </div>

              <h3 class="sub-title">典型应用场景</h3>
              <div class="scene-grid">
                <div class="scene-item" v-for="s in currentIndustry.scenes" :key="s">
                  <span class="scene-icon">✦</span>{{ s }}
                </div>
              </div>
            </div>

            <div class="content-side">
              <div class="side-card" :style="{ background: currentIndustry.bg }">
                <div class="side-icon">{{ currentIndustry.icon }}</div>
                <h4>方案架构</h4>
                <div class="arch-steps">
                  <div class="arch-step" v-for="(step, idx) in currentIndustry.arch" :key="step">
                    <span class="step-num">{{ idx + 1 }}</span>{{ step }}
                  </div>
                </div>
              </div>
              <div class="case-card">
                <h4>标杆案例</h4>
                <p><strong>{{ currentIndustry.case.title }}</strong></p>
                <p class="case-desc">{{ currentIndustry.case.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="process-section">
      <div class="container">
        <div class="section-title">
          <h2>服务流程</h2>
          <div class="line"></div>
          <p>专业团队全程保障项目成功交付</p>
        </div>
        <div class="process-flow">
          <div class="flow-step" v-for="(step, idx) in process" :key="step.title">
            <div class="flow-num">0{{ idx + 1 }}</div>
            <div class="flow-icon">{{ step.icon }}</div>
            <h4>{{ step.title }}</h4>
            <p>{{ step.desc }}</p>
            <div class="flow-arrow" v-if="idx < process.length - 1">→</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeIdx = ref(0)

const industries = [
  {
    icon: '🛡️',
    name: '国防军工',
    bg: 'linear-gradient(135deg, #1a1a2e, #16213e)',
    desc: '面向航空发动机、装甲装备、舰船动力、导弹等核心军工装备提供全生命周期PHM解决方案，满足高可靠性、高安全性要求。',
    pains: [
      '装备工作环境恶劣，故障诱因复杂',
      '关键零部件寿命评估困难',
      '维修过度或不足，造成资源浪费',
      '缺乏统一的健康管理平台支撑'
    ],
    values: [
      { percent: '-40%', title: '故障发生率', desc: '提前预警潜在故障' },
      { percent: '+35%', title: '装备完好率', desc: '提升可用装备数量' },
      { percent: '-25%', title: '维护成本', desc: '精准维修降低消耗' }
    ],
    scenes: ['航空发动机状态监控', '装甲装备动力系统PHM', '舰船主机健康管理', '地面保障设备监测'],
    arch: ['数据采集终端部署', '特征提取与边缘计算', '故障诊断与预测引擎', '健康管理驾驶舱'],
    case: { title: '某航空发动机PHM项目', desc: '为某型航空发动机构建完整PHM系统，覆盖压气机、燃烧室、涡轮等核心部件，实现故障提前30天预警。' }
  },
  {
    icon: '✈️',
    name: '民用航空',
    bg: 'linear-gradient(135deg, #0056b3, #00a3e0)',
    desc: '为民航客机、直升机等民用航空装备提供机载与地面相结合的健康管理解决方案，助力航空公司实现安全运营与降本增效。',
    pains: [
      '机载设备故障影响航班准点率',
      '发动机大修间隔难以科学确定',
      '飞机健康数据孤岛严重',
      '维修计划依赖传统经验'
    ],
    values: [
      { percent: '-30%', title: '延误/取消', desc: '减少因故障导致的航班异常' },
      { percent: '+20%', title: '发动机在翼时间', desc: '延长发动机大修间隔' },
      { percent: '-18%', title: '维修成本', desc: '优化维修计划' }
    ],
    scenes: ['机载设备在线监控', '发动机PHM系统', '地面保障系统管理', '机队健康大数据平台'],
    arch: ['机载数据采集', '空地数据传输', '地面数据中心', '机队健康分析'],
    case: { title: '某航空公司机队PHM平台', desc: '为300+架飞机构建统一机队健康管理平台，整合发动机、APU、航电系统等多源数据。' }
  },
  {
    icon: '🚢',
    name: '先进船舶',
    bg: 'linear-gradient(135deg, #0d47a1, #42a5f5)',
    desc: '为船舶动力系统、辅机系统、通讯导航系统等核心设备提供健康监测与故障预测方案，保障船舶航行安全。',
    pains: [
      '远洋航行故障无法及时维修',
      '主机磨损监测手段有限',
      '备件库存管理粗放',
      '船舶与岸基数据互通不足'
    ],
    values: [
      { percent: '-50%', title: '海上故障', desc: '大幅降低远洋航行故障' },
      { percent: '+25%', title: '运营效率', desc: '提升船舶运营经济性' },
      { percent: '-30%', title: '备件成本', desc: '精准备件按需采购' }
    ],
    scenes: ['船舶主机状态监测', '轴系振动分析', '油液在线监测', '岸基远程诊断中心'],
    arch: ['船载采集系统', '卫星/4G传输', '岸基数据中心', '远程诊断与决策'],
    case: { title: '某大型船舶集团智能运维', desc: '为200+艘船舶构建岸海一体的智能运维平台，实现船舶关键设备的远程健康管理。' }
  },
  {
    icon: '🚄',
    name: '轨道交通',
    bg: 'linear-gradient(135deg, #2e7d32, #66bb6a)',
    desc: '为动车组、城轨列车、地铁等轨道交通装备提供走行部、牵引系统、制动系统等关键部件的健康管理解决方案。',
    pains: [
      '列车运行安全性要求极高',
      '走行部部件寿命评估不准',
      '预防性维修周期难以优化',
      '车载与地面数据不同步'
    ],
    values: [
      { percent: '-45%', title: '走行部故障', desc: '显著降低走行部故障风险' },
      { percent: '+22%', title: '检修效率', desc: '提升检修作业效率' },
      { percent: '-20%', title: '运维成本', desc: '降低全生命周期成本' }
    ],
    scenes: ['走行部在线监测', '牵引变流器PHM', '制动系统健康管理', '车辆地面诊断中心'],
    arch: ['车载监测系统', 'WTD/4G传输', '地面数据中心', '车辆管理系统'],
    case: { title: '某地铁线路走行部监测', desc: '为某城市地铁500+辆列车构建走行部在线监测系统，实现轴承、齿轮、轮对的实时状态评估。' }
  },
  {
    icon: '⚡',
    name: '电力能源',
    bg: 'linear-gradient(135deg, #e65100, #ffa726)',
    desc: '为发电、输电、变电、储能等电力装备提供从传感器到智能分析的完整健康管理方案，服务新型电力系统建设。',
    pains: [
      '电力设备种类多、数量大',
      '输变电设备故障影响面广',
      '新能源设备运维难度大',
      '缺乏统一的状态评估体系'
    ],
    values: [
      { percent: '-35%', title: '非计划停电', desc: '减少设备突发故障导致停电' },
      { percent: '+15%', title: '设备寿命', desc: '延长设备使用年限' },
      { percent: '-28%', title: '运维人力', desc: '降低现场巡检人力投入' }
    ],
    scenes: ['变压器油色谱在线监测', '风机叶片状态监测', '光伏组件热斑检测', '储能BMS健康管理'],
    arch: ['传感网络部署', '边缘网关采集', '电力调度系统集成', '状态检修决策支持'],
    case: { title: '某大型风电场智能运维', desc: '为某风电场100+台风机构建智能运维平台，覆盖齿轮箱、发电机、叶片等关键部件。' }
  }
]

const currentIndustry = computed(() => industries[activeIdx.value])

const process = [
  { icon: '🔍', title: '需求调研', desc: '深入现场了解装备情况与业务痛点' },
  { icon: '📐', title: '方案设计', desc: '定制化PHM方案设计与技术论证' },
  { icon: '🛠️', title: '系统实施', desc: '硬件部署、软件开发、系统集成' },
  { icon: '🧪', title: '测试验证', desc: '现场联调、算法训练、效果验证' },
  { icon: '🚀', title: '上线运行', desc: '正式上线与人员培训' },
  { icon: '💪', title: '持续运维', desc: '7x24技术支持与持续优化' }
]
</script>

<style scoped>
.tabs-section { padding: 80px 0; }

.tabs-nav {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 50px;
  flex-wrap: wrap;
}

.tabs-nav button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: #fff;
  border: 2px solid #eee;
  border-radius: 30px;
  font-size: 15px;
  color: #666;
  transition: all 0.3s;
}

.tabs-nav button:hover {
  border-color: #00a3e0;
  color: #0056b3;
}

.tabs-nav button.active {
  background: linear-gradient(135deg, #0056b3, #00a3e0);
  border-color: transparent;
  color: #fff;
  box-shadow: 0 8px 20px rgba(0, 86, 179, 0.25);
}

.tab-icon { font-size: 18px; }

.content-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 40px;
  align-items: start;
}

.content-main h2 {
  font-size: 32px;
  color: #1a1a2e;
  margin-bottom: 20px;
}

.content-desc {
  color: #555;
  font-size: 15px;
  line-height: 1.9;
  margin-bottom: 28px;
}

.sub-title {
  font-size: 18px;
  color: #1a1a2e;
  margin: 28px 0 16px;
  padding-left: 14px;
  border-left: 3px solid #00a3e0;
}

.pain-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  color: #444;
  font-size: 14px;
}

.dot {
  width: 8px;
  height: 8px;
  background: #00a3e0;
  border-radius: 50%;
  flex-shrink: 0;
}

.value-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.value-card {
  background: linear-gradient(135deg, #f8f9fb, #eef4ff);
  padding: 24px 16px;
  border-radius: 10px;
  text-align: center;
}

.v-num {
  font-size: 28px;
  font-weight: 700;
  color: #0056b3;
}

.v-title {
  font-size: 14px;
  color: #1a1a2e;
  font-weight: 500;
  margin: 6px 0 4px;
}

.v-desc {
  font-size: 12px;
  color: #888;
}

.scene-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.scene-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: #f8f9fb;
  border-radius: 8px;
  font-size: 14px;
  color: #444;
  transition: all 0.2s;
}

.scene-item:hover {
  background: #eef4ff;
  color: #0056b3;
}

.scene-icon {
  color: #00a3e0;
}

.side-card {
  border-radius: 14px;
  padding: 32px;
  color: #fff;
  margin-bottom: 20px;
}

.side-icon {
  font-size: 40px;
  margin-bottom: 12px;
}

.side-card h4 {
  font-size: 18px;
  margin-bottom: 20px;
}

.arch-steps {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.arch-step {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  font-size: 14px;
}

.step-num {
  width: 26px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  font-size: 12px;
  font-weight: 600;
}

.case-card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 14px;
  padding: 28px;
}

.case-card h4 {
  font-size: 16px;
  color: #1a1a2e;
  margin-bottom: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.case-card p {
  font-size: 13px;
  color: #666;
  line-height: 1.8;
}

.case-desc { margin-top: 8px; }

.process-section {
  background: #f8f9fb;
  padding: 100px 0;
}

.process-flow {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  position: relative;
  flex-wrap: wrap;
}

.flow-step {
  flex: 1;
  min-width: 160px;
  text-align: center;
  padding: 30px 20px;
  background: #fff;
  border-radius: 12px;
  position: relative;
  transition: all 0.3s;
}

.flow-step:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0, 86, 179, 0.1);
}

.flow-num {
  font-size: 14px;
  font-weight: 700;
  color: #00a3e0;
  letter-spacing: 2px;
  margin-bottom: 8px;
}

.flow-icon {
  font-size: 36px;
  margin-bottom: 12px;
}

.flow-step h4 {
  font-size: 16px;
  color: #1a1a2e;
  margin-bottom: 8px;
}

.flow-step p {
  font-size: 12px;
  color: #666;
  line-height: 1.6;
}

.flow-arrow {
  position: absolute;
  right: -16px;
  top: 50%;
  transform: translateY(-50%);
  color: #00a3e0;
  font-size: 20px;
  font-weight: bold;
}

@media (max-width: 992px) {
  .content-grid { grid-template-columns: 1fr; }
  .flow-arrow { display: none; }
}

@media (max-width: 576px) {
  .value-cards { grid-template-columns: 1fr; }
  .scene-grid { grid-template-columns: 1fr; }
  .process-flow { flex-direction: column; }
}
</style>