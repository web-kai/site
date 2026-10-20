<template>
  <div class="about">
    <section class="page-banner">
      <div class="container">
        <h1>关于我们</h1>
        <p>数据、知识、智能融合技术的引领者</p>
      </div>
    </section>

    <section class="intro-section">
      <div class="container">
        <div class="intro-grid">
          <div class="intro-text">
            <div class="tag">OUR STORY</div>
            <h2>17年专注装备智能保障</h2>
            <p>
              成都卡莱博尔信息技术股份有限公司成立于2007年，是一家以"数据、知识、智能融合技术"为核心的高新技术企业。公司总部位于成都高新区天府软件园，在北京、上海、西安设有分支机构。
            </p>
            <p>
              我们致力于成为中国高端装备产业大数据应用产品和服务的领导者，为国防军工、民用航空、先进船舶、轨道交通、电力能源等装备行业提供基于装备运行全生命周期故障预测与健康管理（PHM）的产品和解决方案。
            </p>
          </div>
          <div class="intro-stats">
            <div class="big-number">2007</div>
            <div class="stat-block">
              <div class="stat-item"><span class="num">17</span><span class="label">年行业沉淀</span></div>
              <div class="stat-item"><span class="num">2200</span><span class="label">万注册资本</span></div>
              <div class="stat-item"><span class="num">500+</span><span class="label">服务项目</span></div>
              <div class="stat-item"><span class="num">100+</span><span class="label">核心专利</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mission-section">
      <div class="container">
        <div class="grid-3">
          <div class="mission-card" v-for="m in missions" :key="m.title">
            <div class="mission-icon">{{ m.icon }}</div>
            <h3>{{ m.title }}</h3>
            <p>{{ m.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="values-section">
      <div class="container">
        <div class="section-title">
          <h2>核心价值观</h2>
          <div class="line"></div>
        </div>
        <div class="values-grid">
          <div class="value-item" v-for="v in values" :key="v.title">
            <div class="value-char">{{ v.char }}</div>
            <h4>{{ v.title }}</h4>
            <p>{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="timeline-section">
      <div class="container">
        <div class="section-title">
          <h2>发展历程</h2>
          <div class="line"></div>
        </div>
        <div class="timeline">
          <div class="timeline-item" v-for="t in timeline" :key="t.year">
            <div class="timeline-year">{{ t.year }}</div>
            <div class="timeline-content">
              <h4>{{ t.title }}</h4>
              <p>{{ t.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="team-section">
      <div class="container">
        <div class="section-title">
          <h2>核心团队</h2>
          <div class="line"></div>
          <p>汇聚行业顶尖人才，铸就技术领先优势</p>
        </div>
        <div class="team-grid">
          <div class="team-member" v-for="m in team" :key="m.name">
            <div class="member-photo" :style="{ background: m.color }">
              <span>{{ m.name.charAt(0) }}</span>
            </div>
            <h4>{{ m.name }}</h4>
            <div class="member-title">{{ m.title }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const missions = [
  { icon: '🎯', title: '企业使命', desc: '以数据、知识、智能融合技术，为高端装备提供领先的故障预测与健康管理能力，助力客户实现安全、高效、可靠的装备运行。' },
  { icon: '👁️', title: '企业愿景', desc: '成为中国领先、世界一流的智能保障服务方案提供商，推动装备制造业数字化、智能化转型升级。' },
  { icon: '💎', title: '经营理念', desc: '以客户为中心，以技术为根本，以质量为生命，以创新为动力，持续为客户创造最大价值。' }
]

const values = [
  { char: '创', title: '创新', desc: '持续追求技术创新与产品迭代，引领行业发展方向' },
  { char: '诚', title: '诚信', desc: '以诚信立足，与客户、合作伙伴建立长期信任关系' },
  { char: '专', title: '专注', desc: '深耕装备智能保障领域，做专、做精、做强' },
  { char: '协', title: '协作', desc: '倡导开放协作精神，构建产业生态共赢' }
]

const timeline = [
  { year: '2007', title: '公司成立', desc: '成都卡莱博尔信息技术有限公司在天府软件园成立' },
  { year: '2010', title: '产品化启动', desc: '第一代装备状态监测与故障诊断系统研发成功' },
  { year: '2013', title: '行业突破', desc: '成功进入国防军工领域，获得多项军品配套资质' },
  { year: '2016', title: '战略升级', desc: '完成股份制改造，更名为"成都卡莱博尔信息技术股份有限公司"' },
  { year: '2019', title: '平台发布', desc: '卡莱博尔PHM大数据平台正式发布，开启平台化战略' },
  { year: '2022', title: 'AI融合', desc: '新一代融合AI技术的智能诊断系统大规模应用' },
  { year: '2024', title: '全面领先', desc: '服务客户突破200家，成为行业公认的领先企业' }
]

const team = [
  { name: '张明远', title: '创始人 & CEO', color: 'linear-gradient(135deg, #0056b3, #00a3e0)' },
  { name: '李思涵', title: 'CTO 首席技术官', color: 'linear-gradient(135deg, #1a1a2e, #0056b3)' },
  { name: '王建国', title: '副总裁 军工事业部', color: 'linear-gradient(135deg, #2e7d32, #66bb6a)' },
  { name: '陈晓敏', title: 'VP 产品与解决方案', color: 'linear-gradient(135deg, #e65100, #ffa726)' },
  { name: '刘志强', title: '研发总监', color: 'linear-gradient(135deg, #4a148c, #ab47bc)' },
  { name: '赵雪梅', title: '市场总监', color: 'linear-gradient(135deg, #01579b, #29b6f6)' }
]
</script>

<style scoped>
.intro-section { padding: 100px 0; }

.intro-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
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

.intro-text h2 {
  font-size: 36px;
  color: #1a1a2e;
  margin-bottom: 24px;
  line-height: 1.3;
}

.intro-text p {
  color: #555;
  font-size: 15px;
  line-height: 1.9;
  margin-bottom: 16px;
}

.intro-stats {
  text-align: center;
  padding: 40px;
  background: linear-gradient(135deg, #f8f9fb, #eef4ff);
  border-radius: 16px;
}

.big-number {
  font-size: 96px;
  font-weight: 700;
  background: linear-gradient(135deg, #0056b3, #00a3e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 30px;
}

.stat-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: #fff;
  border-radius: 8px;
}

.stat-item .num {
  font-size: 24px;
  font-weight: 700;
  color: #0056b3;
}

.stat-item .label {
  font-size: 12px;
  color: #888;
  margin-top: 4px;
}

.mission-section {
  background: #f8f9fb;
  padding: 80px 0;
}

.mission-card {
  text-align: center;
  padding: 48px 32px;
  background: #fff;
  border-radius: 12px;
  transition: all 0.3s;
}

.mission-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 86, 179, 0.12);
}

.mission-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.mission-card h3 {
  font-size: 22px;
  color: #1a1a2e;
  margin-bottom: 14px;
}

.mission-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.8;
}

.values-section { padding: 100px 0; }

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.value-item {
  text-align: center;
  padding: 40px 24px;
  border-radius: 12px;
  background: #fff;
  border: 1px solid #eee;
  transition: all 0.3s;
}

.value-item:hover {
  border-color: #00a3e0;
  box-shadow: 0 12px 30px rgba(0, 86, 179, 0.1);
}

.value-char {
  width: 60px;
  height: 60px;
  line-height: 60px;
  margin: 0 auto 16px;
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #0056b3, #00a3e0);
  border-radius: 12px;
}

.value-item h4 {
  font-size: 20px;
  color: #1a1a2e;
  margin-bottom: 10px;
}

.value-item p {
  font-size: 13px;
  color: #666;
  line-height: 1.7;
}

.timeline-section {
  background: #f8f9fb;
  padding: 100px 0;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, #0056b3, #00a3e0);
}

.timeline-item {
  position: relative;
  padding: 20px 0;
  display: flex;
  justify-content: center;
}

.timeline-item:nth-child(odd) { justify-content: flex-end; padding-right: calc(50% + 40px); }
.timeline-item:nth-child(even) { justify-content: flex-start; padding-left: calc(50% + 40px); }

.timeline-item::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  width: 16px;
  height: 16px;
  background: #fff;
  border: 3px solid #0056b3;
  border-radius: 50%;
  z-index: 1;
}

.timeline-year {
  font-size: 28px;
  font-weight: 700;
  color: #0056b3;
}

.timeline-content {
  background: #fff;
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  min-width: 260px;
}

.timeline-content h4 {
  font-size: 18px;
  color: #1a1a2e;
  margin-bottom: 8px;
}

.timeline-content p {
  font-size: 13px;
  color: #666;
  line-height: 1.7;
}

.team-section { padding: 100px 0; }

.team-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
}

.team-member {
  text-align: center;
  padding: 20px 10px;
  transition: transform 0.3s;
}

.team-member:hover {
  transform: translateY(-4px);
}

.member-photo {
  width: 120px;
  height: 120px;
  margin: 0 auto 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 42px;
  font-weight: 600;
}

.team-member h4 {
  font-size: 16px;
  color: #1a1a2e;
  margin-bottom: 4px;
}

.member-title {
  font-size: 12px;
  color: #00a3e0;
}

@media (max-width: 992px) {
  .intro-grid { grid-template-columns: 1fr; gap: 40px; }
  .values-grid { grid-template-columns: repeat(2, 1fr); }
  .team-grid { grid-template-columns: repeat(3, 1fr); }
  .timeline::before { left: 20px; }
  .timeline-item:nth-child(odd),
  .timeline-item:nth-child(even) { padding-left: 50px; padding-right: 0; justify-content: flex-start; }
  .timeline-item::before { left: 12px; }
}

@media (max-width: 576px) {
  .values-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
  .team-grid { grid-template-columns: repeat(2, 1fr); }
  .stat-block { grid-template-columns: 1fr; }
}
</style>