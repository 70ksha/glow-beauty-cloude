/* =========================================================
   Your Korean Glow — المنتجات
   لإضافة منتج: أضيفي سطرًا جديدًا في القائمة PRODUCTS بالأسفل.
   لإضافة براند جديد: اكتبي اسمه في brand فقط، وسيظهر له قسم مستقل تلقائيًا.
   ترتيب الأقسام = ترتيب ظهور اسم البراند لأول مرة في القائمة.
   ========================================================= */

// قيمة price في كل منتج = سعر ملف الـPDF. السعر الظاهر في الموقع = السعر + PRICE_MARKUP ثم يُقرَّب (الدالة sellingPrice).
// مثال: 1109 + 100 = 1209 → 1200، و 825 + 100 = 925 → 930
const PRICE_MARKUP = 100;

function sellingPrice(pdfPrice) {
  const total = pdfPrice + PRICE_MARKUP;
  const rest = total % 100;
  if (rest < 10) return total - rest;       // كسر أقل من 10: يُحذف
  return Math.round(total / 10) * 10;       // غير ذلك: أقرب 10
}

// رقم واتساب (بصيغة دولية بدون +، مثال: 201012345678)
const WHATSAPP_NUMBER = "201151602409";

const PRODUCTS = [
  /* ---------- MEDICUBE ---------- */
  { brand: "MEDICUBE", name: "ميدي كيوب هيالرونيك مالتي بيبتيد سيرم 30 مل", description: "سيروم بهيالورونات الصوديوم 0.5% و13 نوعًا من الببتيد.", price: 880, image: "images/medicube/hyaluronic-multi-peptide-serum.jpg" },
  { brand: "MEDICUBE", name: "ميدكيوب بينك بيبتيد سيرم 50 مل", description: "سيروم بالـPDRN الوردي ومركّب من 5 أنواع ببتيد.", price: 825, image: "images/medicube/pdrn-pink-peptide-serum.jpg" },
  { brand: "MEDICUBE", name: "ميدي كيوب + txa نياسيناميد 30 جم", description: "سيروم بتركيز 15% من TXA والنياسيناميد.", price: 869, image: "images/medicube/txa-niacinamide-15-serum.jpg" },
  { brand: "MEDICUBE", name: "ميدي كيوب كوجيك اسيد + نياسيناميد سيرم 30 مل", description: "سيروم بحمض الكوجيك والكركم 1% والنياسيناميد 5%.", price: 880, image: "images/medicube/kojic-turmeric-niacinamide-serum.jpg" },
  { brand: "MEDICUBE", name: "ميدي كيوب غسول بالكوجيك أسيد والكركم 120 جرام", description: "غسول منظّف بحمض الكوجيك والكركم.", price: 935, image: "images/medicube/kojic-cleanser.jpg" },
  { brand: "MEDICUBE", name: "ميدي كيوب ريد اكني مقشر الجسم 110 جم", description: "مقشر للجسم بأحماض AHA وBHA وPHA وLHA مع النياسيناميد 2%.", price: 979, image: "images/medicube/red-acne-body-peeling-shot.jpg" },
  { brand: "MEDICUBE", name: "ميدي كيوب اخفاء الحبوب باتش 6 ق", description: "لصقات هيدروكولويد شفافة للحبوب والبقع.", price: 385, image: "images/medicube/sos-invisible-patch.jpg" },
  { brand: "MEDICUBE", name: "ميدي كيوب فيتامين سي باتش", description: "أقراص بماء الفيتامين المركّز لكل أنواع البشرة.", price: 462, image: "images/medicube/deep-vita-c-pad.jpg" },
  { brand: "MEDICUBE", name: "ميدي كيوب تونر بادز الازرق 155 جم", description: "أقراص تونر بأحماض AHA وBHA والبانثينول والآلانتوين.", price: 1210, image: "images/medicube/zero-pore-pad.jpg" },
  { brand: "MEDICUBE", name: "ميدي كيوب كولاجين بوستر سيرم 15 مل", description: "سيروم بالكولاجين المتحلل واستخلاص بروتين الحليب، بعبوة قلم.", price: 748, image: "images/medicube/collagen-glow-booster-serum.jpg" },
  { brand: "MEDICUBE", name: "ميدي كيوب كولاجين وحليب ماسك تغليف 75 مل", description: "ماسك تغليف ليلي بخلاصة الكولاجين والنياسيناميد والسيراميد.", price: 847, image: "images/medicube/collagen-night-wrapping-mask.jpg" },
  { brand: "MEDICUBE", name: "ميديكيوب كريم واقي الشمس بالكولاجين 50 مل", description: "واقي شمس بالكولاجين الذائب وحمض الهيالورونيك، SPF 50+ PA++++.", price: 704, image: "images/medicube/collagen-firming-sun-cream.jpg" },
  { brand: "MEDICUBE", name: "ميدي كيوب جيلي كريم بالكولاجين والنياسيناميد 50 مل", description: "كريم جيلي بالكولاجين والكولاجين الذائب المتحلل.", price: 770, image: "images/medicube/collagen-jelly-cream.jpg" },
  { brand: "MEDICUBE", name: "ميدي كيوب قناع الكافيين الوردي الليلي 75جم", description: "ماسك تغليف ليلي بالـPDRN والكافيين والنياسيناميد.", price: 935, image: "images/medicube/pdrn-pink-caffeine-night-mask.jpg" },
  { brand: "MEDICUBE", name: "ميدي كيوب كريم كبسولات فيتامين سي 55 جم", description: "كريم بكبسولات فيتامين سي والنياسيناميد 5%.", price: 935, image: "images/medicube/deep-vita-c-capsule-cream.jpg" },
  { brand: "MEDICUBE", name: "ميد كيوب كريم كابسولات الترطيب بحمض الهيالورونيك 55 جم", description: "كريم مرطب بكبسولات هيالورونات الصوديوم والبانثينول.", price: 990, image: "images/medicube/hyaluronic-capsule-cream.jpg" },
  { brand: "MEDICUBE", name: "ميدي كيوب سيروم واقي شمس زيرو بور 50 مل", description: "سيروم واقي شمس مرطب بملمس مائي، SPF 50+ PA++++.", price: 770, image: "images/medicube/zero-pore-moisture-sun-serum.jpg" },
  /* ---------- SKIN1004 ---------- */
  { brand: "SKIN1004", name: "سنتيلا ترافيل كيت 5 قطع", description: "مجموعة سفر من 5 قطع: فوم أمبول، تونر، أمبول، كريم مهدئ وزيت تنظيف خفيف.", price: 1210, image: "images/skin1004/centella-travel-kit.jpg" },
  { brand: "SKIN1004", name: "سنتيلا واقي شمس اير فيت بلس 50 مل", description: "واقي شمس بخلاصة السنتيلا المدغشقرية، SPF 50+ PA++++.", price: 770, image: "images/skin1004/centella-air-fit-suncream.jpg" },
  { brand: "SKIN1004", name: "سنتيلا سيروم واقي شمس بعشبه هيالروسيكا 50 مل", description: "سيروم واقي شمس بملمس مائي بالسنتيلا والهيالورونيك، SPF 50.", price: 770, image: "images/skin1004/centella-hyalu-cica-sun-serum.jpg" },

  /* ---------- ANUA ---------- */
  { brand: "ANUA", name: "انوا واقي شمس ومرطب بخلاصه الهارتليف 50 مل", description: "واقي شمس بخلاصة الهارتليف بملمس حريري مرطب، SPF 50+ PA++++.", price: 770, image: "images/anua/heartleaf-sun-cream.jpg" },
  { brand: "ANUA", name: "انوا سيروم نياسيناميد 10 + تي اكس ايه 4 - 30 مل", description: "سيروم بنياسيناميد 10 مع TXA 4.", price: 935, image: "images/anua/niacinamide-10-txa-4-serum.jpg" },
  { brand: "ANUA", name: "انوا سيروم مهدئ بحمض الأزيليك + 10 هيالورون - 30 مل", description: "سيروم مهدئ للاحمرار بحمض الأزيليك 10 والهيالورون.", price: 935, image: "images/anua/azelaic-acid-10-serum.jpg" },
  { brand: "ANUA", name: "انوا سيروم نانو ريتينول 0.3% + نياسين 30 مل", description: "سيروم مجدد بالريتينول 0.3 والنياسين.", price: 990, image: "images/anua/retinol-0-3-niacin-serum.jpg" },

  /* ---------- EQQUAL BERRY ---------- */
  { brand: "EQQUAL BERRY", name: "ايكوال بيري سيروم بالهيالوتين للترطيب المكثف 30 مل", description: "سيروم بالهيالتوين لترطيب مكثف.", price: 935, image: "images/eqqual-berry/hyaltoin-flooding-serum.jpg" },
  { brand: "EQQUAL BERRY", name: "ايكوال بيري سيروم بالالوفيرا المهدئه 30 مل", description: "سيروم مهدئ بالألوفيرا وPDRN.", price: 935, image: "images/eqqual-berry/aloe-pdrn-calming-serum.jpg" },
  { brand: "EQQUAL BERRY", name: "ايكوال بيري سيروم تعزيز البيبتيد + ناد 30 مل", description: "سيروم معزز بالببتيد وNAD+.", price: 990, image: "images/eqqual-berry/nad-peptide-boosting-serum.jpg" },
  /* ---------- BEAUTY OF JOSEON ---------- */
  { brand: "BEAUTY OF JOSEON", name: "بيوتي أوف جوسون كريم واقي الشمس المائي - 50 مل", description: "واقي شمس مائي بالأرز وفيتامين B5، SPF 50+ PA++++.", price: 693, image: "images/beauty-of-joseon/relief-sun-aqua-fresh.jpg" },
  { brand: "BEAUTY OF JOSEON", name: "بيوتي اوف جوسون واقي شمس بالأرز + البروبيوتيك 50 مل", description: "واقي شمس بالأرز والبروبيوتيك، SPF 50+ PA++++.", price: 715, image: "images/beauty-of-joseon/relief-sun-rice-probiotics.jpg" },
  { brand: "BEAUTY OF JOSEON", name: "بيوتي اوف جيسون سيروم العين بالجينسنغ والريتينال - 30 مل", description: "سيروم للعين بالجينسنغ والريتينال.", price: 627, image: "images/beauty-of-joseon/revive-eye-serum.jpg" },
  { brand: "BEAUTY OF JOSEON", name: "بيوتي اوف جيسون سيروم بروبوليس + نياسيناميد - 30 مل", description: "سيروم بالبروبوليس لإشراقة البشرة.", price: 638, image: "images/beauty-of-joseon/glow-propolis-serum.jpg" },
  { brand: "BEAUTY OF JOSEON", name: "بيوتي اوف جوسون واقي شمس ستيك غير لامع - 18 جرام", description: "واقي شمس ستيك غير لامع بالشيح والكاميليا، SPF 50+ PA++++.", price: 660, image: "images/beauty-of-joseon/matte-sun-stick.jpg" },

  /* ---------- COSRX ---------- */
  { brand: "COSRX", name: "كوسوركس كريم حمض الهيالورونيك المكثف 100 جرام", description: "كريم مكثف بحمض الهيالورونيك لترطيب عميق وتغذية البشرة.", price: 935, image: "images/cosrx/hyaluronic-acid-intensive-cream.jpg" },
  { brand: "COSRX", name: "كوسوركس غسول يومي بحمض الساليسيليك - 150 مل", description: "غسول يومي لطيف بحمض الساليسيليك 0.5% ومستخلصات نباتية.", price: 693, image: "images/cosrx/salicylic-acid-daily-cleanser.jpg" },
  { brand: "COSRX", name: "كوسوركس لاصقه حب شباب 24 ق", description: "لصقات هيدروكولويد للحبوب، 24 لصقة بثلاثة أحجام.", price: 132, image: "images/cosrx/acne-pimple-master-patch.jpg" },

  /* ---------- K-SECRET ---------- */
  { brand: "K-SECRET", name: "كي سيكرت واقي شمس سيول 1988 - 50 مل", description: "واقي شمس بخلاصة شجر الصنوبر والسيراميد، SPF 50+ PA++++.", price: 770, image: "images/k-secret/seoul-1988-sun.jpg" },
  { brand: "K-SECRET", name: "كي سيكريت سيول 1988 كريم مضاد لتجاعيد العيون 30 مل", description: "كريم للعين بالريتينال ليبوسوم 4% والفول المخمّر.", price: 715, image: "images/k-secret/seoul-1988-eye-cream.jpg" },
];

/* ---------- الكود التلقائي: لا تحتاجين لتعديله ---------- */

function whatsappLink(product) {
  const message = `مرحبا، أريد طلب ${product.name} بسعر ${sellingPrice(product.price)} ج.م`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product";

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;
  img.loading = "lazy";

  const body = document.createElement("div");
  body.className = "product-body";

  const name = document.createElement("h4");
  name.textContent = product.name;

  const desc = document.createElement("p");
  desc.textContent = product.description;

  const price = document.createElement("p");
  price.className = "price";
  price.textContent = `${sellingPrice(product.price)} ج.م`;

  const button = document.createElement("a");
  button.className = "btn-whatsapp";
  button.href = whatsappLink(product);
  button.target = "_blank";
  button.rel = "noopener";
  button.textContent = "اطلبي عبر واتساب";

  body.append(name, desc, price, button);
  card.append(img, body);
  return card;
}

function renderBrands() {
  const container = document.getElementById("brands");
  if (!container) return;

  // تجميع المنتجات حسب البراند مع الحفاظ على الترتيب
  const brands = new Map();
  PRODUCTS.forEach((product) => {
    if (!brands.has(product.brand)) brands.set(product.brand, []);
    brands.get(product.brand).push(product);
  });

  brands.forEach((products, brandName) => {
    const section = document.createElement("section");
    section.className = "brand";

    const title = document.createElement("h3");
    title.className = "brand-title";
    title.textContent = brandName;

    const grid = document.createElement("div");
    grid.className = "product-grid";
    products.forEach((product) => grid.append(createProductCard(product)));

    section.append(title, grid);
    container.append(section);
  });
}

renderBrands();
