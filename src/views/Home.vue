<template>
  <div class="home">
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="container hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="title-line">数据·知识·智能</span>
            <span class="title-line gradient">融合技术</span>
          </h1>
          <p class="hero-subtitle">中国领先的智能保障服务方案提供商</p>
          <p class="hero-desc">为国防军工、民用航空、先进船舶、轨道交通、电力能源等高端装备行业，提供全生命周期故障预测与健康管理（PHM）解决方案</p>
          <div class="hero-actions">
            <router-link to="/solutions" class="btn-primary">查看解决方案</router-link>
            <router-link to="/contact" class="btn-outline btn-light">联系我们</router-link>
          </div>
        </div>
        <div class="hero-visual">
          <div class="globe">
            <div class="globe-ring ring-1"></div>
            <div class="globe-ring ring-2"></div>
            <div class="globe-ring ring-3"></div>
            <div class="globe-core">
              <div class="core-pulse"></div>
              <div class="core-inner">PHM</div>
            </div>
            <div class="orbit-dot dot-1"></div>
            <div class="orbit-dot dot-2"></div>
            <div class="orbit-dot dot-3"></div>
          </div>
        </div>
      </div>
      <div class="hero-scroll">
        <span></span>
      </div>
    </section>

    <section class="stats-section">
      <div class="container">
        <div class="grid-4">
          <div class="stat-card" v-for="stat in stats" :key="stat.label">
            <div class="stat-icon">{{ stat.icon }}</div>
            <div class="stat-number">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="about-section section">
      <div class="container">
        <div class="grid-3-about">
          <div class="about-info">
            <div class="tag">ABOUT US</div>
            <h2 class="section-heading">关于卡莱博尔</h2>
            <p class="about-text">
              成都卡莱博尔信息技术股份有限公司成立于2007年，是一家以"数据、知识、智能融合技术"为核心的高新技术企业。公司致力于成为中国高端装备产业大数据应用产品和服务的领导者。
            </p>
            <p class="about-text">
              我们基于装备运行全生命周期故障预测与健康管理（PHM）技术，为客户提供从数据采集、智能诊断、健康评估到寿命预测的一站式解决方案。
            </p>
            <router-link to="/about" class="link-arrow">了解更多 →</router-link>
          </div>
          <div class="about-features">
            <div class="feature-item" v-for="f in features" :key="f.title">
              <div class="feature-num">{{ f.num }}</div>
              <div>
                <h4>{{ f.title }}</h4>
                <p>{{ f.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="products-section section">
      <div class="container">
        <div class="section-title">
          <h2>产品中心</h2>
          <div class="line"></div>
          <p>自主研发的智能装备健康管理产品矩阵</p>
        </div>
        <div class="grid-3">
          <div class="product-card" v-for="p in products" :key="p.title">
            <div class="product-icon">{{ p.icon }}</div>
            <h3>{{ p.title }}</h3>
            <p>{{ p.desc }}</p>
            <router-link to="/products" class="learn-more">了解详情 →</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="solutions-section section">
      <div class="container">
        <div class="section-title">
          <h2>行业解决方案</h2>
          <div class="line"></div>
          <p>覆盖高端装备五大核心领域</p>
        </div>
        <div class="solutions-grid">
          <div
            class="solution-card"
            v-for="s in solutions"
            :key="s.title"
            :style="{ background: s.bg }"
          >
            <div class="solution-overlay"></div>
            <div class="solution-content">
              <div class="solution-icon">{{ s.icon }}</div>
              <h3>{{ s.title }}</h3>
              <p>{{ s.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="advantage-section section">
      <div class="container">
        <div class="section-title">
          <h2>核心优势</h2>
          <div class="line"></div>
        </div>
        <div class="grid-4">
          <div class="adv-card" v-for="a in advantages" :key="a.title">
            <div class="adv-number">0{{ a.id }}</div>
            <h4>{{ a.title }}</h4>
            <p>{{ a.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="news-section section">
      <div class="container">
        <div class="section-title">
          <h2>新闻资讯</h2>
          <div class="line"></div>
        </div>
        <div class="news-grid">
          <article class="news-card" v-for="n in newsList" :key="n.title">
            <div class="news-image" :style="{ background: n.bg }">
              <span class="news-category">{{ n.category }}</span>
            </div>
            <div class="news-info">
              <div class="news-date">{{ n.date }}</div>
              <h3>{{ n.title }}</h3>
              <p>{{ n.summary }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>开启智能保障新时代</h2>
          <p>让高端装备运行更安全、更可靠、更高效</p>
          <router-link to="/contact" class="btn-primary">立即咨询</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const stats = [
  { icon: '🎯', value: '17+', label: '年技术沉淀' },
  { icon: '🏆', value: '200+', label: '行业客户' },
  { icon: '🚀', value: '500+', label: '成功项目' },
  { icon: '💡', value: '100+', label: '专利技术' }
]

const features = [
  { num: '01', title: '核心技术自主可控', desc: '拥有完整的PHM核心算法与自主知识产权' },
  { num: '02', title: '全生命周期覆盖', desc: '从数据采集到寿命预测的一站式闭环管理' },
  { num: '03', title: '多行业深度积累', desc: '军工、航空、船舶、轨交、能源五大行业深耕' }
]

const products = [
  { icon: '🔮', title: 'PHM故障预测系统', desc: '基于深度学习的故障早期识别与趋势预测，提前发现装备隐患，避免突发故障。' },
  { icon: '📊', title: '装备健康管理平台', desc: '面向多类型装备的统一健康管理平台，实现状态监控、评估、决策智能化。' },
  { icon: '🧠', title: '智能诊断分析工具', desc: '融合专家知识与机器学习的智能诊断工具，快速定位故障根因，辅助维修决策。' }
]

const solutions = [
  { title: '国防军工', icon: '🛡️', desc: '航空发动机、装甲装备、舰船动力等关键装备PHM', bg: 'linear-gradient(135deg, #1a1a2e, #16213e)' },
  { title: '民用航空', icon: '✈️', desc: '飞机机载设备、地面保障系统健康监测', bg: 'linear-gradient(135deg, #0056b3, #00a3e0)' },
  { title: '先进船舶', icon: '🚢', desc: '船舶动力系统、辅机系统全生命周期管理', bg: 'linear-gradient(135deg, #0d47a1, #42a5f5)' },
  { title: '轨道交通', icon: '🚄', desc: '列车走行部、牵引系统、制动系统监测', bg: 'linear-gradient(135deg, #2e7d32, #66bb6a)' },
  { title: '电力能源', icon: '⚡', desc: '发电、输电、变电设备状态监测与预测', bg: 'linear-gradient(135deg, #e65100, #ffa726)' },
  { title: '智能制造', icon: '⚙️', desc: '工业机器人、数控机床等智能装备健康管理', bg: 'linear-gradient(135deg, #4a148c, #ab47bc)' }
]

const advantages = [
  { id: 1, title: '技术领先', desc: '核心算法团队来自顶尖科研机构，持续引领行业技术创新' },
  { id: 2, title: '经验丰富', desc: '17年装备领域深耕，深度理解客户需求与应用场景' },
  { id: 3, title: '方案完整', desc: '从硬件到软件、从数据到决策的完整产品与服务体系' },
  { id: 4, title: '服务专业', desc: '7x24小时技术支持，专业团队保障项目高效交付' }
]

const newsList = [
  { title: '卡莱博尔荣获"2024年度装备智能保障优秀服务商"称号', category: '公司动态', date: '2024-12-15', summary: '公司凭借在高端装备PHM领域的卓越表现获得行业权威认证', bg: 'linear-gradient(135deg, #0056b3, #00a3e0)' },
  { title: '新一代PHM 3.0平台正式发布，AI能力全面升级', category: '产品动态', date: '2024-11-20', summary: '全新架构的健康管理平台，融合大模型技术，诊断准确率提升40%', bg: 'linear-gradient(135deg, #1a1a2e, #0056b3)' },
  { title: '卡莱博尔与某军工集团签署战略合作协议', category: '合作动态', date: '2024-10-08', summary: '双方将在装备智能保障领域开展深度合作，共建创新实验室', bg: 'linear-gradient(135deg, #2e7d32, #66bb6a)' }
]
</script>

<style scoped>
.section { padding: 100px 0; }

.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(135deg, #0a1628 0%, #16213e 50%, #0f3460 100%);
  padding-top: 80px;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 50%, rgba(0, 86, 179, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(0, 163, 224, 0.2) 0%, transparent 40%),
    radial-gradient(circle at 50% 80%, rgba(76, 175, 80, 0.15) 0%, transparent 40%);
}

.hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 163, 224, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 163, 224, 0.05) 1px, transparent 1px);
  background-size: 60px 60px;
}

.hero-content {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hero-text { color: #fff; }

.hero-title {
  font-size: 52px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 24px;
}

.title-line { display: block; }

.gradient {
  background: linear-gradient(90deg, #00a3e0, #4fc3f7, #81d4fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 22px;
  color: #00a3e0;
  font-weight: 500;
  margin-bottom: 20px;
  letter-spacing: 2px;
}

.hero-desc {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.8;
  margin-bottom: 36px;
  max-width: 540px;
}

.hero-actions { display: flex; gap: 16px; }

.btn-light {
  color: #fff;
  border-color: #fff;
}

.btn-light:hover {
  background: #fff;
  color: #0a1628;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.globe {
  position: relative;
  width: 380px;
  height: 380px;
}

.globe-ring {
  position: absolute;
  border: 1px solid rgba(0, 163, 224, 0.3);
  border-radius: 50%;
  animation: spin 20s linear infinite;
}

.ring-1 {
  inset: 0;
  border-color: rgba(0, 163, 224, 0.25);
}
.ring-2 {
  inset: 40px;
  border-color: rgba(0, 163, 224, 0.4);
  animation-duration: 15s;
  animation-direction: reverse;
}
.ring-3 {
  inset: 80px;
  border-color: rgba(0, 163, 224, 0.55);
  animation-duration: 10s;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.globe-core {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 163, 224, 0.4), rgba(0, 86, 179, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
}

.core-pulse {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 163, 224, 0.6), transparent 70%);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.2); opacity: 0.3; }
}

.core-inner {
  position: relative;
  z-index: 1;
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 2px;
  text-shadow: 0 0 20px rgba(0, 163, 224, 0.8);
}

.orbit-dot {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #00a3e0;
  border-radius: 50%;
  box-shadow: 0 0 12px #00a3e0;
}

.dot-1 { top: 10%; left: 50%; animation: spin 15s linear infinite; transform-origin: 140px 180px; }
.dot-2 { top: 50%; left: 90%; animation: spin 10s linear infinite; transform-origin: 190px 190px; }
.dot-3 { top: 80%; left: 40%; animation: spin 20s linear infinite; transform-origin: 190px 190px; }

.hero-scroll {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
}

.hero-scroll span {
  display: block;
  width: 24px;
  height: 24px;
  border-right: 2px solid rgba(255, 255, 255, 0.6);
  border-bottom: 2px solid rgba(255, 255, 255, 0.6);
  transform: rotate(45deg);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: rotate(45deg) translateY(0); }
  50% { transform: rotate(45deg) translateY(10px); }
}

.stats-section {
  background: #f8f9fb;
  padding: 50px 0;
}

.stat-card {
  text-align: center;
  padding: 20px;
}

.stat-icon {
  font-size: 32px;
  margin-bottom: 8px;
}

.stat-number {
  font-size: 40px;
  font-weight: 700;
  color: #0056b3;
  line-height: 1.1;
}

.stat-label {
  font-size: 14px;
  color: #666;
  margin-top: 4px;
}

.grid-3-about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.tag {
  display: inline-block;
  font-size: 12px;
  letter-spacing: 4px;
  color: #0056b3;
  margin-bottom: 16px;
  font-weight: 600;
}

.section-heading {
  font-size: 36px;
  color: #1a1a2e;
  margin-bottom: 24px;
  position: relative;
  padding-bottom: 16px;
}

.section-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #0056b3, #00a3e0);
}

.about-text {
  color: #555;
  font-size: 15px;
  line-height: 1.9;
  margin-bottom: 14px;
}

.link-arrow {
  display: inline-block;
  margin-top: 12px;
  color: #0056b3;
  font-weight: 500;
  font-size: 14px;
  transition: transform 0.3s;
}

.link-arrow:hover { transform: translateX(4px); }

.feature-item {
  display: flex;
  gap: 18px;
  margin-bottom: 24px;
  padding: 20px;
  background: #f8f9fb;
  border-radius: 8px;
  transition: all 0.3s;
}

.feature-item:hover {
  background: #fff;
  box-shadow: 0 8px 30px rgba(0, 86, 179, 0.1);
  transform: translateX(6px);
}

.feature-num {
  font-size: 28px;
  font-weight: 700;
  color: #00a3e0;
  min-width: 60px;
  line-height: 1;
}

.feature-item h4 {
  font-size: 16px;
  color: #1a1a2e;
  margin-bottom: 6px;
}

.feature-item p {
  font-size: 14px;
  color: #666;
}

.products-section { background: #f8f9fb; }

.product-card {
  background: #fff;
  padding: 40px 30px;
  border-radius: 12px;
  transition: all 0.4s ease;
  border: 1px solid transparent;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 86, 179, 0.15);
  border-color: rgba(0, 163, 224, 0.3);
}

.product-icon {
  font-size: 44px;
  margin-bottom: 20px;
}

.product-card h3 {
  font-size: 20px;
  color: #1a1a2e;
  margin-bottom: 12px;
}

.product-card p {
  color: #666;
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 18px;
}

.learn-more {
  color: #0056b3;
  font-size: 14px;
  font-weight: 500;
}

.solutions-section { background: #fff; }

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.solution-card {
  position: relative;
  border-radius: 12px;
  padding: 40px 30px;
  min-height: 200px;
  color: #fff;
  overflow: hidden;
  transition: transform 0.4s ease;
}

.solution-card:hover {
  transform: translateY(-6px);
}

.solution-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.4) 100%);
}

.solution-content { position: relative; z-index: 1; }

.solution-icon {
  font-size: 36px;
  margin-bottom: 16px;
}

.solution-card h3 {
  font-size: 22px;
  margin-bottom: 8px;
  font-weight: 600;
}

.solution-card p {
  font-size: 13px;
  opacity: 0.85;
}

.advantage-section { background: #0a1628; color: #fff; }
.advantage-section .section-title h2 { color: #fff; }

.adv-card {
  text-align: center;
  padding: 40px 24px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s;
}

.adv-card:hover {
  background: rgba(0, 86, 179, 0.15);
  border-color: rgba(0, 163, 224, 0.3);
}

.adv-number {
  font-size: 42px;
  font-weight: 700;
  color: #00a3e0;
  margin-bottom: 16px;
  opacity: 0.6;
}

.adv-card h4 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #fff;
}

.adv-card p {
  font-size: 13px;
  color: #aaa;
  line-height: 1.8;
}

.news-section { background: #f8f9fb; }

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.news-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;
}

.news-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.1);
}

.news-image {
  height: 200px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
}

.news-category {
  background: rgba(255, 255, 255, 0.95);
  color: #0056b3;
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
}

.news-info { padding: 24px; }

.news-date {
  font-size: 12px;
  color: #999;
  margin-bottom: 10px;
}

.news-info h3 {
  font-size: 17px;
  color: #1a1a2e;
  margin-bottom: 10px;
  line-height: 1.5;
}

.news-info p {
  font-size: 13px;
  color: #666;
  line-height: 1.7;
}

.cta-section {
  background: linear-gradient(135deg, #0a1628 0%, #0056b3 100%);
  padding: 80px 0;
  text-align: center;
}

.cta-content h2 {
  font-size: 36px;
  color: #fff;
  margin-bottom: 12px;
}

.cta-content p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  margin-bottom: 30px;
}

@media (max-width: 992px) {
  .hero-content { grid-template-columns: 1fr; gap: 40px; }
  .hero-title { font-size: 36px; }
  .hero-visual { order: -1; }
  .globe { width: 280px; height: 280px; }
  .grid-3-about { grid-template-columns: 1fr; gap: 40px; }
  .solutions-grid { grid-template-columns: repeat(2, 1fr); }
  .news-grid { grid-template-columns: 1fr; }
  .section { padding: 70px 0; }
}

@media (max-width: 576px) {
  .hero-title { font-size: 28px; }
  .hero-subtitle { font-size: 18px; }
  .globe { width: 240px; height: 240px; }
  .solutions-grid { grid-template-columns: 1fr; }
  .hero-actions { flex-direction: column; }
  .cta-content h2 { font-size: 26px; }
}
</style>