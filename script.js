/**
 * ============================================================
 * 1. 法条数据（大法 → 子法 两级结构）
 * ============================================================
 */
const lawsData = [
    {
        parentTitle: '《中华人民共和国公路法》',
        children: [
            {
                childTitle: '对造成公路损坏、污染或者影响公路畅通行为的行政处罚',
                childSummary: '对造成公路损坏、污染或者影响公路畅通行为的行政处罚。',
                childContent: '【第四十六条】\n任何单位和个人不得在公路上及公路用地范围内摆摊设点、堆放物品、倾倒垃圾、设置障碍、挖沟引水、利用公路边沟排放污物或者进行其他损坏、污染公路和影响公路畅通的活动。\n【第七十七条】\n违反本法第四十六条的规定，造成公路路面损坏、污染或者影响公路畅通的，或者违反本法第五十一条规定，将公路作为试车场地的，由交通主管部门责令停止违法行为，可以处五千元以下的罚款。'
            },
            {
                childTitle: '对将公路作为试车场地行为的行政处罚',
                childSummary: '对将公路作为试车场地行为的行政处罚。',
                childContent: '【第五十一条】\n机动车制造厂和其他单位不得将公路作为检验机动车制动性能的试车场地。\n【第七十七条】\n违反本法第四十六条的规定，造成公路路面损坏、污染或者影响公路畅通的，或者违反本法第五十一条规定，将公路作为试车场地的，由交通主管部门责令停止违法行为，可以处五千元以下的罚款。'
            },
            {
                childTitle: '对从事挖砂、爆破及其他危及公路、公路桥梁等安全的作业行为的行政处罚',
                childSummary: '对从事挖砂、爆破及其他危及公路、公路桥梁等安全的作业行为的行政处罚。',
                childContent: '【第四十七条】\n大中型公路桥梁和渡口周围200米、公路隧道上方及洞口外100米范围内，以及公路两侧一定距离内，不得挖砂、采石、取土、倾倒废弃物、爆破作业及其他可能危及公路、公路桥梁、公路隧道、公路渡口安全的活动。\n在前款范围内因抢险、防汛等需要修筑堤坝、压缩或拓宽河床，应当事先报经省、自治区、直辖市人民政府交通主管部门会同水行政主管部门批准，并采取有效措施保护相关公路设施的安全的措施\n【第七十六条第（三）项】\n有下列违法行为之一的，由交通主管部门责令停止违法行为，可以处三万元以下的罚款：（三）违反本法第四十七条规定，从事危及公路安全的作业的。'
            },
            {
                childTitle: '对铁轮车、履带车和其他可能损害路面的机具擅自在公路上行驶行为的行政处罚',
                childSummary: '对铁轮车、履带车和其他可能损害路面的机具擅自在公路上行驶行为的行政处罚。',
                childContent: '【第四十八条】\n铁轮车、履带车和其他可能损害公路路面的机具，不得在公路上行驶。农业机械因当地田间作业需要在公路上短距离行驶或者军用车辆执行任务需要在公路上行驶的，可以不受前款限制，但是应当采取安全保护措施。对公路造成损坏的，应当按照损坏程度给予补偿。\n【第七十六条第（四项）】\n有下列违法行为之一的，由交通主管部门责令停止违法行为，可以处三万元以下的罚款：违反本法第四十八条规定，铁轮车、履带车和其他可能损害路面的机具擅自在公路上行驶的。'
            },
            {
                childTitle: '对造成公路损坏未报告行为的行政处罚',
                childSummary: '对造成公路损坏未报告行为的行政处罚。',
                childContent: '【第五十三条】\n造成公路损坏的，责任者应当及时报告公路管理机构，并接受公路管理机构的现场调查。\n【第七十八条】\n违反本法第五十三条规定，造成公路损坏，未报告的，由交通主管部门处一千元以下的罚款。'
            },
            {
                childTitle: '损坏、擅自移动、涂改、遮挡公路附属设施等行为的行政处罚',
                childSummary: '对损坏、擅自移动、涂改、遮挡公路附属设施或者利用公路附属设施架设管道、悬挂物品或者损坏、擅自挪动建筑控制区的标桩、界桩等可能危及公路安全等行为的行政处罚。',
                childContent: '《中华人民共和国公路法》\n【第五十二条】\n任何单位和个人不得损坏、擅自移动、涂改公路附属设施。\n前款公路附属设施，是指为保护、养护公路和保障公路安全畅通所设置的公路防护、排水、养护、管理、服务、交通安全、渡运、监控、通信、收费等设施、设备以及专用建筑物、构筑物等。\n【第五十六条】\n除公路防护、养护需要的以外，禁止在公路两侧的建筑控制区内修建建筑物和地面构筑物；需要在建筑控制区内埋设管线、电缆等设施的，应当事先经县级以上地方人民政府交通主管部门批准。\n前款规定的建筑控制区的范围，由县级以上地方人民政府按照保障公路运行安全和节约用地的原则，依照国务院的规定划定。\n建筑控制区范围经县级以上地方人民政府依照前款规定划定后，由县级以上地方人民政府交通主管部门设置标桩、界桩。任何单位和个人不得损坏、擅自挪动该标桩、界桩。\n【第七十六条第（六）项】\n有下列违法行为之一的，由交通主管部门责令停止违法行为，可以处三万元以下的罚款：违反本法第五十二条、第五十六条规定，损坏、移动、涂改公路附属设施或者损坏、挪动建筑控制区的标桩、界桩，可能危及公路安全的。\n《公路安全保护条例》\n【第二十五条】\n禁止损坏、擅自移动、涂改、遮挡公路附属设施或者利用公路附属设施架设管道、悬挂物品。\n【第六十条第（一）项】\n违反本条例的规定，有下列行为之一的，由公路管理机构责令改正，可以处3万元以下的罚款：（一）损坏、擅自移动、涂改、遮挡公路附属设施或者利用公路附属设施架设管道、悬挂物品，可能危及公路安全的。'
            },
        ]
    },
    {
        parentTitle: '《超限运输车辆行驶公路管理规定》',
        children: [
            {
                childTitle: '对车货总体的外廓尺寸、轴荷或者总质量超过限定标准的行政处罚',
                childSummary: '对车货总体的外廓尺寸、轴荷或者总质量超过公路、公路桥梁、公路隧道、汽车渡船限定标准的行政处罚。',
                childContent: '【第三条第一款第（四）（五）（六）（七）（八）项】\n本规定所称超限运输车辆，是指有下列情形之一的货物运输车辆：\n（四）二轴货车，其车货总质量超过18000千克；\n（五）三轴货车，其车货总质量超过25000千克；三轴汽车列车，其车货总质量超过27000千克；\n（六）四轴货车，其车货总质量超过31000千克；四轴汽车列车，其车货总质量超过36000千克；\n（七）五轴汽车列车，其车货总质量超过43000千克；\n（八）六轴及六轴以上汽车列车，其车货总质量超过49000千克，其中牵引车驱动轴为单轴的，其车货总质量超过46000千克。\n【第四十三条】\n车辆违法超限运输的，由公路管理机构根据违法行为的性质、情节和危害程度，按下列规定给予处罚： （一）车货总高度从地面算起未超过4.2米、总宽度未超过3米且总长度未超过20米的，可以处200元以下罚款；车货总高度从地面算起未超过4.5米、总宽度未超过3.75米且总长度未超过28米的，处200元以上1000元以下罚款；车货总高度从地面算起超过4.5米、总宽度超过3.75米或者总长度超过28米的，处1000元以上3000元以下的罚款； （二）车货总质量超过本规定第三条第一款第四项至第八项规定的限定标准，但未超过1000千克的，予以警告；超过1000千克的，每超1000千克罚款500元，最高不得超过30000元。 有前款所列多项违法行为的，相应违法行为的罚款数额应当累计，但累计罚款数额最高不得超过30000元。\n【第四十四条】\n大件运输车辆有下列情形之一的，视为违法超限运输： （一）未经许可擅自行驶公路的；（二）车辆及装载物品的有关情况与《超限运输车辆通行证》记载的内容不一致的；（三）未按许可的时间、路线、速度行驶公路的；（四）未按许可的护送方案采取护送措施的。'
            },
            {
                childTitle: '对指使、强令车辆驾驶人超限运输货物行为的行政处罚',
                childSummary: '对指使、强令车辆驾驶人超限运输货物行为的行政处罚。',
                childContent: '《公路安全保护条例》\n【第六十八条】\n违反本条例的规定，指使、强令车辆驾驶人超限运输货物的，由道路运输管理机构责令改正，处3万元以下的罚款。\n《超限运输车辆行驶公路管理规定》\n【第四十九条】\n违反本规定，指使、强令车辆驾驶人超限运输货物的，由道路运输管理机构责令改正，处30000元以下罚款。'
            },
        ]
    },
    {
        parentTitle: '《公路安全保护条例》',
        children: [
            {
                childTitle: '损坏、擅自移动、涂改、遮挡公路附属设施等行为的行政处罚',
                childSummary: '对损坏、擅自移动、涂改、遮挡公路附属设施或者利用公路附属设施架设管道、悬挂物品或者损坏、擅自挪动建筑控制区的标桩、界桩等可能危及公路安全等行为的行政处罚。',
                childContent: '《中华人民共和国公路法》\n【第五十二条】\n任何单位和个人不得损坏、擅自移动、涂改公路附属设施。\n前款公路附属设施，是指为保护、养护公路和保障公路安全畅通所设置的公路防护、排水、养护、管理、服务、交通安全、渡运、监控、通信、收费等设施、设备以及专用建筑物、构筑物等。\n【第五十六条】\n除公路防护、养护需要的以外，禁止在公路两侧的建筑控制区内修建建筑物和地面构筑物；需要在建筑控制区内埋设管线、电缆等设施的，应当事先经县级以上地方人民政府交通主管部门批准。\n前款规定的建筑控制区的范围，由县级以上地方人民政府按照保障公路运行安全和节约用地的原则，依照国务院的规定划定。\n建筑控制区范围经县级以上地方人民政府依照前款规定划定后，由县级以上地方人民政府交通主管部门设置标桩、界桩。任何单位和个人不得损坏、擅自挪动该标桩、界桩。\n【第七十六条第（六）项】\n有下列违法行为之一的，由交通主管部门责令停止违法行为，可以处三万元以下的罚款：违反本法第五十二条、第五十六条规定，损坏、移动、涂改公路附属设施或者损坏、挪动建筑控制区的标桩、界桩，可能危及公路安全的。\n《公路安全保护条例》\n【第二十五条】\n禁止损坏、擅自移动、涂改、遮挡公路附属设施或者利用公路附属设施架设管道、悬挂物品。\n【第六十条第（一）项】\n违反本条例的规定，有下列行为之一的，由公路管理机构责令改正，可以处3万元以下的罚款：（一）损坏、擅自移动、涂改、遮挡公路附属设施或者利用公路附属设施架设管道、悬挂物品，可能危及公路安全的。'
            },
            {
                childTitle: '对指使、强令车辆驾驶人超限运输货物行为的行政处罚',
                childSummary: '对指使、强令车辆驾驶人超限运输货物行为的行政处罚。',
                childContent: '《公路安全保护条例》\n【第六十八条】\n违反本条例的规定，指使、强令车辆驾驶人超限运输货物的，由道路运输管理机构责令改正，处3万元以下的罚款。\n《超限运输车辆行驶公路管理规定》\n【第四十九条】\n违反本规定，指使、强令车辆驾驶人超限运输货物的，由道路运输管理机构责令改正，处30000元以下罚款。'
            },
        ]
    },
    {
        parentTitle: '《黑龙江省公路条例》',
        children: [
            {
                childTitle: '测试',
                childSummary: '测试',
                childContent: '测试'
            },
        ]
    },
    {
        parentTitle: '《黑龙江省高速公路管理条例》',
        children: [
            {
                childTitle: '测试',
                childSummary: '测试',
                childContent: '测试'
            },
        ]
    },
    {
        parentTitle: '《中华人民共和国道路运输条例》',
        children: [
            {
                childTitle: '测试',
                childSummary: '测试',
                childContent: '测试'
            },
        ]
    },
    {
        parentTitle: '《道路旅客运输及客运站管理规定》',
        children: [
            {
                childTitle: '测试',
                childSummary: '测试',
                childContent: '测试'
            },
        ]
    },
    {
        parentTitle: '《道路运输从业人员管理规定》',
        children: [
            {
                childTitle: '测试',
                childSummary: '测试',
                childContent: '测试'
            },
        ]
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
        title: '《强国复兴有我，勇当交通先锋》演讲比赛',
        summary: '初心如炬，护航龙江。',
        videoSrc: './video/初心如炬，护航龙江.mp4',
        poster: './images/初心如炬，护航龙江.jpg',
        desc: '测试。',
    },
    {
        id: 2,
        title: '双鸭山分局我是大队长视频第二期',
        summary: '我是大队长宣传视频。',
        videoSrc: './video/我是大队长1.mp4',
        poster: './images/我是大队长1.jpg',
        desc: '测试。',
    },
	{
	    id: 3,
	    title: '大队长带头下沉一线——叶勇的执法故事',
	    summary: '我是大队长。',
	    video: '',
	    blocks: [
	        { type: 'text', content: '叶勇是省交通运输综合行政执法局双鸭山分局执法一大队大队长。他带领执法一大队以党建为引领，紧扣"四基四化"建设标准，充分发挥"头雁效应"，带头下沉一线，深入源头企业开展现场普法，把普法课堂设在生产装载现场，把执法整改落到隐患排查一线。他以"头雁领飞、全员练兵"的实干作风，持续推动交通运输综合行政执法工作提质增效、落地见效。' },
	        { type: 'text', content: '靠前部署，靶向治理明思路' },
	        { type: 'text', content: '大件运输超限超载易损毁公路、引发事故，是交通安全的突出隐患。叶勇立足辖区实际，带头研判行业风险，将主题活动与执法效能提升深度融合。牵头制定专项方案，明确"源头管控、精准普法、柔性执法、长效共治"的工作思路，统筹调配执法力量，聚焦辖区重点大件运输企业，开展全覆盖、沉浸式执法服务，坚决把安全隐患消除在萌芽状态，全力筑牢道路交通安全防线。' },
	        { type: 'image', src: './images/大队长带头下沉一线——叶勇的执法故事-1.jpg', alt: '案例图片2' },
			{ type: 'text', content: '实景普法，入企宣讲强意识' },
	        { type: 'text', content: '叶勇始终坚持普法不能"念文件、读条款"，必须现场化、场景化、接地气。他带领执法专班深入企业货物装载堆场、车辆停放区、调度办公区，直面企业负责人、安全管理员及货车司机开展精准普法。结合辖区近年来大件运输典型违法案例，用"身边事警醒身边人"，逐条解读超限超载认定标准、大件运输许可办理规范、源头非法装载的法律责任，让法规条款通俗易懂。现场解答实操疑问、指导合规操作，帮助企业扭转"重效益、轻安全"的侥幸心理，推动普法从"单向灌输"向"双向互动"转变，切实提升企业及从业人员法治意识和安全素养。' },
	        { type: 'text', content: '柔性执法，严管厚爱提质效' },
	        { type: 'text', content: '执法有力度，服务有温度。在现场巡查中，一旦发现车辆违规装载等问题，叶勇坚持推行说理式、人性化执法，绝不简单"一罚了之"。他逐一核对车辆装载参数，精准指出违规细节，并对照法律法规，清晰讲明违法事实、处罚依据及潜在安全风险。结合多年一线执法经验，他引用辖区内因超限超载引发的安全事故和道路损毁案例，以案释法、以事警人，帮助当事人深刻认识违法行为的现实危害。执法过程严谨规范、文明有度，他耐心劝导、细致指导，现场督促从业人员立即整改违规装载问题，切实消除道路运输安全隐患，实现了"查处一件、纠正一类、教育一片"的执法效果，充分展现了交通运输执法队伍规范文明、严管厚爱、履职担当的良好形象。' },
	        { type: 'image', src: './images/大队长带头下沉一线—叶勇的执法故事-2.jpg', alt: '案例图片2' },
			{ type: 'text', content: '此次"大队长带头下沉"实践活动，叶勇坚持靠前示范、一线履职，切实打通了源头监管与普法宣传的"最后一公里"，有效压实了企业安全生产主体责任，净化了辖区大件运输市场环境。下一步，他将继续带领双鸭山分局执法一大队，以群众需求为导向，用脚步丈量责任，以实干诠释担当，持续规范大件运输行业秩序，全力守护人民群众安全顺畅出行。' },
	        { type: 'text', content: '来源：黑龙江省交通运输综合行政执法局' }
	    ]
	},
    {
        id: 4,
        title: '双鸭山分局我是大队长视频第二期',
        summary: '我是大队长宣传视频。',
        videoSrc: './video/我是大队长2.mp4',
        poster: './images/我是大队长2.jpg',
        desc: '测试。',
    }
];

/**
 * ============================================================
 * 3. 警示教育数据（扁平结构，图文混排）
 * ============================================================
 */
const warningsData = [
    {
        id: 1,
        title: '大件运输车为何无法从事普通货物运输',
        summary: '大件运输车从事普通货物运输',
        video: '',
        blocks: [
            { type: 'text', content: '生活中，我们偶尔会见到车身超长、底盘极低的重型车辆，它们是专为运输不可拆解大型物件而生的"大件运输车"。很多人好奇：同样是货车，为何不能顺便拉点普通货物？这背后是车辆属性、法规许可、安全保障等多重"红线"的硬性约束。先看几个真实案例。' },
            { type: 'image', src: './images/大件运输车为何无法从事普通货物运输-1.jpg', alt: '案例图片1' },
            { type: 'text', content: '案例一：废木柴变"废"为"罚"' },
            { type: 'text', content: '2025年8月，海安执法人员巡查时发现一辆重型低平板半挂车装载约40吨废木柴，从上海运往海安。该车经营范围仅为"大型物件运输"，而废木柴属于可拆解的普通货物。最终，运输公司被罚1000元并责令改正。' },
            { type: 'text', content: '案例二：凌晨"巨无霸"装载27辆轿车被截' },
            { type: 'text', content: '2026年6月24日凌晨，扬州交警在沪陕高速收费站拦下两辆重型半挂牵引车。两车均悬挂超限临时号牌，按规定仅可承运不可解体大件，却违规装运27辆小轿车，且车辆经过非法改装、加装射灯遮挡号牌。因严重超载、重心偏移、制动风险极高，两车被依法扣押，面临多项合并处罚。' },
            { type: 'image', src: './images/大件运输车为何无法从事普通货物运输-2.jpg', alt: '案例图片2' },
            { type: 'text', content: '这些案例并非偶然。大件运输车之所以被严格限定用途，根源在于以下几点：' },
            { type: 'text', content: '一、车辆"出身"决定用途' },
            { type: 'text', content: '根据国家强制标准GB1589-2016，低平板专用半挂车等大件车型，从设计制造之初就专为运输"不可拆解大型物体"而设。其结构、轴荷、重心、固定装置均针对整体性强、尺寸超常的货物优化，而非为散装或可分载的普通货物服务。让这类车运输普通货物，属于"用非其材"，既无法发挥车辆优势，更埋下安全隐患。' },
            { type: 'text', content: '二、法规明确禁止"载运可分载物品"' },
            { type: 'text', content: '大件运输车通常超限（超长、超宽、超高或超重），依法需办理超限运输许可。但《超限运输车辆行驶公路管理规定》第十一条明确，若货物可分载，则不予受理超限许可；第二十七条更直接规定："载运可分载物品的超限运输车辆，禁止行驶公路"。一旦装上普通货物，车辆即成为"载运可分载物品的超限车辆"，法律上直接禁止上路。上述废木柴案就是因装载可分载普通货物而违法。' },
            { type: 'text', content: '三、牌照与证件的"死结"' },
            { type: 'text', content: '大件运输车因轴荷、尺寸超国标，无法正常注册登记，只能申领临时号牌（"超牌"），且"超牌"仅限运输特定大件时使用。同时，普通货运车辆须取得《道路运输证》，而大件车因临时牌照身份，无法取得该证，自然不具备普通货运的法定资格。违规拉普货，即构成"无证从事普通货运"，面临罚款。' },
            { type: 'text', content: '四、安全风险不容忽视' },
            { type: 'text', content: '大件车车身长、重心高、制动距离长，两侧往往无挡板，设计上依赖专业紧固方案。若装载散货，货物难以牢固固定，行驶中易散落、偏移，导致车辆操控性骤降，侧翻、追尾风险激增；同时超限轴荷会加速路面破损和桥梁损伤。轿车案中，27辆轿车堆叠加上非法改装，使刹车失灵、侧翻概率极高，无异于在高速上埋设"定时炸弹"。' },
            { type: 'text', content: '五、维护市场公平秩序' },
            { type: 'text', content: '部分经营者利用大件车逃避超限检测，以"假大件、真普货"方式低价抢单，严重扰乱货运市场，挤压合法经营者生存空间。因此，交通运输执法部门已将此类行为列为重点打击对象。' },
            { type: 'text', content: '综上所述，大件运输车不能从事普通货物运输，绝非"愿不愿意"的问题，而是由车辆法定属性、许可制度、安全底线和市场秩序共同构成的刚性约束。合规经营，既是对公共安全负责，也是货运行业健康发展的基石。任何试图"跨界"运输普通货物的行为，都将面临法律严惩和现实风险。' }
        ]
    },
	{
	    id: 2,
	    title: '非法营运的治理要点与法律风险解析',
	    summary: '非法营运。',
	    video: '',
	    blocks: [
			{ type: 'image', src: './images/非法营运的治理要点与法律风险解析-1.jpg', alt: '标题图片1' },
	        { type: 'text', content: '非法营运，是指未取得道路运输经营许可，擅自从事道路运输经营的行为。随着网约车、顺风车等新业态的发展，非法营运形式日趋多样，查处难度与诉讼风险同步上升。本文结合典型案例与相关法规，对非法营运的认定、危害及执法要点作简要梳理。' },
	        { type: 'text', content: '一、典型案例' },
	        { type: 'text', content: '案例一：跨省"黑车"严重超员被查' },
	        { type: 'text', content: '2026年6月9日，十堰市交通运输综合执法支队根据公安交管部门转办线索，查获一辆苏U9****普通小型客车。该车核载6人，实载10人，超员率67%。驾驶员张某从江苏连云港出发，先后在江阴、无锡搭载9名乘客，每人收取车费400元，但车辆未取得道路运输证。执法部门依据《道路运输条例》对其立案查处并暂扣车辆。' },
	        { type: 'text', content: '案例二：二次违法从重处罚' },
	        { type: 'text', content: '2026年5月7日，周口市交通运输局查处刘某驾驶豫ABX68**小型轿车非法载客。经查，刘某曾于2025年6月因同类违法行为被处罚，属于一年内再次违法。执法部门认定情节较重，给予罚款10000元、暂扣车辆的行政处罚。' },
	        { type: 'text', content: '二、非法营运的主要危害' },
	        { type: 'text', content: '（一）人身安全无保障。非法营运车辆未按规定进行技术状况检测，部分车辆由报废车改装而成，安全性能远低于营运标准。驾驶员未经从业培训，安全意识薄弱，超速、超员、超载现象普遍。一旦发生事故，因车辆保险拒赔，乘客难以获得有效救济。根据《中华人民共和国道路运输条例》第六十三条，未取得道路运输经营许可擅自从事道路运输经营的，由县级以上地方人民政府交通运输主管部门责令停止经营；有违法所得的，没收违法所得，处违法所得2倍以上10倍以下的罚款；没有违法所得或者违法所得不足2万元的，处3万元以上10万元以下的罚款；构成犯罪的，依法追究刑事责任。' },
	        { type: 'text', content: '（二）合法权益无保障。"黑车"未投保承运人责任险，缺乏风险承担能力。发生交通事故后，乘客伤亡及财产损失往往无法获得足额赔付。《道路运输条例》第三条明确规定，从事道路运输经营以及道路运输相关业务，应当依法经营，诚实信用，公平竞争；第八条则对从事客运经营的车辆、驾驶人员及安全生产管理制度提出了明确要求。非法营运车辆显然不满足上述法定条件，其经营行为本身即属违法。' },
	        { type: 'text', content: '（三）扰乱市场秩序。《道路运输条例》第六条明确，国家鼓励道路运输企业实行规模化、集约化经营，任何单位和个人不得封锁或者垄断道路运输市场。非法营运逃避合规成本，随意定价、违规揽客，形成不正当竞争，侵害合法经营者利益，破坏公平有序的客运环境。' },
	        { type: 'text', content: '（四）影响公路安全与城市形象。非法营运车辆常聚集在车站、医院、商业区等处，随意停放、强拉强载，损害城市文明形象。个别人员甚至组成团伙，划分区域、排挤合法车辆，易引发社会矛盾。' },
	        { type: 'text', content: '三、结语' },
	        { type: 'text', content: '打击非法营运事关群众出行安全、公路安全和运输市场秩序。建议广大市民自觉抵制"黑车"，选择合法合规交通工具。如发现疑似非法营运行为，可拨打12328交通运输服务监督电话或向属地执法部门举报。通过社会共治，共同维护安全、规范、有序的道路运输环境。' }
	    ]
	},
	{
	    id: 3,
	    title: '私改卧铺客车，岂能“躺”着违法？',
	    summary: '非法改装营运车辆。',
	    video: '',
	    blocks: [
	        { type: 'text', content: '开篇案例：莱州39座客车12座改卧铺，群众举报终被查' },
	        { type: 'text', content: '2025年11月4日，莱州交管大队接群众举报线索，京AN***6号牌大型客车涉嫌非法改装，存在道路交通安全风险隐患。接到举报后，莱州交管大队迅速联系高速莱州大队、莱州市交运局成立联合执法小组，制定精准拦截方案。经轨迹分析，该车途经荣乌高速进入莱州。21时许，该车在山东高速莱州收费站被联合执法小组查获。' },
			{ type: 'image', src: './images/私改卧铺客车，岂能“躺”着违法？-1.jpg', alt: '案例图片1' },
	        { type: 'text', content: '经核查，京AN***6号牌大型普通客车核载39座，其中12个座位被改为卧铺铺位，构成非法改装。当晚，该案移交市交运局执法大队依法查处。' },
	        { type: 'text', content: '一、违法事实清晰' },
	        { type: 'text', content: '上述案例并非孤例。早在2012年3月1日，国家就全面叫停卧铺客车生产、销售和注册登记。这一禁令的出台，正是因为卧铺客车安全技术尚不完善、车内易燃品多、逃生通道狭窄等突出安全隐患。' },
	        { type: 'text', content: '然而，近年来一些经营者通过网络平台招揽客源，将普通旅游客车非法改装成"卧铺大巴"。其违法事实主要包括：' },
	        { type: 'text', content: '1. 擅自改变车辆内部结构：拆除固定座椅，加装木质或不锈钢卧铺设施，破坏了原车设计的安全重心和紧急疏散通道。' },
	        { type: 'text', content: '2. 变更核定载客状态：如上述案例中，核载39座的客车将12座改为卧铺。' },
	        { type: 'text', content: '3. 车辆用途实质性改变：从"日间客运"变相为"长途夜行卧铺"模式，安全带被床板挡住无法使用。' },
	        { type: 'text', content: '4. 未履行备案手续：所有改装均未向公安交管部门和交通运输主管部门申报、检验或备案。' },
	        { type: 'text', content: '法规利剑高悬，不容侥幸' },
	        { type: 'text', content: '针对此类违法行为，法规设置了清晰且严厉的处罚条款：' },
	        { type: 'text', content: '直接罚则：依据《中华人民共和国道路运输条例》第六十九条第（二）项，客运经营者擅自改装已取得车辆营运证的车辆的，由县级以上交通运输主管部门责令改正，处5000元以上2万元以下的罚款。' },
	        { type: 'text', content: '隐患定性：根据2023年9月印发的《道路运输企业和城市客运企业安全生产重大事故隐患判定标准（试行）》，道路运输企业使用擅自改装的车辆从事经营活动的，应当直接判定为重大事故隐患。' },
	        { type: 'text', content: '连带后果：若因改装导致重大伤亡事故，经营者还将承担刑事责任，且保险公司对非法改装导致的损失有权拒赔商业险。' },
	        { type: 'text', content: '三、处罚内容严肃：整改与罚款并重，停运是底线' },
	        { type: 'text', content: '在上述真实案例中，交通运输主管部门依法执行了以下处罚内容：' },
	        { type: 'text', content: '1. 立即停止经营：当即责令车辆停运整改，不得载客上路。' },
	        { type: 'text', content: '2. 封存涉事车辆：对违法改装车辆予以封存。' },
	        { type: 'text', content: '3. 限期恢复原状：拆除全部违规改装设施，无条件恢复车辆原出厂座椅布局及内饰原状。' },
	        { type: 'text', content: '4. 经济处罚：在5000元至2万元幅度内处以罚款。' },
	        { type: 'text', content: '5. 企业停业整顿：涉事企业被责令停业整顿，召回所有车辆展开排查。' },
	        { type: 'text', content: '6. 信用惩戒：将违法行为记入企业信用档案，降低信用等级。' },
	        { type: 'text', content: '安全不容"改装"，守法方能致远' },
	        { type: 'text', content: '一辆客车的设计，每一颗螺丝、每一张座椅、每一条安全带，都承载着数十个家庭的团圆与平安。这些真实案例一再证明：私自拆除座椅、加装卧铺，看似"便民增效"，实则是在用侥幸换取风险，用漠视践踏法律。' },
	        { type: 'text', content: '拆掉的是座椅，卸下的是安全。车辆结构不是积木，可以随意拼搭；营运资格不是道具，可以任意变通。每一位道路运输经营者必须清醒认识到：罚款有价，生命无价；整改可复，事故难回。唯有敬畏法规、严守标准，将每一次出车都当作对安全的庄严承诺，方能让旅客"坐"得安心，"行"得放心。' }
	    ]
	},
	{
	    id: 4,
	    title: '非法营运客车事故特征剖析与防范建议',
	    summary: '非法营运。',
	    video: '',
	    blocks: [
	        { type: 'text', content: '近期，四起非法营运客车事故接连发生，累计造成33人死亡。2026年3月13日凌晨，兰海高速一核载9人客车加装座椅至12座、实载12人，失控侧翻后与护栏碰撞，致8死4伤，驾驶员杨某远自2024年9月起无证往返云南与海南，每人收费400—700元；6月19日凌晨，福银高速渝BSA***客车核载7人实载10人，驾驶员疲劳状态下追尾货车，致4死5伤；5月28日凌晨，沪陕高速鄂F**客车核载9人实载16人，追尾货车致13死3伤，座椅系后期加装、碰撞中脱离；7月31日，北京通州京A大巴登记为"非营运"，发生事故致9名师生受伤。' },
			{ type: 'image', src: './images/非法营运客车事故特征剖析与防范建议-1.jpg', alt: '案例图片1' },
	        { type: 'text', content: '一、主要特征' },
	        { type: 'text', content: '1. 无证经营普遍。涉事车辆均登记为"非营运"，却长期从事跨省客运。违法收益远高于查处成本，导致屡禁不止。' },
	        { type: 'text', content: '2. 非法改装与超员并行。三起事故涉及加装座椅，超员33%至78%。后加座椅无原厂安全结构，碰撞时易断裂脱落，沪陕高速事故中乘客大面积位移即为后果。现行罚款200—2000元，与黑车收费相比震慑不足。' },
			{ type: 'image', src: './images/非法营运客车事故特征剖析与防范建议-2.jpg', alt: '案例图片2' },
	        { type: 'text', content: '3. 深夜疲劳驾驶多发。三起事故发生在凌晨1—4时，福银高速驾驶员笔录显示事故前已严重犯困。黑车利用夜间监管薄弱时段运营，压缩行程伴随超速与疲劳双重风险。' },
	        { type: 'text', content: '二、防范建议' },
	        { type: 'text', content: '对乘客而言，出行应做到以下几点：一是在上车前留意车辆外观，正规营运车辆车身喷涂有企业名称和监督电话，而黑车外观通常无任何标识；二是在上车时检查车内设备，正规客车须配备动态监控摄像头、GPS定位及超速报警装置、有效期内安全锤和灭火器、每个座位的独立安全带，缺少任何一项即应拒绝乘坐；三是注意观察座椅状况，如发现排列异常紧密、钢架存在明显焊接痕迹或座椅松动不牢固，极可能为非法改装车辆，应立即下车并举报；四是行驶过程中如发现驾驶员频繁打电话、打哈欠、行车路线异常，应及时提醒或要求停车换人；五是日常出行尽量选择正规客运站发出的班车、可查询追溯的网约车以及具有营运资质的包车。' },
			{ type: 'image', src: './images/非法营运客车事故特征剖析与防范建议-3.jpg', alt: '案例图片3' },
	        { type: 'text', content: '三、结语' },
	        { type: 'text', content: '从每起事故都可看到相同链条：非法营运叠加改装、超员，为避监管选择深夜行驶，疲劳状态下追尾重货，最终酿成群死群伤。这并非偶然，而是该模式下的必然结局。发现疑似非法营运，请拨打12328或向属地交通执法部门举报，共筑安全防线。' },
			{ type: 'image', src: './images/非法营运客车事故特征剖析与防范建议-4.jpg', alt: '案例图片4' }
	    ]
	},
	{
	    id: 5,
	    title: '旅游包车岂能“跑班线”？',
	    summary: '旅游客运超范围经营，变相从事班线客运。',
	    video: '',
	    blocks: [
	        { type: 'text', content: '开篇案例：大庆两家旅游客运公司"越界"经营被查处' },
	        { type: 'text', content: '2025年2月，黑龙江省交通运输综合行政执法局公布了一批行政处罚信息，大庆驰鼎旅游客运有限公司与大庆拓领旅游客运有限公司安达分公司赫然在列。两家公司虽持有旅游客运经营资质，却超越许可范围从事道路客运经营活动，被执法部门依法查处。案由均为"超越许可事项，从事道路客运经营案"。' },
	        { type: 'text', content: '这些案例并非孤例。在黑龙江的道路运输市场上，部分仅具备包车（旅游）客运资质的车辆和企业，以"旅游团""包车"为幌子，实质上按照固定线路、固定时间、固定站点开展常态化运营，变相从事班线客运业务——这正是典型的"以包代班"违规运营行为。' },
	        { type: 'text', content: '一、违法事实清晰：旅游包车"定点定线"实为班线客运' },
	        { type: 'text', content: '（一）什么是"以包代班"？' },
	        { type: 'text', content: '根据《道路旅客运输及客运站管理规定》，道路客运经营包括班车客运、包车客运、旅游客运三大类。其中，包车客运是指以运送团体旅客为目的，将客车包租给用户安排使用，提供驾驶服务，按照约定的起始地、目的地和路线行驶，由包车用户统一支付费用的一种客运方式。而班车客运则是指向社会公众提供服务、具有固定线路、站点、时间、班次的客运方式。' },
	        { type: 'text', content: '所谓"以包代班"，是指仅具备包车（旅游）客运经营资质的企业或车辆，以"旅游团""包车"为幌子，实质上按照固定线路、固定时间、固定站点开展常态化运营，变相从事班线客运业务的违规行为。' },
	        { type: 'text', content: '（二）"以包代班"的典型特征' },
	        { type: 'text', content: '上述黑龙江案例充分揭示了"以包代班"的典型违法特征：' },
	        { type: 'text', content: '1. 以"旅游包车"之名，行"班线客运"之实：涉案企业虽持有旅游包车客运资质，却超越许可范围从事道路客运经营活动。' },
	        { type: 'text', content: '2. 面向不特定社会公众招揽乘客：乘客之间互不认识，并非统一的"团体旅客"，而是通过公司联系、黄牛招揽、线上线下平台等途径分别乘车。' },
	        { type: 'text', content: '3. 乘客分别支付费用：每位乘客单独支付车费，并非由包车用户统一支付。' },
	        { type: 'text', content: '4. 固定线路、常态化运营：并非临时性、一次性的包车服务，而是固定线路的常态化运营模式。' },
	        { type: 'text', content: '5. 未持有有效的包车合同和包车客运标志牌：与包车客运"一车一合同、一车一牌"的要求严重不符。' },
	        { type: 'text', content: '正如黑龙江省道路运输条例所明确：定点、定线的旅游客车按道路客运班车管理。这意味着，一旦旅游包车形成了定点、定线的运营模式，就必须按照班车客运的标准进行管理，而不能继续以包车客运的名义逃避监管。' },
	        { type: 'text', content: '（三）法律定性：超越许可事项，从事道路客运经营' },
	        { type: 'text', content: '根据《道路旅客运输及客运站管理规定》第三十四条，客运经营者应当按照道路运输管理机构决定的许可事项从事客运经营活动。旅游包车仅具备包车（旅游）客运经营资质，未取得道路客运班线经营许可，擅自从事班车客运经营，属于典型的"超越许可事项，从事道路客运经营的"情形。' },
	        { type: 'text', content: '二、处罚依据明确' },
	        { type: 'text', content: '针对此类违法行为，我国法规设置了清晰且严厉的处罚链条：' },
	        { type: 'text', content: '直接罚则：依据《中华人民共和国道路运输条例》第六十三条，未取得道路运输经营许可，擅自从事道路客运经营的，责令停止经营，有违法所得的没收违法所得，处违法所得2倍以上10倍以下的罚款；没有违法所得或者违法所得不足2万元的，处3万元以上10万元以下的罚款。' },
	        { type: 'text', content: '情节严重：依据《道路旅客运输及客运站管理规定》第九十三条，情节严重的，由原许可机关吊销其相应的经营许可。' },
	        { type: 'text', content: '信用惩戒：违法行为将被记入企业信用档案，降低信用等级。' },
	        { type: 'text', content: '三、处罚内容严肃：整改与罚款并重，停运是底线' },
	        { type: 'text', content: '在上述真实案例中，交通运输主管部门依法执行了以下处罚内容：' },
	        { type: 'text', content: '1. 立即停止经营：责令涉事车辆立即停止违规经营活动，不得继续载客运营。' },
	        { type: 'text', content: '2. 暂扣营运证件：涉事车辆的营运证件被依法暂扣。' },
	        { type: 'text', content: '3. 经济处罚：在法定幅度内处以罚款。' },
	        { type: 'text', content: '4. 下达法律文书：对涉事车辆所属公司下达正式的法律文书，依法定程序处理。' },
	        { type: 'text', content: '包车不是"挡箭牌"，越界经营必受罚' },
	        { type: 'text', content: '旅游包车与班线客运，看似都是载客运输，实则有本质区别。包车客运服务于特定团体，班线客运服务于社会公众——这一区分不仅是管理上的便利，更是安全监管、运力调配、市场秩序的根本保障。' },
	        { type: 'text', content: '每一位道路运输经营者必须清醒认识到：许可事项不是摆设，经营范围不是虚设。唯有敬畏法规、严守许可、规范经营，方能在激烈的市场竞争中行稳致远。交通运输执法部门将持续以"零容忍"态度打击超范围经营行为。道路运输市场的公平秩序，需要每一位经营者共同维护。' }
	    ]
	},
	{
	    id: 6,
	    title: '“百吨王”超限超载的危害与法律后果',
	    summary: '超限超载。',
	    video: './video/百吨王_百度百科.mp4',
	    blocks: [
	        { type: 'text', content: '"百吨王"是指车货总质量超过100吨的严重超限超载货运车辆。此类车辆违法上路行驶，对人身安全、道路桥梁、交通秩序以及车辆自身均构成严重威胁，并带来明确的法律责任。以下案例是此类违法行为的典型表现。' },
	        { type: 'text', content: '案例一：弯道侧翻致多人死亡' },
	        { type: 'text', content: '2024年7月，江西某省道弯道处，一辆总重126吨的载货半挂车因重心过高、车速过快发生侧翻，对向一辆小型轿车被完全掩埋，车内三人全部死亡。经鉴定，该车超载率达150%，制动距离为正常值的三倍，弯道中无法有效减速。' },
	        { type: 'text', content: '案例二：超载货车致新建桥梁严重损毁' },
	        { type: 'text', content: '2025年3月，广东某新建桥梁通车仅8个月即出现大面积裂缝和梁板断裂，被迫封闭维修。检测认定，长期通行的多辆"百吨王"是主因——桥梁设计承重55吨，超载车辆反复通行造成的疲劳损伤使桥梁设计寿命由50年缩短至不足1年。' },
	        { type: 'text', content: '案例三：爆胎失控致驾驶员重伤' },
	        { type: 'text', content: '2025年11月，浙江某高速路段，一辆"百吨王"右前轮爆胎，车辆撞破护栏冲下路基，驾驶员重伤。事后检查显示，轮胎磨损超限、车架多处存在金属疲劳裂纹，车辆长期处于带病运行状态。' },
	        { type: 'text', content: '上述案例并非个案。"百吨王"的危害集中体现在以下方面：' },
	        { type: 'text', content: '一、对人身安全的危害' },
	        { type: 'text', content: '"百吨王"总质量超过100吨，与普通小型车辆（约1.5吨）发生碰撞时，冲击力远超小型车辆的承受范围，易造成小型车辆严重变形、驾乘人员当场死亡，事故死亡率极高。同时，超载使车辆重心升高、稳定性下降，行驶至弯道或下坡路段时，离心力易导致侧翻，此类事故往往波及多辆正常行驶车辆，造成群死群伤。' },
	        { type: 'text', content: '二、对道路桥梁的损害' },
	        { type: 'text', content: '"百吨王"的载重远超公路设计承载标准。长期碾压会快速造成路面开裂、沉陷、坑槽、翻浆等损坏，大幅缩短道路使用寿命——原本可使用数十年的公路可能在短期内出现严重破损。对桥梁而言，超限超载产生的巨大压力会损伤梁板、支座、桥墩等核心结构，造成不可逆的永久性形变，累积效应可能引发桥梁突然垮塌，危及所有通行车辆和人员安全。' },
	        { type: 'image', src: './images/百吨王”超限超载的危害与法律后果-1.jpg', alt: '案例图片1' },
		    { type: 'text', content: '三、对车辆自身的影响' },
	        { type: 'text', content: '"百吨王"的车架、轮胎、半轴、悬挂等部件长期处于超负荷运行状态，金属疲劳加剧，易发生断轴、爆胎、车架断裂等故障，行驶中突发故障极易引发交通事故。同时，发动机、变速箱、制动系统因长期超负荷运转，磨损速度加快，故障频发，不仅增加维修成本，还会导致车辆提前报废，造成运输成本浪费。' },
	        { type: 'text', content: '四、对交通秩序的干扰' },
	        { type: 'text', content: '"百吨王"因载重过大，行驶速度缓慢，与正常车辆的速度差较大，易造成后方车辆长距离拥堵，降低公路通行效率。车身宽大、灵活性差，行驶中频繁加塞、变道，增加剐蹭、追尾等事故发生率。部分车辆为逃避检查选择夜间行驶或遮挡号牌，进一步扰乱正常执法和交通秩序。' },
	        { type: 'text', content: '五、法律责任' },
	        { type: 'text', content: '行政处罚方面，根据《中华人民共和国道路交通安全法》《公路安全保护条例》等法律法规，"百吨王"违法超限超载将面临高额罚款、驾驶证记分（驾驶中型以上载货汽车超载100%以上的，一次记6分）、车辆暂扣、吊销营运资质等处罚，相关违法信息纳入信用体系，影响企业和个人信用。' },
	        { type: 'text', content: '刑事追责方面，因超限超载引发交通事故的，驾驶人及相关责任人须承担民事赔偿责任；情节严重构成犯罪的，依法追究交通肇事罪、危险驾驶罪等刑事责任。若存在重大事故隐患被依法责令整改而拒不执行，可能构成危险作业罪，处一年以下有期徒刑、拘役或者管制。' },
	        { type: 'text', content: '"百吨王"违法上路并非单纯的超载行为，而是对公共安全、公共设施和法治秩序的多重侵害。合规装载、守法运输是货运行业的基本底线，任何试图突破这一底线的行为，都将面临法律制裁和现实风险。' }
	    ]
	},
	{
	    id: 7,
	    title: '为何必须彻底清理旅游客运挂靠经营乱象？',
	    summary: '旅游客运挂靠经营。',
	    video: '',
	    blocks: [
	        { type: 'text', content: '旅游客运挂靠经营：违规乱象为何必须彻底清理？' },
	        { type: 'text', content: '在旅游客运市场，存在一种常见的经营模式：个人或中小旅行社出资购置车辆，将车辆挂靠在具有营运资质的正规旅游公司名下，借用被挂靠企业的名义开展经营，并向挂靠公司缴纳一定数额的"管理费"。很多人认为，这种方式"方便灵活"，是盘活资源的双赢之举。然而，这种名为"合作"、实为"挂靠"的运作模式，在法规层面已被明确禁止，且隐藏着深层的安全风险和管理漏洞。以下真实案例，是此类违规经营后果的典型反映。' },
	        { type: 'text', content: '案例：海伦"3·24"客车侧翻，挂靠模式下的致命事故' },
	        { type: 'text', content: '2021年3月24日7时许，黑龙江绥化海伦市东林镇发生一起大客车侧翻交通事故，造成7人死亡、8人受伤。经调查，涉事大客车（黑R83486）实际由车主王某某所有，日常挂靠在黑龙江农垦亨通有限责任公司绥化分公司从事公路客运。驾驶人车某某超速行驶、操作不当是事故发生的直接原因，车上乘客未系安全带加重了伤亡后果，其中3人被甩出车外当场死亡。该事故中，被挂靠企业作为法定经营主体，对挂靠车辆长期缺乏有效监管，最终酿成惨剧。' },
	        { type: 'image', src: './images/旅游客运挂靠经营：违规乱象为何必须彻底清理？-1.jpg', alt: '案例图片1' },
			{ type: 'text', content: '一、安全生产责任严重虚置' },
	        { type: 'text', content: '被挂靠企业名义上是安全生产第一责任人，实际上对挂靠车辆和驾驶员"只收费、不管理"。挂靠车辆通常由实际车主自行维护、自行调度，公司的安全管理制度形同虚设。驾驶员的安全培训、定期体检、行驶记录监控等关键环节缺失，导致安全隐患长期积累。一旦发生事故，被挂靠企业以"挂靠车辆自负盈亏"为由推卸责任，但法律责任无法因内部约定而转移，最终受害的仍是乘客和公共安全。' },
	        { type: 'text', content: '二、车辆技术状况缺乏有效监管' },
	        { type: 'text', content: '正规旅游客运企业对所属车辆实行统一维护、定期检测和强制报废制度。而挂靠车辆的实际车主往往为了降低成本，擅自减少保养频次、延迟维修更换，甚至使用不合格零部件。由于被挂靠企业不掌握车辆真实技术状况，这些"带病"车辆仍能凭借公司资质办理年检和包车牌，堂而皇之上路运营。制动失效、轮胎爆裂、电路起火等机械故障风险大幅增加。' },
	        { type: 'text', content: '三、驾驶员管理失序，违法驾驶频发' },
	        { type: 'text', content: '挂靠车辆的驾驶员通常由实际车主自行聘用，不受被挂靠企业的人事管理和考核约束。部分驾驶员未经严格的从业资格审查，未接受公司的安全操作规程培训，对包车线路、应急预案缺乏了解。为追求经济效益，超速行驶、疲劳驾驶、不按核定线路运营等违法违规行为时有发生。被挂靠企业既无法有效监控，也无实际处罚权，管理流于形式。' },
	        { type: 'text', content: '四、扰乱市场秩序，形成"劣币驱逐良币"' },
	        { type: 'text', content: '正规旅游客运企业承担着车辆折旧、安全管理、人员培训、保险缴纳等合规成本，经营压力较大。而挂靠车辆因实际车主自行承担经营盈亏，往往以低成本优势压低包车报价，通过"价格战"抢占市场份额。这种不公平竞争直接挤压了合法经营者的生存空间，同时给消费者造成"服务质量无保障、事故追责无门"的风险。挂靠经营越是泛滥，合规企业越是难以维持，整个行业的服务质量和安全水平随之下降。' },
	        { type: 'text', content: '五、法律责任与风险不可回避' },
	        { type: 'text', content: '根据《中华人民共和国道路运输条例》及《道路旅客运输及客运站管理规定》，道路运输经营者不得出租、出借或者以其他形式非法转让道路运输经营许可证件。挂靠经营实质上是无资质主体借用有资质主体的名义从事道路客运，属于非法转让、出租营运资质的违法行为。' },
	        { type: 'text', content: '行政处罚方面，对存在挂靠经营行为的被挂靠企业，主管部门可依法吊销其道路运输经营许可，彻底清理违规挂靠关系；同时没收违法所得，并处相应罚款。实际经营者因未取得合法营运资质从事客运经营，也将面临车辆暂扣、罚款等行政处罚。' },
	        { type: 'text', content: '事故责任方面，挂靠车辆发生交通事故造成人身伤亡、财产损失的，被挂靠企业作为法律上的承运人和经营主体，需承担连带赔偿责任。情节严重的，企业负责人及相关责任人还可能面临刑事责任追究。' },
	        { type: 'text', content: '旅游客运挂靠经营绝非简单的"借名经营"，而是以牺牲安全管理为代价的违规操作，是道路运输行业必须坚决清理的顽疾。彻底取消挂靠关系，推动旅游客运真正实现"权属清晰、责任明确、管理统一"，既是从源头上保障乘客安全的必要措施，也是维护行业健康发展的根本出路。任何抱有侥幸心理、继续默许或纵容挂靠行为的企业和个人，终将为此付出应有的法律代价。' }
	    ]
	}
];

/**
 * ============================================================
 * 4. DOM 引用
 * ============================================================
 */
const navHome = document.getElementById('navHome');
const navLaws = document.getElementById('navLaws');
const navVideos = document.getElementById('navVideos');
const navWarnings = document.getElementById('navWarnings');
const pageHome = document.getElementById('pageHome');
const pageLaws = document.getElementById('pageLaws');
const pageVideos = document.getElementById('pageVideos');
const pageWarnings = document.getElementById('pageWarnings');
const lawsListEl = document.getElementById('lawsList');
const videosListEl = document.getElementById('videosList');
const warningsListEl = document.getElementById('warningsList');

/**
 * ============================================================
 * 5. 页面切换函数
 * ============================================================
 */
function switchPage(pageName) {
    document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));

    if (pageName === 'home') {
        pageHome.classList.add('active');
        navHome.classList.add('active');
        navHome.setAttribute('aria-current', 'page');
        navLaws.removeAttribute('aria-current');
        navVideos.removeAttribute('aria-current');
        navWarnings.removeAttribute('aria-current');
    } else if (pageName === 'laws') {
        pageLaws.classList.add('active');
        navLaws.classList.add('active');
        navLaws.setAttribute('aria-current', 'page');
        navHome.removeAttribute('aria-current');
        navVideos.removeAttribute('aria-current');
        navWarnings.removeAttribute('aria-current');
    } else if (pageName === 'videos') {
        pageVideos.classList.add('active');
        navVideos.classList.add('active');
        navVideos.setAttribute('aria-current', 'page');
        navHome.removeAttribute('aria-current');
        navLaws.removeAttribute('aria-current');
        navWarnings.removeAttribute('aria-current');
    } else if (pageName === 'warnings') {
        pageWarnings.classList.add('active');
        navWarnings.classList.add('active');
        navWarnings.setAttribute('aria-current', 'page');
        navHome.removeAttribute('aria-current');
        navLaws.removeAttribute('aria-current');
        navVideos.removeAttribute('aria-current');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * ============================================================
 * 6. 渲染法条列表（两级结构：大法 → 子法，支持模糊搜索）
 * ============================================================
 */
function renderLaws() {
    lawsListEl.innerHTML = '';
    const searchInput = document.getElementById('lawSearchInput');
    const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : '';

    let hasVisibleChild = false;

    function highlightChars(text, search) {
        if (!search) return text;
        const lowerText = text.toLowerCase();
        const searchSet = new Set(search.split(''));
        let result = '';
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const lowerChar = char.toLowerCase();
            if (searchSet.has(lowerChar)) {
                result += `<span class="highlight">${char}</span>`;
            } else {
                result += char;
            }
        }
        return result;
    }

    lawsData.forEach((parent, parentIndex) => {
        const parentCard = document.createElement('div');
        parentCard.className = 'law-parent-card';
        parentCard.dataset.parentIndex = parentIndex;

        const parentHeader = document.createElement('div');
        parentHeader.className = 'law-parent-header';
        const titleDiv = document.createElement('div');
        titleDiv.className = 'law-parent-title';
        const badge = document.createElement('span');
        badge.className = 'badge';
        badge.textContent = parentIndex + 1;
        const titleText = document.createElement('span');
        titleText.textContent = parent.parentTitle;
        const toggleIcon = document.createElement('span');
        toggleIcon.className = 'law-parent-toggle';
        toggleIcon.textContent = '▼';
        toggleIcon.setAttribute('aria-hidden', 'true');

        titleDiv.appendChild(badge);
        titleDiv.appendChild(titleText);
        parentHeader.appendChild(titleDiv);
        parentHeader.appendChild(toggleIcon);

        const childrenContainer = document.createElement('div');
        childrenContainer.className = 'law-children-container';

        parent.children.forEach((child, childIndex) => {
            const childCard = document.createElement('div');
            childCard.className = 'law-child-card';
            childCard.dataset.childIndex = childIndex;

            const childHeader = document.createElement('div');
            childHeader.className = 'law-child-header';

            const childTitleDiv = document.createElement('div');
            childTitleDiv.className = 'law-child-title';
            const childBadge = document.createElement('span');
            childBadge.className = 'child-badge';
            childBadge.textContent = ` ${childIndex + 1}`;
            const childTitleText = document.createElement('span');
            childTitleText.className = 'child-title-text';
            const originalTitle = child.childTitle;
            const originalSummary = child.childSummary;
            childTitleText.textContent = originalTitle;
            const childToggle = document.createElement('span');
            childToggle.className = 'law-child-toggle';
            childToggle.textContent = '▼';
            childToggle.setAttribute('aria-hidden', 'true');

            childTitleDiv.appendChild(childBadge);
            childTitleDiv.appendChild(childTitleText);
            childTitleDiv.appendChild(childToggle);

            const childSummary = document.createElement('div');
            childSummary.className = 'law-child-summary';
            childSummary.textContent = originalSummary;

            childHeader.appendChild(childTitleDiv);
            childHeader.appendChild(childSummary);

            const childBody = document.createElement('div');
            childBody.className = 'law-child-body';
            const childContent = document.createElement('div');
            childContent.className = 'law-child-body-content';
            childContent.textContent = child.childContent;
            childBody.appendChild(childContent);

            childCard.appendChild(childHeader);
            childCard.appendChild(childBody);

            childCard.addEventListener('click', function(e) {
                e.stopPropagation();
                this.classList.toggle('expanded');
            });

            childrenContainer.appendChild(childCard);

            const searchableText = (originalTitle + ' ' + originalSummary).toLowerCase();
            let match = false;
            if (searchTerm === '') {
                match = true;
            } else {
                const chars = searchTerm.split('');
                match = chars.every(char => searchableText.includes(char));
            }

            if (match) {
                hasVisibleChild = true;
                childCard.style.display = '';
                if (searchTerm !== '') {
                    childTitleText.innerHTML = highlightChars(originalTitle, searchTerm);
                    childSummary.innerHTML = highlightChars(originalSummary, searchTerm);
                } else {
                    childTitleText.textContent = originalTitle;
                    childSummary.textContent = originalSummary;
                }
            } else {
                childCard.style.display = 'none';
            }
        });

        parentCard.appendChild(parentHeader);
        parentCard.appendChild(childrenContainer);

        parentCard.addEventListener('click', function(e) {
            if (e.target.closest('.law-child-card')) return;
            this.classList.toggle('expanded');
        });

        lawsListEl.appendChild(parentCard);
    });

    let noResult = document.querySelector('.no-result');
    if (!noResult) {
        noResult = document.createElement('div');
        noResult.className = 'no-result';
        noResult.textContent = '未找到相关法条，请尝试其他关键词。';
        lawsListEl.parentNode.insertBefore(noResult, lawsListEl);
    }
    if (searchTerm !== '' && !hasVisibleChild) {
        noResult.classList.add('show');
    } else {
        noResult.classList.remove('show');
    }
}

/**
 * ============================================================
 * 7. 渲染风采展示列表（支持视频 + 图文混排）
 * ============================================================
 */
function renderVideos() {
    videosListEl.innerHTML = '';
    videosData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'video-card';  // 复用已有样式
        card.dataset.videoId = item.id;

        const header = document.createElement('div');
        header.className = 'card-header';

        const titleRow = document.createElement('div');
        titleRow.className = 'card-title';
        const badge = document.createElement('span');
        badge.className = 'badge';
        badge.textContent = index + 1;
        const titleText = document.createElement('span');
        titleText.textContent = item.title;
        const toggleIcon = document.createElement('span');
        toggleIcon.className = 'card-toggle';
        toggleIcon.textContent = '▼';
        toggleIcon.setAttribute('aria-hidden', 'true');

        titleRow.appendChild(badge);
        titleRow.appendChild(titleText);
        titleRow.appendChild(toggleIcon);

        header.appendChild(titleRow);

        // 摘要（如果有）
        if (item.summary) {
            const summary = document.createElement('div');
            summary.className = 'card-summary';
            summary.textContent = item.summary;
            header.appendChild(summary);
        }

        const body = document.createElement('div');
        body.className = 'card-body';

        const contentDiv = document.createElement('div');
        contentDiv.className = 'card-body-content';

        // ===== 情况一：有视频源 → 渲染视频播放器 =====
        if (item.videoSrc && item.videoSrc.trim() !== '') {
            const wrapper = document.createElement('div');
            wrapper.className = 'video-wrapper';

            const videoEl = document.createElement('video');
            videoEl.controls = true;
            videoEl.preload = 'none';
            if (item.poster && item.poster.trim() !== '') {
                videoEl.poster = item.poster;
            }
            videoEl.src = item.videoSrc;
            videoEl.type = 'video/mp4';
            videoEl.style.width = '100%';
            videoEl.style.height = '100%';
            videoEl.textContent = '您的浏览器不支持视频播放，请更换浏览器后重试。';

            videoEl.addEventListener('error', function(e) {
                console.error(`视频 "${item.title}" 加载失败:`, videoEl.error);
            });

            wrapper.appendChild(videoEl);
            contentDiv.appendChild(wrapper);

            if (item.desc) {
                const desc = document.createElement('div');
                desc.className = 'video-desc';
                desc.textContent = item.desc;
                contentDiv.appendChild(desc);
            }
        }

        // ===== 情况二：无视频源但有 blocks → 渲染图文内容 =====
        if (item.blocks && item.blocks.length > 0) {
            item.blocks.forEach(block => {
                if (block.type === 'text') {
                    const p = document.createElement('p');
                    p.textContent = block.content;
                    p.style.marginBottom = '12px';
                    contentDiv.appendChild(p);
                } else if (block.type === 'image') {
                    const img = document.createElement('img');
                    img.src = block.src;
                    img.alt = block.alt || '风采展示图片';
                    img.loading = 'lazy';
                    img.style.width = '100%';
                    img.style.maxWidth = '600px';
                    img.style.height = 'auto';
                    img.style.borderRadius = '8px';
                    img.style.margin = '12px 0';
                    img.style.display = 'block';
                    contentDiv.appendChild(img);
                }
            });
        }

        body.appendChild(contentDiv);

        card.appendChild(header);
        card.appendChild(body);

        // 点击卡片切换展开/收起
        card.addEventListener('click', function() {
            this.classList.toggle('expanded');
            if (this.classList.contains('expanded')) {
                const video = this.querySelector('video');
                if (video) {
                    video.load();
                }
            }
        });

        videosListEl.appendChild(card);
    });
}

/**
 * ============================================================
 * 8. 渲染警示教育列表（扁平卡片，视频置顶 + 图文混排）
 * ============================================================
 */
function renderWarnings() {
    if (!warningsListEl) return;
    warningsListEl.innerHTML = '';

    warningsData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'warning-card';

        const header = document.createElement('div');
        header.className = 'card-header';

        const titleRow = document.createElement('div');
        titleRow.className = 'card-title';
        const badge = document.createElement('span');
        badge.className = 'badge';
        badge.textContent = index + 1;
        const titleText = document.createElement('span');
        titleText.textContent = item.title;
        const toggleIcon = document.createElement('span');
        toggleIcon.className = 'card-toggle';
        toggleIcon.textContent = '▼';
        toggleIcon.setAttribute('aria-hidden', 'true');

        titleRow.appendChild(badge);
        titleRow.appendChild(titleText);
        titleRow.appendChild(toggleIcon);

        header.appendChild(titleRow);

        const body = document.createElement('div');
        body.className = 'card-body';

        const contentDiv = document.createElement('div');
        contentDiv.className = 'card-body-content';

        if (item.video && item.video.trim() !== '') {
            const videoWrapper = document.createElement('div');
            videoWrapper.className = 'warning-video-wrapper';
            const videoEl = document.createElement('video');
            videoEl.controls = true;
            videoEl.preload = 'metadata';
            videoEl.src = item.video;
            videoEl.type = 'video/mp4';
            videoEl.style.width = '100%';
            videoEl.style.height = '100%';
            videoEl.textContent = '您的浏览器不支持视频播放。';
            videoWrapper.appendChild(videoEl);
            contentDiv.appendChild(videoWrapper);
        }

        if (item.summary) {
            const summary = document.createElement('div');
            summary.className = 'card-summary';
            summary.textContent = item.summary;
            header.appendChild(summary);
        }

        if (item.blocks && item.blocks.length > 0) {
            item.blocks.forEach(block => {
                if (block.type === 'text') {
                    const p = document.createElement('p');
                    p.textContent = block.content;
                    p.style.marginBottom = '12px';
                    contentDiv.appendChild(p);
                } else if (block.type === 'image') {
                    const img = document.createElement('img');
                    img.src = block.src;
                    img.alt = block.alt || '警示教育图片';
                    img.loading = 'lazy';
                    img.style.width = '100%';
                    img.style.maxWidth = '600px';
                    img.style.height = 'auto';
                    img.style.borderRadius = '8px';
                    img.style.margin = '12px 0';
                    img.style.display = 'block';
                    contentDiv.appendChild(img);
                }
            });
        } else {
            const p = document.createElement('p');
            p.textContent = item.content || '';
            contentDiv.appendChild(p);
        }

        body.appendChild(contentDiv);

        card.appendChild(header);
        card.appendChild(body);

        card.addEventListener('click', function() {
            this.classList.toggle('expanded');
            if (this.classList.contains('expanded')) {
                const video = this.querySelector('video');
                if (video) video.load();
            }
        });

        warningsListEl.appendChild(card);
    });

    // ★★★ 关键：渲染完成后绑定双击放大事件 ★★★
    setTimeout(bindLightboxToImages, 100);
}

/**
 * ============================================================
 * 9. 图片灯箱功能（双击放大）
 * ============================================================
 */
function createLightbox() {
    const existing = document.getElementById('lightboxOverlay');
    if (existing) return existing;

    const overlay = document.createElement('div');
    overlay.id = 'lightboxOverlay';
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
        <img id="lightboxImage" src="" alt="放大图片" />
        <div class="close-hint">点击任意处或按 ESC 关闭</div>
    `;
    document.body.appendChild(overlay);

    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target === this.querySelector('.close-hint')) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });

    return overlay;
}

function openLightbox(imgSrc) {
    if (!imgSrc || imgSrc.trim() === '') return;
    const overlay = createLightbox();
    const img = document.getElementById('lightboxImage');
    if (img) {
        img.src = imgSrc;
        img.alt = '放大图片';
    }
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const overlay = document.getElementById('lightboxOverlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            const img = document.getElementById('lightboxImage');
            if (img) img.src = '';
        }, 300);
    }
}

function bindLightboxToImages() {
    console.log('🔍 正在绑定双击放大事件...');

    let totalBound = 0;

    function bindEventsToImg(img) {
        // 阻止单击冒泡，防止卡片切换
        img.addEventListener('click', function(e) {
            e.stopPropagation();
        });
        // 绑定双击放大
        img.removeEventListener('dblclick', handleImageDblClick);
        img.addEventListener('dblclick', handleImageDblClick);
        img.dataset.lightboxBound = 'true';
        totalBound++;
    }

    // 选择所有警示教育卡片内的图片（以及视频卡片内的图片）
    document.querySelectorAll('.warning-card .card-body img, .video-card .card-body img').forEach(img => {
        if (!img.dataset.lightboxBound) {
            bindEventsToImg(img);
        }
    });

    console.log(`✅ 已绑定 ${totalBound} 张图片的双击放大事件`);
}

function handleImageDblClick(e) {
    e.stopPropagation(); // 阻止双击冒泡
    const img = e.currentTarget;
    if (img && img.src) {
        console.log('🖱️ 双击图片:', img.src);
        openLightbox(img.src);
    } else {
        console.warn('⚠️ 图片地址无效');
    }
}

/**
 * ============================================================
 * 10. 绑定导航按钮事件
 * ============================================================
 */
navHome.addEventListener('click', function() { switchPage('home'); });
navLaws.addEventListener('click', function() { switchPage('laws'); });
navVideos.addEventListener('click', function() { switchPage('videos'); });
navWarnings.addEventListener('click', function() { switchPage('warnings'); });

/**
 * ============================================================
 * 11. 搜索框事件监听
 * ============================================================
 */
const searchInput = document.getElementById('lawSearchInput');
if (searchInput) {
    searchInput.addEventListener('input', function() {
        renderLaws();
    });
}

/**
 * ============================================================
 * 12. 回到顶部按钮
 * ============================================================
 */
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/**
 * ============================================================
 * 13. 初始化
 * ============================================================
 */
renderLaws();
renderVideos();
renderWarnings();
switchPage('home');

// 额外调用一次，确保所有图片绑定（以防万一）
setTimeout(bindLightboxToImages, 200);

/**
 * ============================================================
 * 14. ESC 键收起所有卡片
 * ============================================================
 */
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll(
            '.law-parent-card.expanded, .law-child-card.expanded, ' +
            '.video-card.expanded, .warning-card.expanded'
        ).forEach(card => {
            card.classList.remove('expanded');
        });
        closeLightbox();
    }
});
