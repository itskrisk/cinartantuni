import { useState } from 'react';
import { Phone, MapPin, Clock, MessageCircle, X } from 'lucide-react';

interface MenuItemRow {
  name: string;
  desc: string;
  price: string;
}

export default function App() {
  const [lang, setLang] = useState<'tr' | 'en'>('tr');
  const [isMobileContactOpen, setIsMobileContactOpen] = useState(false);

  const content: Record<'tr' | 'en', any> = {
    tr: {
      brandTag: 'Lefke & Güzelyurt',
      navMenu: 'Menü',
      navLocations: 'Şubeler',
      navContact: 'İletişim',
      navOrder: 'Sipariş Ver',
      heroEyebrow: 'Geleneksel Mersin Usulü',
      heroTitle1: 'Taze tantuni.',
      heroTitle2: 'Fazlası yok.',
      heroDesc: 'Özenle doğranmış pamuk gibi dana eti ve tavuk, pamuk yağında bakır tepside sumaklı soğan, domates ve maydanozla sacda pişirilir. Lefke ve Güzelyurt şubelerimizle her gün gece geç saatlere kadar hizmetinizdeyiz.',
      signatureTag: 'İmza Lezzet',
      houseSpecialTag: 'Özel Sunum',
      crispTag: 'Çıtır & Hafif',
      beefTitle: 'Biftek Et Tantuni',
      beefDesc: 'İnce lavaş dürüm veya çıtır somun ekmek arasında sumaklı soğan ve taze yeşilliklerle.',
      beefDetails: 'Geleneksel bakır sacda yüksek ateşte sotelenir. Yanında taze Kıbrıs limonu ve acı biber turşusu ile.',
      yogurtluTitle: 'Yoğurtlu Tantuni',
      yogurtluDesc: 'Dilimlenmiş tantuni dürümleri üzerinde soğuk sarımsaklı yoğurt ve köpüklü kızgın tereyağı.',
      tavukTitle: 'Tavuk Tantuni',
      tavukDesc: 'Baharatlı tavuk göğsü taze limon, sumak ve çıtır yeşilliklerle sacda pişirilir.',
      orderNow: 'Sipariş Ver',
      menuEyebrow: 'Menü ve Fiyatlar',
      menuTitle: 'Her sipariş taze hazırlanır.',
      colTantuni: 'Tantuni Çeşitleri',
      colDrinks: 'Soğuk İçecekler ve Tatlılar',
      complimentaryTitle: 'İkramlarımız',
      complimentaryDesc: 'Tüm tantuni siparişlerinizin yanında taze Kıbrıs limonu ve acı biber turşusu ikramımızdır.',
      locationsEyebrow: 'Şubeler ve Paket Servis',
      locationsTitle: 'Kuzey Kıbrıs genelinde iki şube.',
      lefkeName: 'Lefke Şubesi',
      lefkeLandmark: 'LAÜ Kampüsü Yakını',
      lefkeAddress: 'Ecevit Caddesi, Deniz Boyu Yolu, Gemikonağı, Lefke',
      lefkeHours: 'Her gün 11:00 ile 02:00 arası',
      guzelyurtName: 'Güzelyurt Şubesi',
      guzelyurtLandmark: 'Şehir Merkezi',
      guzelyurtAddress: 'Kutlu Adalı Bulvarı No: 18, Güzelyurt Merkez',
      guzelyurtHours: 'Her gün 11:00 ile 01:30 arası',
      whatsappLefke: 'WhatsApp Lefke',
      whatsappGuzelyurt: 'WhatsApp Güzelyurt',
      callLefke: 'Lefke Ara',
      callGuzelyurt: 'Güzelyurt Ara',
      mobileOrderBar: 'Hızlı Sipariş',
      mobileCallBar: 'Şubeyi Ara',
      chooseBranch: 'Şube Seçiniz',
      footerAboutTitle: 'Çınar Tantuni',
      footerAboutDesc: 'Bakır sacda pişen geleneksel Mersin tantunisi. Günlük taze et ve tavuk ile hazırlanır.',
      footerLocationsTitle: 'Şubeler',
      footerHours: '11:00 ile gece geç saatlere kadar açık',
      footerContactTitle: 'Doğrudan İletişim',
      footerTakeaway: 'Paket servis ve gel al mevcuttur',
      footerRights: 'Tüm hakları saklıdır. Kuzey Kıbrıs (KKTC).',
      footerDesign: 'Incorta tipografisi. Minimalist tasarım.',
      tantuniList: [
        {
          name: 'Biftek Et Tantuni Dürüm',
          desc: 'Bakır sacda pamuk yağıyla sotelenmiş dana biftek, sumaklı soğan, domates, maydanoz, ince lavaş.',
          price: '240 TL',
        },
        {
          name: 'Somun Ekmek Arası Et Tantuni',
          desc: 'Özel taze çıtır somun ekmek içine bol et tantuni, taze yeşillik ve limon.',
          price: '240 TL',
        },
        {
          name: 'Yoğurtlu Biftek Tantuni',
          desc: 'Dilimlenmiş et dürüm üzerine sarımsaklı süzme yoğurt ve köpürtülmüş kızgın tereyağı.',
          price: '290 TL',
        },
        {
          name: 'Tavuk Tantuni Dürüm',
          desc: 'Hafif baharatlı marine tavuk göğsü, sumaklı soğan, domates ve maydanoz ile ince lavaşta.',
          price: '180 TL',
        },
        {
          name: 'Somun Ekmek Tavuk Tantuni',
          desc: 'Çıtır somun ekmek arasında leziz tavuk tantuni ve taze garnitürler.',
          price: '180 TL',
        },
        {
          name: 'Yoğurtlu Tavuk Tantuni',
          desc: 'Dilimlenmiş tavuk dürüm üzerine sarımsaklı yoğurt ve kızdırılmış tereyağı.',
          price: '230 TL',
        },
      ],
      drinkDessertList: [
        {
          name: 'Yayık Açık Ayran',
          desc: 'Bol köpüklü, buz gibi geleneksel yayık ayranı.',
          price: '45 TL',
        },
        {
          name: 'Adana Şalgam Suyu',
          desc: 'Soğuk servis edilen acılı veya acısız geleneksel şalgam.',
          price: '45 TL',
        },
        {
          name: 'Hatay Usulü Künefe',
          desc: 'Sıcak eriyen tuzsuz künefe peyniri, hafif şerbet ve Antep fıstığı.',
          price: '160 TL',
        },
        {
          name: 'Fırın Sütlaç',
          desc: 'Geleneksel fırınlanmış kıvamında sütlaç ve fındık parçaları.',
          price: '110 TL',
        },
      ],
    },
    en: {
      brandTag: 'Lefke & Güzelyurt',
      navMenu: 'Menu',
      navLocations: 'Locations',
      navContact: 'Contact',
      navOrder: 'Order Online',
      heroEyebrow: 'Authentic Mersin Recipe',
      heroTitle1: 'Fresh tantuni.',
      heroTitle2: 'Nothing else.',
      heroDesc: 'Finely chopped prime beef and tender chicken, flashed in a copper sac with cotton oil, sumac onions, tomatoes, and flat-leaf parsley. Serving Lefke and Güzelyurt daily until late night.',
      signatureTag: 'Signature Cut',
      houseSpecialTag: 'House Plate',
      crispTag: 'Light & Crisp',
      beefTitle: 'Biftek Et Tantuni',
      beefDesc: 'Thin lavash wrap or crusty somun bread with diced beef and sumac herbs.',
      beefDetails: 'Flash seared in traditional copper sac over high heat. Served with fresh lemon and pickled peppers.',
      yogurtluTitle: 'Yoğurtlu Tantuni',
      yogurtluDesc: 'Sliced tantuni rolls topped with chilled garlic yogurt and foaming browned butter.',
      tavukTitle: 'Tavuk Tantuni',
      tavukDesc: 'Seasoned chicken breast seared fresh with lemon, sumac, and crisp greens.',
      orderNow: 'Order Now',
      menuEyebrow: 'Menu & Prices',
      menuTitle: 'Everything made to order.',
      colTantuni: 'Tantuni Specials',
      colDrinks: 'Cold Drinks & Desserts',
      complimentaryTitle: 'Complimentary Sides',
      complimentaryDesc: 'All tantuni orders come with fresh Cyprus lemon wedges and hot pickled chili peppers at no extra charge.',
      locationsEyebrow: 'Branches & Delivery',
      locationsTitle: 'Two locations in Northern Cyprus.',
      lefkeName: 'Lefke Branch',
      lefkeLandmark: 'Near LAÜ Campus',
      lefkeAddress: 'Ecevit Caddesi, Deniz Boyu Yolu, Gemikonağı, Lefke',
      lefkeHours: '11:00 AM to 02:00 AM Daily',
      guzelyurtName: 'Güzelyurt Branch',
      guzelyurtLandmark: 'City Center',
      guzelyurtAddress: 'Kutlu Adalı Bulvarı No: 18, Güzelyurt Merkez',
      guzelyurtHours: '11:00 AM to 01:30 AM Daily',
      whatsappLefke: 'WhatsApp Lefke',
      whatsappGuzelyurt: 'WhatsApp Güzelyurt',
      callLefke: 'Call Lefke',
      callGuzelyurt: 'Call Güzelyurt',
      mobileOrderBar: 'Quick Order',
      mobileCallBar: 'Call Branch',
      chooseBranch: 'Choose Branch',
      footerAboutTitle: 'Çınar Tantuni',
      footerAboutDesc: 'Authentic Mersin tantuni cooked in copper sac. Fresh beef and chicken prepared daily.',
      footerLocationsTitle: 'Locations',
      footerHours: 'Open 11:00 AM to late night',
      footerContactTitle: 'Direct Contact',
      footerTakeaway: 'Takeaway and delivery available',
      footerRights: 'All rights reserved. Northern Cyprus (TRNC).',
      footerDesign: 'Incorta typography. Minimalist design.',
      tantuniList: [
        {
          name: 'Biftek Et Tantuni Dürüm',
          desc: 'Finely chopped tender beef flash seared in copper sac, sumac onions, tomatoes, flat parsley, thin lavash.',
          price: '240 TL',
        },
        {
          name: 'Somun Ekmek Arası Et Tantuni',
          desc: 'Fresh crusty somun bread filled with spiced diced beef, herbs, and fresh lemon.',
          price: '240 TL',
        },
        {
          name: 'Yoğurtlu Biftek Tantuni',
          desc: 'Sliced dürüm topped with cold garlic yogurt and foaming browned butter.',
          price: '290 TL',
        },
        {
          name: 'Tavuk Tantuni Dürüm',
          desc: 'Spiced chicken breast seared with tomatoes, sumac onions, and parsley in lavash.',
          price: '180 TL',
        },
        {
          name: 'Somun Ekmek Tavuk Tantuni',
          desc: 'Crispy somun bread packed with seasoned chicken and fresh greens.',
          price: '180 TL',
        },
        {
          name: 'Yoğurtlu Tavuk Tantuni',
          desc: 'Sliced chicken dürüm covered in garlic yogurt and melted spiced butter.',
          price: '230 TL',
        },
      ],
      drinkDessertList: [
        {
          name: 'Açık Köpüklü Ayran',
          desc: 'Traditional chilled salted yogurt drink with thick foam.',
          price: '45 TL',
        },
        {
          name: 'Adana Şalgam Suyu',
          desc: 'Fermented turnip juice, spicy or mild.',
          price: '45 TL',
        },
        {
          name: 'Sıcak Künefe',
          desc: 'Crispy kadayif with melting unsalted cheese, hot syrup, and pistachios.',
          price: '160 TL',
        },
        {
          name: 'Fırın Sütlaç',
          desc: 'Slow baked caramelized rice pudding with hazelnuts.',
          price: '110 TL',
        },
      ],
    },
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900 pb-20 md:pb-0">
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-black/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold text-base tracking-tight text-black hover:opacity-80 transition shrink-0">
            Çınar Tantuni
          </a>

          <div className="flex items-center gap-3 sm:gap-6 text-xs">
            <nav className="hidden md:flex items-center gap-5 text-[#6e6e73]">
              <a href="#menu" className="hover:text-black transition">
                {t.navMenu}
              </a>
              <a href="#locations" className="hover:text-black transition">
                {t.navLocations}
              </a>
              <a href="tel:+905338881234" className="hover:text-black transition">
                {t.navContact}
              </a>
            </nav>

            {/* Apple Minimalist Language Switcher */}
            <div className="inline-flex items-center bg-[#f5f5f7] p-0.5 rounded-full text-[11px] font-semibold border border-black/[0.04]">
              <button
                onClick={() => setLang('tr')}
                aria-label="Türkçe"
                className={`px-2.5 py-1 rounded-full transition ${
                  lang === 'tr'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-[#86868b] hover:text-black'
                }`}
              >
                TR
              </button>
              <button
                onClick={() => setLang('en')}
                aria-label="English"
                className={`px-2.5 py-1 rounded-full transition ${
                  lang === 'en'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-[#86868b] hover:text-black'
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="https://wa.me/905338881234?text=Merhaba%20Çınar%20Tantuni,%20sipariş%20vermek%20istiyorum"
              target="_blank"
              rel="noreferrer"
              className="bg-black text-white hover:bg-neutral-800 px-3.5 py-1.5 rounded-full font-medium transition text-xs shrink-0"
            >
              {t.navOrder}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <section className="pt-12 sm:pt-16 pb-8 sm:pb-12 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-emerald-700 font-bold mb-2">
            {t.heroEyebrow}
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-black mb-4">
            {t.heroTitle1} <span className="text-emerald-700 font-bold">{t.heroTitle2}</span>
          </h1>
          <p className="text-sm sm:text-base text-[#6e6e73] leading-relaxed">
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* FOOD BENTO GRID: Adaptive Architecture */}
      <section className="px-4 sm:px-6 max-w-5xl mx-auto mb-16 sm:mb-20">

        {/* 1. MOBILE ONLY: Native Horizontal Peek Carousel (Zero card fatigue) */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none -mx-4 px-4">
            {/* Card 1: Beef */}
            <div className="snap-center shrink-0 w-[84%] rounded-3xl bg-[#fbfbfd] border border-black/[0.06] p-4 flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#f5f5f7] mb-3">
                  <img
                    src="/images/tantuni-beef.jpg"
                    alt={t.beefTitle}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    {t.signatureTag}
                  </span>
                  <span className="text-xs font-bold text-black">240 TL</span>
                </div>
                <h2 className="text-base font-bold text-black">{t.beefTitle}</h2>
                <p className="text-xs text-[#6e6e73] mt-1 leading-relaxed">
                  {t.beefDesc}
                </p>
              </div>
              <a
                href="https://wa.me/905338881234?text=Merhaba%20Çınar%20Tantuni,%20Biftek%20Et%20Tantuni%20siparişi%20vermek%20istiyorum"
                target="_blank"
                rel="noreferrer"
                className="mt-4 w-full text-center py-2 rounded-full bg-black text-white text-xs font-medium"
              >
                {t.orderNow}
              </a>
            </div>

            {/* Card 2: Yogurtlu */}
            <div className="snap-center shrink-0 w-[84%] rounded-3xl bg-[#fbfbfd] border border-black/[0.06] p-4 flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#f5f5f7] mb-3">
                  <img
                    src="/images/tantuni-yogurtlu.jpg"
                    alt={t.yogurtluTitle}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    {t.houseSpecialTag}
                  </span>
                  <span className="text-xs font-bold text-black">290 TL</span>
                </div>
                <h2 className="text-base font-bold text-black">{t.yogurtluTitle}</h2>
                <p className="text-xs text-[#6e6e73] mt-1 leading-relaxed">
                  {t.yogurtluDesc}
                </p>
              </div>
              <a
                href="https://wa.me/905338881234?text=Merhaba%20Çınar%20Tantuni,%20Yoğurtlu%20Tantuni%20siparişi%20vermek%20istiyorum"
                target="_blank"
                rel="noreferrer"
                className="mt-4 w-full text-center py-2 rounded-full bg-black text-white text-xs font-medium"
              >
                {t.orderNow}
              </a>
            </div>

            {/* Card 3: Chicken */}
            <div className="snap-center shrink-0 w-[84%] rounded-3xl bg-[#fbfbfd] border border-black/[0.06] p-4 flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#f5f5f7] mb-3">
                  <img
                    src="/images/tantuni-chicken.jpg"
                    alt={t.tavukTitle}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    {t.crispTag}
                  </span>
                  <span className="text-xs font-bold text-black">180 TL</span>
                </div>
                <h2 className="text-base font-bold text-black">{t.tavukTitle}</h2>
                <p className="text-xs text-[#6e6e73] mt-1 leading-relaxed">
                  {t.tavukDesc}
                </p>
              </div>
              <a
                href="https://wa.me/905338881234?text=Merhaba%20Çınar%20Tantuni,%20Tavuk%20Tantuni%20siparişi%20vermek%20istiyorum"
                target="_blank"
                rel="noreferrer"
                className="mt-4 w-full text-center py-2 rounded-full bg-black text-white text-xs font-medium"
              >
                {t.orderNow}
              </a>
            </div>
          </div>
          <div className="text-center text-[11px] text-[#86868b] mt-1">
            ← {lang === 'tr' ? 'Kaydırarak inceleyin' : 'Swipe to explore'} →
          </div>
        </div>

        {/* 2. DESKTOP & TABLETS: Asymmetric 8 + 4 Apple Bento Hierarchy */}
        <div className="hidden md:grid md:grid-cols-12 gap-5">

          {/* Desktop Hero Bento Card (Spans 8 cols) */}
          <div className="md:col-span-8 rounded-[32px] bg-[#fbfbfd] border border-black/[0.06] p-7 flex flex-col justify-between group hover:border-black/15 transition">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                  {t.signatureTag}
                </span>
                <span className="text-xs text-[#86868b]">Mersin Sac Usulü</span>
              </div>

              <div className="flex items-baseline justify-between mb-2">
                <h2 className="text-2xl font-bold tracking-tight text-black">{t.beefTitle}</h2>
                <span className="text-xl font-bold text-black">
                  240 <span className="text-xs font-normal text-[#6e6e73]">TL</span>
                </span>
              </div>

              <p className="text-xs text-[#6e6e73] leading-relaxed max-w-xl mb-4">
                {t.beefDesc} {t.beefDetails}
              </p>
            </div>

            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#f5f5f7]">
              <img
                src="/images/tantuni-beef.jpg"
                alt={t.beefTitle}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />
            </div>
          </div>

          {/* Desktop Right Column: Stacked Bento Cards (Spans 4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-5">

            {/* Yoğurtlu Card */}
            <div className="rounded-[32px] bg-[#fbfbfd] border border-black/[0.06] p-5 flex flex-col justify-between group hover:border-black/15 transition flex-1">
              <div>
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    {t.houseSpecialTag}
                  </span>
                  <span className="text-xs font-bold text-black">290 TL</span>
                </div>
                <h3 className="text-base font-bold text-black mb-1">{t.yogurtluTitle}</h3>
                <p className="text-xs text-[#6e6e73] leading-relaxed mb-3">
                  {t.yogurtluDesc}
                </p>
              </div>
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#f5f5f7]">
                <img
                  src="/images/tantuni-yogurtlu.jpg"
                  alt={t.yogurtluTitle}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Tavuk Card */}
            <div className="rounded-[32px] bg-[#fbfbfd] border border-black/[0.06] p-5 flex flex-col justify-between group hover:border-black/15 transition flex-1">
              <div>
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    {t.crispTag}
                  </span>
                  <span className="text-xs font-bold text-black">180 TL</span>
                </div>
                <h3 className="text-base font-bold text-black mb-1">{t.tavukTitle}</h3>
                <p className="text-xs text-[#6e6e73] leading-relaxed mb-3">
                  {t.tavukDesc}
                </p>
              </div>
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#f5f5f7]">
                <img
                  src="/images/tantuni-chicken.jpg"
                  alt={t.tavukTitle}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="px-4 sm:px-6 max-w-5xl mx-auto mb-16 sm:mb-20">
        <div className="border-t border-black/[0.08] pt-10 sm:pt-12">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-widest text-emerald-700 font-bold mb-1">
              {t.menuEyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
              {t.menuTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {/* Tantuni Column */}
            <div>
              <h3 className="text-sm uppercase tracking-wider font-bold text-black pb-3 border-b border-black/[0.08] mb-4">
                {t.colTantuni}
              </h3>
              <div className="divide-y divide-black/[0.06]">
                {t.tantuniList.map((item: MenuItemRow) => (
                  <div key={item.name} className="py-3.5 flex items-baseline justify-between gap-4">
                    <div>
                      <div className="font-semibold text-sm text-black">{item.name}</div>
                      <div className="text-xs text-[#6e6e73] mt-0.5">{item.desc}</div>
                    </div>
                    <div className="font-bold text-sm text-black shrink-0">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Drinks & Desserts Column */}
            <div>
              <h3 className="text-sm uppercase tracking-wider font-bold text-black pb-3 border-b border-black/[0.08] mb-4">
                {t.colDrinks}
              </h3>
              <div className="divide-y divide-black/[0.06]">
                {t.drinkDessertList.map((item: MenuItemRow) => (
                  <div key={item.name} className="py-3.5 flex items-baseline justify-between gap-4">
                    <div>
                      <div className="font-semibold text-sm text-black">{item.name}</div>
                      <div className="text-xs text-[#6e6e73] mt-0.5">{item.desc}</div>
                    </div>
                    <div className="font-bold text-sm text-black shrink-0">{item.price}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-[#f5f5f7] text-xs text-[#6e6e73] leading-relaxed">
                <span className="font-semibold text-black block mb-1">{t.complimentaryTitle}</span>
                {t.complimentaryDesc}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations & Contact */}
      <section id="locations" className="px-4 sm:px-6 max-w-5xl mx-auto mb-16 sm:mb-20">
        <div className="border-t border-black/[0.08] pt-10 sm:pt-12">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-widest text-emerald-700 font-bold mb-1">
              {t.locationsEyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
              {t.locationsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Lefke */}
            <div className="p-5 sm:p-6 rounded-3xl bg-[#fbfbfd] border border-black/[0.06] space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base text-black">{t.lefkeName}</h3>
                <span className="text-xs text-emerald-700 font-medium">{t.lefkeLandmark}</span>
              </div>
              <p className="text-xs text-[#6e6e73] flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                <span>{t.lefkeAddress}</span>
              </p>
              <p className="text-xs text-[#6e6e73] flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-black shrink-0" />
                <span>{t.lefkeHours}</span>
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs">
                <a
                  href="tel:+905338881234"
                  className="inline-flex items-center gap-1.5 font-semibold text-black hover:text-emerald-700 transition"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                  <span>+90 (533) 888 12 34</span>
                </a>
                <a
                  href="https://wa.me/905338881234?text=Merhaba%20Çınar%20Tantuni%20Lefke,%20sipariş%20vermek%20istiyorum"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-700 hover:underline font-medium"
                >
                  {t.whatsappLefke}
                </a>
              </div>
            </div>

            {/* Güzelyurt */}
            <div className="p-5 sm:p-6 rounded-3xl bg-[#fbfbfd] border border-black/[0.06] space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base text-black">{t.guzelyurtName}</h3>
                <span className="text-xs text-emerald-700 font-medium">{t.guzelyurtLandmark}</span>
              </div>
              <p className="text-xs text-[#6e6e73] flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                <span>{t.guzelyurtAddress}</span>
              </p>
              <p className="text-xs text-[#6e6e73] flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-black shrink-0" />
                <span>{t.guzelyurtHours}</span>
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs">
                <a
                  href="tel:+905338775678"
                  className="inline-flex items-center gap-1.5 font-semibold text-black hover:text-emerald-700 transition"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                  <span>+90 (533) 877 56 78</span>
                </a>
                <a
                  href="https://wa.me/905338775678?text=Merhaba%20Çınar%20Tantuni%20Güzelyurt,%20sipariş%20vermek%20istiyorum"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-700 hover:underline font-medium"
                >
                  {t.whatsappGuzelyurt}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/[0.06] bg-[#fbfbfd] text-[#6e6e73] text-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-8 sm:pb-10 border-b border-black/[0.06]">
            <div>
              <div className="font-semibold text-black mb-2">{t.footerAboutTitle}</div>
              <p className="leading-relaxed text-[#86868b]">
                {t.footerAboutDesc}
              </p>
            </div>
            <div>
              <div className="font-semibold text-black mb-2">{t.footerLocationsTitle}</div>
              <ul className="space-y-1 text-[#86868b]">
                <li>Lefke: Gemikonağı (LAÜ)</li>
                <li>Güzelyurt: Kutlu Adalı Bulvarı</li>
                <li>{t.footerHours}</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-black mb-2">{t.footerContactTitle}</div>
              <ul className="space-y-1 text-[#86868b]">
                <li>
                  <a href="tel:+905338881234" className="hover:text-black transition">
                    Lefke: +90 (533) 888 12 34
                  </a>
                </li>
                <li>
                  <a href="tel:+905338775678" className="hover:text-black transition">
                    Güzelyurt: +90 (533) 877 56 78
                  </a>
                </li>
                <li>{t.footerTakeaway}</li>
              </ul>
            </div>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#86868b]">
            <div>© {new Date().getFullYear()} Çınar Tantuni. {t.footerRights}</div>
            <div>{t.footerDesign}</div>
          </div>
        </div>
      </footer>

      {/* MOBILE ONLY FLOATING ACTION ISLAND (Sticky Bottom Pill) */}
      <div className="fixed bottom-4 inset-x-0 z-40 px-4 md:hidden flex justify-center pointer-events-none">
        <div className="pointer-events-auto bg-black/90 text-white backdrop-blur-xl border border-white/10 rounded-full px-5 py-2.5 flex items-center gap-3 shadow-2xl">
          <button
            onClick={() => setIsMobileContactOpen(true)}
            className="flex items-center gap-1.5 text-xs font-semibold hover:text-emerald-400 transition"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.mobileOrderBar}</span>
          </button>
          <div className="w-px h-3.5 bg-white/20" />
          <button
            onClick={() => setIsMobileContactOpen(true)}
            className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white transition"
          >
            <Phone className="w-3 h-3 text-emerald-400" />
            <span>{t.mobileCallBar}</span>
          </button>
        </div>
      </div>

      {/* MOBILE BRANCH QUICK SELECTOR MODAL */}
      {isMobileContactOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex items-end">
          <div
            onClick={() => setIsMobileContactOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />
          <div className="relative w-full bg-white rounded-t-3xl p-6 border-t border-black/[0.08] shadow-2xl z-10 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-black/[0.06]">
              <h3 className="font-bold text-sm text-black">{t.chooseBranch}</h3>
              <button
                onClick={() => setIsMobileContactOpen(false)}
                className="p-1 rounded-full text-zinc-400 hover:text-black"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Lefke Option */}
            <div className="p-4 rounded-2xl bg-[#fbfbfd] border border-black/[0.06] flex items-center justify-between">
              <div>
                <div className="font-bold text-sm text-black">Lefke (LAÜ)</div>
                <div className="text-xs text-[#6e6e73]">+90 (533) 888 12 34</div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="tel:+905338881234"
                  className="px-3 py-1.5 rounded-full bg-white border border-black/10 text-xs font-semibold text-black"
                >
                  Ara
                </a>
                <a
                  href="https://wa.me/905338881234?text=Merhaba%20Çınar%20Tantuni,%20sipariş%20vermek%20istiyorum"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-full bg-black text-white text-xs font-semibold"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Güzelyurt Option */}
            <div className="p-4 rounded-2xl bg-[#fbfbfd] border border-black/[0.06] flex items-center justify-between">
              <div>
                <div className="font-bold text-sm text-black">Güzelyurt (Merkez)</div>
                <div className="text-xs text-[#6e6e73]">+90 (533) 877 56 78</div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="tel:+905338775678"
                  className="px-3 py-1.5 rounded-full bg-white border border-black/10 text-xs font-semibold text-black"
                >
                  Ara
                </a>
                <a
                  href="https://wa.me/905338775678?text=Merhaba%20Çınar%20Tantuni,%20sipariş%20vermek%20istiyorum"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-full bg-black text-white text-xs font-semibold"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
