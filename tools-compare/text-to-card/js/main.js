/**
 * 卡片技术调研网页交互功能
 * 创建于: 2025-04-05
 */

document.addEventListener('DOMContentLoaded', function() {
    // 初始化图表
    initCharts();
    
    // 初始化Mermaid图表
    initMermaid();
    
    // 添加平滑滚动
    initSmoothScroll();
});

// 初始化图表
function initCharts() {
    // 卡片工具对比图表
    const comparisonChart = document.getElementById('comparison-chart');
    if (comparisonChart) {
        new Chart(comparisonChart, {
            type: 'radar',
            data: {
                labels: [
                    '设计美观度',
                    '功能丰富性',
                    '可定制化',
                    '易用性',
                    '技术支持',
                    '开源程度'
                ],
                datasets: [{
                    label: '流光卡片',
                    data: [75, 85, 95, 80, 70, 100],
                    fill: true,
                    backgroundColor: 'rgba(122, 114, 229, 0.2)',
                    borderColor: 'rgba(122, 114, 229, 1)',
                    pointBackgroundColor: 'rgba(122, 114, 229, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(122, 114, 229, 1)'
                }, {
                    label: '吉光卡片',
                    data: [95, 70, 65, 85, 80, 40],
                    fill: true,
                    backgroundColor: 'rgba(255, 94, 98, 0.2)',
                    borderColor: 'rgba(255, 94, 98, 1)',
                    pointBackgroundColor: 'rgba(255, 94, 98, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255, 94, 98, 1)'
                }]
            },
            options: {
                elements: {
                    line: {
                        borderWidth: 3
                    }
                },
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                }
            }
        });
    }

    // 卡片工具市场份额图表
    const marketShareChart = document.getElementById('market-share-chart');
    if (marketShareChart) {
        new Chart(marketShareChart, {
            type: 'doughnut',
            data: {
                labels: ['流光卡片', '吉光卡片', 'Text Card Generator', 'Memo Card', 'Text2Card', 'Retro Card', '其他'],
                datasets: [{
                    data: [25, 30, 15, 10, 8, 7, 5],
                    backgroundColor: [
                        'rgba(122, 114, 229, 0.8)',
                        'rgba(255, 94, 98, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(255, 159, 64, 0.8)',
                        'rgba(153, 102, 255, 0.8)',
                        'rgba(201, 203, 207, 0.8)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right',
                    },
                    title: {
                        display: true,
                        text: '卡片工具市场份额估算'
                    }
                }
            }
        });
    }
}

// 初始化Mermaid图表
function initMermaid() {
    if (typeof mermaid !== 'undefined') {
        mermaid.initialize({ 
            startOnLoad: true,
            theme: 'neutral',
            flowchart: { 
                useMaxWidth: true 
            }
        });
    }
}

// 平滑滚动功能
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 获取并显示当前日期
function displayCurrentDate() {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = today.toLocaleDateString('zh-CN', options);
    }
}

// 页面加载后显示当前日期
window.addEventListener('load', displayCurrentDate);