// 剧情流程（对应文档第七页活字排韵技术描述）
const storyScenes = [
    {
        image: "图片2.png",  // 刻制胶泥活字场景
        text: "毕昇将刻好的泥字放入窑中烧制，青烟缭绕间，陶质活字初具雏形。他轻轻敲击，声音清脆——这是人类文明史上第一次听见活字印刷的先声。"
    },
    {
        image: "图片3.png",  // 松脂蜡液排版场景
        text: "排版台上，毕昇用松脂混合蜡液作为粘合剂，将活字按韵部排入铁范。加热铁板时，松香气味弥漫，活字如士兵列阵般紧紧固定，等待油墨的洗礼。"
    },
    {
        image: "图片4.png",  // 首版印刷成品场景
        text: "第一页印刷品新鲜出炉，宣纸之上，“活字印刷术”五个大字苍劲有力。毕昇凝视着自己的发明，目光穿越千年，仿佛看见知识将借由此术传遍寰宇。"
    }
];

let sceneIndex = 0;
const imgElement = document.getElementById('mainImg');
const textElement = document.getElementById('dialogContent');
const backButton = document.getElementById('backBtn');

// 初始化剧情
function startStory() {
    imgElement.classList.add('active');
    document.getElementById('textBox').classList.add('active');
    document.addEventListener('click', handleScreenClick); // 绑定全屏点击事件
}

// 点击屏幕切换剧情（排除按钮点击）
function handleScreenClick(e) {
    if (e.target === backButton) return; // 避免触发返回按钮
    
    sceneIndex++;
    if (sceneIndex < storyScenes.length) {
        // 切换图片和文本并触发动画
        imgElement.src = storyScenes[sceneIndex].image;
        textElement.textContent = storyScenes[sceneIndex].text;
        imgElement.classList.remove('active');
        document.getElementById('textBox').classList.remove('active');
        setTimeout(() => {
            imgElement.classList.add('active');
            document.getElementById('textBox').classList.add('active');
        }, 100);
    } else {
        // 显示返回按钮
        backButton.classList.add('show');
        document.removeEventListener('click', handleScreenClick); // 移除点击监听
    }
}

// 返回巧匠工坊（根据文档命名，目标页面为巧匠工坊.html）
function returnToWorkshop() {
    window.location.href = "巧匠工坊.html"; // 直接跳转目标页面
}

startStory(); // 启动剧情