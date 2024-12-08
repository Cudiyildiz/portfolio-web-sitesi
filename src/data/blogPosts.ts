import { Code } from "lucide-react";

export interface ContentBlock {
  type: 'heading' | 'paragraph' | 'code' | 'list';
  content: string;
  level?: 1 | 2 | 3; // For headings
  language?: string; // For code blocks
  items?: string[]; // For lists
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: ContentBlock[];
  date: string;
  image: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'Flutter-Mobil-Çözümü',
    title: 'Flutter: Mobil Uygulama Geliştirmede Yeni Nesil Bir Çözüm',
    excerpt: 'Flutter, Google tarafından geliştirilen, açık kaynaklı bir UI yazılım geliştirme kitidir.',
    content: [
      {
        type: 'heading',
        level: 2,
        content: 'Giriş'
      },
      {
        type: 'paragraph',
        content: "Flutter, Google tarafından geliştirilen, açık kaynaklı bir UI yazılım geliştirme kitidir. Mobil uygulama geliştirme dünyasında çığır açan Flutter, tek bir kod tabanıyla hem iOS hem de Android platformları için yüksek performanslı, görsel olarak çekici ve native uygulamalar geliştirmeyi mümkün kılar. Bu yazıda, Flutter'ın temel özelliklerini, avantajlarını, kullanım alanlarını ve geleceğini detaylı bir şekilde inceleyeceğiz.",
      },
      {
        type: 'heading',
        level: 2,
        content: "Flutter'ın Temel Özellikleri"
      },
      {
        type: 'list',
        items: [
          "Widget'lar: Flutter'ın temel yapı taşları widget'lardır. Her şey bir widget'tır! Butonlar, metin kutuları, listeler gibi kullanıcı arayüzü öğelerinin tamamı widget olarak temsil edilir. Bu widget'lar sayesinde karmaşık ve özelleştirilebilir kullanıcı arayüzleri oluşturmak oldukça kolaydır.",
          "Dart Programlama Dili: Flutter, Dart programlama dilini kullanır. Dart, nesne yönelimli, hızlı ve modern bir dildir. Flutter'ın sunduğu birçok özellik, Dart'ın güçlü yönleri sayesinde mümkün olmaktadır.",
          "Hot Reload: Flutter'ın en dikkat çekici özelliklerinden biri Hot Reload'dur. Kodunuzu değiştirdiğinizde uygulama yeniden başlatılmadan değişiklikler anında yansır. Bu sayede geliştirme süreci hızlanır ve daha verimli hale gelir.",
          "Hızlı Performans: Flutter, C/C++ ile yazılmış bir motor kullanır ve bu sayede native uygulamalara yakın bir performans sunar. Ayrıca, her pikseli kendi çizen bir render motoru sayesinde akıcı animasyonlar ve geçişler oluşturmak mümkündür.",
          "Platform Kanalları: Flutter ile native platform özelliklerine erişmek için platform kanallarını kullanabilirsiniz. Bu sayede cihazın kamerası, sensörleri gibi özelliklerini kullanarak daha zengin uygulamalar geliştirebilirsiniz.",
          "Deklaratif UI: Flutter, deklaratif bir yaklaşım benimser. Yani kullanıcı arayüzünü kodda tanımlamak yerine, neyin nasıl görüneceğini betimlersiniz. Bu sayede daha okunaklı ve yönetilebilir kodlar yazabilirsiniz."
        ],
        content: "",
      },
      {
        type: 'heading',
        level: 2,
        content: "Flutter'ın Avantajları"
      },
      {
        type: 'list',
        items: [
          "Tek Kod Tabanı: Tek bir kod tabanıyla hem iOS hem de Android uygulamaları geliştirerek zaman ve maliyetten tasarruf edebilirsiniz.",
          "Hızlı Geliştirme: Hot Reload özelliği sayesinde geliştirme süreci oldukça hızlanır.",
          "Güzel Kullanıcı Arayüzleri: Flutter'ın zengin widget kütüphanesi sayesinde görsel olarak çekici ve özelleştirilebilir uygulamalar geliştirebilirsiniz.",
          "Büyüyen Bir Topluluk: Flutter, gün geçtikçe büyüyen bir topluluğa sahiptir. Bu da daha fazla kaynak, paket ve destek anlamına gelir.",
          "Web ve Masaüstü Desteği: Flutter sadece mobil değil, aynı zamanda web ve masaüstü uygulamaları geliştirmek için de kullanılabilir.",
          "Açık Kaynak: Flutter, tamamen ücretsiz ve açık kaynaklıdır. Bu sayede herkes tarafından kullanılabilir ve geliştirilebilir.",
        ],
        content: ''
      },
      {
        type: 'heading',
        level: 2,
        content: "Örnek Flutter Kodlaması"
      },
      {
        type: 'code',
        language: 'dart',
        content: `
import 'package:easy_join/ui/views/home_page.dart';
import 'package:easy_join/ui/views/login_page.dart';
import 'package:easy_join/ui/views/sign_up.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'firebase_options.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'EasyJoin',
      routes: {
        "/loginPage" : (context) => LoginPage(),
        "/signUp" : (context) => SignUpPage(),
        "/homePage" :(context) => HomePage(),
      },
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const LoginPage(),
    );
  }
}
}`
      },
      {
        type: 'heading',
        level: 2,
        content: "Flutter'ın Kullanım Alanları"
      },
      {
        type: 'paragraph',
        content: 'Flutter ile neredeyse her türlü mobil uygulamayı geliştirebilirsiniz. İşte bazı örnekler:'
      },
      {
        type: 'list',
        items: [
          "Sosyal medya uygulamaları",
          "E-ticaret uygulamaları",
          "Haber uygulamaları",
          "Oyunlar",
          "Bankacılık uygulamaları",
          "Sağlık uygulamaları",

        ],
        content:"",
      },
      {
        type: 'heading',
        level: 2,
        content: "Geleceği"
      },
      ,{
        type: 'paragraph',
        content: "Flutter, mobil uygulama geliştirme dünyasında geleceğin teknolojilerinden biri olarak görülüyor. Google'ın desteği ve sürekli gelişimi sayesinde Flutter, daha da popüler hale gelecek ve yeni özellikler kazanacaktır.",
      },
      {
        type: 'heading',
        level: 2,
        content: "Sonuç"
      },
      ,{
        type: 'paragraph',
        content: "Flutter, mobil uygulama geliştirme için güçlü ve esnek bir araçtır. Tek kod tabanıyla hem iOS hem de Android platformları için yüksek performanslı ve görsel olarak çekici uygulamalar geliştirmek isteyen herkes için ideal bir seçenektir. Eğer siz de mobil uygulama geliştirmeye ilgi duyuyorsanız, Flutter'ı mutlaka denemelisiniz.",
      },
    ],
    date: '8 Aralık, 2024',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200',
    readTime: '5 dakikalık okuma'
  },
  {
    slug: 'Temiz-Kod-Önemi',
    title: "Temiz Kod Yazmanın Önemi ve İpuçları",
    excerpt: "Yazılım geliştirme sürecinde, kodun yalnızca işlevsel olması değil, aynı zamanda okunabilir,",
    content: [
      {
        type: 'heading',
        level: 2,
        content: 'Giriş'
      },
      {
        type: 'paragraph',
        content: "Yazılım geliştirme sürecinde, kodun yalnızca işlevsel olması değil, aynı zamanda okunabilir, anlaşılabilir ve sürdürülebilir olması da önemlidir. Temiz kod yazmak, yazılımın bakımını kolaylaştırır ve uzun vadede daha az hata ile daha verimli geliştirme sağlar. Bu yazıda, temiz kod yazmanın önemini ve ipuçlarını ele alacağız, ayrıca C++ örnekleriyle açıklayacağız."
      },
      {
        type: 'heading',
        level: 2,
        content: 'Temiz Kod Nedir?'
      },
      {
        type: 'paragraph',
        content: "Temiz kod, basit, anlaşılır ve bakım yapılabilir olan koddur. Bu tür bir kod, sadece bugün değil, gelecekteki geliştiriciler için de sürdürülebilir bir yapı sunar. Temiz kod, genellikle şu özelliklere sahiptir:",
      },
      {
        type: 'list',
        items: [
          "Okunabilirlik: Başkalarının kolayca anlayabileceği şekilde yazılır.",
          "Anlaşılabilirlik: Kod, yaptığı işi net bir şekilde ifade eder.",
          "Modülerlik: Küçük ve bağımsız fonksiyonlar içerir.",
        ],
        content: ""
      },
      {
        type: 'heading',
        level: 2,
        content: 'Neden Temiz Kod Yazmalıyız?'
      },
      {
        type: 'list',
        items: [
          "Okunabilirlik: Kod daha kolay anlaşılır ve bakım yapılabilir.",
          "Sürdürülebilirlik: Yazılımın uzun vadede gelişmesi ve yeni özelliklerin eklenmesi daha kolay olur.",
          "Daha Az Hata: Okunabilir ve basit kodda hata oranı daha düşer.",
          "Daha Hızlı Geliştirme: Kodun anlaşılması, hızlı geliştirmeyi sağlar.",
        ],
        content: ""
      },
      {
        type: 'heading',
        level: 2,
        content: 'Temiz Kod Yazma İpuçları'
      },
      {
        type: 'list',
        items: [
          "Anlamlı İsimler Kullanın :Değişken, fonksiyon ve sınıf isimlerini anlamlı seçin. Örneğin, itemCount yerine x kullanmaktan kaçının.",
          "Kısa ve Sade Tutun :Kodunuzu sade ve gereksiz karmaşıklıklardan uzak tutun.",
          "Tek Sorumluluk Prensibi :Her fonksiyon yalnızca bir iş yapmalıdır. Bu, kodun anlaşılabilir ve test edilebilir olmasını sağlar.",
          "Yorum Satırları Kullanın :Yorumları karmaşık kısımlar için kullanın, ancak kodu kendini açıklayacak şekilde yazmaya çalışın.",
          "Boşlukları Doğru Kullanın :Boşluk ve girintiler, kodun düzenli olmasını sağlar."
        ],
        content: ""
      },
      {
        type: 'heading',
        level: 2,
        content: 'C++ Temiz Kod Örneği'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Yanlış Örnek'
      },
      {
        type: 'code',
        language: 'c++',
        content: `
        class User {
public:
    void updateInfo(string n, int a) { name = n; age = a; }
    void showInfo() { cout << name << ", " << age << endl; }
private:
    string name;
    int age;
};
}`
      },
      {
        type: 'heading',
        level: 2,
        content: 'Doğru Örnek'
      },
      {
        type: 'code',
        language: 'c++',
        content: `
      class User {
public:
    void updateName(const string& newName) { name = newName; }
    void updateAge(int newAge) { age = newAge; }
    void showInfo() const { cout << name << ", " << age << endl; }
private:
    string name;
    int age;
};
}`
      },
    ],
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1200',
    readTime: '7 min read'
  },
  {
    slug: 'flutter-firebase-API',
    title: "Flutter ve Firebase ile API Entegrasyonu",
    excerpt: "Mobil uygulamalarınızı daha dinamik ve etkileşimli hale getirmek için dış kaynaklardan veri almak ve göndermek oldukça önemlidir.",
    content: [
      {
        type: 'heading',
        level: 2,
        content: 'Giriş'
      },
      {
        type: 'paragraph',
        content: "Mobil uygulamalarınızı daha dinamik ve etkileşimli hale getirmek için dış kaynaklardan veri almak ve göndermek oldukça önemlidir. Bu süreç, API (Application Programming Interface) entegrasyonu olarak adlandırılır. Flutter ve Firebase gibi güçlü araçları kullanarak, API entegrasyonunu kolayca gerçekleştirebilir ve uygulamalarınıza yeni özellikler ekleyebilirsiniz. Bu yazıda, Flutter ve Firebase ile API entegrasyonu hakkında detaylı bilgi vereceğiz."
      },
      {
        type: 'heading',
        level: 2,
        content: 'API Nedir?'
      },
      {
        type: 'paragraph',
        content: "API, farklı yazılımların birbirleriyle iletişim kurmasını sağlayan bir arabirimdir. Bir web sitesindeki bir butona tıkladığınızda veya bir mobil uygulamada bir veriyi görüntülediğinizde arka planda bir API çalışarak bu işlemi gerçekleştirir. API'ler genellikle HTTP protokolü üzerinden çalışır ve JSON veya XML gibi veri formatlarında veri alışverişi yapar.",
      },
      {
        type: 'heading',
        level: 2,
        content: 'Neden API Entegrasyonu?'
      },
      {
        type: 'list',
        items: [
          "Veri Alışverişi: Uygulamanızın kullanıcılarına güncel ve doğru veriler sunmak için harici veritabanlarından veya hizmetlerden veri alabilirsiniz.",
          "Özelleştirme: API'ler sayesinde uygulamanızı kullanıcıların ihtiyaçlarına göre özelleştirebilirsiniz. Örneğin, bir e-ticaret uygulamasında kullanıcıların favorilerine eklediği ürünleri bir API sayesinde saklayabilirsiniz.",
          "Genişletilebilirlik: Yeni özellikler eklemek veya mevcut özellikleri geliştirmek için API'leri kullanabilirsiniz.",
          "Platform Bağımsızlığı: API'ler, farklı platformlardaki uygulamaların aynı veriye erişmesini sağlar.",
        ],
        content: ""
      },
      {
        type: 'heading',
        level: 2,
        content: 'Flutter ve Firebase ile API Entegrasyonu'
      },
      
      {
        type: 'paragraph',
        content: "Flutter, Google tarafından geliştirilen, hem iOS hem de Android platformları için native performanslı uygulamalar geliştirmeye olanak tanıyan açık kaynaklı bir UI toolkit'tir. Firebase ise Google'ın mobil ve web uygulamaları için geliştirme platformudur. Firebase, gerçek zamanlı veritabanı, kullanıcı kimlik doğrulama, bulut mesajlaşma gibi birçok özelliği bünyesinde barındırır. Flutter ve Firebase'i birlikte kullanarak güçlü ve ölçeklenebilir mobil uygulamalar geliştirebilirsiniz.",
      },
      {
        type: 'heading',
        level: 2,
        content: 'Firebase ile API Entegrasyonu Adımları'
      },
      {
        type: 'list',
        items: [
          "Firebase Projesi Oluşturma: Firebase konsolunda yeni bir proje oluşturun ve Flutter uygulamanızı projenize ekleyin.",
          "Firebase Paketini Projeye Ekleme: Flutter projenize Firebase paketini ekleyin.",
          "API Anahtarını Almak: Kullanacağınız API'nin dokümantasyonundan API anahtarını alın.",
          "HTTP İstekleri Göndermek: Flutter'ın http paketini kullanarak API'ye HTTP istekleri gönderin.",
          "Verileri Parse Etmek: API'den gelen yanıtı parse ederek uygulamanızda kullanılacak veri formatına dönüştürün.",
          "Verileri Kullanıcı Arayüzüne Göstermek: Parse edilen verileri Flutter widget'ları kullanarak kullanıcı arayüzünde görüntüleyin."
        ],
        content: ""
      },
      {
        type: 'heading',
        level: 2,
        content: 'Örnek (HTTP GET İsteği):'
      },
      {
        type: 'code',
        language: "dart",
        content: `import 'package:http/http.dart' as http;
import 'dart:convert';

Future<List> fetchPosts() async {
  final response = await http.get(Uri.parse('https://jsonplaceholder.typicode.com/posts'));

  if (response.statusCode == 200) {
    // Verileri JSON formatından listeye dönüştür
    List<dynamic> data = jsonDecode(response.body);
    return data.map((item) => Post.fromJson(item)).toList();
  } else {
    throw Exception('Failed to load posts');
  }
}`
      },
      {
        type: 'heading',
        level: 2,
        content: 'Firebase Realtime Database ile Veri Senkronizasyonu'
      },
      {
        type: 'paragraph',
        content: "Firebase Realtime Database, gerçek zamanlı veri güncellemeleri için ideal bir çözümdür. Verilerinizi Firebase Realtime Database'e kaydedebilir ve değişiklikleri tüm bağlı cihazlarda otomatik olarak güncelleyebilirsiniz."
      },
      {
        type: 'heading',
        level: 2,
        content: 'Sonuç'
      },
      {
        type: 'paragraph',
        content: "Flutter ve Firebase, mobil uygulama geliştirmede güçlü bir ikili oluşturur. API entegrasyonu sayesinde uygulamalarınızı daha zengin ve dinamik hale getirebilir, kullanıcı deneyimini iyileştirebilirsiniz. Örneğin, Dünya Ülkeleri uygulamanızda API kullanarak ülkelerin bilgilerini çekebilir ve kullanıcılarınıza anlık veriler sunabilirsiniz. Bu tür bir entegrasyon, uygulamanızın veritabanını sürekli güncel tutarak kullanıcıların her zaman doğru ve geçerli bilgilere erişmesini sağlar. Bu yazıda, Flutter ve Firebase ile API entegrasyonu hakkında temel bilgileri verdik. Daha detaylı bilgi için Firebase ve Flutter'ın resmi dokümantasyonlarını inceleyebilirsiniz."
      },
    ],
    date: 'March 10, 2024',
    image: 'https://cdn.pixabay.com/photo/2023/01/03/08/12/bitcoin-7693848_1280.png',
    readTime: '7 min read'
  },
  {
    slug: 'Kendi-Uygulamanızı-App',
    title: "Kendi Uygulamanızı Yayınlamak: App Store ve Google Play",
    excerpt: "Uzun saatler boyunca emek vererek geliştirdiğiniz mobil uygulamayı nihayet tamamladınız ve artık dünyayla paylaşmak istiyorsunuz. ",
    content: [
      {
        type: 'heading',
        level: 2,
        content: 'Giriş'
      },
      {
        type: 'paragraph',
        content: "Uzun saatler boyunca emek vererek geliştirdiğiniz mobil uygulamayı nihayet tamamladınız ve artık dünyayla paylaşmak istiyorsunuz. Peki, uygulamanızı App Store ve Google Play gibi platformlarda nasıl yayınlayacağınızı biliyor musunuz? Bu blog yazısında, uygulama yayınlama sürecinin tüm aşamalarını detaylı bir şekilde ele alacağız."
      },
      {
        type: 'heading',
        level: 2,
        content: '1. Uygulamanızı Hazırlama'
      },
      {
        type: 'list',
        items: [
          "Test Etme: Uygulamanızı farklı cihazlar ve işletim sistemlerinde kapsamlı bir şekilde test edin. Performans, kullanıcı deneyimi ve olası hataları kontrol edin.",
          "İkon ve Ekran Görüntüleri: Uygulamanızın çekici göründüğünden emin olmak için yüksek kaliteli ikonlar ve ekran görüntüleri hazırlayın.",
          "Açıklama: Uygulamanızı en iyi şekilde tanıtacak, kısa ve öz bir açıklama yazın. Anahtar kelimeleri kullanarak uygulamanızı arama sonuçlarında üst sıralara taşıyabilirsiniz.",
          "Gizlilik Politikası: Uygulamanızın kullanıcı verilerini nasıl topladığını ve koruduğunu açıklayan bir gizlilik politikası oluşturun."
        ],
        content: ""
      },
      {
        type: 'heading',
        level: 2,
        content: '2. Geliştirici Hesabı Oluşturma'
      },
      {
        type: 'list',
        items: [
          "App Store Connect: Apple geliştirici programına katılarak bir Apple Developer hesabı oluşturun. Yıllık bir ücret ödemeniz gerekecektir.",
          "Google Play Console: Google Play Console'da ücretsiz bir geliştirici hesabı oluşturun.",
        ],
        content: ""
      },
      {
        type: 'heading',
        level: 2,
        content: '3. Uygulamanızı Yükleme'
      },
      {
        type: 'list',
        items: [
          "App Store Connect: Xcode'dan oluşturduğunuz .ipa dosyasını App Store Connect'e yükleyin.",
          "Google Play Console: Android Studio'dan oluşturduğunuz .aab veya .apk dosyasını Google Play Console'a yükleyin.",
        ],
        content: ""
      },
      {
        type: 'heading',
        level: 2,
        content: '4. Uygulama Bilgilerini Doldurma'
      },
      {
        type: 'list',
        items: [
          "Uygulama Adı: Uygulamanızın mağazalardaki ismi.",
          "Kategoriler: Uygulamanızın ait olduğu kategorileri seçin.",
          "Açıklama: Uygulamanızı detaylı bir şekilde açıklayın.",
          "Ekran Görüntüleri: Uygulamanızın farklı ekranlarını gösteren yüksek kaliteli görseller ekleyin.",
          "Video: (Opsiyonel) Uygulamanızı tanıtan kısa bir video ekleyebilirsiniz.",
          "Gizlilik Politikası: Oluşturduğunuz gizlilik politikasının bağlantısını ekleyin.",
        ],
        content: ""
      },
      {
        type: 'heading',
        level: 2,
        content: '5. İçerik Değerlendirmesi'
      },
      {
        type: 'list',
        items: [
          "Apple: Apple, uygulamanızı belirli kılavuzlara uygun olup olmadığını kontrol eder. Bu süreç birkaç gün sürebilir.",
          "Google: Google Play, uygulamanızı otomatik olarak tarar ve herhangi bir sorun tespit ederse size bildirir.",
        ],
        content: ""
      },
      {
        type: 'heading',
        level: 2,
        content: '6. Yayınlama'
      },
      {
        type: 'list',
        items: [
          "İlk Yayın: Uygulamanızın tüm bilgileri doğru ve eksiksiz olduğundan emin olduktan sonra yayınlama işlemini başlatın.",
          "Güncellemeler: Uygulamanızı güncellemek istediğinizde aynı adımları takip edin.",
        ],
        content: ""
      },
      {
        type: 'heading',
        level: 2,
        content: '7. Pazarlama'
      },
      {
        type: 'list',
        items: [
          "App Store Optimizasyonu (ASO): Uygulamanızı daha fazla kişiye ulaştırmak için anahtar kelimeleri doğru kullanarak ASO yapın.",
          "Sosyal Medya: Uygulamanızı sosyal medya hesaplarınızda paylaşın.",
          "İnfluencer Marketing: Uygulamanızı ilgili influencer'larla işbirliği yaparak tanıtın.",
          "Reklam: Uygulama içi satın alımlar veya abonelikler için reklam kampanyaları oluşturabilirsiniz."
        ],
        content: ""
      },
      {
        type: 'heading',
        level: 2,
        content: 'Önemli Noktalar'
      },
      {
        type: 'list',
        items: [
          "Kılavuzlara Uyun: Her iki platformun da belirlediği uygulama yayınlama kılavuzlarına dikkatlice uyun.",
          "Güncellemeler: Uygulamanızı düzenli olarak güncelleyin ve kullanıcı geri bildirimlerine göre iyileştirin.",
          "Pazarlama: Uygulamanızı sürekli olarak pazarlayın ve kullanıcıların ilgisini çekmeye çalışın.",
          "Analitik: Uygulamanızın performansını takip etmek için analiz araçlarını kullanın."
        ],
        content: ""
      },
      {
        type: 'heading',
        level: 2,
        content: 'Sonuç'
      },
      
      {
        type: 'paragraph',
        content: "Uygulamanızı App Store ve Google Play gibi platformlarda yayınlamak, uzun ve dikkat gerektiren bir süreçtir. Ancak, doğru adımları takip ederek uygulamanızı başarıyla yayınlayabilir ve geniş bir kullanıcı kitlesine ulaşabilirsiniz.",
      },
    ],
    date: '20 Aralık, 2024',
    image: 'https://cdn.pixabay.com/photo/2021/10/11/17/37/smartphone-6701409_1280.jpg',
    readTime: '6 dakikalık okuma süresi',
  },
];