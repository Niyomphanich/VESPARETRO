/* =========================================================
   VESPA GRAND OPENING 2026 — ไฟล์ตั้งค่าเว็บไซต์
   แก้ข้อความ ลิงก์ฟอร์ม และรูปภาพได้ในไฟล์นี้ไฟล์เดียว
   (แก้บน GitHub: เปิดไฟล์ > ไอคอนดินสอ > Commit changes)
   ระวัง: ข้อความต้องอยู่ใน "..." และคั่นแต่ละรายการด้วย ,
   ========================================================= */
window.VGO_CONFIG = {

  /* ===== หลังบ้าน (ไม่บังคับ) =====
     ใส่ลิงก์ Web app ของ Google Apps Script เพื่อเปิดใช้ปุ่ม "เข้าสู่ระบบผู้ดูแล"
     ให้แก้ข้อความ/รูป/ลิงก์ฟอร์มจากหน้าเว็บได้ (วิธีติดตั้งดู README)
     เว้นว่าง "" = แก้ผ่านไฟล์นี้อย่างเดียว */
  API_URL: "https://script.google.com/macros/s/AKfycbwDtJkO6Y26QaExqatjc8HTFuJPxi_VYJM6B16IziEgkdTnTqOtaCRbrbmkPnX-6ytB/exec",

  /* false = ปิดเว็บชั่วคราว แสดงหน้า Coming soon */
  published: true,

  /* ===== ลิงก์ Google Form =====
     ใช้ลิงก์เต็มจากปุ่ม "ส่ง" > ไอคอนลิงก์ ของ Google Form
     เช่น "https://docs.google.com/forms/d/e/XXXXXXXX/viewform"
     (ลิงก์สั้น forms.gle จะแสดงเป็นปุ่มเปิดฟอร์มแทนการฝังในหน้า) */
  forms: {
    rsvp: "https://docs.google.com/forms/d/e/1FAIpQLScvEckwBrAwxm6DB5KausPyI4P-18M1KEsmXvs_o8lAV5NFtA/viewform",   // ฟอร์มยืนยันเข้าร่วมงาน (forms.gle/P1bbCVherdjDcf526)
    referral: "https://docs.google.com/forms/d/e/1FAIpQLSds35W7yzcZFbLwEI-z-xRr_uv33UOjiHYsV15i8O_O4t5soQ/viewform",   // ฟอร์มเพื่อนแนะนำเพื่อน (forms.gle/Eer7gUpXMvNFQX2H9)
    rsvpHeight: 1700,    // ความสูงกรอบฟอร์ม (px) ปรับได้ถ้าฟอร์มยาว/สั้น
    referralHeight: 1600,
  },

  /* ===== รูปภาพ =====
     อัปโหลดรูปไว้ในโฟลเดอร์ images/ แล้วใส่ชื่อไฟล์ เช่น "images/hero.jpg"
     เว้นว่าง "" = ใช้ภาพวาดประกอบ */
  images: {
    hero: "images/showroom.webp",       // ภาพหลักหน้าแรก (ในกรอบโค้ง) — ตึกโชว์รูม
    model: "images/lx-lilac.jpg",      // รถรุ่นใหม่ สีที่ 1 (รูปแรก)
    gallery1: "images/lx-green.jpg",   // สีที่ 2
    gallery2: "images/lx-white.jpg",   // สีที่ 3
    gallery3: "images/lx-grey.jpg",    // สีที่ 4
    map: "images/showroom.webp",        // ภาพโชว์รูม (ส่วน Location)
    mapArt: "images/map-illustration.webp",  // แผนที่ภาพวาด (ส่วน Location) — เว้นว่างเพื่อใช้ Google Maps แบบเลื่อนได้แทน
    activity2: "",  // กิจกรรม: Special Souvenir (ช่องใหญ่ อันแรก)
    activity1: "",  // กิจกรรม: Games & Lucky Prizes (ช่องยาว)
    activity3: "",  // กิจกรรม: Food & Beverage
    activity4: "",  // กิจกรรม: Live Music & Gathering
    promo1: "",     // หน้าโปรโมชั่นในงาน: รูปที่ 1 (โปสเตอร์)
    promo2: "",     // รูปที่ 2
    promo3: "",     // รูปที่ 3
    promo4: "",     // รูปที่ 4
  },

  /* ===== ข้อมูลงาน ===== */
  title: "Vespa Grand Opening",
  showroom: "เวสป้าเชียงราย นิยมพานิช",
  branch: "สาขาประตูสลี",
  dateISO: "2026-11-28",
  startTime: "17:30",
  timeText: "17:30 – 22:00 น.",
  invite: "ขอเรียนเชิญท่านร่วมเป็นเกียรติในงาน\nเปิดโชว์รูมแห่งใหม่ของเวสป้าเชียงราย\nนิยมพานิช สาขาประตูสลี\nพร้อมสัมผัส Vespa รุ่นใหม่ล่าสุด",
  inviteSig: "Vespa Chiang Rai · Niyompanich",

  /* ===== รถรุ่นใหม่ ===== */
  model: {
    name: "LX 125 i-Get ABS",
    tagline: "The return of the smallest icon.",
    desc: "กลับมาอีกครั้งกับ Vespa รุ่นเล็กที่สุดสุดไอคอนิก ดีไซน์อิตาเลียนแท้สไตล์เรโทรที่สืบทอดมาตั้งแต่ปี 1946 รอบนี้เพิ่มระบบเบรก ABS และปรับเบาะให้ต่ำลง ขับขี่มั่นใจกว่าที่เคย ในขนาดกะทัดรัด คล่องตัว",
    features: [
      "ระบบเบรก ABS เพิ่มความมั่นใจทุกการขับขี่",
      "เบาะดีไซน์ใหม่ ต่ำลง วางเท้าได้มั่นคงขึ้น",
      "ขนาดกะทัดรัด คล่องตัว เหมาะกับการขับขี่ในเมือง",
      "ดีไซน์อิตาเลียนแท้ สไตล์เรโทรตั้งแต่ปี 1946",
    ],
    /* กล่องราคา (เว้น priceNet ว่าง = ไม่แสดง) */
    priceLabel: "ราคาสุทธิ",
    priceBadge: "ราคาพิเศษช่วงเปิดตัว",
    priceNet: "79,900",
    priceRegular: "84,900",
    priceNote: "ราคาพิเศษช่วงเปิดตัว จากราคาปกติ 84,900 บาท (ราคานี้รวมภาษีมูลค่าเพิ่ม พร้อมรับชุด Welcome Kit)",
    /* ชื่อสี (English · ไทย) ลำดับตรงกับรูป model, gallery1, gallery2, gallery3 */
    viewNames: ["Lilac Euforico · ม่วงไลแลค", "Green Amabile · เขียวมินต์", "White Innocenza · ขาว", "Grey Materia · เทา"],
    link: "https://www.vespa.co.th/lx/lx-125-i-get-abs",
  },


  /* ===== กำหนดการ (เพิ่ม/ลบ/สลับบรรทัดได้) ===== */
  schedule: [
    {time:"17:30", title:"Welcome Amenities", desc:"ลงทะเบียนรับของที่ระลึก เครื่องดื่ม อาหารว่าง มุมถ่ายรูป"},
    {time:"18:30", title:"Grand Opening & New Model Reveal", desc:"พิธีเปิดสาขา เปิดตัว Vespa รุ่นไฮไลต์ พร้อมแสง สี เสียง"},
    {time:"19:00", title:"Italian Gala Dinner", desc:"ฟู้ดทรัค ซุ้มอาหาร ดนตรีสด"},
    {time:"20:00", title:"Entertainment & Lucky Draw", desc:"ดนตรีสด และลุ้นรางวัลรวมกว่า 30,000 บาท"},
    {time:"21:00", title:"Networking & Photo Session", desc:"คุยกับทีมงาน ถ่ายรูปกับรถ ชมโชว์รูม"},
    {time:"22:00", title:"ปิดงาน", desc:""},
  ],


  /* ===== หน้าโปรโมชั่นในงาน (รูปใส่ที่ images ด้านบน promo1–promo4) ===== */
  promo: {
    headline: "โปรโมชั่นพิเศษภายในงาน",
    intro: "สิทธิพิเศษเฉพาะผู้ร่วมงาน Grand Opening เท่านั้น",
  },

  /* ===== Friend Get Friend ===== */
  fgf: {
    headline: "ชวนเพื่อนมาเป็นครอบครัว Vespa",
    intro: "แนะนำเพื่อนที่สนใจ Vespa มาร่วมงาน เมื่อเพื่อนออกรถภายในระยะเวลาโปรโมชั่น ผู้แนะนำรับของสมนาคุณพิเศษจากโชว์รูม",
    perks: ["ผู้แนะนำรับของสมนาคุณพิเศษจากโชว์รูม"],
    terms: ["เพื่อนที่ได้รับการแนะนำต้องเป็นลูกค้าใหม่ของสาขา","สิทธิ์จะได้รับเมื่อเพื่อนออกรถภายในระยะเวลาที่กำหนด","รายละเอียดของรางวัลเป็นไปตามที่โชว์รูมกำหนด","บริษัทฯ ขอสงวนสิทธิ์ในการเปลี่ยนแปลงเงื่อนไขโดยไม่ต้องแจ้งให้ทราบล่วงหน้า"],
  },

  /* ===== สถานที่และช่องทางติดต่อ ===== */
  location: {
    name: "เวสป้าเชียงราย นิยมพานิช สาขาประตูสลี",
    address: "ย่านประตูสลี อ.เมืองเชียงราย จ.เชียงราย 57000",
    mapsQuery: "Vespa เชียงราย นิยมพานิช ประตูสลี",
    mapUrl: "https://maps.app.goo.gl/nhnwFetwS4annezQ7",   // ลิงก์ Google Maps ของโชว์รูม
    lat: 19.9069532,                                        // พิกัด (ใช้แสดงแผนที่และปุ่มดูเส้นทาง)
    lng: 99.8347677,
    phone: "",
    line: "@vespachiangrai",
    facebook: "เวสป้า เชียงราย นิยมพานิช",
    hours: "",
  },

  /* ===== ลำดับ section (on:false = ซ่อน) ===== */
  sections: [
    {id:"home",on:true},{id:"highlights",on:true},{id:"schedule",on:true},{id:"activities",on:true},{id:"model",on:true},
    {id:"offers",on:true},{id:"fgf",on:true},{id:"rsvp",on:true},{id:"location",on:true}
  ],

  /* ===== ไฮไลต์หน้าแรก (การ์ด 4 ใบ) =====
     tone: navy | gold | cream | ink · go: section ที่จะเลื่อนไป · tab: แท็บในส่วน Offers */
  highlights: [
    {tone:"navy", k:"Lucky Draw", pre:"ลุ้นรับรางวัลมูลค่ากว่า", big:"30,000.-", t:"เครื่องทำน้ำอุ่น · ไมโครเวฟ · เตาปิ้งย่าง", imgs:["images/prize-set2.webp"], go:"activities"},
    {tone:"gold", k:"New Model", pre:"LX 125 i-Get ABS ราคาพิเศษ", big:"79,900.-", t:"ออกรถในงาน รับของแถมเพียบ", imgs:["images/lx-lilac-cut.webp"], go:"model"},
    {tone:"cream", k:"Vespa Clinic Day", pre:"ตรวจเช็คสภาพรถ", big:"ฟรี 10 รายการ", t:"เปลี่ยนถ่ายน้ำมันเครื่อง เริ่มต้น 990.-", imgs:["images/clinic-oil-set.webp"], go:"offers", tab:"clinic"},
    {tone:"ink", k:"Free Flow", pre:"อาหารและเครื่องดื่ม", big:"ฟรีตลอดงาน", t:"+ กระเป๋าผ้าเวสป้า 200 ท่านแรก", imgs:["images/freeflow-set.webp"], go:"activities"},
  ],

  /* ===== กิจกรรม (คอลลาจ 4 ช่อง) size: big | wide | "" ===== */
  activities: [
    {size:"big", tone:"t-navy", en:"Lucky Draw", th:"ลุ้นรับรางวัลภายในงาน", lead:"มูลค่ากว่า 30,000.-", items:["เครื่องทำน้ำอุ่น","ไมโครเวฟ","เตาปิ้งย่าง"], note:"*สงวนสิทธิ์เฉพาะผู้ที่มาร่วมงานเท่านั้น", badge:"Win big", art:["images/prize-set2.webp"]},
    {size:"wide", tone:"t-gold", en:"Special Souvenir", th:"ของชำร่วย กระเป๋าผ้าเวสป้า", lead:"มูลค่า 299.-", items:["จำกัด 200 ท่านแรก"], badge:"First 200", art:["images/gift-bag.webp"]},
    {size:"", tone:"t-cream", en:"Free Food", th:"อาหาร ฟรีตลอดงาน", items:["ไส้ย่าง","บาร์บีคิว","ยำ","เฟรนช์ฟรายส์","นักเก็ต","ปลาหมึกทอด"], badge:"All night", art:["images/food-set.webp"]},
    {size:"", tone:"t-ink", en:"Sweets & Drinks", th:"ของหวาน & เครื่องดื่ม ฟรีตลอดงาน", items:["ไอศกรีมซอฟต์เสิร์ฟ","ป๊อปคอร์น","สเลอปี้","เครื่องดื่มมีฟอง","น้ำอัดลม","น้ำเปล่า"], badge:"Free flow", art:["images/drinks-set.webp"]},
  ],

  /* ===== ของแถมเมื่อออกรถรุ่นใหม่ในงาน (แสดงใต้ส่วนรถรุ่นใหม่) ===== */
  newModelGifts: {
    title: "ออกรถ LX 125 i-Get ABS ภายในงาน รับฟรี",
    period: "โปรโมชั่นรุ่นที่เปิดตัว 28 พ.ย. – 30 ธ.ค. 2569 เท่านั้น",
    items: [
      {name:"พัดลม JISULIFE 5", value:"มูลค่า 490.-", imgs:["images/gift-fan.webp"]},
      {name:"เลือกรับ หมวกกันน็อค หรือ ผ้านวมคิงไซส์ 6 ฟุต", imgs:["images/gift-helmet.webp","images/gift-blanket.webp"]},
      {name:"ฟรีทะเบียน + พ.ร.บ. + ประกันรถหาย", note:"*ประกันรถหาย เฉพาะซื้อแบบผ่อนชำระ", imgs:["images/gift-registration.webp"]},
    ],
  },

  /* ===== สิทธิพิเศษ (แท็บ: Clinic Day / ออกรถรุ่นอื่น / อุปกรณ์ตกแต่ง) ===== */
  offers: {
    clinic: {
      title: "Vespa Clinic Day 2026",
      logo: "images/clinic-logo.webp",
      period: "28 พ.ย. – 10 ธ.ค. 2569 เท่านั้น",
      closed: "ปิดให้บริการวันที่ 5 ธ.ค. (1 วัน)",
      items: [
        {icon:true, title:"ตรวจเช็คฟรี 10 รายการ", desc:"ด้วยเครื่องวิเคราะห์ข้อมูลจากอิตาลี PADS (Piaggio Advanced Diagnostic System)", special:"ฟรี"},
        {img:"images/clinic-oil-set.webp", white:true, title:"เปลี่ยนถ่ายน้ำมันเครื่องสังเคราะห์แท้ (5W40)", desc:"+ น้ำมันเฟืองท้าย (80W-90) + ไส้กรอง + โอริง", regular:"1,290", special:"990", prefix:"พิเศษเริ่มต้น"},
        {img:"images/clinic-cleaning-photo.webp", cover:true, title:"ทำความสะอาดชุดข้าง Full System", desc:"ใช้สเปรย์ทำความสะอาด พร้อมอัดจารบีทนความร้อนสูง", regular:"899", special:"599", prefix:"พิเศษ"},
      ],
    },
    otherModels: {
      title: "ออกรถรุ่นอื่นภายในงาน",
      pre: "รับของแถมเพิ่มพิเศษจากปกติ มูลค่ากว่า",
      value: "1,590",
      note: "*เฉพาะรุ่นแบบที่กำหนด",
      img: "images/other-models.webp",
    },
    accessories: {
      title: "ซื้ออุปกรณ์ตกแต่ง Vespa",
      img: "images/accessories.webp",
      tiers: [{qty:"1 ชิ้น", off:"10%"}, {qty:"2 ชิ้น", off:"20%"}, {qty:"3 ชิ้น", off:"30%"}],
      note: "",
    },
  },


  /* สีธีม */
  theme: {style:"retro", navy:"#14234B", gold:"#B8975A"},   // style: "retro" หรือ "minimal"
};
