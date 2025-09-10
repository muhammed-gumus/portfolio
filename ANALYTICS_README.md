# Google Analytics Tracking Setup

Bu dosya portfolyonuzda Google Analytics takibinin nasıl yapılandırıldığını ve kullanıldığını açıklar.

## Kurulum

### 1. Google Analytics Yapılandırması
- Google Analytics ID: `G-CJW3FRSEG1`
- Tracking kodu `app/layout.tsx` dosyasında yüklenir
- Enhanced conversions ve gelişmiş takip özellikleri etkinleştirilmiştir

### 2. Type Definitions
`global.d.ts` dosyasında gtag fonksiyonu için TypeScript tanımlamaları bulunur.

### 3. Analytics Utilities
`utils/analytics.ts` dosyasında çeşitli tracking fonksiyonları mevcuttur.

## Takip Edilen Olaylar

### Resume İndirmeleri
```typescript
trackResumeDownload()
```
Bu fonksiyon aşağıdaki olayları takip eder:
- `file_download`: Genel dosya indirme olayı
- `resume_download`: Özel CV indirme olayı

**Google Analytics'te göreceğiniz veriler:**
- Event Category: `engagement`, `career`
- Event Action: `file_download`, `resume_download`
- Event Label: `Resume PDF`, `Resume Link Click`
- Dosya adı: `Resume-FrontendMG.pdf`

### Tema Değişiklikleri
```typescript
trackThemeChange("dark" | "light")
```
Kullanıcıların tema tercihlerini takip eder.

### Proje Tıklamaları
```typescript
trackProjectClick(projectName, projectUrl?)
```
Portfolio projelerine tıklamaları takip eder.

### İletişim Etkileşimleri
```typescript
trackContactAction("view" | "submit" | "email_click")
```
İletişim formu etkileşimlerini takip eder.

### Navigasyon
```typescript
trackNavigation(section)
```
Sayfa içi navigasyonu takip eder.

### Scroll Derinliği
```typescript
trackScrollDepth(percentage)
```
Kullanıcı etkileşimini ölçmek için scroll derinliğini takip eder.

## Google Analytics Dashboard'da İnceleme

### Resume Tıklamalarını İncelemek için:

1. **Google Analytics'e giriş yapın:** https://analytics.google.com
2. **Doğru property'yi seçin:** G-CJW3FRSEG1
3. **Events bölümüne gidin:**
   - Sol menüden `Reports` > `Engagement` > `Events`
   
4. **Resume olaylarını filtreleyin:**
   - Event name: `file_download` veya `resume_download`
   - Event category: `engagement` veya `career`

### Özel Raporlar Oluşturma:

1. **Explore bölümüne gidin**
2. **Yeni exploration oluşturun**
3. **Dimensions olarak ekleyin:**
   - Event name
   - Event category
   - Event label
   - Custom parameter: file_name

4. **Metrics olarak ekleyin:**
   - Event count
   - Users
   - Sessions

### Real-time Tracking:
- `Reports` > `Realtime` bölümünden anlık olayları görebilirsiniz
- Resume linkine tıkladıktan sonra 5-10 saniye içinde olayın görünmesi gerekir

## Gelişmiş Kullanım

### Mevcut Componentlerde Tracking Eklemek:

```typescript
import { trackProjectClick, trackContactAction } from '@/utils/analytics';

// Proje kartında
const handleProjectClick = (projectName: string) => {
  trackProjectClick(projectName, projectUrl);
};

// İletişim formunda
const handleEmailClick = () => {
  trackContactAction('email_click');
};
```

### Custom Events Eklemek:

```typescript
import { trackEvent } from '@/utils/analytics';

trackEvent({
  action: 'custom_action',
  category: 'custom_category',
  label: 'Custom Label',
  value: 1,
  custom_parameters: {
    custom_field: 'custom_value'
  }
});
```

## Debug ve Test Etme

### Development Ortamında Test:
1. Console'u açın (F12)
2. Resume linkine tıklayın
3. Network tabında gtag isteklerini kontrol edin
4. Google Analytics Real-time'da olayları görün

### Analytics Debug:
Google Analytics Debugger browser extension kullanarak daha detaylı debug yapabilirsiniz.

## Önemli Notlar

- GDPR/KVKK uyumluluğu için gerekirse cookie consent eklenmelidir
- Production'da tracking'in çalıştığından emin olun
- Analytics verilerinin görünmesi 24-48 saat sürebilir (real-time hariç)
- Event parametrelerinde kişisel veri bulunmamasına dikkat edin
