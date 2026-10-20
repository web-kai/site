<template>
  <div class="products">
    <section class="page-banner">
      <div class="container">
        <h1>产品中心</h1>
        <p>自主研发的智能装备健康管理产品矩阵</p>
      </div>
    </section>

    <section class="products-section">
      <div class="container">
        <div class="product-detail" v-for="(p, idx) in products" :key="p.title" :class="{ reverse: idx % 2 === 1 }">
          <div class="product-visual" :style="{ background: p.bg }">
            <div class="visual-content">
              <span class="visual-icon">{{ p.icon }}</span>
            </div>
          </div>
          <div class="product-info">
            <div class="product-tag">产品 {{ String(idx + 1).padStart(2, '0') }}</div>
            <h2>{{ p.title }}</h2>
            <p class="product-desc">{{ p.desc }}</p>
            <ul class="feature-list">
              <li v-for="f in p.features" :key="f">
                <span class="check">✓</span>{{ f }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="tech-section">
      <div class="container">
        <div class="section-title">
          <h2>核心技术</h2>
          <div class="line"></div>
          <p>多项自主研发核心技术，构建技术壁垒</p>
        </div>
        <div class="tech-grid">
          <div class="tech-card" v-for="t in techs" :key="t.title">
            <div class="tech-no">{{ t.no }}</div>
            <h4>{{ t.title }}</h4>
            <p>{{ t.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="arch-section">
      <div class="container">
        <div class="section-title">
          <h2>技术架构</h2>
          <div class="line"></div>
          <p>分层解耦的架构设计，灵活适配不同场景</p>
        </div>
        <div class="arch-layers">
          <div class="layer" v-for="(layer, idx) in architecture" :key="layer.name" :style="{ background: layer.bg }">
            <div class="layer-info">
              <span class="layer-num">L{{ idx + 1 }}</span>
              <h4>{{ layer.name }}</h4>
            </div>
            <div class="layer-items">
              <span v-for="item in layer.items" :key="item" class="layer-item">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const products = [
  {
    icon: '🔮',
    title: 'PHM-Pro 故障预测系统',
    desc: '基于深度学习与知识图谱融合的故障早期识别与趋势预测系统。通过对装备运行数据的多维度分析，提前识别潜在故障模式，预测剩余使用寿命，避免突发故障带来的损失。',
    bg: 'linear-gradient(135deg, #0a1628, #0056b3)',
    features: [
      '多源异构数据融合分析',
      '深度学习故障识别算法',
      '剩余使用寿命(RUL)预测',
      '故障知识图谱自动构建',
      '可解释性诊断报告生成'
    ]
  },
  {
    icon: '📊',
    title: 'HealthPlatform 装备健康管理平台',
    desc: '面向多类型、多数量装备的统一健康管理平台。提供从数据接入、状态监控、健康评估到维修决策的端到端服务，帮助客户实现装备全生命周期的数字化、智能化管理。',
    bg: 'linear-gradient(135deg, #1a1a2e, #16213e)',
    features: [
      '海量装备统一接入管理',
      '实时状态监控与可视化',
      '健康度智能评估',
      '维修决策辅助支持',
      '开放API与系统集成'
    ]
  },
  {
    icon: '🧠',
    title: 'DiagnosticX 智能诊断工具',
    desc: '融合专家知识与机器学习的智能诊断工具。支持多种诊断方法，从振动分析、油液分析、热分析等多维度快速定位故障根因，辅助维修工程师做出正确决策。',
    bg: 'linear-gradient(135deg, #2e7d32, #66bb6a)',
    features: [
      '多种诊断方法可选',
      '专家知识与AI融合',
      '故障根因分析',
      '诊断报告自动生成',
      '离线/在线双模式'
    ]
  },
  {
    icon: '📡',
    title: 'DataCollector 数据采集终端',
    desc: '支持多种传感器协议的边缘数据采集终端。具备强大的数据预处理能力，可在边缘端完成初步特征提取，显著降低数据传输压力。',
    bg: 'linear-gradient(135deg, #e65100, #ffa726)',
    features: [
      '多协议传感器支持',
      '边缘计算与特征提取',
      '有线/无线灵活组网',
      '工业级可靠性设计',
      '远程配置与升级'
    ]
  }
]

const techs = [
  { no: '01', title: '深度学习故障识别', desc: '基于CNN、LSTM、Transformer等深度学习模型，从海量运行数据中自动学习故障特征模式' },
  { no: '02', title: '剩余寿命预测', desc: '融合物理模型与数据驱动方法，精准预测装备关键部件的剩余使用寿命' },
  { no: '03', title: '知识图谱构建', desc: '自动构建装备故障知识图谱，实现故障现象-原因-处置方案的智能关联' },
  { no: '04', title: '边缘智能计算', desc: '将AI模型部署到边缘设备，实现实时数据处理与快速响应' },
  { no: '05', title: '多传感器融合', desc: '融合振动、温度、压力、电流等多维度传感器数据，提升诊断准确性' },
  { no: '06', title: '可解释AI诊断', desc: '提供AI诊断结果的可解释性，让工程师理解"为什么"做出这样的判断' }
]

const architecture = [
  { name: '应用层', items: ['故障预测', '健康评估', '智能诊断', '维修决策', '报表分析'], bg: 'linear-gradient(135deg, #0a1628, #16213e)' },
  { name: '智能层', items: ['深度学习引擎', '知识图谱', '规则引擎', '大模型服务', '算法市场'], bg: 'linear-gradient(135deg, #0056b3, #00a3e0)' },
  { name: '平台层', items: ['数据中台', '模型管理', '任务调度', '权限管理', 'API网关'], bg: 'linear-gradient(135deg, #1565c0, #42a5f5)' },
  { name: '数据层', items: ['时序数据库', '关系数据库', '数据湖', '消息队列', '缓存服务'], bg: 'linear-gradient(135deg, #2e7d32, #66bb6a)' },
  { name: '感知层', items: ['数据采集终端', '传感器', '边缘计算节点', '网络设备'], bg: 'linear-gradient(135deg, #e65100, #ffa726)' }
]
</script>

<style scoped>
.products-section { padding: 80px 0; }

.product-detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  padding: 50px 0;
  border-bottom: 1px solid #f0f0f0;
}

.product-detail:last-child { border-bottom: none; }

.product-detail.reverse { direction: rtl; }
.product-detail.reverse > * { direction: ltr; }

.product-visual {
  height: 360px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.visual-content {
  text-align: center;
  color: #fff;
  position: relative;
  z-index: 2;
}

.visual-icon {
  font-size: 100px;
  filter: drop-shadow(0 8px 30px rgba(0, 0, 0, 0.3));
}

.product-visual::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 70% 70%, rgba(0, 0, 0, 0.2) 0%, transparent 50%);
}

.product-tag {
  font-size: 12px;
  letter-spacing: 3px;
  color: #00a3e0;
  font-weight: 600;
  margin-bottom: 12px;
}

.product-info h2 {
  font-size: 32px;
  color: #1a1a2e;
  margin-bottom: 20px;
  line-height: 1.3;
}

.product-desc {
  color: #555;
  font-size: 15px;
  line-height: 1.9;
  margin-bottom: 28px;
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  color: #444;
  font-size: 14px;
}

.check {
  width: 22px;
  height: 22px;
  line-height: 20px;
  text-align: center;
  border: 2px solid #00a3e0;
  color: #00a3e0;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 600;
  flex-shrink: 0;
}

.tech-section { background: #f8f9fb; padding: 100px 0; }

.tech-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.tech-card {
  background: #fff;
  padding: 36px 28px;
  border-radius: 12px;
  border-left: 4px solid #0056b3;
  transition: all 0.3s;
}

.tech-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0, 86, 179, 0.12);
  border-left-color: #00a3e0;
}

.tech-no {
  font-size: 28px;
  font-weight: 700;
  color: #00a3e0;
  opacity: 0.6;
  margin-bottom: 12px;
}

.tech-card h4 {
  font-size: 18px;
  color: #1a1a2e;
  margin-bottom: 10px;
}

.tech-card p {
  font-size: 13px;
  color: #666;
  line-height: 1.8;
}

.arch-section { padding: 100px 0; background: #fff; }

.arch-layers {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.layer {
  padding: 24px 32px;
  border-radius: 10px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 30px;
  transition: transform 0.3s;
}

.layer:hover { transform: translateX(8px); }

.layer-info {
  display: flex;
  flex-direction: column;
  min-width: 100px;
}

.layer-num {
  font-size: 12px;
  opacity: 0.7;
  letter-spacing: 2px;
}

.layer-info h4 {
  font-size: 20px;
  font-weight: 600;
}

.layer-items {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.layer-item {
  background: rgba(255, 255, 255, 0.2);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
}

@media (max-width: 992px) {
  .product-detail,
  .product-detail.reverse { grid-template-columns: 1fr; direction: ltr; }
  .product-visual { height: 260px; }
  .tech-grid { grid-template-columns: repeat(2, 1fr); }
  .layer { flex-direction: column; align-items: flex-start; gap: 14px; }
}

@media (max-width: 576px) {
  .tech-grid { grid-template-columns: 1fr; }
  .product-info h2 { font-size: 24px; }
  .product-detail { padding: 30px 0; gap: 30px; }
}
</style>