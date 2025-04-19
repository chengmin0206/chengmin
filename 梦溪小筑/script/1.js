
        // 增强型交互逻辑
        class ScrollManager {
            constructor() {
                this.lastScroll = 0;
                this.initParallax();
                this.initNavHide();
            }
            
            initParallax() {
                window.addEventListener('scroll', () => {
                    const scrolled = window.pageYOffset;
                    document.querySelector('.scroll-effect').style.transform = 
                        `translateY(${scrolled * 0.5}px)`;
                });
            }

            initNavHide() {
                window.addEventListener('scroll', () => {
                    const currentScroll = window.pageYOffset;
                    const nav = document.querySelector('.nav-container');
                    if (currentScroll > this.lastScroll) {
                        nav.style.top = '-80px';
                    } else {
                        nav.style.top = '0';
                    }
                    this.lastScroll = currentScroll;
                });
            }
        }

        // 折叠面板控制器
        class Accordion {
            constructor(container) {
                this.headers = container.querySelectorAll('.accordion-header');
                this.init();
            }

            init() {
                this.headers.forEach(header => {
                    header.addEventListener('click', () => {
                        const content = header.nextElementSibling;
                        content.style.display = 
                            content.style.display === 'block' ? 'none' : 'block';
                        header.querySelector('span:last-child').textContent = 
                            content.style.display === 'block' ? '▲' : '▼';
                    });
                });
            }
        }

        // 初始化
        document.addEventListener('DOMContentLoaded', () => {
            new ScrollManager();
            new Accordion(document.getElementById('about'));
            
            // 图片延迟加载
            const lazyImages = document.querySelectorAll('.gallery-item img');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        observer.unobserve(img);
                    }
                });
            });
            lazyImages.forEach(img => observer.observe(img));

            // 初始化显示剧情
            showModal();
            createInkEffects();

            // 导航交互
            document.querySelectorAll('.nav-item').forEach(item => {
                item.addEventListener('click', () => {
                    const sectionId = item.dataset.section;
                    document.querySelectorAll('.content-section').forEach(sec => {
                        sec.style.display = 'none';
                    });
                    document.getElementById(sectionId).style.display = 'block';
                });
            });

            // 游戏入口交互
            document.querySelectorAll('.game-card').forEach(card => {
                card.addEventListener('click', () => {
                    const gameType = card.dataset.game;
                    launchGame(gameType);
                });
            });

            // 剧情弹窗关闭
            const modal = document.getElementById('story-modal');
            const closeBtn = document.querySelector('.close');
            const startBtn = document.getElementById('start-btn');

            closeBtn.onclick = function() {
                modal.style.display = "none";
            }

            startBtn.onclick = function() {
                modal.style.display = "none";
            }

            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        });

        // 动态水墨效果
        function createInkEffects() {
            for(let i = 0; i < 5; i++) {
                const ink = document.createElement('div');
                ink.className = 'ink-effect';
                ink.style.left = `${Math.random() * 100}vw`;
                ink.style.top = `${Math.random() * 100}vh`;
                ink.style.width = `${Math.random() * 200 + 100}px`;
                ink.style.height = `${Math.random() * 200 + 100}px`;
                document.body.appendChild(ink);
            }
        }

        function launchGame(type) {
            // 根据类型加载不同游戏模块
            console.log(`启动游戏：${type}`);
        }

        function showModal() {
            const modal = document.getElementById('story-modal');
            modal.style.display = "block";
        }
