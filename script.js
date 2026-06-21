/**
 * ============================================================
 * 1. 法条数据
 * ============================================================
 */
const lawsData = [
    {
        id: 1,
        title: '《中华人民共和国公路法》',
        summary: '对造成公路损坏、污染或者影响公路畅通行为的行政处罚。',
        content: '【第四十六条】\n任何单位和个人不得在公路上及公路用地范围内摆摊设点、堆放物品、倾倒垃圾、设置障碍、挖沟引水、利用公路边沟排放污物或者进行其他损坏、污染公路和影响公路畅通的活动。\n【第七十七条】\n违反本法第四十六条的规定，造成公路路面损坏、污染或者影响公路畅通的，或者违反本法第五十一条规定，将公路作为试车场地的，由交通主管部门责令停止违法行为，可以处五千元以下的罚款。',
    },
    {
        id: 2,
        title: '《中华人民共和国公路法》',
        summary: '对将公路作为试车场地行为的行政处罚。',
        content: '【第五十一条】\n机动车制造厂和其他单位不得将公路作为检验机动车制动性能的试车场地。\n【第七十七条】\n违反本法第四十六条的规定，造成公路路面损坏、污染或者影响公路畅通的，或者违反本法第五十一条规定，将公路作为试车场地的，由交通主管部门责令停止违法行为，可以处五千元以下的罚款。'
    },
    {
        id: 3,
        title: '《中华人民共和国公路法》',
        summary: '对从事挖砂、爆破及其他危及公路、公路桥梁等安全的作业行为的行政处罚。',
        content: '【第四十七条】\n大中型公路桥梁和渡口周围200米、公路隧道上方及洞口外100米范围内，以及公路两侧一定距离内，不得挖砂、采石、取土、倾倒废弃物、爆破作业及其他可能危及公路、公路桥梁、公路隧道、公路渡口安全的活动。\n在前款范围内因抢险、防汛等需要修筑堤坝、压缩或拓宽河床，应当事先报经省、自治区、直辖市人民政府交通主管部门会同水行政主管部门批准，并采取有效措施保护相关公路设施的安全的措施\n【第七十六条第（三）项】\n有下列违法行为之一的，由交通主管部门责令停止违法行为，可以处三万元以下的罚款：（三）违反本法第四十七条规定，从事危及公路安全的作业的。',
    },
    {
        id: 4,
        title: '《中华人民共和国公路法》',
        summary: '对铁轮车、履带车和其他可能损害路面的机具擅自在公路上行驶行为的行政处罚。',
        content: '【第四十八条】\n铁轮车、履带车和其他可能损害公路路面的机具，不得在公路上行驶。农业机械因当地田间作业需要在公路上短距离行驶或者军用车辆执行任务需要在公路上行驶的，可以不受前款限制，但是应当采取安全保护措施。对公路造成损坏的，应当按照损坏程度给予补偿。\n【第七十六条第（四项）】\n有下列违法行为之一的，由交通主管部门责令停止违法行为，可以处三万元以下的罚款：违反本法第四十八条规定，铁轮车、履带车和其他可能损害路面的机具擅自在公路上行驶的。',
    },
	{
	    id: 5,
	    title: '《超限运输车辆行驶公路管理规定》',
	    summary: '对车货总体的外廓尺寸、轴荷或者总质量超过公路、公路桥梁、公路隧道、汽车渡船限定标准的行政处罚。',
	    content: '【第三条第一款第（四）（五）（六）（七）（八）项】\n本规定所称超限运输车辆，是指有下列情形之一的货物运输车辆：\n（四）二轴货车，其车货总质量超过18000千克；\n（五）三轴货车，其车货总质量超过25000千克；三轴汽车列车，其车货总质量超过27000千克；\n（六）四轴货车，其车货总质量超过31000千克；四轴汽车列车，其车货总质量超过36000千克；\n（七）五轴汽车列车，其车货总质量超过43000千克；\n（八）六轴及六轴以上汽车列车，其车货总质量超过49000千克，其中牵引车驱动轴为单轴的，其车货总质量超过46000千克。\n【第四十三条】\n车辆违法超限运输的，由公路管理机构根据违法行为的性质、情节和危害程度，按下列规定给予处罚： （一）车货总高度从地面算起未超过4.2米、总宽度未超过3米且总长度未超过20米的，可以处200元以下罚款；车货总高度从地面算起未超过4.5米、总宽度未超过3.75米且总长度未超过28米的，处200元以上1000元以下罚款；车货总高度从地面算起超过4.5米、总宽度超过3.75米或者总长度超过28米的，处1000元以上3000元以下的罚款； （二）车货总质量超过本规定第三条第一款第四项至第八项规定的限定标准，但未超过1000千克的，予以警告；超过1000千克的，每超1000千克罚款500元，最高不得超过30000元。 有前款所列多项违法行为的，相应违法行为的罚款数额应当累计，但累计罚款数额最高不得超过30000元。\n【第四十四条】\n大件运输车辆有下列情形之一的，视为违法超限运输： （一）未经许可擅自行驶公路的；（二）车辆及装载物品的有关情况与《超限运输车辆通行证》记载的内容不一致的；（三）未按许可的时间、路线、速度行驶公路的；（四）未按许可的护送方案采取护送措施的。',
	},
	{
	    id: 6,
	    title: '《公路安全保护条例》《超限运输车辆行驶公路管理规定》',
	    summary: '对指使、强令车辆驾驶人超限运输货物行为的行政处罚。',
	    content: '《公路安全保护条例》\n【第六十八条】\n违反本条例的规定，指使、强令车辆驾驶人超限运输货物的，由道路运输管理机构责令改正，处3万元以下的罚款。\n《超限运输车辆行驶公路管理规定》\n【第四十九条】\n违反本规定，指使、强令车辆驾驶人超限运输货物的，由道路运输管理机构责令改正，处30000元以下罚款。',
	},
	{
	    id: 7,
	    title: '《中华人民共和国公路法》《公路安全保护条例》',
	    summary: '对损坏、擅自移动、涂改、遮挡公路附属设施或者利用公路附属设施架设管道、悬挂物品或者损坏、擅自挪动建筑控制区的标桩、界桩等可能危及公路安全等行为的行政处罚。',
	    content: '《中华人民共和国公路法》\n【第五十二条】\n任何单位和个人不得损坏、擅自移动、涂改公路附属设施。\n前款公路附属设施，是指为保护、养护公路和保障公路安全畅通所设置的公路防护、排水、养护、管理、服务、交通安全、渡运、监控、通信、收费等设施、设备以及专用建筑物、构筑物等。\n【第五十六条】\n除公路防护、养护需要的以外，禁止在公路两侧的建筑控制区内修建建筑物和地面构筑物；需要在建筑控制区内埋设管线、电缆等设施的，应当事先经县级以上地方人民政府交通主管部门批准。\n前款规定的建筑控制区的范围，由县级以上地方人民政府按照保障公路运行安全和节约用地的原则，依照国务院的规定划定。\n建筑控制区范围经县级以上地方人民政府依照前款规定划定后，由县级以上地方人民政府交通主管部门设置标桩、界桩。任何单位和个人不得损坏、擅自挪动该标桩、界桩。\n【第七十六条第（六）项】\n有下列违法行为之一的，由交通主管部门责令停止违法行为，可以处三万元以下的罚款：违反本法第五十二条、第五十六条规定，损坏、移动、涂改公路附属设施或者损坏、挪动建筑控制区的标桩、界桩，可能危及公路安全的。\n《公路安全保护条例》\n【第二十五条】\n禁止损坏、擅自移动、涂改、遮挡公路附属设施或者利用公路附属设施架设管道、悬挂物品。\n【第六十条第（一）项】\n违反本条例的规定，有下列行为之一的，由公路管理机构责令改正，可以处3万元以下的罚款：（一）损坏、擅自移动、涂改、遮挡公路附属设施或者利用公路附属设施架设管道、悬挂物品，可能危及公路安全的。',
	},
	{
	    id: 8,
	    title: '《中华人民共和国公路法》',
	    summary: '对造成公路损坏未报告行为的行政处罚。',
	    content: '【第五十三条】\n造成公路损坏的，责任者应当及时报告公路管理机构，并接受公路管理机构的现场调查。\n【第七十八条】\n违反本法第五十三条规定，造成公路损坏，未报告的，由交通主管部门处一千元以下的罚款。',
	},
	{
	    id: 9,
	    title: '《中华人民共和国公路法》',
	    summary: '测试。',
	    content: '测试',
	},
	{
	    id: 10,
	    title: '测试',
	    summary: '测试。',
	    content: '测试',
	},
	{
	    id: 11,
	    title: '测试',
	    summary: '测试。',
	    content: '测试',
	},
	{
	    id: 12,
	    title: '测试',
	    summary: '测试。',
	    content: '测试',
	},
	{
	    id: 13,
	    title: '测试',
	    summary: '测试。',
	    content: '测试',
	},
	{
	    id: 14,
	    title: '测试',
	    summary: '测试。',
	    content: '测试',
	},
	{
	    id: 15,
	    title: '测试',
	    summary: '测试。',
	    content: '测试',
	},
	{
		id: 16,
		title: '测试',
		summary: '测试。',
		content: '测试',
	},
	{
		id: 17,
		title: '测试',
		summary: '测试。',
		content: '测试',
	},
	{
		id: 18,
		title: '测试',
		summary: '测试。',
		content: '测试',
	},
];

/**
 * ============================================================
 * 2. 视频数据
 * ============================================================
 */
const videosData = [
    {
        id: 1,
        title: '演讲',
        summary: '测试。',
        videoSrc: './video/aa.mp4',        // 视频文件路径
        poster: './images/aa.jpg',                        // 封面图地址
        desc: '测试。',
	},
	{
		id: 2,
		title: '我是大队长1',
		summary: '测试。',
		videoSrc: './video/我是大队长1.mp4',        // 视频文件路径
		poster: './images/我是大队长1.jpg',                        // 封面图地址
		desc: '测试。',
	},
	{
		id: 3,
		title: '我是大队长2',
		summary: '测试。',
		videoSrc: './video/我是大队长2.mp4',        // 视频文件路径
		poster: './images/我是大队长2.jpg',                        // 封面图地址
		desc: '测试。',
    }
];

/**
 * ============================================================
 * 3. DOM 引用
 * ============================================================
 */
const navHome = document.getElementById('navHome');
const navLaws = document.getElementById('navLaws');
const navVideos = document.getElementById('navVideos');
const pageHome = document.getElementById('pageHome');
const pageLaws = document.getElementById('pageLaws');
const pageVideos = document.getElementById('pageVideos');
const lawsListEl = document.getElementById('lawsList');
const videosListEl = document.getElementById('videosList');

/**
 * ============================================================
 * 4. 页面切换函数（主页 / 法条宣传 / 视频宣传）
 * ============================================================
 */
function switchPage(pageName) {
    // 隐藏所有页面
    document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));
    // 移除所有导航按钮的激活状态
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));

    if (pageName === 'home') {
        pageHome.classList.add('active');
        navHome.classList.add('active');
        navHome.setAttribute('aria-current', 'page');
        navLaws.removeAttribute('aria-current');
        navVideos.removeAttribute('aria-current');
    } else if (pageName === 'laws') {
        pageLaws.classList.add('active');
        navLaws.classList.add('active');
        navLaws.setAttribute('aria-current', 'page');
        navHome.removeAttribute('aria-current');
        navVideos.removeAttribute('aria-current');
    } else if (pageName === 'videos') {
        pageVideos.classList.add('active');
        navVideos.classList.add('active');
        navVideos.setAttribute('aria-current', 'page');
        navHome.removeAttribute('aria-current');
        navLaws.removeAttribute('aria-current');
    }
    // 切换页面后滚动到顶部，提升用户体验
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * ============================================================
 * 5. 渲染法条列表（生成带展开功能的卡片）
 * ============================================================
 */
function renderLaws() {
    lawsListEl.innerHTML = ''; // 清空容器
    lawsData.forEach((law, index) => {
        // 创建卡片容器
        const card = document.createElement('div');
        card.className = 'law-card';
        card.dataset.lawId = law.id;

        // 卡片头部（标题 + 概要 + 展开箭头）
        const header = document.createElement('div');
        header.className = 'card-header';

        const titleRow = document.createElement('div');
        titleRow.className = 'card-title';
        // 序号徽标
        const badge = document.createElement('span');
        badge.className = 'badge';
        badge.textContent = index + 1;
        // 标题文字
        const titleText = document.createElement('span');
        titleText.textContent = law.title;
        // 展开/收起箭头
        const toggleIcon = document.createElement('span');
        toggleIcon.className = 'card-toggle';
        toggleIcon.textContent = '▼';
        toggleIcon.setAttribute('aria-hidden', 'true');

        titleRow.appendChild(badge);
        titleRow.appendChild(titleText);
        titleRow.appendChild(toggleIcon);

        // 概要描述
        const summary = document.createElement('div');
        summary.className = 'card-summary';
        summary.textContent = law.summary;

        header.appendChild(titleRow);
        header.appendChild(summary);

        // 卡片主体（具体法条内容，默认收起）
        const body = document.createElement('div');
        body.className = 'card-body';
        const content = document.createElement('div');
        content.className = 'card-body-content';
        content.textContent = law.content; // 保留换行

        const note = document.createElement('div');
        note.className = 'placeholder-note';
        content.appendChild(note);
        body.appendChild(content);

        card.appendChild(header);
        card.appendChild(body);

        // 点击卡片切换展开/收起状态
        card.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });

        lawsListEl.appendChild(card);
    });
}

/**
 * ============================================================
 * 6. 渲染视频列表（生成带视频播放器的卡片）
 * ============================================================
 */
function renderVideos() {
    videosListEl.innerHTML = ''; // 清空容器
    videosData.forEach((video, index) => {
        // 创建卡片容器
        const card = document.createElement('div');
        card.className = 'video-card';
        card.dataset.videoId = video.id;

        // 卡片头部（标题 + 概要 + 展开箭头）
        const header = document.createElement('div');
        header.className = 'card-header';

        const titleRow = document.createElement('div');
        titleRow.className = 'card-title';
        const badge = document.createElement('span');
        badge.className = 'badge';
        badge.textContent = index + 1;
        const titleText = document.createElement('span');
        titleText.textContent = video.title;
        const toggleIcon = document.createElement('span');
        toggleIcon.className = 'card-toggle';
        toggleIcon.textContent = '▼';
        toggleIcon.setAttribute('aria-hidden', 'true');

        titleRow.appendChild(badge);
        titleRow.appendChild(titleText);
        titleRow.appendChild(toggleIcon);

        const summary = document.createElement('div');
        summary.className = 'card-summary';
        summary.textContent = video.summary;

        header.appendChild(titleRow);
        header.appendChild(summary);

        // 卡片主体（视频播放器 + 描述）
        const body = document.createElement('div');
        body.className = 'card-body';

        const content = document.createElement('div');
        content.className = 'card-body-content';

        // 视频容器（用于保持宽高比）
        const wrapper = document.createElement('div');
        wrapper.className = 'video-wrapper';

        // --- 创建视频元素 ---
        const videoEl = document.createElement('video');
        videoEl.controls = true;          // 显示播放控制条
        videoEl.preload = 'metadata';     // 仅预加载元数据（时长、尺寸等）
        // 如果有封面图则设置
        if (video.poster && video.poster.trim() !== '') {
            videoEl.poster = video.poster;
        }
        // ★ 直接设置 src 和 type，更简洁可靠 ★
        videoEl.src = video.videoSrc;
        videoEl.type = 'video/mp4';       // 明确指定 MIME 类型
        // 设置宽高自适应（由 CSS 控制）
        videoEl.style.width = '100%';
        videoEl.style.height = '100%';

        // 备用提示（浏览器不支持视频时显示）
        videoEl.textContent = '您的浏览器不支持视频播放，请更换浏览器后重试。';

        // ★ 添加错误监听，方便调试视频加载问题 ★
        videoEl.addEventListener('error', function(e) {
            console.error(`视频 "${video.title}" 加载失败:`, videoEl.error);
            // 错误码说明：
            // 1 = MEDIA_ERR_ABORTED（用户中止）
            // 2 = MEDIA_ERR_NETWORK（网络错误）
            // 3 = MEDIA_ERR_DECODE（解码失败）
            // 4 = MEDIA_ERR_SRC_NOT_SUPPORTED（格式不支持）
        });

        wrapper.appendChild(videoEl);
        content.appendChild(wrapper);

        // 视频描述文字
        if (video.desc) {
            const desc = document.createElement('div');
            desc.className = 'video-desc';
            desc.textContent = video.desc;
            content.appendChild(desc);
        }

        body.appendChild(content);

        card.appendChild(header);
        card.appendChild(body);

        // ★ 点击卡片时切换展开/收起，并且展开时主动加载视频 ★
        card.addEventListener('click', function() {
            // 切换展开状态
            this.classList.toggle('expanded');
            // 如果卡片已展开，则触发视频加载（解决部分浏览器不自动加载的问题）
            if (this.classList.contains('expanded')) {
                const video = this.querySelector('video');
                if (video) {
                    // 调用 load() 强制浏览器重新加载视频源
                    video.load();
                }
            }
        });

        videosListEl.appendChild(card);
    });
}

/**
 * ============================================================
 * 7. 绑定导航按钮的点击事件
 * ============================================================
 */
navHome.addEventListener('click', function() { switchPage('home'); });
navLaws.addEventListener('click', function() { switchPage('laws'); });
navVideos.addEventListener('click', function() { switchPage('videos'); });

/**
 * ============================================================
 * 8. 初始化：渲染所有列表，并默认显示主页
 * ============================================================
 */
renderLaws();   // 生成法条卡片
renderVideos(); // 生成视频卡片
switchPage('home'); // 默认显示主页

/**
 * ============================================================
 * 9. 全局快捷键：按 ESC 键收起所有展开的卡片
 * ============================================================
 */
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.law-card.expanded, .video-card.expanded').forEach(card => {
            card.classList.remove('expanded');
        });
    }
});

// 控制台输出提示信息，方便开发者确认加载状态
console.log('✅ 交通运输普法页面已加载 (CSS/JS 分离)');
console.log('📌 法条数据存储在 lawsData 中，可在此增删改');
console.log('📌 视频数据存储在 videosData 中，可替换 videoSrc 和 poster');
