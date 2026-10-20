<template>
  <div class="news-page">
    <section class="page-banner">
      <div class="container">
        <h1>新闻资讯</h1>
        <p>了解卡莱博尔最新动态与行业前沿</p>
      </div>
    </section>

    <section class="news-section">
      <div class="container">
        <div class="filter-bar">
          <button
            v-for="cat in categories"
            :key="cat"
            :class="{ active: activeCat === cat }"
            @click="activeCat = cat"
          >{{ cat }}</button>
        </div>

        <div class="news-list">
          <article class="news-item" v-for="n in filteredNews" :key="n.title">
            <div class="news-img" :style="{ background: n.bg }">
              <span class="news-cat">{{ n.category }}</span>
            </div>
            <div class="news-body">
              <div class="news-meta">
                <span class="news-date">📅 {{ n.date }}</span>
                <span class="news-author">👤 {{ n.author }}</span>
              </div>
              <h3>{{ n.title }}</h3>
              <p>{{ n.summary }}</p>
              <a href="#" class="read-more">阅读全文 →</a>
            </div>
          </article>
        </div>

        <div class="pagination">
          <button class="page-btn" :class="{ active: currentPage === 1 }" @click="currentPage = 1">1</button>
          <button class="page-btn" :class="{ active: currentPage === 2 }" @click="currentPage = 2">2</button>
          <button class="page-btn next">下一页 →</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeCat = ref('全部')
const currentPage = ref(1)

const categories = ['全部', '公司动态', '产品动态', '行业资讯', '技术分享', '合作动态']

const newsData = [
  { title: '卡莱博尔荣获"2024年度装备智能保障优秀服务商"称号', category: '公司动态', date: '2024-12-15', author: '品牌部', summary: '公司凭借在高端装备PHM领域的卓越表现和持续技术创新，获得行业权威机构颁发的年度优秀服务商称号。', bg: 'linear-gradient(135deg, #0056b3, #00a3e0)' },
  { title: '新一代PHM 3.0平台正式发布，AI能力全面升级', category: '产品动态', date: '2024-11-20', author: '产品部', summary: '全新架构的健康管理平台，融合大模型技术，诊断准确率提升40%，支持更大规模装备集群管理。', bg: 'linear-gradient(135deg, #1a1a2e, #0056b3)' },
  { title: '卡莱博尔与某军工集团签署战略合作协议', category: '合作动态', date: '2024-10-08', author: '市场部', summary: '双方将在装备智能保障领域开展深度合作，共建联合创新实验室，推动军工装备PHM技术突破。', bg: 'linear-gradient(135deg, #2e7d32, #66bb6a)' },
  { title: '深度解析：AI在装备故障预测中的五大应用方向', category: '技术分享', date: '2024-09-25', author: 'CTO 李思涵', summary: '本文从算法演进、数据驱动、边缘智能等角度，深入探讨人工智能技术在PHM领域的应用前景与挑战。', bg: 'linear-gradient(135deg, #4a148c, #ab47bc)' },
  { title: '卡莱博尔亮相第十二届中国国际航空航天博览会', category: '公司动态', date: '2024-09-10', author: '品牌部', summary: '在珠海航展上展示了公司最新航空发动机PHM解决方案，吸引了众多专业客户驻足交流。', bg: 'linear-gradient(135deg, #0d47a1, #42a5f5)' },
  { title: '国家重点研发计划项目通过中期检查', category: '公司动态', date: '2024-08-18', author: '研发中心', summary: '公司牵头承担的"高端装备故障预测与健康管理"国家重点研发计划项目顺利通过中期检查。', bg: 'linear-gradient(135deg, #e65100, #ffa726)' },
  { title: '洞察：新型电力系统建设对设备运维的新要求', category: '行业资讯', date: '2024-07-30', author: '解决方案部', summary: '随着双碳目标推进，新能源装机快速增长，电力装备运维面临前所未有的挑战与机遇。', bg: 'linear-gradient(135deg, #1b5e20, #81c784)' },
  { title: '卡莱博尔受邀参加中国轨道交通装备技术发展论坛', category: '行业资讯', date: '2024-07-12', author: '市场部', summary: '在论坛上分享了轨道交通装备智能运维的最新实践，与行业专家共同探讨技术发展方向。', bg: 'linear-gradient(135deg, #006064, #26c6da)' },
  { title: '智能诊断工具获软件著作权登记', category: '产品动态', date: '2024-06-25', author: '研发中心', summary: '公司自主研发的DiagnosticX智能诊断分析工具顺利获得国家版权局软件著作权登记证书。', bg: 'linear-gradient(135deg, #880e4f, #ec407a)' }
]

const filteredNews = computed(() => {
  if (activeCat.value === '全部') return newsData
  return newsData.filter(n => n.category === activeCat.value)
})
</script>

<style scoped>
.news-section { padding: 80px 0; }

.filter-bar {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 50px;
  flex-wrap: wrap;
}

.filter-bar button {
  padding: 10px 24px;
  background: #fff;
  border: 2px solid #eee;
  border-radius: 24px;
  font-size: 14px;
  color: #666;
  transition: all 0.3s;
}

.filter-bar button:hover {
  border-color: #00a3e0;
  color: #0056b3;
}

.filter-bar button.active {
  background: linear-gradient(135deg, #0056b3, #00a3e0);
  border-color: transparent;
  color: #fff;
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.news-item {
  display: grid;
  grid-template-columns: 320px 1fr;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s;
}

.news-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
}

.news-img {
  height: 240px;
  display: flex;
  align-items: flex-end;
  padding: 16px;
}

.news-cat {
  background: rgba(255, 255, 255, 0.95);
  color: #0056b3;
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
}

.news-body {
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
}

.news-meta {
  display: flex;
  gap: 20px;
  font-size: 12px;
  color: #999;
  margin-bottom: 12px;
}

.news-body h3 {
  font-size: 20px;
  color: #1a1a2e;
  margin-bottom: 14px;
  line-height: 1.5;
}

.news-body p {
  font-size: 14px;
  color: #666;
  line-height: 1.8;
  flex: 1;
}

.read-more {
  margin-top: 16px;
  color: #0056b3;
  font-size: 14px;
  font-weight: 500;
  align-self: flex-start;
  transition: transform 0.2s;
}

.read-more:hover { transform: translateX(4px); }

.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 50px;
}

.page-btn {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid #eee;
  color: #666;
  font-size: 14px;
  transition: all 0.2s;
}

.page-btn:hover {
  border-color: #00a3e0;
  color: #0056b3;
}

.page-btn.active {
  background: linear-gradient(135deg, #0056b3, #00a3e0);
  border-color: transparent;
  color: #fff;
}

.page-btn.next {
  width: auto;
  padding: 0 16px;
}

@media (max-width: 768px) {
  .news-item { grid-template-columns: 1fr; }
  .news-img { height: 180px; }
  .news-body { padding: 20px; }
  .news-body h3 { font-size: 17px; }
}
</style>