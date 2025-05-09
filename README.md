# glowing-sniffle
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI新时代,青春新速度</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="D:\信息工程学院 曹康泰\index1.css">
</head>
<body>
    <!-- 顶部导航区 -->
    <header class="header">
        <div class="logo">
            <span class="logo-text">AI</span>
            <span class="logo-dot"></span>
        </div>
        <nav class="nav">
            <ul>
                <li><a href="#home">首页</a></li>
                <li><a href="#ai-frontier">AI前沿</a></li>
                <li><a href="#youth-innovation">青春创新</a></li>
                <li><a href="#tech-express">技术速递</a></li>
                <li><a href="#about">关于我们</a></li>
            </ul>
        </nav>
    </header>

    <!-- 英雄展示区 -->
    <section id="home" class="hero">
        <div class="hero-content">
            <h1 class="typing-text">AI新时代,青春新速度</h1>
            <p class="hero-subtitle">探索人工智能与青年创新的无限可能</p>
            <a href="#ai-frontier" class="scroll-down">
                <i class="fas fa-chevron-down"></i>
            </a>
        </div>
        <div class="particles" id="particles-js"></div>
    </section>

    <!-- 内容矩阵区 -->
    <main class="main-content">
        <!-- AI新时代区块 -->
        <div class="tech-timeline">
            <div class="timeline-axis">
                <div class="axis-line"></div>
            </div>
            
            <div class="timeline-items">
                <div class="timeline-item">
                    <div class="timeline-node">
                        <div class="node-core"></div>
                        <div class="node-glow"></div>
                    </div>
                    <div class="timeline-card">
                        <div class="card-year">2010</div>
                        <div class="card-content">
                            <h3 class="card-title">深度学习崛起</h3>
                            <p class="card-desc">ImageNet竞赛中深度学习模型表现优异,开启AI新纪元</p>
                        </div>
                        <div class="card-corner"></div>
                    </div>
                </div>
                
                <div class="timeline-item">
                    <div class="timeline-node">
                        <div class="node-core"></div>
                        <div class="node-glow"></div>
                    </div>
                    <div class="timeline-card">
                        <div class="card-year">2016</div>
                        <div class="card-content">
                            <h3 class="card-title">AlphaGo胜利</h3>
                            <p class="card-desc">AI首次击败人类围棋冠军,展示强大学习能力</p>
                        </div>
                        <div class="card-corner"></div>
                    </div>
                </div>
                
                <div class="timeline-item">
                    <div class="timeline-node">
                        <div class="node-core"></div>
                        <div class="node-glow"></div>
                    </div>
                    <div class="timeline-card">
                        <div class="card-year">2020</div>
                        <div class="card-content">
                            <h3 class="card-title">GPT-3发布</h3>
                            <p class="card-desc">大规模语言模型展现惊人文本生成能力</p>
                        </div>
                        <div class="card-corner"></div>
                    </div>
                </div>
                
                <div class="timeline-item featured">
                    <div class="timeline-node">
                        <div class="node-core"></div>
                        <div class="node-glow"></div>
                        <div class="node-pulse"></div>
                    </div>
                    <div class="timeline-card">
                        <div class="card-year">2024</div>
                        <div class="card-content">
                            <h3 class="card-title">DeepSeek AI发布</h3>
                            <p class="card-desc">新一代智能助手突破性进展，在多模态理解和复杂推理方面树立新标杆</p>
                            <div class="tech-tag">
                                <span class="tag-icon">⚡</span>
                                <span class="tag-text">前沿突破</span>
                            </div>
                        </div>
                        <div class="card-corner"></div>
                        <div class="card-halo"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 青春创新力区块 -->
        <section id="youth-innovation" class="content-section youth-innovation">
            <div class="section-header">
                <h2>青春创新力</h2>
                <div class="section-divider"></div>
            </div>
            <div class="project-showcase">
                <div class="project-card">
                    <div class="project-info">
                        <h3>智能校园助手</h3>
                        <p>清华大学学生团队开发的校园AI助手,整合课表、导航、问答功能</p>
                        <a href="D:\信息工程学院 曹康泰\product.html" class="project-link">查看详情</a>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-info">
                        <h3>AI诗歌创作</h3>
                        <p>北大文学与计算机跨学科团队开发的古诗生成系统</p>
                        <a href="#" class="project-link">查看详情</a>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-info">
                        <h3>医疗影像分析</h3>
                        <p>上海交大医学院学生开发的肺炎CT快速诊断工具</p>
                        <a href="#" class="project-link">查看详情</a>
                    </div>
                </div>
            </div>
        </section>
            <div class="code-editor-container">
                <div class="editor-header">
                    <span class="editor-dot red"></span>
                    <span class="editor-dot yellow"></span>
                    <span class="editor-dot green"></span>
                    <span class="editor-title">tryAI.py</span>
                </div>
                <pre class="code-editor">
# 青年AI创新示例代码
import tensorflow as tf
from youth_ai import creativity, passion

class Innovation:
    def __init__(self, idea):
        self.idea = idea
        self.speed = "青春速度"
    
    def develop(self):
        while True:
            code = creativity.generate()
            if passion.execute(code):
                return "改变世界"

# 启动你的创新之旅
my_project = Innovation("AI新时代解决方案")
result = my_project.develop()
print(f"成果: {result}")</pre>
            </div>
        </section>

        <!-- 速度体验区块 -->

        <!-- 未来展望区块 -->
        <section class="content-section future-outlook">
            <div class="section-header">
                <h2>未来展望</h2>
                <div class="section-divider"></div>
            </div>
            <div class="future-grid">
                <div class="future-card vr-card">
                    <i class="fas fa-vr-cardboard"></i>
                    <h3>VR/AR体验</h3>
                    <p>进入虚拟实验室体验AI开发</p>
                </div>
                <div class="future-card industry-card">
                    <i class="fas fa-industry"></i>
                    <h3>行业应用</h3>
                    <p>探索AI+各行业的创新解决方案</p>
                </div>
                <div class="future-card path-card">
                    <i class="fas fa-road"></i>
                    <h3>成长路径</h3>
                    <p>青年AI人才成长路线图</p>
                </div>
            </div>
        </section>
    </main>

    <!-- 页脚区 -->
    <footer class="footer">
        <div class="footer-content">
            <div class="social-links">
                <a href="#"><i class="fab fa-weixin"></i></a>
                <a href="#"><i class="fab fa-weibo"></i></a>
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
            <div class="contact-form">
                <h3>联系我们</h3>
                <form>
                    <input type="text" placeholder="您的姓名">
                    <input type="email" placeholder="电子邮箱">
                    <textarea placeholder="您的留言"></textarea>
                    <button type="submit">发送</button>
                </form>
            </div>
        </div>
        <div class="copyright">
            <p>&copy; <span id="current-year">2023</span> AI新时代,青春新速度 - 青年AI创新平台</p>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
    <script src="D:\信息工程学院 曹康泰\script1.js"></script>

</body>
</html>
