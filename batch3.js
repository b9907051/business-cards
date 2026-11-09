(function() {
  INDUSTRIES.push({ id: "09", name: "九、PCB、IC 載板與銅箔基板材料業", folder: "09_PCB與IC載板及銅箔基板材料業" });
  const F04 = "04_半導體與電子檢測及製程設備業", N04 = "四、半導體與電子檢測及製程設備業";
  const F09 = "09_PCB與IC載板及銅箔基板材料業", N09 = "九、PCB、IC 載板與銅箔基板材料業";
  const raw = [
    ["04",N04,F04,"寶虹科技 Bao Hong Tech.","寶虹科技_BaoHong","張鴻明","Wonder Chang",1,"董事長暨創辦人 (CEO & Founder)","+886-3-324-9948~53 ext.215","+886-936-180-509 / +86-136-6146-7113","+886-3-324-9968","wonder@cbtech.com.tw","33852 桃園市蘆竹區長興路三段277巷33號",["20261106_085436694_iOS.heic","20261106_085436694_iOS 1.heic"]],
    ["09",N09,F09,"欣興電子 Unimicron (3037)","欣興電子_3037","鍾明峰","Vincent Chung",2,"財務處 資深副總經理 (Sr. VP)","(03)350-0386 ext.11866","(03)359-5536","Vincent_Chung@unimicron.com","333422 桃園市龜山工業區山鶯路179號",["20261106_083401904_iOS.heic","20261106_083407909_iOS.heic"]],
    ["09",N09,F09,"欣興電子 Unimicron (3037)","欣興電子_3037","沈再生","Michael Shen",2,"總管理處 II (GMO II)","(03)350-0386 ext.11888","(03)359-5536","michaelshen@unimicron.com","33341 桃園市龜山工業區山鶯路177號",["20261106_083251571_iOS.heic","20261106_083256302_iOS.heic"]],
    ["09",N09,F09,"欣興電子 Unimicron (3037)","欣興電子_3037","徐興源","Victor Hsu",3,"財務部 副部長 (Deputy Director)","(03)350-0386 ext.11877","(03)359-5536","victor_hsu@unimicron.com","333422 桃園市龜山工業區山鶯路179號",["20261106_083419142_iOS.heic","20261106_083425143_iOS.heic"]],
    ["09",N09,F09,"欣興電子 Unimicron (3037)","欣興電子_3037","陳克明","Kerming Chen",4,"PCB 事業處業務部 資深副理","(03)350-0386 ext.11226","0988-243-807","(03)349-0848","Kerming_Chen@unimicron.com","333422 桃園市龜山工業區山鶯路179號",["20261106_083229370_iOS.heic","20261106_083234220_iOS.heic"]],
    ["09",N09,F09,"欣興電子 Unimicron (3037)","欣興電子_3037","林莓珊","Mandy Lin",5,"財務部 投資人關係 (IR)","(03)350-0386 ext.11854","","(03)359-5536","Mandy_Lin@unimicron.com","333422 桃園市龜山工業區山鶯路179號",["20261106_083346271_iOS.heic","20261106_083351107_iOS.heic"]],
    ["09",N09,F09,"景碩科技 Kinsus (3189)","景碩科技_3189","穆顯爵","Jack Mu",2,"董事長室 發言人 (Spokesperson)","03-487-1919 ext.26660","0933-784-719","03-487-1920","jackmu@kinsus.com.tw","327 桃園市新屋區中華路1245號",["20261106_083206266_iOS.heic","20261106_083211678_iOS.heic"]],
    ["09",N09,F09,"南亞電路板 Nan Ya PCB (8046)","南亞電路板_南電_8046","楊博森","Kurt Yang",4,"總經理室 投資人關係 (IR)","(03)322-3751 ext.1016","","(03)321-8470","kurtyang@nanyapcb.com.tw","桃園市蘆竹區南崁路一段338號",["20261106_085530730_iOS.heic","20261106_085530730_iOS 1.heic"]],
    ["09",N09,F09,"イビデン IBIDEN (4062.T)","IBIDEN_揖斐電_4062","河島 浩二","Koji Kawashima",1,"代表取締役社長 (President & CEO)","+81-584-81-3113","","+81-584-81-3150","koji_kawashima@ibiden.com","〒503-8604 岐阜県大垣市神田町2-1",["20261106_085633234_iOS.heic","20261106_085638884_iOS.heic","20261106_085633234_iOS 1.heic","20261106_085638884_iOS 1.heic"]],
    ["09",N09,F09,"イビデン IBIDEN (4062.T)","IBIDEN_揖斐電_4062","水谷 健洋","Takehiro Mizutani",3,"経営企画部 IR Group Manager","+81-584-81-2591","","+81-584-81-3228","takehiro_mizutani@ibiden.com","〒503-8604 岐阜県大垣市神田町2-1",["20261106_085621272_iOS.heic","20261106_085626432_iOS.heic","20261106_085621272_iOS 1.heic","20261106_085626432_iOS 1.heic"]],
    ["09",N09,F09,"臻鼎科技控股 ZDT (4958)","臻鼎科技控股_4958","沈慶芳","Charles Shen",1,"董事長 (Chairman)","+886-3-383-5678 ext.3008","+886-939-339-157 / +86-139-0299-1671","+886-3-383-0948","charles.cf.shen@zdtco.com","33754 桃園市大園區三石里三和路28巷6號",["20261106_083454010_iOS.heic","20261106_083459636_iOS.heic"]],
    ["09",N09,F09,"臻鼎科技控股 ZDT (4958)","臻鼎科技控股_4958","簡禎富 博士","Jeff Chen-Fu Chien",1,"總經理 (General Manager)","+886-3-383-5678","+886-912-582-638 / +86-188-2458-5468","","jeff.cf.chien@zdtco.com","337011 桃園市大園區三石里三和路28巷6號",["20261106_083631766_iOS.heic","20261106_083635929_iOS.heic"]],
    ["09",N09,F09,"臻鼎科技控股 ZDT (4958)","臻鼎科技控股_4958","李定轉","DJ Lee",1,"集團營運長 COO 暨 禮鼎半導體 CEO","","+886-911-236-834 / +86-157-3354-5175","","dj.lee@leadingics.com","廣東省深圳市寶安區燕羅街道朗東路8號",["20261106_083640713_iOS.heic","20261106_083645292_iOS.heic"]],
    ["09",N09,F09,"臻鼎科技控股 ZDT (4958)","臻鼎科技控股_4958","凌惇","Duen Ling",3,"發言人暨投資人關係處 資深經理","+886-3-383-5678 ext.3801","+886-916-312-681 / +86-139-2465-5569","+886-3-383-0011","duen.t.ling@zdtco.com","33754 桃園市大園區三石里三和路28巷6號",["20261106_083434892_iOS.heic","20261106_083441826_iOS.heic"]],
    ["09",N09,F09,"健鼎科技 Tripod (3044)","健鼎科技_3044","林修正","Aleck Lin",2,"副總經理兼發言人 (VP & Spokesman)","(03)419-5678 ext.21883","","(03)469-8401","Aleck_Lin@tripod-tech.com","32459 桃園市平鎮區工業五路21號",["20261106_083700409_iOS.heic","20261106_083706301_iOS.heic"]],
    ["09",N09,F09,"健鼎科技 Tripod (3044)","健鼎科技_3044","王證銘","James Wang",4,"財務處 投資人關係 (IR)","(03)419-5678 ext.21231","0913-000-952","(03)469-3572","James_Wang@tripod-tech.com","32459 桃園市平鎮區工業五路21號",["20261106_083727042_iOS.heic","20261106_083731589_iOS.heic"]],
    ["09",N09,F09,"金像電子 GCE (2368)","金像電子_2368","楊承蓉","Tina Yang",2,"發言人 (Spokesman)","03-461-2541 ext.22588","","03-250-6349","tina_yang@gce.com.tw","320017 桃園市中壢區西園路113號",["20261106_084106662_iOS.heic","20261106_084111741_iOS.heic"]],
    ["09",N09,F09,"華通電腦 Compeq (2313)","華通電腦_2313","林而群","Andrew Lin",3,"代理發言人／投資人關係 經理","(03)323-1111 ext.2290","","(03)313-8150","andrewlin@compeq.com.tw","33843 桃園市蘆竹區新莊里大新路814巷91號",["20261106_084513048_iOS.heic","20261106_084517664_iOS.heic"]],
    ["09",N09,F09,"定穎投控 Dynamic (3715)","定穎投控_3715","黃銘宏","Ken Huang",1,"董事長 (Chairman)","+886-3-349-3300","","+886-3-357-3300","Ken_Huang@dynamicpcb.com","桃園市龜山區",["20261106_085557946_iOS.heic","20261106_085557946_iOS 1.heic"]],
    ["09",N09,F09,"定穎投控 Dynamic (3715)","定穎投控_3715","劉國瑾","Jean Liu",1,"總經理 (General Manager)","+886-3-349-3300","0980-091-658","","jean_liu@dynamicpcb.com","桃園市龜山區",["20261106_085547032_iOS.heic","20261106_085547032_iOS 1.heic"]],
    ["09",N09,F09,"定穎投控 Dynamic (3715)","定穎投控_3715","高國軒","Eason Kao",4,"財務部 專案副經理","+886-3-349-3300 ext.7135","0963-391-219","+886-3-357-3300","Eason_Kao@dynamicpcb.com.tw","桃園市龜山區",["20261106_085538202_iOS.heic","20261106_085538202_iOS 1.heic"]],
    ["09",N09,F09,"敬鵬工業 Chin Poon (2355)","敬鵬工業_2355","蕭公彥","Alex Hsiao",2,"發言人 (IR Director)","03-322-2226 ext.1342","","03-321-8064","alex.hsiao@cppcb.com.tw","33852 桃園市蘆竹區南山路二段5巷17號",["20261106_084453587_iOS.heic","20261106_084459141_iOS.heic"]],
    ["09",N09,F09,"燿華電子 Unitech (2367)","耀華電子_2367","李麗君","Ruby",2,"總經理室 副總經理 (VP)","(02)2268-5071 ext.22170","","(02)2268-5074","ruby@pcbut.com.tw","新北市土城區中山路4巷3號",["20261106_085400961_iOS.heic","20261106_085406880_iOS.heic","20261106_085400961_iOS 1.heic","20261106_085406880_iOS 1.heic"]],
    ["09",N09,F09,"燿華電子 Unitech (2367)","耀華電子_2367","吳錦芳","Kanty Wu",2,"總經理室 副總經理 (VP)","(02)2268-5071 ext.22006","","(02)2268-5074","kanty-wu@pcbut.com.tw","新北市土城區中山路4巷3號",["20261106_085413469_iOS.heic","20261106_085419275_iOS.heic","20261106_085413469_iOS 1.heic","20261106_085419275_iOS 1.heic"]],
    ["09",N09,F09,"燿華電子 Unitech (2367)","耀華電子_2367","陳裕仁","Hugh Chen",2,"技術處 處長 (Director)","(02)2268-5071 ext.22600","","(02)2268-5074","hugh-chen@pcbut.com.tw","新北市土城區中山路4巷3號",["20261106_085349117_iOS.heic","20261106_085354210_iOS.heic","20261106_085349117_iOS 1.heic","20261106_085354210_iOS 1.heic"]],
    ["09",N09,F09,"台郡科技 Flexium (6269)","台郡科技_6269","熊雅士","Arthur Shiung",1,"財務長 (CFO)","+886-7-787-1008 ext.110","","+886-7-787-7066","arthur_shiung@flexium.com.tw","83164 高雄市大發工業區莒光一街23號",["20261106_085329586_iOS.heic","20261106_085342815_iOS.heic","20261106_085329586_iOS 1.heic","20261106_085342815_iOS 1.heic"]],
    ["09",N09,F09,"同泰電子 Uniflex (3321)","同泰電子_3321","李遠智","Steve Lee",1,"董事長 (Chairman)","+86-514-8796-0000 ext.3001","0926-793-866","+86-514-8796-0738","steve@uniflex.com.tw","江蘇省揚州市經濟開發區華揚西路77號",["20261106_085712435_iOS.heic","20261106_085719456_iOS.heic","20261106_085712435_iOS 1.heic","20261106_085719456_iOS 1.heic"]],
    ["09",N09,F09,"同泰電子 Uniflex (3321)","同泰電子_3321","曾山一","Richard Tseng",1,"總經理 (General Manager)","+886-3-215-0198 ext.112","0926-791-067","+886-3-215-0197","richard_tseng@uniflex.com.tw","33071 桃園市桃園區中正路1351號6樓",["20261106_085701087_iOS.heic","20261106_085706080_iOS.heic","20261106_085701087_iOS 1.heic","20261106_085706080_iOS 1.heic"]],
    ["09",N09,F09,"同泰電子 Uniflex (3321)","同泰電子_3321","余佳穎","Peggy Yu",5,"總管理處 股務管理師","+886-3-215-0198 ext.600","0972-538-364","+886-3-215-0197","peggyyu@uniflex.com.tw","33071 桃園市桃園區中正路1351號6樓",["20261106_085646688_iOS.heic","20261106_085653767_iOS.heic","20261106_085646688_iOS 1.heic","20261106_085653767_iOS 1.heic"]],
    ["09",N09,F09,"台光電子 EMC (2383)","台光電子_2383","于明仁","Randy Yu",2,"副總經理 (Vice President)","03-483-7937 ext.386","0955-013-464","03-483-7949","randy.yu@mail.emctw.com","32849 桃園市觀音區大同一路18號",["20261106_084221309_iOS.heic"]],
    ["09",N09,F09,"台光電子 EMC (2383)","台光電子_2383","王凱弘","Ken Wang",3,"財務處 專案資深經理","03-483-7937 ext.471","","03-483-7949","ken.wang@mail.emctw.com","328417 桃園市觀音區大同一路18號",["20261106_084241921_iOS.heic"]],
    ["09",N09,F09,"聯茂電子 ITEQ (6213)","聯茂電子_6213","劉懿興","Eric Liu",2,"董事長室 董事長特別助理","03-588-7888","0939-310-088","03-589-2788","eric.liu@iteq.com.tw","305 新竹縣新埔鎮大魯閣路17號",["20261106_084135741_iOS.heic","20261106_084142976_iOS.heic"]],
    ["09",N09,F09,"聯茂電子 ITEQ (6213)","聯茂電子_6213","劉欣杰","Ken Liu",4,"總經理室 投資人關係 副理","03-588-7888 ext.1166","0910-137-268","03-589-2788","ken.liu@iteq.com.tw","305 新竹縣新埔鎮大魯閣路17號",["20261106_084158209_iOS.heic","20261106_084204427_iOS.heic"]],
    ["09",N09,F09,"台燿科技 TUC (6274)","台燿科技_6274","黃文旭 (渤淵)","Ivon Huang",1,"董事長室 投資長 (CIO)","+886-3-555-1103 ext.328","","","Ivon.Huang@tuc.com.tw","302045 新竹縣竹北市博愛街803號",["20261106_084444972_iOS.heic"]],
    ["09",N09,F09,"台燿科技 TUC (6274)","台燿科技_6274","郭竹芬","Fennie Kuo",5,"人資部 人事組","+886-3-555-1103 ext.312","0910-015-999","","Fennie.Kuo@tuc.com.tw","302045 新竹縣竹北市博愛街803號",["20261106_084432961_iOS.heic"]],
    ["09",N09,F09,"騰輝電子-KY Ventec (6672)","騰輝電子_6672","勞開陸","Tony K. L. Lau",1,"董事長 (Chairman)","+86-512-6809-1810","0905-119-519","+86-512-6809-6322","ir@ventec.com.cn","江蘇省蘇州市新區泰山路308號",["20261106_085509702_iOS.heic","20261106_085509702_iOS 1.heic"]],
    ["09",N09,F09,"騰輝電子-KY Ventec (6672)","騰輝電子_6672","李育民","Caleb Lee",2,"行銷處 處長 (Director)","+86-512-6809-1810 ext.1600","+86-135-0620-6983","+86-512-6809-6322","caleb@ventec.com.cn","江蘇省蘇州市新區泰山路308號",["20261106_085445631_iOS.heic","20261106_085445631_iOS 1.heic"]],
    ["09",N09,F09,"騰輝電子-KY Ventec (6672)","騰輝電子_6672","徐鳳如","Sophia Hsu",3,"董事會 董事會秘書","+86-512-6809-1810","0905-119-519","+86-512-6809-6322","sophia@ventec.com.cn","江蘇省蘇州市新區泰山路308號",["20261106_085459487_iOS.heic","20261106_085459487_iOS 1.heic"]],
    ["09",N09,F09,"金居開發 Co-Tech (8358)","金居開發_8358","葉佳欣","Jane Yeh",3,"財務部 經理 (Manager)","(02)6615-8899","","(02)6615-5588","jane@co-tech.com","11492 台北市內湖區瑞光路392號8樓",["20261106_085736942_iOS.heic","20261106_085741707_iOS.heic","20261106_085736942_iOS 1.heic","20261106_085741707_iOS 1.heic"]],
    ["09",N09,F09,"金居開發 Co-Tech (8358)","金居開發_8358","楊正平","Kevin Yang",4,"行銷部 (Marketing Dept.)","(02)6615-8899","0918-211-072 / +86-138-2577-7907","(02)6615-5588","kevinyang@co-tech.com","11492 台北市內湖區瑞光路392號8樓",["20261106_085726330_iOS.heic","20261106_085731089_iOS.heic","20261106_085726330_iOS 1.heic","20261106_085731089_iOS 1.heic"]],
    ["09",N09,F09,"南亞塑膠 Nan Ya Plastics (1303)","南亞塑膠_1303","張朝榜","Stephen Chang",3,"電子材料部經理室 資深經理","(02)2712-2211 ext.5972","0939-500-678","(02)2718-2258","stephenchang@npc.com.tw","台北市內湖區南京東路六段380號A1棟6樓",["20261106_085516483_iOS.heic","20261106_085516483_iOS 1.heic"]],
    ["09",N09,F09,"長春集團 Chang Chun Group","長春集團_ChangChun","周正強","Cheng Chiang Chou",4,"營業部 副課長 (Deputy Manager)","(02)2500-1720","0933-162-792","(02)2501-8018","cheng_chiang_chou@ccpgp.com","104070 台北市松江路301號7樓",["20261106_085605165_iOS.heic","20261106_085613924_iOS.heic","20261106_085605165_iOS 1.heic","20261106_085613924_iOS 1.heic"]],
    ["09",N09,F09,"台灣表面黏著科技 TSMT (6278)","台表科_6278","王嘉眞","Jane Wang",2,"行政部 副總經理 (VP)","(03)218-9988 ext.29996","0937-460-290","03-363-7131","jane-wang@tsmt.com","桃園市桃鶯路437號",["20261106_085523793_iOS.heic","20261106_085523793_iOS 1.heic"]]
  ];
  raw.forEach(r => {
    if (r.length === 14) r.splice(10, 0, "");
    cardsData.push({
      industryId: r[0], industry: r[1], industryFolder: r[2], company: r[3], companyFolder: r[4],
      name: r[5], enName: r[6], tier: r[7], title: r[8], phone: r[9], mobile: r[10],
      fax: r[11], email: r[12], address: r[13], files: r[14]
    });
  });
  document.getElementById("kpiIndustries").textContent = "9";
  document.getElementById("kpiCompanies").textContent = "63";
  document.getElementById("kpiContacts").textContent = "109";
  document.getElementById("kpiPhotos").textContent = "233";
  const kpiLabels = document.querySelectorAll(".kpi-label");
  if (kpiLabels[0]) kpiLabels[0].textContent = "產業主分類資料夾 (01–09)";
  const fn = document.querySelector(".footer-note");
  if (fn) fn.textContent = "資料來源：OneDrive「名片集」資料夾（共 233 張 .heic 照片已全數歸檔至 01～09 產業別／63 家公司子資料夾；00_待整理_新上傳名片 已清空）";
  initFilters();
  if (industrySelect.options[0]) industrySelect.options[0].textContent = "所有產業類別 (9 大類)";
  renderDirectory();
})();



// === Batch 4 Update (20261109_* : 59 .heic files, 16 IC Design companies, 29 net new contacts + 1 existing updated) ===
(function applyBatch4() {
  if (typeof cardsData === "undefined") return;
  const extraLiaoFiles = ["20261109_071908144_iOS.heic", "20261109_071914442_iOS.heic"];
  const liao = cardsData.find(c => c.companyFolder === "達發科技_6526" && c.name === "廖益源");
  if (liao) {
    extraLiaoFiles.forEach(f => {
      if (!liao.files.includes(f)) liao.files.push(f);
    });
    liao.address = "300 新竹科學園區篤行路6-5號5F／302 新竹縣竹北市台元二街12號14樓";
  }

  const batch4Contacts = [
  {
    "industryId": "01",
    "industry": "一、IC 設計業",
    "industryFolder": "01_IC設計業",
    "company": "立積電子 RichWave (4968)",
    "companyFolder": "立積電子_4968",
    "name": "阮泓諭",
    "enName": "Wendy Juan",
    "tier": 3,
    "title": "總經理室 IR經理 (IR Manager, President Office)",
    "phone": "02-8751-1358 ext.120",
    "mobile": "0979-771-150",
    "fax": "02-6600-6887",
    "email": "wendyjuan@richwave.com.tw",
    "address": "114 台北市內湖區堤頂大道二段407巷20弄1號3樓",
    "files": [
      "20261109_070930638_iOS.heic",
      "20261109_070936740_iOS.heic"
    ]
  },
  {
    "industryId": "01",
    "industry": "一、IC 設計業",
    "industryFolder": "01_IC設計業",
    "company": "意騰科技 Intelligo (7749)",
    "companyFolder": "意騰科技_7749",
    "name": "林孟學",
    "enName": "MH Lin",
    "tier": 1,
    "title": "集團策略長 (Group Chief Strategy Officer)",
    "phone": "+886-3-602-9928",
    "mobile": "",
    "fax": "",
    "email": "mh.lin@intelli-go.com",
    "address": "302052 新竹縣竹北市復興三路二段168號11樓之3",
    "files": [
      "20261109_071457049_iOS.heic",
      "20261109_071506597_iOS.heic"
    ]
  },
  {
    "industryId": "01",
    "industry": "一、IC 設計業",
    "industryFolder": "01_IC設計業",
    "company": "意騰科技 Intelligo (7749)",
    "companyFolder": "意騰科技_7749",
    "name": "許維新",
    "enName": "Winson Hsu",
    "tier": 2,
    "title": "副總經理暨發言人 (Vice President and Spokesperson)",
    "phone": "+886-3-602-9928 ext.210",
    "mobile": "",
    "fax": "",
    "email": "winson.hsu@intelli-go.com",
    "address": "302052 新竹縣竹北市復興三路二段168號11樓之3",
    "files": [
      "20261109_071224826_iOS.heic",
      "20261109_071242854_iOS.heic"
    ]
  },
  {
    "industryId": "01",
    "industry": "一、IC 設計業",
    "industryFolder": "01_IC設計業",
    "company": "信驊科技 ASPEED (5274)",
    "companyFolder": "信驊科技_5274",
    "name": "吳俐俐",
    "enName": "Lili Wu",
    "tier": 3,
    "title": "經理／發言人 (Manager / Spokesperson)",
    "phone": "02-2570-0085 ext.6668",
    "mobile": "0975-083-785",
    "fax": "02-2570-1085",
    "email": "lili_wu@aspeedtech.com",
    "address": "10553 台北市松山區南京東路四段16號5樓-A5",
    "files": [
      "20261109_071548436_iOS.heic",
      "20261109_071600052_iOS.heic"
    ]
  },
  {
    "industryId": "01",
    "industry": "一、IC 設計業",
    "industryFolder": "01_IC設計業",
    "company": "譜瑞科技 Parade (4966)",
    "companyFolder": "譜瑞_4966",
    "name": "張祐銘",
    "enName": "Yo-ming Chang",
    "tier": 2,
    "title": "財務處長 (Director, Finance, Taiwan Branch Office)",
    "phone": "台北 (02)2627-9109 ext.5322 / 新竹 (03)560-1608",
    "mobile": "0956-868-888",
    "fax": "(02)2627-9339 / (03)560-7659",
    "email": "yoming.chang@paradetech.com",
    "address": "台北市內湖區瑞光路335號14樓／新竹縣竹北市台元一街6號2樓之3",
    "files": [
      "20261109_071614828_iOS.heic",
      "20261109_071621262_iOS.heic"
    ]
  },
  {
    "industryId": "01",
    "industry": "一、IC 設計業",
    "industryFolder": "01_IC設計業",
    "company": "盛群半導體 Holtek (6202)",
    "companyFolder": "盛群半導體_6202",
    "name": "蔡榮宗",
    "enName": "Armstrong Tsai",
    "tier": 2,
    "title": "業務行銷中心 副總經理 (VP, Sales & Marketing Center)",
    "phone": "03-567-3527 (新竹) / 02-2655-7070 ext.2200 (台北)",
    "mobile": "+886-936-520528 / +86-185-6616-9790",
    "fax": "03-563-1175",
    "email": "armstro@holtek.com.tw",
    "address": "300 新竹市科學園區研新二路3號／115 台北市南港區園區街3之2號4樓之2",
    "files": [
      "20261109_071646321_iOS.heic",
      "20261109_071655156_iOS.heic"
    ]
  },
  {
    "industryId": "01",
    "industry": "一、IC 設計業",
    "industryFolder": "01_IC設計業",
    "company": "台灣矽力杰 Silergy (6415)",
    "companyFolder": "矽力杰_6415",
    "name": "梁翠嫚",
    "enName": "Maggie Liang",
    "tier": 3,
    "title": "資深投資人關係經理 (Senior IR Manager)",
    "phone": "02-2221-5266 #219",
    "mobile": "0920-399-843",
    "fax": "02-2221-5778",
    "email": "ir@silergycorp.com",
    "address": "235 新北市中和區板南路653號10樓",
    "files": [
      "20261109_071717302_iOS.heic",
      "20261109_071722613_iOS.heic"
    ]
  },
  {
    "industryId": "01",
    "industry": "一、IC 設計業",
    "industryFolder": "01_IC設計業",
    "company": "瑞鼎科技 Raydium (3592)",
    "companyFolder": "瑞鼎科技_3592",
    "name": "黃耀裕",
    "enName": "Rich Huang",
    "tier": 2,
    "title": "總經理室 產品事業壹部 副總經理 (VP, Business Unit I)",
    "phone": "(03)666-1818 ext.3268",
    "mobile": "0953-052-466",
    "fax": "(03)666-1919",
    "email": "rich.huang@rad-ic.com",
    "address": "300 新竹市科學工業園區力行路23號二樓",
    "files": [
      "20261109_071811023_iOS.heic",
      "20261109_071817460_iOS.heic"
    ]
  },
  {
    "industryId": "01",
    "industry": "一、IC 設計業",
    "industryFolder": "01_IC設計業",
    "company": "瑞鼎科技 Raydium (3592)",
    "companyFolder": "瑞鼎科技_3592",
    "name": "林佩怡",
    "enName": "Patty Lin",
    "tier": 2,
    "title": "協理兼發言人 (Associate VP & Spokesperson)",
    "phone": "(03)666-1818",
    "mobile": "0905-983-592",
    "fax": "(03)666-1919",
    "email": "Raydium@rad-ic.com",
    "address": "300 新竹市科學工業園區力行路23號二樓",
    "files": [
      "20261109_071747715_iOS.heic",
      "20261109_071757958_iOS.heic"
    ]
  },
  {
    "industryId": "01",
    "industry": "一、IC 設計業",
    "industryFolder": "01_IC設計業",
    "company": "瑞鼎科技 Raydium (3592)",
    "companyFolder": "瑞鼎科技_3592",
    "name": "吳志宏",
    "enName": "Terence Wu",
    "tier": 2,
    "title": "財務中心 專案處長 (Project Director, Finance Center)",
    "phone": "(03)666-1818 ext.(HC)2820, (TP)5672",
    "mobile": "0905-983-592",
    "fax": "(03)666-1919",
    "email": "terence.wu@rad-ic.com",
    "address": "300 新竹市科學工業園區力行路23號二樓",
    "files": [
      "20261109_071731344_iOS.heic",
      "20261109_071738340_iOS.heic"
    ]
  },
  {
    "industryId": "01",
    "industry": "一、IC 設計業",
    "industryFolder": "01_IC設計業",
    "company": "達發科技 Airoha (6526)",
    "companyFolder": "達發科技_6526",
    "name": "謝孟翰",
    "enName": "MH Shieh",
    "tier": 2,
    "title": "企業規劃室暨發言人 資深副總經理 (SVP & Spokesperson)",
    "phone": "+886-3-612-8800",
    "mobile": "+886-988-336-291",
    "fax": "",
    "email": "MHShieh@airoha.com",
    "address": "300 新竹科學園區篤行路6-5號5F",
    "files": [
      "20261109_071925487_iOS.heic",
      "20261109_071929916_iOS.heic"
    ]
  },
  {
    "industryId": "01",
    "industry": "一、IC 設計業",
    "industryFolder": "01_IC設計業",
    "company": "達發科技 Airoha (6526)",
    "companyFolder": "達發科技_6526",
    "name": "黃銘啟",
    "enName": "Larry Huang",
    "tier": 3,
    "title": "財務 資深經理 (Senior Dept. Manager, Finance)",
    "phone": "+886-3-612-8800 ext.18848",
    "mobile": "",
    "fax": "",
    "email": "larry.huang@airoha.com",
    "address": "300 新竹科學園區篤行路6-5號5F",
    "files": [
      "20261109_071842793_iOS.heic",
      "20261109_071848603_iOS.heic"
    ]
  },
  {
    "industryId": "01",
    "industry": "一、IC 設計業",
    "industryFolder": "01_IC設計業",
    "company": "聯發科技 MediaTek (2454)",
    "companyFolder": "聯發科技_2454",
    "name": "王巧潔",
    "enName": "Jessie Wang",
    "tier": 3,
    "title": "財務本部 法人暨媒體關係處 投資人關係副處長 (IR Deputy Director)",
    "phone": "+886-3-567-0766 #23447",
    "mobile": "",
    "fax": "",
    "email": "jessie.wang@mediatek.com",
    "address": "30078 新竹科學園區篤行一路1號",
    "files": [
      "20261109_071954138_iOS.heic",
      "20261109_071959925_iOS.heic"
    ]
  },
  {
    "industryId": "01",
    "industry": "一、IC 設計業",
    "industryFolder": "01_IC設計業",
    "company": "聯發科技 MediaTek (2454)",
    "companyFolder": "聯發科技_2454",
    "name": "李瑜芳",
    "enName": "Amber Lee",
    "tier": 4,
    "title": "財務本部 法人暨媒體關係處 投資人關係資深管理師 (IR Senior Specialist)",
    "phone": "+886-3-567-0766 #39647",
    "mobile": "",
    "fax": "",
    "email": "amber.lee@mediatek.com",
    "address": "30078 新竹科學園區篤行一路1號",
    "files": [
      "20261109_071940584_iOS.heic",
      "20261109_071945881_iOS.heic"
    ]
  },
  {
    "industryId": "01",
    "industry": "一、IC 設計業",
    "industryFolder": "01_IC設計業",
    "company": "瑞昱半導體 Realtek (2379)",
    "companyFolder": "瑞昱半導體_2379",
    "name": "許鴻鈞",
    "enName": "Jason Hsue",
    "tier": 2,
    "title": "通訊網路事業群 BU II 總監 (Chief Officer, CNBG BU II)",
    "phone": "(03)578-0211 ext.15725",
    "mobile": "",
    "fax": "(03)577-6598",
    "email": "jason.hsue@realtek.com",
    "address": "30076 新竹科學園區創新二路2號",
    "files": [
      "20261109_072133340_iOS.heic",
      "20261109_072140097_iOS.heic"
    ]
  },
  {
    "industryId": "01",
    "industry": "一、IC 設計業",
    "industryFolder": "01_IC設計業",
    "company": "瑞昱半導體 Realtek (2379)",
    "companyFolder": "瑞昱半導體_2379",
    "name": "陳慧珊",
    "enName": "Ivy Chen",
    "tier": 2,
    "title": "執行長室／總經理室 法人關係部協理／代理發言人 (Deputy Spokesperson / IR Director)",
    "phone": "(03)578-0211 ext.11316",
    "mobile": "+886-972-694460",
    "fax": "(03)578-9458",
    "email": "ivychen81@realtek.com",
    "address": "300092 新竹科學園區創新二路2號",
    "files": [
      "20261109_072120299_iOS.heic",
      "20261109_072145326_iOS.heic"
    ]
  },
  {
    "industryId": "01",
    "industry": "一、IC 設計業",
    "industryFolder": "01_IC設計業",
    "company": "瑞昱半導體 Realtek (2379)",
    "companyFolder": "瑞昱半導體_2379",
    "name": "傅雅馨",
    "enName": "Amy Fu",
    "tier": 5,
    "title": "總經理室 法人關係部專員 (IR Specialist, President's Office)",
    "phone": "(03)578-0211 ext.3519279",
    "mobile": "",
    "fax": "(03)578-9458",
    "email": "amy_fu@realtek.com",
    "address": "300092 新竹科學園區創新二路2號",
    "files": [
      "20261109_072041863_iOS.heic",
      "20261109_072048757_iOS.heic"
    ]
  },
  {
    "industryId": "01",
    "industry": "一、IC 設計業",
    "industryFolder": "01_IC設計業",
    "company": "奕力科技 ITH / ILI Technology (6962)",
    "companyFolder": "奕力科技_ITH_6962",
    "name": "梁公偉",
    "enName": "Wayne Liang",
    "tier": 1,
    "title": "董事長 (Chairman, ILI Technology Corp.)",
    "phone": "+886-3-5600099",
    "mobile": "",
    "fax": "+886-3-5600055",
    "email": "wliang@ilitek.com",
    "address": "302 新竹縣竹北市台元二街1號8~10F",
    "files": [
      "20261109_072257329_iOS.heic",
      "20261109_072305850_iOS.heic"
    ]
  },
  {
    "industryId": "01",
    "industry": "一、IC 設計業",
    "industryFolder": "01_IC設計業",
    "company": "奕力科技 ITH / ILI Technology (6962)",
    "companyFolder": "奕力科技_ITH_6962",
    "name": "陳聖心",
    "enName": "Sandra Chen",
    "tier": 1,
    "title": "財務長 (Chief Finance Officer, ITH Corporation)",
    "phone": "0965-516-962",
    "mobile": "0965-516-962",
    "fax": "",
    "email": "IR@ITH.LTD",
    "address": "302 新竹縣竹北市台元二街1號10樓之1",
    "files": [
      "20261109_072239362_iOS.heic",
      "20261109_072243731_iOS.heic"
    ]
  },
  {
    "industryId": "01",
    "industry": "一、IC 設計業",
    "industryFolder": "01_IC設計業",
    "company": "奕力科技 ITH / ILI Technology (6962)",
    "companyFolder": "奕力科技_ITH_6962",
    "name": "朱桐和",
    "enName": "Andy Chu",
    "tier": 2,
    "title": "發言人 (Spokesperson, ITH Corporation)",
    "phone": "0965-516-962",
    "mobile": "0965-516-962",
    "fax": "",
    "email": "IR@ITH.LTD",
    "address": "302 新竹縣竹北市台元二街1號10樓之1",
    "files": [
      "20261109_072222304_iOS.heic",
      "20261109_072229150_iOS.heic"
    ]
  },
  {
    "industryId": "01",
    "industry": "一、IC 設計業",
    "industryFolder": "01_IC設計業",
    "company": "奕力科技 ITH / ILI Technology (6962)",
    "companyFolder": "奕力科技_ITH_6962",
    "name": "鄭恩仁",
    "enName": "Tom Cheng",
    "tier": 2,
    "title": "資深處長 (Sr. Director, ITH Corporation)",
    "phone": "0965-516-962",
    "mobile": "0965-516-962",
    "fax": "",
    "email": "IR@ITH.LTD",
    "address": "302 新竹縣竹北市台元二街1號10樓之1",
    "files": [
      "20261109_072207844_iOS.heic",
      "20261109_072213905_iOS.heic"
    ]
  },
  {
    "industryId": "01",
    "industry": "一、IC 設計業",
    "industryFolder": "01_IC設計業",
    "company": "神盾股份有限公司 Egis Technology (6462)",
    "companyFolder": "神盾_6462",
    "name": "倪珮馨",
    "enName": "Vanessa Ni",
    "tier": 5,
    "title": "投資人關係管理部 法人關係專員 (IR Specialist)",
    "phone": "+886-2-2658-9768 ext.122",
    "mobile": "",
    "fax": "",
    "email": "vanessa.ni@egistec.com",
    "address": "",
    "files": [
      "20261109_072358421_iOS.heic"
    ]
  },
  {
    "industryId": "01",
    "industry": "一、IC 設計業",
    "industryFolder": "01_IC設計業",
    "company": "義隆電子 ELAN Microelectronics (2458)",
    "companyFolder": "義隆電子_2458",
    "name": "葉儀晧",
    "enName": "I. H. Yeh",
    "tier": 1,
    "title": "董事長兼總經理 (Chairman & President)",
    "phone": "(03)5639977 ext.3000",
    "mobile": "",
    "fax": "(03)5670623",
    "email": "ihyeh@emc.com.tw",
    "address": "30076 新竹科學工業園區創新一路12號",
    "files": [
      "20261109_072438856_iOS.heic",
      "20261109_072443758_iOS.heic"
    ]
  },
  {
    "industryId": "01",
    "industry": "一、IC 設計業",
    "industryFolder": "01_IC設計業",
    "company": "義隆電子 ELAN Microelectronics (2458)",
    "companyFolder": "義隆電子_2458",
    "name": "劉代銘",
    "enName": "Dennis Liu",
    "tier": 2,
    "title": "投資關係處 處長兼公司發言人 (Director, Investor Relation Div.)",
    "phone": "(03)5639977 ext.6101",
    "mobile": "",
    "fax": "(03)5781623",
    "email": "dennis_liu@emc.com.tw",
    "address": "30076 新竹科學園區創新一路12號",
    "files": [
      "20261109_072409364_iOS.heic",
      "20261109_072415129_iOS.heic"
    ]
  },
  {
    "industryId": "01",
    "industry": "一、IC 設計業",
    "industryFolder": "01_IC設計業",
    "company": "義隆電子 ELAN Microelectronics (2458)",
    "companyFolder": "義隆電子_2458",
    "name": "蔡淑馨",
    "enName": "Tsai Shu-Hsin",
    "tier": 3,
    "title": "投資關係處 副處長 (Deputy Director, Investor Relation Div.)",
    "phone": "(03)5639977",
    "mobile": "",
    "fax": "(03)5781623",
    "email": "elsa@emc.com.tw",
    "address": "300092 新竹科學園區創新一路12號",
    "files": [
      "20261109_072424271_iOS.heic",
      "20261109_072430139_iOS.heic"
    ]
  },
  {
    "industryId": "01",
    "industry": "一、IC 設計業",
    "industryFolder": "01_IC設計業",
    "company": "聯詠科技 Novatek (3034)",
    "companyFolder": "聯詠科技_3034",
    "name": "曾省吾",
    "enName": "Tony Tseng, CFA",
    "tier": 2,
    "title": "董事長暨總經理室 投資關係主管 (Director of IR, VIP Office)",
    "phone": "(03)567-0889 ext.26588",
    "mobile": "",
    "fax": "(03)579-0394",
    "email": "Tony_SW_Tseng@novatek.com.tw",
    "address": "300 新竹科學工業園區創新一路1-2號",
    "files": [
      "20261109_072457560_iOS.heic",
      "20261109_072503184_iOS.heic"
    ]
  },
  {
    "industryId": "01",
    "industry": "一、IC 設計業",
    "industryFolder": "01_IC設計業",
    "company": "天鈺科技 Fitipower (4961)",
    "companyFolder": "天鈺科技_4961",
    "name": "陳志豪",
    "enName": "James Chen",
    "tier": 2,
    "title": "財會處 投資關係部 處長暨發言人 (Director & Spokesman, IR Dept.)",
    "phone": "+886(3)5788-618 ext.2609",
    "mobile": "+886-919-07-4961",
    "fax": "+886(3)5788-586",
    "email": "jc.chen@fitipower.com",
    "address": "300096 新竹科學園區篤行路6-8號3F",
    "files": [
      "20261109_072512526_iOS.heic",
      "20261109_072517140_iOS.heic"
    ]
  },
  {
    "industryId": "01",
    "industry": "一、IC 設計業",
    "industryFolder": "01_IC設計業",
    "company": "矽創電子 Sitronix (8016)",
    "companyFolder": "矽創電子_8016",
    "name": "周德雲",
    "enName": "Jacky Chou",
    "tier": 2,
    "title": "策略投資 資深處長／董事長特助 (Senior Director, Strategic Investment)",
    "phone": "02-2659-1276 ext.2206",
    "mobile": "+886-922-443-880",
    "fax": "02-2658-2977",
    "email": "jacky_chou@sitronix.com.tw",
    "address": "114 台北市內湖區瑞光路608號6樓",
    "files": [
      "20261109_072534870_iOS.heic",
      "20261109_072539098_iOS.heic"
    ]
  },
  {
    "industryId": "01",
    "industry": "一、IC 設計業",
    "industryFolder": "01_IC設計業",
    "company": "矽創電子 Sitronix (8016)",
    "companyFolder": "矽創電子_8016",
    "name": "李洸慶",
    "enName": "Steven Lee",
    "tier": 4,
    "title": "投資人關係暨永續辦公室 專案副理 (Deputy Project Manager, IR & ESG Office)",
    "phone": "02-2659-1276 ext.2291",
    "mobile": "0916-082-939",
    "fax": "02-2658-2977",
    "email": "steven_lee@sitronix.com.tw",
    "address": "114 台北市內湖區瑞光路608號6樓",
    "files": [
      "20261109_072524120_iOS.heic",
      "20261109_072529745_iOS.heic"
    ]
  }
];
  batch4Contacts.forEach(item => {
    const exists = cardsData.some(c => c.companyFolder === item.companyFolder && c.name === item.name);
    if (!exists) {
      cardsData.push(item);
    }
  });

  // Recalculate KPIs dynamically
  const totalIndustries = typeof INDUSTRIES !== "undefined" ? INDUSTRIES.length : 9;
  const totalCompanies = new Set(cardsData.map(c => c.industryFolder + "/" + c.companyFolder)).size;
  const totalContacts = cardsData.length;
  const totalPhotos = cardsData.reduce((acc, c) => acc + (c.files ? c.files.length : 0), 0);

  const elInd = document.getElementById("kpiIndustries");
  const elComp = document.getElementById("kpiCompanies");
  const elCont = document.getElementById("kpiContacts");
  const elPhot = document.getElementById("kpiPhotos");
  if (elInd) elInd.textContent = String(totalIndustries);
  if (elComp) elComp.textContent = String(totalCompanies);
  if (elCont) elCont.textContent = String(totalContacts);
  if (elPhot) elPhot.textContent = String(totalPhotos);

  const sub = document.querySelector(".hero-subtitle");
  if (sub) {
    sub.innerHTML = `依「產業別 ▸ 公司別 ▸ 職階高低（Tier 1 決策層至 Tier 5 工程師／研究員）」結構化歸檔 · 涵蓋 ${totalIndustries} 大產業類別 · ${totalCompanies} 家企業與金融機構 · ${totalContacts} 位真實聯絡人（共 ${totalPhotos} 張名片照片）`;
  }
  const foot = document.querySelector(".footer-note");
  if (foot) {
    foot.textContent = `資料來源：OneDrive「名片集」資料夾（共 ${totalPhotos} 張 .heic 照片已全數歸檔至 01～09 產業別／${totalCompanies} 家公司子資料夾；00_待整理_新上傳名片 已清空）`;
  }

  if (typeof initFilters === "function") initFilters();
  if (typeof renderDirectory === "function") renderDirectory();
})();
