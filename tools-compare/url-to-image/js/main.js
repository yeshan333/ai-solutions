/**
 * URL转图片技术调研报告 - 主JavaScript文件
 * 版本: 1.0
 * 日期: 2025-04-05
 */

// 在DOM加载完成后执行初始化函数
document.addEventListener('DOMContentLoaded', init);

function init() {
  // 初始化所有功能
  initSmoothScroll();
  initMermaidDiagrams();
  initScrollAnimation();
  initCharts();
  setReportDate();
  
  console.log('URL转图片技术调研报告 - JavaScript初始化完成');
}

// 平滑滚动功能
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      if (!targetId) return;
      
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
}

// 初始化Mermaid图表
function initMermaidDiagrams() {
  if (typeof mermaid !== 'undefined') {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true
      }
    });
  }
}

// 滚动动画效果
function initScrollAnimation() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  if (elements.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  elements.forEach(element => {
    observer.observe(element);
  });
}

// 初始化图表 (如果存在Chart.js)
function initCharts() {
  if (typeof Chart === 'undefined') return;
  
  // API服务评分图表
  const apiChartElement = document.getElementById('apiServicesChart');
  if (apiChartElement) {
    const apiChart = new Chart(apiChartElement, {
      type: 'radar',
      data: {
        labels: ['易用性', '稳定性', '功能丰富度', '渲染质量', '国内访问'],
        datasets: [{
          label: 'urlscan.io',
          data: [4.5, 4.0, 3.5, 4.0, 3.0],
          backgroundColor: 'rgba(0, 86, 179, 0.2)',
          borderColor: 'rgba(0, 86, 179, 0.7)',
          pointBackgroundColor: 'rgba(0, 86, 179, 1)'
        }, {
          label: 'WordPress mShots',
          data: [5.0, 4.0, 2.5, 3.5, 4.5],
          backgroundColor: 'rgba(0, 168, 232, 0.2)',
          borderColor: 'rgba(0, 168, 232, 0.7)',
          pointBackgroundColor: 'rgba(0, 168, 232, 1)'
        }, {
          label: 'ScreenshotMaster',
          data: [3.5, 4.5, 4.5, 5.0, 4.0],
          backgroundColor: 'rgba(76, 175, 80, 0.2)',
          borderColor: 'rgba(76, 175, 80, 0.7)',
          pointBackgroundColor: 'rgba(76, 175, 80, 1)'
        }]
      },
      options: {
        scales: {
          r: {
            angleLines: {
              display: true
            },
            suggestedMin: 0,
            suggestedMax: 5
          }
        }
      }
    });
  }
  
  // 开源项目评分图表
  const openSourceChartElement = document.getElementById('openSourceChart');
  if (openSourceChartElement) {
    const openSourceChart = new Chart(openSourceChartElement, {
      type: 'radar',
      data: {
        labels: ['易用性', '稳定性', '功能丰富度', '可定制性', '部署难度(倒置)'],
        datasets: [{
          label: 'puppyshot',
          data: [3.5, 4.0, 4.5, 5.0, 2.0],
          backgroundColor: 'rgba(255, 152, 0, 0.2)',
          borderColor: 'rgba(255, 152, 0, 0.7)',
          pointBackgroundColor: 'rgba(255, 152, 0, 1)'
        }, {
          label: 'GoWitness',
          data: [4.0, 4.5, 3.5, 3.5, 4.0],
          backgroundColor: 'rgba(233, 30, 99, 0.2)',
          borderColor: 'rgba(233, 30, 99, 0.7)',
          pointBackgroundColor: 'rgba(233, 30, 99, 1)'
        }, {
          label: 'Website Shot',
          data: [4.0, 4.0, 5.0, 5.0, 1.5],
          backgroundColor: 'rgba(156, 39, 176, 0.2)',
          borderColor: 'rgba(156, 39, 176, 0.7)',
          pointBackgroundColor: 'rgba(156, 39, 176, 1)'
        }, {
          label: 'Pageres',
          data: [4.5, 4.5, 4.0, 4.5, 4.0],
          backgroundColor: 'rgba(63, 81, 181, 0.2)',
          borderColor: 'rgba(63, 81, 181, 0.7)',
          pointBackgroundColor: 'rgba(63, 81, 181, 1)'
        }]
      },
      options: {
        scales: {
          r: {
            angleLines: {
              display: true
            },
            suggestedMin: 0,
            suggestedMax: 5
          }
        }
      }
    });
  }
}

// 设置报告生成日期
function setReportDate() {
  const dateElements = document.querySelectorAll('.report-date');
  if (dateElements.length === 0) return;
  
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  
  dateElements.forEach(element => {
    element.textContent = formattedDate;
  });
}

// 决策流程图交互
function initDecisionFlowInteraction() {
  const decisionSteps = document.querySelectorAll('.decision-step');
  
  if (decisionSteps.length === 0) return;
  
  decisionSteps.forEach(step => {
    step.addEventListener('click', function() {
      this.classList.toggle('expanded');
    });
  });
}