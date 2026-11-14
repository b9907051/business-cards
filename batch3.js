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



// === Batch 5 Update (20261110_* : 69 .heic files, 18 companies [17 new], 35 net new contacts + 1 existing updated) ===
(function applyBatch5() {
  if (typeof cardsData === "undefined") return;
  const extraTinaFiles = ["20261110_062209483_iOS.heic", "20261110_062216451_iOS.heic"];
  const tina = cardsData.find(c => c.companyFolder === "華南永昌證券_HuaNan" && c.name === "袁美雯");
  if (tina) {
    extraTinaFiles.forEach(f => {
      if (!tina.files.includes(f)) tina.files.push(f);
    });
  }

  const batch5Contacts = [
  {
    "industryId": "02",
    "industry": "二、半導體封裝測試業 (OSAT)",
    "industryFolder": "02_半導體封裝測試業_OSAT",
    "company": "瑞峰半導體 Raytek Semiconductor",
    "companyFolder": "瑞峰半導體_Raytek",
    "name": "陳文恭",
    "enName": "Wen Gon Chen",
    "tier": 2,
    "title": "公司發言人／業務副總 (Spokesman / Sales V.P)",
    "phone": "03-5971111 #10006",
    "mobile": "",
    "fax": "03-5971135",
    "email": "wgchen@rayteksemi.com",
    "address": "",
    "files": [
      "20261110_062313991_iOS.heic"
    ]
  },
  {
    "industryId": "02",
    "industry": "二、半導體封裝測試業 (OSAT)",
    "industryFolder": "02_半導體封裝測試業_OSAT",
    "company": "瑞峰半導體 Raytek Semiconductor",
    "companyFolder": "瑞峰半導體_Raytek",
    "name": "王建閔",
    "enName": "Duke Wang",
    "tier": 3,
    "title": "財務會計部 副處長 (Deputy Director, Finance & Accounting Dept.)",
    "phone": "03-5971111 #10525",
    "mobile": "",
    "fax": "03-5971135",
    "email": "dukewang@rayteksemi.com",
    "address": "",
    "files": [
      "20261110_062258380_iOS.heic"
    ]
  },
  {
    "industryId": "02",
    "industry": "二、半導體封裝測試業 (OSAT)",
    "industryFolder": "02_半導體封裝測試業_OSAT",
    "company": "瑞峰半導體 Raytek Semiconductor",
    "companyFolder": "瑞峰半導體_Raytek",
    "name": "劉恆銘",
    "enName": "Tony Liu",
    "tier": 3,
    "title": "稽核室 專案經理 (Project Manager, Internal Audit Dept.)",
    "phone": "03-5971111 #10703",
    "mobile": "0936-226375",
    "fax": "03-5971135",
    "email": "tonyliu@rayteksemi.com",
    "address": "",
    "files": [
      "20261110_062306851_iOS.heic"
    ]
  },
  {
    "industryId": "06",
    "industry": "六、金融機構 (Buy-Side 投信/壽險/投顧)",
    "industryFolder": "06_金融機構_BuySide_投信壽險投顧",
    "company": "野村投信 Nomura Asset Management",
    "companyFolder": "野村投信_NomuraAM",
    "name": "謝文雄",
    "enName": "George Hsieh",
    "tier": 2,
    "title": "國內股票投資部 資深協理 (SAVP, Domestic Equity Dept.)",
    "phone": "02-8101-5501 #768 / 專線 02-8758-1768",
    "mobile": "",
    "fax": "02-8101-5530",
    "email": "george.hsieh@nomurafunds.com.tw",
    "address": "110615 台北市信義路五段7號30樓 (台北101大樓)",
    "files": [
      "20261110_061528925_iOS.heic",
      "20261110_061535962_iOS.heic"
    ]
  },
  {
    "industryId": "06",
    "industry": "六、金融機構 (Buy-Side 投信/壽險/投顧)",
    "industryFolder": "06_金融機構_BuySide_投信壽險投顧",
    "company": "野村投信 Nomura Asset Management",
    "companyFolder": "野村投信_NomuraAM",
    "name": "黃璿芳",
    "enName": "Megan Huang",
    "tier": 2,
    "title": "機構法人部 業務資深協理 (Sales SAVP, Institution Client Business Dept.)",
    "phone": "02-8101-5501 / 專線 02-8758-1524",
    "mobile": "0960-136-373",
    "fax": "02-8101-5538",
    "email": "megan.huang@nomurafunds.com.tw",
    "address": "110615 台北市信義路五段7號30樓 (台北101大樓)",
    "files": [
      "20261110_061544375_iOS.heic",
      "20261110_061548682_iOS.heic"
    ]
  },
  {
    "industryId": "06",
    "industry": "六、金融機構 (Buy-Side 投信/壽險/投顧)",
    "industryFolder": "06_金融機構_BuySide_投信壽險投顧",
    "company": "野村投信 Nomura Asset Management",
    "companyFolder": "野村投信_NomuraAM",
    "name": "林哲毅",
    "enName": "Chris Lin",
    "tier": 4,
    "title": "機構法人部 業務副理 (Sales Deputy Manager, Institution Client Business Dept.)",
    "phone": "02-8101-5501 / 專線 02-8758-1527",
    "mobile": "0912-809-595",
    "fax": "02-8101-5538",
    "email": "chris.lin@nomurafunds.com.tw",
    "address": "110615 台北市信義路五段7號30樓 (台北101大樓)",
    "files": [
      "20261110_061511021_iOS.heic",
      "20261110_061517193_iOS.heic"
    ]
  },
  {
    "industryId": "06",
    "industry": "六、金融機構 (Buy-Side 投信/壽險/投顧)",
    "industryFolder": "06_金融機構_BuySide_投信壽險投顧",
    "company": "安聯投信 Allianz Global Investors",
    "companyFolder": "安聯投信_AllianzGI",
    "name": "潘育憲",
    "enName": "Benson Pan",
    "tier": 2,
    "title": "投資研究管理處 副總裁 (Vice President, Investment Management)",
    "phone": "02-8770-9513",
    "mobile": "",
    "fax": "02-7720-7720",
    "email": "benson.pan@allianzgi.com",
    "address": "10476 台北市復興北路378號5樓",
    "files": [
      "20261110_061611784_iOS.heic",
      "20261110_061616083_iOS.heic"
    ]
  },
  {
    "industryId": "06",
    "industry": "六、金融機構 (Buy-Side 投信/壽險/投顧)",
    "industryFolder": "06_金融機構_BuySide_投信壽險投顧",
    "company": "瀚亞投信 Eastspring Investments",
    "companyFolder": "瀚亞投信_Eastspring",
    "name": "林元平",
    "enName": "Eric Lin, CFA",
    "tier": 2,
    "title": "海外股票暨固定收益部 資深副總經理 (Head of Overseas Equity / Fixed Income)",
    "phone": "02-8758-6688 #1700 / 專線 02-7736-1700",
    "mobile": "",
    "fax": "02-8780-8138",
    "email": "eric.yp.lin@eastspring.com",
    "address": "110411 台北市松智路1號4樓",
    "files": [
      "20261110_061624376_iOS.heic",
      "20261110_061629608_iOS.heic"
    ]
  },
  {
    "industryId": "06",
    "industry": "六、金融機構 (Buy-Side 投信/壽險/投顧)",
    "industryFolder": "06_金融機構_BuySide_投信壽險投顧",
    "company": "國泰投信 Cathay Securities Investment Trust",
    "companyFolder": "國泰投信_CathaySITE",
    "name": "陳柏因",
    "enName": "Paul Chen",
    "tier": 4,
    "title": "國內股票投資部 研究分析副理 (Manager, Taiwan Equity Fund Dept.)",
    "phone": "02-2700-8399 #3621",
    "mobile": "",
    "fax": "02-2707-5330",
    "email": "Paul.Chen@cathaysite.com.tw",
    "address": "10681 台北市大安區敦化南路二段39號6樓",
    "files": [
      "20261110_061729855_iOS.heic",
      "20261110_061733848_iOS.heic"
    ]
  },
  {
    "industryId": "06",
    "industry": "六、金融機構 (Buy-Side 投信/壽險/投顧)",
    "industryFolder": "06_金融機構_BuySide_投信壽險投顧",
    "company": "滙豐中華投信 HSBC Global Asset Management",
    "companyFolder": "滙豐中華投信_HSBCAM",
    "name": "余逸玫",
    "enName": "Carol Yu",
    "tier": 2,
    "title": "投資管理部 副總經理 (Vice President, Investment Management)",
    "phone": "02-6633-5808 #35265 / 專線 02-6633-5265",
    "mobile": "",
    "fax": "02-6607-3358",
    "email": "carol.yu@hsbc.com.tw",
    "address": "10682 台北市大安區敦化南路2段99號24樓",
    "files": [
      "20261110_062003850_iOS.heic",
      "20261110_062008513_iOS.heic"
    ]
  },
  {
    "industryId": "06",
    "industry": "六、金融機構 (Buy-Side 投信/壽險/投顧)",
    "industryFolder": "06_金融機構_BuySide_投信壽險投顧",
    "company": "台新投顧 Taishin Investment Advisory",
    "companyFolder": "台新投顧_TaishinIA",
    "name": "李明杰",
    "enName": "Bright Lee",
    "tier": 3,
    "title": "產經策略研究部電子研究組 研究經理 (Manager, Research Dept.)",
    "phone": "02-5589-9558 #1851 / 專線 02-5576-1851",
    "mobile": "",
    "fax": "02-3707-6769",
    "email": "s1030013@tss-c.com.tw",
    "address": "10687 台北市仁愛路四段118號18F",
    "files": [
      "20261110_062046951_iOS.heic",
      "20261110_062052770_iOS.heic"
    ]
  },
  {
    "industryId": "06",
    "industry": "六、金融機構 (Buy-Side 投信/壽險/投顧)",
    "industryFolder": "06_金融機構_BuySide_投信壽險投顧",
    "company": "台新投顧 Taishin Investment Advisory",
    "companyFolder": "台新投顧_TaishinIA",
    "name": "趙御雲",
    "enName": "Wayne Chao",
    "tier": 4,
    "title": "產經策略研究部電子研究組 研究襄理 (Project Associate Manager, Research Dept.)",
    "phone": "02-5589-9558 #1851 / 專線 02-5576-1851",
    "mobile": "",
    "fax": "02-3707-6769",
    "email": "s1090005@tss-c.com.tw",
    "address": "10687 台北市仁愛路四段118號18F",
    "files": [
      "20261110_062015353_iOS.heic",
      "20261110_062019214_iOS.heic"
    ]
  },
  {
    "industryId": "06",
    "industry": "六、金融機構 (Buy-Side 投信/壽險/投顧)",
    "industryFolder": "06_金融機構_BuySide_投信壽險投顧",
    "company": "中國信託投顧 CTBC Securities Investment Service",
    "companyFolder": "中國信託投顧_CTBCSIS",
    "name": "洪士勛",
    "enName": "Chris Hong",
    "tier": 5,
    "title": "投資研究部 研究員 (Analyst, Investment Research Dept.)",
    "phone": "02-5569-1988 #1968 / 專線 02-5569-1968",
    "mobile": "0966-165651",
    "fax": "02-5569-1966",
    "email": "chris.hong@ctbcsis.com",
    "address": "11568 臺北市南港區經貿二路188號5樓",
    "files": [
      "20261110_062246588_iOS.heic",
      "20261110_062251196_iOS.heic"
    ]
  },
  {
    "industryId": "07",
    "industry": "七、金融機構 (Sell-Side 證券/投行/銀行/資融)",
    "industryFolder": "07_金融機構_SellSide_證券投行銀行資融",
    "company": "野村國際證券 Nomura International",
    "companyFolder": "野村證券_Nomura",
    "name": "李佳伶",
    "enName": "Anne Lee, CFA",
    "tier": 2,
    "title": "證券研究部 執行董事 (Executive Director, Equity Research, Taiwan)",
    "phone": "02-2176-9999 #69966 / 專線 02-2176-9966",
    "mobile": "",
    "fax": "02-2176-9960",
    "email": "anne.lee@nomura.com",
    "address": "11047 台北市松智路1號17樓",
    "files": [
      "20261110_061459196_iOS.heic",
      "20261110_061503799_iOS.heic"
    ]
  },
  {
    "industryId": "07",
    "industry": "七、金融機構 (Sell-Side 證券/投行/銀行/資融)",
    "industryFolder": "07_金融機構_SellSide_證券投行銀行資融",
    "company": "野村國際證券 Nomura International",
    "companyFolder": "野村證券_Nomura",
    "name": "顏維君",
    "enName": "Gillian Yen",
    "tier": 5,
    "title": "證券研究部 (Equity Research, Taiwan, Global Markets)",
    "phone": "02-2176-9999 #69963 / 專線 02-2176-9963",
    "mobile": "",
    "fax": "02-2176-9960",
    "email": "gillian.yen@nomura.com",
    "address": "11047 台北市松智路1號17樓",
    "files": [
      "20261110_061445919_iOS.heic",
      "20261110_061451702_iOS.heic"
    ]
  },
  {
    "industryId": "07",
    "industry": "七、金融機構 (Sell-Side 證券/投行/銀行/資融)",
    "industryFolder": "07_金融機構_SellSide_證券投行銀行資融",
    "company": "康和綜合證券 Concord Securities (6016)",
    "companyFolder": "康和證券_6016",
    "name": "石嘉琳",
    "enName": "Brinda Shih",
    "tier": 3,
    "title": "法人部 業務經理 (Sales Manager, Institutional Dept.)",
    "phone": "02-8787-1888 #251 / 專線 02-2768-3883",
    "mobile": "0922-247-601",
    "fax": "02-2768-1511",
    "email": "brinda.shih@concords.com.tw",
    "address": "110 台北市信義區基隆路一段176號B1",
    "files": [
      "20261110_061559194_iOS.heic",
      "20261110_061603688_iOS.heic"
    ]
  },
  {
    "industryId": "07",
    "industry": "七、金融機構 (Sell-Side 證券/投行/銀行/資融)",
    "industryFolder": "07_金融機構_SellSide_證券投行銀行資融",
    "company": "國泰綜合證券 Cathay Securities",
    "companyFolder": "國泰證券_CathaySec",
    "name": "林聖斌",
    "enName": "Bain Lin",
    "tier": 2,
    "title": "資本市場處 資深副總經理 (Senior EVP, Capital Market)",
    "phone": "02-2326-9850",
    "mobile": "",
    "fax": "02-7711-9802",
    "email": "bain.lin@cathaysec.com.tw",
    "address": "10669 台北市敦化南路二段333號20樓",
    "files": [
      "20261110_061639021_iOS.heic",
      "20261110_061643876_iOS.heic"
    ]
  },
  {
    "industryId": "07",
    "industry": "七、金融機構 (Sell-Side 證券/投行/銀行/資融)",
    "industryFolder": "07_金融機構_SellSide_證券投行銀行資融",
    "company": "國泰綜合證券 Cathay Securities",
    "companyFolder": "國泰證券_CathaySec",
    "name": "王姵今",
    "enName": "Peggy Wang",
    "tier": 2,
    "title": "法人業務二處 國外法人業務部 業務協理 (Sales VP, Foreign Institutional Sales)",
    "phone": "02-2326-9882",
    "mobile": "0922-338-588",
    "fax": "",
    "email": "peggywang@cathaysec.com.tw",
    "address": "10669 台北市敦化南路二段335號19樓",
    "files": [
      "20261110_061740749_iOS.heic",
      "20261110_061744521_iOS.heic"
    ]
  },
  {
    "industryId": "07",
    "industry": "七、金融機構 (Sell-Side 證券/投行/銀行/資融)",
    "industryFolder": "07_金融機構_SellSide_證券投行銀行資融",
    "company": "國泰綜合證券 Cathay Securities",
    "companyFolder": "國泰證券_CathaySec",
    "name": "陳彥彣",
    "enName": "Vanessa Chen",
    "tier": 5,
    "title": "法人業務一處 國內法人業務部 中級專員 (Specialist, Domestic Institutional Sales)",
    "phone": "02-7710-1787",
    "mobile": "0988-167-367",
    "fax": "02-2737-2188",
    "email": "vani.chen@cathaysec.com.tw",
    "address": "10669 台北市敦化南路二段335號19樓",
    "files": [
      "20261110_061752367_iOS.heic",
      "20261110_061756543_iOS.heic"
    ]
  },
  {
    "industryId": "07",
    "industry": "七、金融機構 (Sell-Side 證券/投行/銀行/資融)",
    "industryFolder": "07_金融機構_SellSide_證券投行銀行資融",
    "company": "國泰期貨 Cathay Futures",
    "companyFolder": "國泰期貨_CathayFutures",
    "name": "張晏榮",
    "enName": "Yen-Jung Chang",
    "tier": 5,
    "title": "研究部 研究員 (Analyst, Research Department)",
    "phone": "02-7712-3866",
    "mobile": "",
    "fax": "02-2733-2198",
    "email": "yenjung@cathayfut.com.tw",
    "address": "10669 台北市敦化南路二段335號10樓",
    "files": [
      "20261110_061659216_iOS.heic",
      "20261110_061704680_iOS.heic"
    ]
  },
  {
    "industryId": "07",
    "industry": "七、金融機構 (Sell-Side 證券/投行/銀行/資融)",
    "industryFolder": "07_金融機構_SellSide_證券投行銀行資融",
    "company": "國泰期貨 Cathay Futures",
    "companyFolder": "國泰期貨_CathayFutures",
    "name": "劉醇翊",
    "enName": "Eric Liu",
    "tier": 5,
    "title": "研究部 研究員 (Analyst, Research Department)",
    "phone": "02-7710-1725",
    "mobile": "",
    "fax": "02-2733-2198",
    "email": "ericliu@cathayfut.com.tw",
    "address": "10669 台北市敦化南路二段335號10樓",
    "files": [
      "20261110_061716254_iOS.heic",
      "20261110_061722027_iOS.heic"
    ]
  },
  {
    "industryId": "07",
    "industry": "七、金融機構 (Sell-Side 證券/投行/銀行/資融)",
    "industryFolder": "07_金融機構_SellSide_證券投行銀行資融",
    "company": "群益金鼎證券 Capital Securities (6005)",
    "companyFolder": "群益金鼎證券_6005",
    "name": "林靜華",
    "enName": "Amy Lin",
    "tier": 1,
    "title": "上海代表處 首席代表 (Chief Representative, Shanghai Rep. Office)",
    "phone": "021-5888-7188 #1811 / 專線 021-5840-0528",
    "mobile": "",
    "fax": "021-5888-2929",
    "email": "amy_lin@capital.com.tw",
    "address": "上海市浦東南路360號新上海國際大廈18樓 (200120)",
    "files": [
      "20261110_061805713_iOS.heic",
      "20261110_061810873_iOS.heic"
    ]
  },
  {
    "industryId": "07",
    "industry": "七、金融機構 (Sell-Side 證券/投行/銀行/資融)",
    "industryFolder": "07_金融機構_SellSide_證券投行銀行資融",
    "company": "群益金鼎證券 Capital Securities (6005)",
    "companyFolder": "群益金鼎證券_6005",
    "name": "侯素英",
    "enName": "Stella Hou",
    "tier": 2,
    "title": "經紀部國內法人處 業務協理 (Senior Manager, Brokerage Dept.)",
    "phone": "02-8780-8888 #389",
    "mobile": "",
    "fax": "02-8788-3730",
    "email": "stella.hou@capital.com.tw",
    "address": "11073 台北市松仁路101號4樓群益金融大樓",
    "files": [
      "20261110_061819680_iOS.heic",
      "20261110_061824706_iOS.heic"
    ]
  },
  {
    "industryId": "07",
    "industry": "七、金融機構 (Sell-Side 證券/投行/銀行/資融)",
    "industryFolder": "07_金融機構_SellSide_證券投行銀行資融",
    "company": "日盛證券 JihSun Securities",
    "companyFolder": "日盛證券_JihSun",
    "name": "張璟璘",
    "enName": "Teresa",
    "tier": 2,
    "title": "經紀事業處 國內法人部 業務協理 (Sales AVP, Domestic Institutional Dept.)",
    "phone": "02-2504-8888 #2113 / 專線 02-2507-9548",
    "mobile": "0918-531-061",
    "fax": "02-2504-2034",
    "email": "920153@jsun.com",
    "address": "104 台北市中山區南京東路二段111號8樓",
    "files": [
      "20261110_061832829_iOS.heic",
      "20261110_061837579_iOS.heic"
    ]
  },
  {
    "industryId": "07",
    "industry": "七、金融機構 (Sell-Side 證券/投行/銀行/資融)",
    "industryFolder": "07_金融機構_SellSide_證券投行銀行資融",
    "company": "瑞士信貸證券 Credit Suisse",
    "companyFolder": "瑞士信貸證券_CreditSuisse",
    "name": "蔡麗卿",
    "enName": "Annie Tsai",
    "tier": 2,
    "title": "證券營業 董事 (Director, Equity, Asian Equities Sales)",
    "phone": "02-2715-6388 / 專線 02-2715-6332",
    "mobile": "",
    "fax": "02-2545-8637",
    "email": "annie.tsai@credit-suisse.com",
    "address": "105 台北市民生東路三段109號聯邦企業大樓六樓",
    "files": [
      "20261110_061849941_iOS.heic",
      "20261110_061854895_iOS.heic"
    ]
  },
  {
    "industryId": "07",
    "industry": "七、金融機構 (Sell-Side 證券/投行/銀行/資融)",
    "industryFolder": "07_金融機構_SellSide_證券投行銀行資融",
    "company": "滙豐證券／滙豐環球研究 HSBC Securities",
    "companyFolder": "滙豐證券_HSBC",
    "name": "王姵今",
    "enName": "Peggy Wang",
    "tier": 2,
    "title": "證券業務部 副總經理 (Vice President, Taiwan Equity Sales)",
    "phone": "02-6631-2899 / 專線 02-6610-1838",
    "mobile": "",
    "fax": "02-6603-3777",
    "email": "peggywang@hsbc.com.tw",
    "address": "110 台北市基隆路一段333號國際貿易大樓13樓",
    "files": [
      "20261110_061914605_iOS.heic",
      "20261110_061918660_iOS.heic"
    ]
  },
  {
    "industryId": "07",
    "industry": "七、金融機構 (Sell-Side 證券/投行/銀行/資融)",
    "industryFolder": "07_金融機構_SellSide_證券投行銀行資融",
    "company": "滙豐證券／滙豐環球研究 HSBC Securities",
    "companyFolder": "滙豐證券_HSBC",
    "name": "林俞安",
    "enName": "Lya Lin",
    "tier": 2,
    "title": "證券業務部 副總經理 (Vice President, Taiwan Equity Sales)",
    "phone": "02-6631-2899 / 專線 02-6610-1889",
    "mobile": "",
    "fax": "02-6603-3777",
    "email": "lya.y.a.lin@hsbc.com.tw",
    "address": "110 台北市基隆路一段333號國際貿易大樓13樓",
    "files": [
      "20261110_061939802_iOS.heic",
      "20261110_061944754_iOS.heic"
    ]
  },
  {
    "industryId": "07",
    "industry": "七、金融機構 (Sell-Side 證券/投行/銀行/資融)",
    "industryFolder": "07_金融機構_SellSide_證券投行銀行資融",
    "company": "滙豐證券／滙豐環球研究 HSBC Securities",
    "companyFolder": "滙豐證券_HSBC",
    "name": "鄭德榮",
    "enName": "Darryl Cheng",
    "tier": 2,
    "title": "環球研究 亞太區科技研究部門 資深副總裁 (Analyst, Asian Tech Research)",
    "phone": "02-6631-2864",
    "mobile": "0987-568-170",
    "fax": "02-6603-3780",
    "email": "darryl.tj.cheng@hsbc.com.tw",
    "address": "110 台北市基隆路一段333號國際貿易大樓13樓",
    "files": [
      "20261110_061951848_iOS.heic",
      "20261110_061956342_iOS.heic"
    ]
  },
  {
    "industryId": "07",
    "industry": "七、金融機構 (Sell-Side 證券/投行/銀行/資融)",
    "industryFolder": "07_金融機構_SellSide_證券投行銀行資融",
    "company": "滙豐證券／滙豐環球研究 HSBC Securities",
    "companyFolder": "滙豐證券_HSBC",
    "name": "方晨",
    "enName": "Helen Fang",
    "tier": 2,
    "title": "環球研究 聯席總監／工業業務亞太區研究分析師 (Associate Director, Industrial Research)",
    "phone": "+852-2996-6942",
    "mobile": "+852-6757-3759 / +86-130-5215-0210",
    "fax": "+852-2596-0200",
    "email": "helen.c.fang@hsbc.com.hk",
    "address": "香港皇后大道中1號滙豐總行大廈19樓",
    "files": [
      "20261110_061926440_iOS.heic",
      "20261110_061931554_iOS.heic"
    ]
  },
  {
    "industryId": "07",
    "industry": "七、金融機構 (Sell-Side 證券/投行/銀行/資融)",
    "industryFolder": "07_金融機構_SellSide_證券投行銀行資融",
    "company": "滙豐證券／滙豐環球研究 HSBC Securities",
    "companyFolder": "滙豐證券_HSBC",
    "name": "林修德",
    "enName": "Ted Lin",
    "tier": 5,
    "title": "環球研究 證券分析師 (Research Analyst, Global Research)",
    "phone": "02-6631-2870",
    "mobile": "0917-256-737",
    "fax": "",
    "email": "ted.ht.lin@hsbc.com.tw",
    "address": "110615 台北市信義區信義路五段7號54樓",
    "files": [
      "20261110_061902705_iOS.heic",
      "20261110_061906529_iOS.heic"
    ]
  },
  {
    "industryId": "07",
    "industry": "七、金融機構 (Sell-Side 證券/投行/銀行/資融)",
    "industryFolder": "07_金融機構_SellSide_證券投行銀行資融",
    "company": "台新綜合證券 Taishin Securities",
    "companyFolder": "台新證券_TaishinSec",
    "name": "林延昆",
    "enName": "Yenkeum Lin",
    "tier": 2,
    "title": "法人組 業務協理 (AVP, Institutional Sales Dept.)",
    "phone": "02-2181-5888 #8912 / 專線 02-5576-8912",
    "mobile": "0955-507-505",
    "fax": "02-2541-2000",
    "email": "yenkeum.lin@tssco.com.tw",
    "address": "10448 台北市中山北路二段44號2樓",
    "files": [
      "20261110_062102301_iOS.heic",
      "20261110_062109702_iOS.heic"
    ]
  },
  {
    "industryId": "07",
    "industry": "七、金融機構 (Sell-Side 證券/投行/銀行/資融)",
    "industryFolder": "07_金融機構_SellSide_證券投行銀行資融",
    "company": "台新綜合證券 Taishin Securities",
    "companyFolder": "台新證券_TaishinSec",
    "name": "周芸秀",
    "enName": "Cheryl Zhou",
    "tier": 3,
    "title": "國際暨機構事業處/國內法人組 業務經理 (Sales Manager, Institutional Sales)",
    "phone": "02-2181-5888 #8006 / 專線 02-5576-8006",
    "mobile": "",
    "fax": "02-2541-2000",
    "email": "cheryl@tssco.com.tw",
    "address": "104016 台北市中山北路二段44號2樓",
    "files": [
      "20261110_062118263_iOS.heic",
      "20261110_062123663_iOS.heic"
    ]
  },
  {
    "industryId": "07",
    "industry": "七、金融機構 (Sell-Side 證券/投行/銀行/資融)",
    "industryFolder": "07_金融機構_SellSide_證券投行銀行資融",
    "company": "台新綜合證券 Taishin Securities",
    "companyFolder": "台新證券_TaishinSec",
    "name": "余靜妮",
    "enName": "Gennie Yu",
    "tier": 3,
    "title": "法人組 業務經理 (Junior Manager, Institutional Sales Dept.)",
    "phone": "02-2181-5888 #8962 / 專線 02-2511-9936",
    "mobile": "0921-535-978",
    "fax": "02-2541-2000",
    "email": "gennie.yu@tssco.com.tw",
    "address": "10448 台北市中山北路二段44號2樓",
    "files": [
      "20261110_062029805_iOS.heic",
      "20261110_062035736_iOS.heic"
    ]
  },
  {
    "industryId": "07",
    "industry": "七、金融機構 (Sell-Side 證券/投行/銀行/資融)",
    "industryFolder": "07_金融機構_SellSide_證券投行銀行資融",
    "company": "華南永昌證券 Hua Nan Securities",
    "companyFolder": "華南永昌證券_HuaNan",
    "name": "陳麗蓮",
    "enName": "Lilian Chen",
    "tier": 2,
    "title": "國內法人部 業務協理 (Sales AVP, Institutional Sales Dept.)",
    "phone": "02-2545-6888 #8258 / 專線 02-2712-1601",
    "mobile": "0920-418-938",
    "fax": "02-2545-3271",
    "email": "10019@entrust.com.tw",
    "address": "105 台北市民生東路四段54號4樓",
    "files": [
      "20261110_062225811_iOS.heic",
      "20261110_062234445_iOS.heic"
    ]
  },
  {
    "industryId": "07",
    "industry": "七、金融機構 (Sell-Side 證券/投行/銀行/資融)",
    "industryFolder": "07_金融機構_SellSide_證券投行銀行資融",
    "company": "華南永昌證券 Hua Nan Securities",
    "companyFolder": "華南永昌證券_HuaNan",
    "name": "黃若瑋",
    "enName": "Ona Huang",
    "tier": 4,
    "title": "國內法人部 業務襄理 (Institutional Sales Dept.)",
    "phone": "02-2545-6888 #8968 / 專線 02-2545-0153",
    "mobile": "0963-339-905",
    "fax": "02-2545-3271",
    "email": "10015@entrust.com.tw",
    "address": "105 台北市民生東路四段54號4樓",
    "files": [
      "20261110_062149921_iOS.heic",
      "20261110_062203089_iOS.heic"
    ]
  }
];
  batch5Contacts.forEach(item => {
    const exists = cardsData.some(c => c.companyFolder === item.companyFolder && c.name === item.name && c.email === item.email);
    if (!exists) {
      cardsData.push(item);
    }
  });
INDUSTRIES.push({ id: "10", name: "十、記憶體與儲存模組業 (Memory & Storage)", folder: "10_記憶體與儲存模組業" });
  INDUSTRIES.push({ id: "11", name: "十一、網通與光通訊 CPO 產業 (Networking & Optical/CPO)", folder: "11_網通與光通訊CPO業" });
  const batch6Contacts = [{"industryId":"01","industry":"一、IC 設計業","industryFolder":"01_IC設計業","company":"群聯電子 Phison (8299)","companyFolder":"群聯電子_8299","name":"于紹庭","enName":"Antonio Yu","tier":2,"title":"董事長室 資深特別助理 (Senior Special Asst., Chairman Office)","phone":"037-586-896 #1006","mobile":"","fax":"037-587-699","email":"antonioyu@phison.com","address":"350 苗栗縣竹南鎮群義路1號","files":["20261113_071304645_iOS.heic","20261113_071310702_iOS.heic"]},{"industryId":"01","industry":"一、IC 設計業","industryFolder":"01_IC設計業","company":"群聯電子 Phison (8299)","companyFolder":"群聯電子_8299","name":"呂國鼎","enName":"Kuo-Ting Lu","tier":2,"title":"代理發言人 (Deputy Spokesperson)","phone":"037-586-896 #26022","mobile":"","fax":"","email":"kuoting_lu@phison.com","address":"350 苗栗縣竹南鎮群義路1號","files":["20261113_071254804_iOS.heic"]},{"industryId":"01","industry":"一、IC 設計業","industryFolder":"01_IC設計業","company":"祥碩科技 ASMedia (5269)","companyFolder":"祥碩科技_5269","name":"張珮萱","enName":"Teresa Chang","tier":3,"title":"投資人關係 資深經理 (Senior Manager, Investor Relations)","phone":"02-2219-6088 #5183","mobile":"","fax":"02-2219-6080","email":"Teresa_Chang@asmedia.com.tw","address":"231 新北市新店區民權路115號6樓","files":["20261113_071601698_iOS.heic","20261113_071607497_iOS.heic"]},{"industryId":"01","industry":"一、IC 設計業","industryFolder":"01_IC設計業","company":"晶心科技 Andes Technology (6533)","companyFolder":"晶心科技_6533","name":"陳志賢","enName":"Vincent Chen","tier":2,"title":"總經理室 特別助理、代理發言人 (Special Assistant, Deputy Spokesperson)","phone":"03-572-6533 #627","mobile":"","fax":"03-572-6535","email":"vincchen@andestech.com","address":"300042 新竹市東區公道五路三段1號10樓","files":["20261113_071626031_iOS.heic","20261113_071643440_iOS.heic"]},{"industryId":"01","industry":"一、IC 設計業","industryFolder":"01_IC設計業","company":"世芯-KY Alchip (3661)","companyFolder":"世芯_3661","name":"王德善","enName":"Daniel Wang","tier":1,"title":"財務長 (CFO)","phone":"02-2799-2318 #2501","mobile":"","fax":"02-2799-7389","email":"daniel_wang@alchip.com","address":"114061 台北市內湖區文湖街12號9樓","files":["20261113_071650137_iOS.heic"]},{"industryId":"01","industry":"一、IC 設計業","industryFolder":"01_IC設計業","company":"智原科技 Faraday (3035)","companyFolder":"智原科技_3035","name":"王國雍","enName":"Steve Wang","tier":1,"title":"總經理 (President)","phone":"03-578-7888 #88101","mobile":"","fax":"03-578-7889","email":"steve@faraday-tech.com","address":"30078 新竹科學園區力行三路5號","files":["20261113_071712989_iOS.heic","20261113_071717962_iOS.heic"]},{"industryId":"01","industry":"一、IC 設計業","industryFolder":"01_IC設計業","company":"智原科技 Faraday (3035)","companyFolder":"智原科技_3035","name":"盧昭儀","enName":"Samantha Lu","tier":3,"title":"財務部／投資人關係 經理 (Manager, Finance Div. / IR)","phone":"03-578-7888 #84588","mobile":"","fax":"03-577-8805","email":"samantha_lu@faraday-tech.com","address":"30078 新竹科學園區力行三路5號","files":["20261113_071727545_iOS.heic","20261113_071732485_iOS.heic"]},{"industryId":"01","industry":"一、IC 設計業","industryFolder":"01_IC設計業","company":"智原科技 Faraday (3035)","companyFolder":"智原科技_3035","name":"陳維琪","enName":"Rachel Chen","tier":4,"title":"財務部／投資人關係 高級管理師 (Senior IR Associate)","phone":"03-578-7888 #84813","mobile":"0933-161-251","fax":"03-577-8605","email":"rachel_chen@faraday-tech.com","address":"30078 新竹科學園區力行三路5號","files":["20261113_071700921_iOS.heic","20261113_071705808_iOS.heic"]},
                          {"industryId":"01","industry":"一、IC 設計業","industryFolder":"01_IC設計業","company":"創意電子 GUC (3443)","companyFolder":"創意電子_3443","name":"林新洲","enName":"Asia Lin","tier":3,"title":"財務規劃暨投資人關係部 副處長 (Deputy Director, Financial Planning & IR)","phone":"03-564-6600 #6868","mobile":"","fax":"","email":"asialin@guc-asic.com","address":"300096 新竹科學園區力行六路10號","files":["20261113_071752431_iOS.heic"]},{"industryId":"01","industry":"一、IC 設計業","industryFolder":"01_IC設計業","company":"創意電子 GUC (3443)","companyFolder":"創意電子_3443","name":"詹宜潔","enName":"Nicole Chan","tier":3,"title":"財務規劃暨投資人關係部 資深專案經理 (Senior Project Manager, Financial Planning & IR)","phone":"03-564-6600 #216906","mobile":"","fax":"","email":"nicole.chan@guc-asic.com","address":"300096 新竹科學園區力行六路10號","files":["20261113_071741791_iOS.heic"]},{"industryId":"01","industry":"一、IC 設計業","industryFolder":"01_IC設計業","company":"台灣新思科技 Synopsys (SNPS)","companyFolder":"新思科技_Synopsys","name":"林東瑩","enName":"Tony Lin","tier":2,"title":"業務副總經理 (Executive Director, GTM Worldwide Sales)","phone":"03-579-4567 #30788 / 直撥 03-623-0788","mobile":"0937-587-265","fax":"03-579-4899","email":"tonylin@synopsys.com","address":"300 新竹科學園區工業東四路25號／110 台北市基隆路一段333號31樓3108室","files":["20261113_072133256_iOS.heic","20261113_072139992_iOS.heic"]},{"industryId":"02","industry":"二、半導體封裝測試業 (OSAT)","industryFolder":"02_半導體封裝測試業_OSAT","company":"長華電材／長華集團 CWE Group (8070)","companyFolder":"長華電材_8070","name":"黃嘉能","enName":"Canon Huang","tier":1,"title":"總裁 (President)","phone":"07-362-2663","mobile":"","fax":"07-362-1490","email":"Canon@cwei.com.tw","address":"811 高雄市楠梓加工區東七街16號6樓","files":["20261113_071802364_iOS.heic","20261113_071809666_iOS.heic"]},{"industryId":"02","industry":"二、半導體封裝測試業 (OSAT)","industryFolder":"02_半導體封裝測試業_OSAT","company":"南茂科技 ChipMOS (8150)","companyFolder":"南茂科技_8150","name":"黃國樑","enName":"Jesse Huang","tier":2,"title":"策略與投資人關係 資深副總經理 (Senior Vice General Manager, Strategy & IR)","phone":"06-505-2388 #7715","mobile":"0917-667-267","fax":"06-505-2345","email":"jesse_huang@chipmos.com","address":"台南市南部科學園區南科七路五號","files":["20261113_072042110_iOS.heic","20261113_072048190_iOS.heic"]},{"industryId":"02","industry":"二、半導體封裝測試業 (OSAT)","industryFolder":"02_半導體封裝測試業_OSAT","company":"南茂科技 ChipMOS (8150)","companyFolder":"南茂科技_8150","name":"沈更新 博士","enName":"G. S. Shen, Ph.D.","tier":3,"title":"策略與投資關係／投資關係室 技術副處長 (Technical Deputy Director, IR Office)","phone":"06-505-2388 #7109","mobile":"0955-975-300","fax":"06-505-0482","email":"g.s._shen@chipmos.com","address":"台南市南部科學工業園區南科七路五號","files":["20261113_072055805_iOS.heic","20261113_072105875_iOS.heic"]},{"industryId":"04","industry":"四、半導體與電子檢測及製程設備業","industryFolder":"04_半導體與電子檢測及製程設備業","company":"台灣特品化學 TSC (4772)","companyFolder":"台特化_4772","name":"張雄飛","enName":"Andrew Chang","tier":1,"title":"總經理 (General Manager)","phone":"04-791-1072","mobile":"","fax":"04-791-1029","email":"andrew.chang@tscs.com.tw","address":"507 彰化縣線西鄉彰濱西三路1號","files":["20261113_072159521_iOS.heic"]},{"industryId":"04","industry":"四、半導體與電子檢測及製程設備業","industryFolder":"04_半導體與電子檢測及製程設備業","company":"台灣特品化學 TSC (4772)","companyFolder":"台特化_4772","name":"廖介徽","enName":"Lennon Liau","tier":2,"title":"財會處 處長 (Director, Finance Division)","phone":"04-791-1072 #7301","mobile":"","fax":"04-791-1029","email":"lennon.liau@tscs.com.tw","address":"507 彰化縣線西鄉彰濱西三路1號","files":["20261113_072150661_iOS.heic"]},{"industryId":"04","industry":"四、半導體與電子檢測及製程設備業","industryFolder":"04_半導體與電子檢測及製程設備業","company":"聖暉工程科技 Acter Group (5536)","companyFolder":"聖暉_5536","name":"梁鈞幃","enName":"Jeff Liang","tier":2,"title":"董事長室 特助 (Executive Assistant, Chairman Office)","phone":"04-2261-5288","mobile":"","fax":"04-2261-5277","email":"Jeff.Liang@acter.com.tw","address":"407544 台中市西屯區文心路二段201號19F","files":["20261113_072207952_iOS.heic","20261113_072213352_iOS.heic"]},{"industryId":"04","industry":"四、半導體與電子檢測及製程設備業","industryFolder":"04_半導體與電子檢測及製程設備業","company":"萬潤科技 All Ring Tech (6187)","companyFolder":"萬潤科技_6187","name":"盧慧萱","enName":"Elaine Lu","tier":2,"title":"董事長特別助理 (Chairman Special Assistant)","phone":"07-607-1828","mobile":"","fax":"07-696-1308","email":"huihsuan.lu@allring-tech.com.tw","address":"821 高雄市路竹區路科十路1號","files":["20261113_072223482_iOS.heic","20261113_072229087_iOS.heic"]},
                          {"industryId":"04","industry":"四、半導體與電子檢測及製程設備業","industryFolder":"04_半導體與電子檢測及製程設備業","company":"昇陽國際半導體 PSI (8028)","companyFolder":"昇陽半導體_8028","name":"梁明成","enName":"Mike Liang","tier":1,"title":"董事長 (Chairman)","phone":"03-564-1888","mobile":"","fax":"","email":"mike_liang@psi.com.tw","address":"300094 新竹市科學園區力行路6號","files":["20261113_072251346_iOS.heic","20261113_072256737_iOS.heic"]},{"industryId":"04","industry":"四、半導體與電子檢測及製程設備業","industryFolder":"04_半導體與電子檢測及製程設備業","company":"昇陽國際半導體 PSI (8028)","companyFolder":"昇陽半導體_8028","name":"蔡幸川 博士","enName":"Tony Tsai, Ph.D.","tier":1,"title":"執行長 (CEO)","phone":"03-564-1888","mobile":"","fax":"","email":"tonytsai@psi.com.tw","address":"300094 新竹市科學園區力行路6號","files":["20261113_072235633_iOS.heic","20261113_072242323_iOS.heic"]},{"industryId":"04","industry":"四、半導體與電子檢測及製程設備業","industryFolder":"04_半導體與電子檢測及製程設備業","company":"鴻勁精密 Hon. Precision (7769)","companyFolder":"鴻勁精密_7769","name":"翁德奎","enName":"Colin Weng","tier":2,"title":"總經理室 發言人／資深副總經理 (Spokesperson / Senior VP)","phone":"04-2560-8752","mobile":"0912-906-269","fax":"04-2560-8755","email":"colinweng@honprec.com","address":"428012 台中市大雅區中清路三段758巷11號","files":["20261113_072305251_iOS.heic","20261113_072312146_iOS.heic"]},{"industryId":"04","industry":"四、半導體與電子檢測及製程設備業","industryFolder":"04_半導體與電子檢測及製程設備業","company":"鴻勁精密 Hon. Precision (7769)","companyFolder":"鴻勁精密_7769","name":"陳可欣","enName":"Judy Chen","tier":3,"title":"會計部 經理（投資人關係） (Investor Relations Manager)","phone":"04-2560-8752 #2888","mobile":"0912-907-269","fax":"04-2560-8755","email":"judychen@honprec.com","address":"428012 台中市大雅區中清路三段758巷11號","files":["20261113_072319278_iOS.heic","20261113_072324654_iOS.heic"]},{"industryId":"05","industry":"五、電子零組件與被動元件業","industryFolder":"05_電子零組件與被動元件業","company":"富世達 Fositek (6805)","companyFolder":"富世達_6805","name":"邱稚育","enName":"Jerry Chiu","tier":1,"title":"財務/資訊部 財務長 (CFO, Finance & IT Dept.)","phone":"02-2299-6388","mobile":"","fax":"02-2299-5581","email":"jerry_chiu@fositek.com","address":"248022 新北市新莊區五權二路24號8樓之4","files":["20261113_072015312_iOS.heic","20261113_072020781_iOS.heic"]},{"industryId":"05","industry":"五、電子零組件與被動元件業","industryFolder":"05_電子零組件與被動元件業","company":"朋程科技 Actron (8255)","companyFolder":"朋程科技_8255","name":"盧明光","enName":"M. K. Lu","tier":1,"title":"榮譽董事長／中華企業研究院學術教育基金會 董事長 (Honorary Chairman)","phone":"03-311-5555 #202 / 02-2547-5060","mobile":"","fax":"03-311-9977","email":"mk_lu@actron.com.tw","address":"33855 桃園市蘆竹區南崁路2段22號1樓／10488 台北市南京東路三段201號6樓","files":["20261113_072115142_iOS.heic","20261113_072121517_iOS.heic"]},{"industryId":"10","industry":"十、記憶體與儲存模組業 (Memory & Storage)","industryFolder":"10_記憶體與儲存模組業","company":"宜鼎國際 Innodisk (5289)","companyFolder":"宜鼎國際_5289","name":"簡川勝","enName":"Randy Chien","tier":1,"title":"董事長 (Chairman)","phone":"02-7703-3000","mobile":"","fax":"02-7703-3555","email":"randy_chien@innodisk.com","address":"221 新北市汐止區大同路一段237號5樓","files":["20261113_071137718_iOS.heic","20261113_071146460_iOS.heic"]},{"industryId":"10","industry":"十、記憶體與儲存模組業 (Memory & Storage)","industryFolder":"10_記憶體與儲存模組業","company":"宜鼎國際 Innodisk (5289)","companyFolder":"宜鼎國際_5289","name":"王立誠","enName":"Licheng Wang","tier":2,"title":"財會處 副總經理 (Vice President, Financial & Accounting Div.)","phone":"02-7703-3000 #1800","mobile":"","fax":"","email":"licheng_wang@innodisk.com","address":"221 新北市汐止區大同路一段237號5樓","files":["20261113_071121067_iOS.heic"]},{"industryId":"10","industry":"十、記憶體與儲存模組業 (Memory & Storage)","industryFolder":"10_記憶體與儲存模組業","company":"十銓科技 Team Group (4967)","companyFolder":"十銓科技_4967","name":"吳健瑋","enName":"Alvin Wu","tier":2,"title":"發言人 (Spokesman)","phone":"02-8226-5000 #273","mobile":"0909-494-967","fax":"02-8226-5808","email":"alvin.wu@teamgroup.com.tw","address":"23511 新北市中和區建一路166號3樓","files":["20261113_071155448_iOS.heic","20261113_071202993_iOS.heic"]},{"industryId":"10","industry":"十、記憶體與儲存模組業 (Memory & Storage)","industryFolder":"10_記憶體與儲存模組業","company":"十銓科技 Team Group (4967)","companyFolder":"十銓科技_4967","name":"彭大維","enName":"David Peng","tier":2,"title":"財會處 處長 (Director, Finance & IT Div.)","phone":"02-8226-5000 #302","mobile":"0920-306-426","fax":"02-8226-5808","email":"david@teamgroup.com.tw","address":"23511 新北市中和區建一路166號3樓","files":["20261113_071223154_iOS.heic","20261113_071229310_iOS.heic"]},
                          {"industryId":"10","industry":"十、記憶體與儲存模組業 (Memory & Storage)","industryFolder":"10_記憶體與儲存模組業","company":"創見資訊 Transcend (2451)","companyFolder":"創見資訊_2451","name":"陳柏壽","enName":"Paul Chen","tier":2,"title":"業務副總經理 (Sales Vice President)","phone":"02-2792-8000 #7628","mobile":"0919-061-024","fax":"02-2796-8013","email":"paul_chen@transcend-info.com","address":"114 台北市內湖區行忠路70號","files":["20261113_071238810_iOS.heic","20261113_071246340_iOS.heic"]},{"industryId":"10","industry":"十、記憶體與儲存模組業 (Memory & Storage)","industryFolder":"10_記憶體與儲存模組業","company":"南亞科技 Nanya Technology (2408)","companyFolder":"南亞科技_2408","name":"吳志祥","enName":"Joseph C.H. Wu","tier":2,"title":"總經理室 副總經理 (Vice President, President Office)","phone":"02-2904-5858 #1009","mobile":"","fax":"02-2908-8155","email":"josephwu@ntc.com.tw","address":"243 新北市泰山區南林路98號","files":["20261113_071340288_iOS.heic"]},{"industryId":"10","industry":"十、記憶體與儲存模組業 (Memory & Storage)","industryFolder":"10_記憶體與儲存模組業","company":"南亞科技 Nanya Technology (2408)","companyFolder":"南亞科技_2408","name":"饒昌明","enName":"Philip Jao","tier":3,"title":"總經理室 特別助理 (Executive Administrator, President Office)","phone":"02-2904-5858 #1020","mobile":"","fax":"02-2908-0327","email":"philipjao@ntc.com.tw","address":"243 新北市泰山區南林路98號","files":["20261113_071331689_iOS.heic"]},{"industryId":"10","industry":"十、記憶體與儲存模組業 (Memory & Storage)","industryFolder":"10_記憶體與儲存模組業","company":"南亞科技 Nanya Technology (2408)","companyFolder":"南亞科技_2408","name":"竇啟華","enName":"Dora","tier":3,"title":"投資人關係 經理 (Manager, Investor Relations & Media Relations)","phone":"02-2904-5858 #1066","mobile":"","fax":"","email":"dorat@ntc.com.tw","address":"243 新北市泰山區南林路98號","files":["20261113_071318918_iOS.heic"]},{"industryId":"10","industry":"十、記憶體與儲存模組業 (Memory & Storage)","industryFolder":"10_記憶體與儲存模組業","company":"旺宏電子 Macronix (2337)","companyFolder":"旺宏電子_2337","name":"趙元祥","enName":"Vincent Jhao","tier":2,"title":"投資法人關係室／財務中心 處長 (Director, IR Office / Finance Center)","phone":"03-578-6688 #76632","mobile":"0967-167-818","fax":"03-563-2999","email":"vincentjhao@mxic.com.tw","address":"300094 新竹科學園區力行路16號","files":["20261113_071419884_iOS.heic","20261113_071425756_iOS.heic"]},{"industryId":"10","industry":"十、記憶體與儲存模組業 (Memory & Storage)","industryFolder":"10_記憶體與儲存模組業","company":"旺宏電子 Macronix (2337)","companyFolder":"旺宏電子_2337","name":"廖家妤","enName":"Chiayu Liao","tier":4,"title":"投資法人關係室 主任管理師 (Principal Administrator, IR Office)","phone":"03-578-6688 #76647","mobile":"","fax":"","email":"chiayuliao@mxic.com.tw","address":"300094 新竹科學園區力行路16號","files":["20261113_071403890_iOS.heic","20261113_071412169_iOS.heic"]},{"industryId":"10","industry":"十、記憶體與儲存模組業 (Memory & Storage)","industryFolder":"10_記憶體與儲存模組業","company":"旺宏電子 Macronix (2337)","companyFolder":"旺宏電子_2337","name":"李佳駿","enName":"James Li","tier":4,"title":"投資法人關係室 執行管理師 (Executive Administrator, IR Office)","phone":"03-578-6688 #76658","mobile":"","fax":"03-563-2999","email":"jamesli02@mxic.com.tw","address":"30078 新竹科學園區力行路16號","files":["20261113_071346975_iOS.heic","20261113_071354252_iOS.heic"]},{"industryId":"10","industry":"十、記憶體與儲存模組業 (Memory & Storage)","industryFolder":"10_記憶體與儲存模組業","company":"宇瞻科技 Apacer (8271)","companyFolder":"宇瞻科技_8271","name":"張家騉","enName":"C.K. Chang","tier":1,"title":"總經理 (President)","phone":"02-2267-8000 #5858","mobile":"","fax":"02-2267-2261","email":"ckchang@apacer.com","address":"236 新北市土城區忠承路32號1樓","files":["20261113_071504912_iOS.heic","20261113_071510700_iOS.heic"]},{"industryId":"10","industry":"十、記憶體與儲存模組業 (Memory & Storage)","industryFolder":"10_記憶體與儲存模組業","company":"宇瞻科技 Apacer (8271)","companyFolder":"宇瞻科技_8271","name":"賴孜玟","enName":"Connie Lai","tier":1,"title":"財務管理中心 財務長 (CFO, Finance Management Center)","phone":"02-2267-8000 #5910","mobile":"0936-277-463","fax":"02-2267-2261","email":"connie_lai@apacer.com","address":"236 新北市土城區忠承路32號1樓","files":["20261113_071448606_iOS.heic","20261113_071456798_iOS.heic"]},{"industryId":"10","industry":"十、記憶體與儲存模組業 (Memory & Storage)","industryFolder":"10_記憶體與儲存模組業","company":"宇瞻科技 Apacer (8271)","companyFolder":"宇瞻科技_8271","name":"林筱玫","enName":"Mei Lin","tier":3,"title":"全球行銷處 專案經理 (Project Manager, Global Marketing Division)","phone":"02-2267-8000 #5519","mobile":"","fax":"02-2267-2261","email":"mei_lin@apacer.com","address":"236 新北市土城區忠承路32號1樓","files":["20261113_071433596_iOS.heic","20261113_071439847_iOS.heic"]},
                          {"industryId":"10","industry":"十、記憶體與儲存模組業 (Memory & Storage)","industryFolder":"10_記憶體與儲存模組業","company":"華邦電子 Winbond (2344)","companyFolder":"華邦電子_2344","name":"鄧紹康","enName":"S.K. Teng","tier":3,"title":"法人關係部 經理 (Manager, Investor Relations Dept.)","phone":"03-567-8168 #76132","mobile":"","fax":"","email":"skteng@winbond.com","address":"30274 新竹縣竹北市文興路二段539號","files":["20261113_071531947_iOS.heic","20261113_071537571_iOS.heic"]},{"industryId":"10","industry":"十、記憶體與儲存模組業 (Memory & Storage)","industryFolder":"10_記憶體與儲存模組業","company":"華邦電子 Winbond (2344)","companyFolder":"華邦電子_2344","name":"陳瑩潔","enName":"Amanda Y.C. Chen","tier":4,"title":"法人關係部 高級管理師 (Senior Administrator, Investor Relations Dept.)","phone":"03-567-8168 #71068","mobile":"0937-838-005","fax":"","email":"ycchen76@winbond.com","address":"30274 新竹縣竹北市文興路二段539號","files":["20261113_071519087_iOS.heic","20261113_071525513_iOS.heic"]},{"industryId":"11","industry":"十一、網通與光通訊 CPO 產業 (Networking & Optical/CPO)","industryFolder":"11_網通與光通訊CPO業","company":"智易科技 Arcadyan (3596)","companyFolder":"智易科技_3596","name":"曾釗鵬","enName":"Edward Tseng","tier":1,"title":"總經理 (CEO)","phone":"03-572-7000","mobile":"0911-866-068","fax":"03-572-7186","email":"edward@arcadyan.com","address":"30071 新竹市東區光復路2段8號","files":["20261113_071849039_iOS.heic","20261113_071853931_iOS.heic"]},{"industryId":"11","industry":"十一、網通與光通訊 CPO 產業 (Networking & Optical/CPO)","industryFolder":"11_網通與光通訊CPO業","company":"智易科技 Arcadyan (3596)","companyFolder":"智易科技_3596","name":"黃仕緯","enName":"Darren Huang","tier":1,"title":"財務中心 財務長 (CFO, Finance Center)","phone":"03-572-7000 #14300","mobile":"","fax":"03-572-7006","email":"darren_huang@arcadyan.com","address":"30071 新竹市東區光復路2段8號","files":["20261113_071835941_iOS.heic","20261113_071841933_iOS.heic"]},{"industryId":"11","industry":"十一、網通與光通訊 CPO 產業 (Networking & Optical/CPO)","industryFolder":"11_網通與光通訊CPO業","company":"智易科技 Arcadyan (3596)","companyFolder":"智易科技_3596","name":"王小亭","enName":"Doris Wang","tier":5,"title":"財務中心 資深專員 (Senior Specialist, Finance Center)","phone":"03-572-7000 #14322","mobile":"","fax":"03-572-7186","email":"doris_wang@arcadyan.com","address":"30071 新竹市東區光復路2段8號","files":["20261113_071820768_iOS.heic","20261113_071826262_iOS.heic"]},{"industryId":"11","industry":"十一、網通與光通訊 CPO 產業 (Networking & Optical/CPO)","industryFolder":"11_網通與光通訊CPO業","company":"華星光通 LuxNet (4979)","companyFolder":"華星光通_4979","name":"簡孝倫","enName":"Allen Chien","tier":2,"title":"董事長室 特別助理 (Special Assistant, Chairman's Office)","phone":"03-452-5188 #1020","mobile":"0935-405-348","fax":"03-462-9588","email":"allen.chien@luxnetcorp.com.tw","address":"320 桃園市中壢區合江路6號","files":["20261113_071929238_iOS.heic","20261113_071934987_iOS.heic"]},{"industryId":"11","industry":"十一、網通與光通訊 CPO 產業 (Networking & Optical/CPO)","industryFolder":"11_網通與光通訊CPO業","company":"華星光通 LuxNet (4979)","companyFolder":"華星光通_4979","name":"池千駒","enName":"Frank Chih","tier":2,"title":"財會處 協理 (Assistant Vice President, Fin. & Acct. Dept.)","phone":"03-452-5188 #1015","mobile":"","fax":"03-462-9588","email":"frank.chih@luxnetcorp.com.tw","address":"320 桃園市中壢區合江路6號","files":["20261113_071907810_iOS.heic","20261113_071913649_iOS.heic"]},{"industryId":"11","industry":"十一、網通與光通訊 CPO 產業 (Networking & Optical/CPO)","industryFolder":"11_網通與光通訊CPO業","company":"上詮光纖通信 FOCI (3363)","companyFolder":"上詮_3363","name":"游雅芳","enName":"Grace Yu","tier":2,"title":"財務處 處長 (Director, Finance Division)","phone":"03-577-0099 #126","mobile":"","fax":"03-579-9153","email":"grace.yu@foci-cpo.com","address":"300091 新竹市科學園區展業二路18號","files":["20261113_072003969_iOS.heic","20261113_072009283_iOS.heic"]}]; batch6Contacts.forEach(item => { const exists = cardsData.some(c => c.companyFolder === item.companyFolder && c.name === item.name && c.email === item.email); if (!exists) { cardsData.push(item); } });
  
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
