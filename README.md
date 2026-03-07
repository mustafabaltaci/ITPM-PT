Sprint Breaker: IT Project Management Gamified Experience
Sprint Breaker, IT Proje Yönetimi dersi kapsamında geliştirilmiş, teorik bilgileri (Katzenbach & Smith’in Takım Performans Eğrisi gibi) eğlenceli bir "Breakout" mekaniği ile birleştiren interaktif bir eğitim platformudur.

Proje Hakkında
Bu proje, sadece bir oyun değil; öğrencilerin IT dünyasındaki Scope Creep, Takım Tipleri ve Organizasyonel Yapılar gibi kavramları deneyimleyerek öğrenmesini amaçlayan bir simülasyondur.

Oyun Mekanikleri
Scope Creep (Kapsam Kayması): Belirli periyotlarla sahaya 3 satır yeni blok ekleyen dinamik bir zorluk sistemi.
Dynamic Roles: Jr. Developer, PM (Buff), Architect (TNT) ve "The Bug" (Debuff) gibi projeye özel roller.
Synchronized UI: Kapsam kayması sayacıyla senkronize şekilde renk değiştiren ve hızlanan neon çerçeve animasyonları.

Teknik Yığın (Tech Stack)

Alan | Kullanılan Teknolojiler
Frontend | HTML5 Canvas, Vanilla CSS3 (Neon UI), JavaScript (ES6+)
Backend / DB | Google Apps Script, Google Sheets API
Telemetry | EmailJS (Professional Reporting) 
Teori | Katzenbach and Smith: The Team Performance Curve

Akademik Derinlik: Takım Performans Eğrisi
Proje, Katzenbach ve Smith tarafından tanımlanan 5 farklı takım tipini interaktif olarak sınıflandırma imkanı sunar:
Working Group (Çalışma Grubu)
Pseudo-Team (Sözde Takım)
Potential Team (Potansiyel Takım)
Real Team (Gerçek Takım)
High-Performance Team (Yüksek Performanslı Takım)

API & Veri Entegrasyonu
Proje, oyun sonu verilerini iki farklı kanal üzerinden iletir:
Google Sheets API: fetch API ve Google Apps Script kullanılarak skorlar anlık olarak e-tablolara yazılır ve global bir Leaderboard oluşturulur.
EmailJS: Proje yöneticisine (öğretmene) tüm sprint detaylarını içeren profesyonel bir HTML raporu gönderilir.

Kurulum ve Çalıştırma
Projeyi bilgisayarınıza klonlayın:
Bash
git clone https://github.com/mustafabaltaci/sprint-breaker.git
index.html dosyasını tarayıcınızda açın.
Kendi API anahtarlarınızı eklemeyi unutmayın:
script.js içerisindeki EmailJS ve Google Script URL kısımlarını kendi bilgilerinizle güncelleyin.
