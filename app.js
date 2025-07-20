const { createApp, ref, watch } = Vue;
const { createI18n } = VueI18n;
// inisialisasi AOS untuk animasi saat scroll
AOS.init({
  once: false,
  duration: 1500,
});

// kontent terjemah bahasa dan inggris
const messages = {
  // ENGLISH
  en: {
    nav: {
      home: "Home",
      product: "Product",
      about: "About Us",
      news: "News",
      contact: "Contact Us",
    },
    home: {
      title: "Synergizing to Realize <br> an Advanced Indonesia.",
      description:
        "Founded in 1970, with proven experience in heavy equipment solutions.",
      client: "client",
      product: "Suryatama Product",
      worker: "Profesional Workers",
      country: "Country"
    },
    page2: {
      title: "What Makes Us Different",
      description:
        "Established in 1970, with proven experience in heavy equipment solutions.",
      service1: {
        title: "Qualified <br> Specialist",
        description:
          "Established since 1970, with proven experience in the field of heavy equipment solutions.",
      },
      service2: {
        title: "Modern <br> Equipment",
        description:
          "Established since 1970, with proven experience in the field of heavy equipment solutions.",
      },
      service3: {
        title: "Trusted by Healtycare <br> Providers Nationwide",
        description:
          "Established since 1970, with proven experience in the field of heavy equipment solutions.",
      },
    },
    page3: {
      header: "Our Products",
      title: "Innovative Products to Support Your Healthcare Services",
      description:
        "Powered by the latest technology and built to the highest standards, our products help you deliver faster, safer, and more effective healthcare.",
    },
    page4: {
      category: "category"
    },
    page5: {
      member: {
        title: "Back-end developer at MyDashDev",
        message: "It's easy to use and workflow seems really intuitive. Promising!"
      },
      header: "What Our Client Say",
      title: "Trusted by Medical <br> Professionals and Healthcare <br> Institutions",
      description: "With proven performance and certified safety, our products support healthcare providers in delivering the best possible care."
    },
    page6: {
      title: "Partnering with You to Bring Your Business to Life",
      description: "Together, we’ll shape your vision into a thriving business through smart strategies, practical solutions, and ongoing support."
    },
    page7: {
      header: "Our Program",
      title: "We empower teams to grow into adaptive, capable forces ready to take on the future.",
      description: "Through tailored training, strategic support, and hands-on collaboration, we help teams unlock their full potential and thrive in a rapidly changing world."
    }
  },
  // BAHASA INDONESIA
  id: {
    nav: {
      home: "Beranda",
      product: "Produk",
      about: "Tentang Kami",
      news: "Berita",
      contact: "Kontak",
    },
    home: {
      title: "Bersinergi Mewujudkan <br> Indonesia Maju.",
      description:
        "Didirikan sejak tahun 1970, dengan pengalaman yang teruji di bidang solusi alat-alat berat.",
      client: "Klien",
      product: "Produk Suryatama",
      worker: "Pekerja Profeional",
      country: "Negara"
    },
    page2: {
      title: "Apa yang Membuat Kami Berbeda",
      description:
        "Didirikan sejak tahun 1970, dengan pengalaman yang teruji di bidang solusi alat-alat berat.",
      service1: {
        title: "Spesialis <br> Berkualitas",
        description:
          "Didirikan sejak tahun 1970, dengan pengalaman yang teruji di bidang solusi alat-alat berat.",
      },
      service2: {
        title: "Peralatan <br> Modern",
        description:
          "Didirikan sejak tahun 1970, dengan pengalaman yang teruji di bidang solusi alat-alat berat.",
      },
      service3: {
        title: "Dipercaya oleh Penyedia Layanan <br> Kesehatan di Seluruh Negara",
        description:
          "Didirikan sejak tahun 1970, dengan pengalaman yang teruji di bidang solusi alat-alat berat.",
      },
    },
    page3: {
      header: "Produk Kami",
      title: "Produk Inovatif untuk Mendukung Layanan Kesehatan Anda",
      description:
        "Didukung oleh teknologi terbaru dan dibangun dengan standar tertinggi, produk kami membantu Anda memberikan layanan kesehatan yang lebih cepat, aman, dan efektif.",
    },
    page4: {
      category: "kategori"
    },
    page5: {
      member: {
        title: "Back-end developer di MyDashDev",
        message: "Mudah digunakan dan alur kerjanya tampak sangat intuitif. Menjanjikan!"
      },
      header: "Apa Kata Klien Kami",
      title: "Dipercaya oleh Profesional Medis dan Lembaga Kesehatan",
      description: "Dengan kinerja yang terbukti dan keamanan yang tersertifikasi, produk kami mendukung penyedia layanan kesehatan dalam memberikan perawatan terbaik."
    },
    page6: {
      title: "Bermitra dengan Anda untuk Mewujudkan Bisnis Anda",
      description: "Bersama-sama, kami akan membentuk visi Anda menjadi bisnis yang berkembang pesat melalui strategi cerdas, solusi praktis, dan dukungan berkelanjutan."
    },
    page7: {
      header: "Program Kami",
      title: "Kami memberdayakan tim untuk tumbuh menjadi kekuatan yang adaptif dan mampu menghadapi masa depan.",
      description: "Melalui pelatihan yang disesuaikan, dukungan strategis, dan kolaborasi langsung, kami membantu tim mencapai potensi penuh mereka dan berkembang dalam dunia yang berubah dengan cepat."
    }
    
  },
};

// inisialisasi untuk autotranslate
const i18n = createI18n({
  legacy: false,
  locale: "en",
  messages,
});

// inisialisasi vue 3
const app = createApp({
  setup() {
    const locale = ref(i18n.global.locale.value);
    const showMenuMobile = ref(false);
    // ganti bahasa saat dropdown berubah
    watch(locale, (newLocale) => {
      i18n.global.locale.value = newLocale;
    });

    return {
      locale,
      showMenuMobile,
    };
  },
});

app.use(i18n);
app.mount("#app");
