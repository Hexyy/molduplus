const { Client , Message , MessageEmbed } = require('discord.js');
const { ayarlar } = require('../../settings/ayarlar')
module.exports = {
 name: 'yardım',
 aliases: ["help", "y", "h", "Help", "Yardım", "Y", "H"] ,
 description: 'Botta bulunan kategorileri ve o kategorilerin komutlarını gösterir.',
 usage: ['yardım'], 
/** 
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
if(!message.guild.me.hasPermission('EMBED_LINKS')) return

if(!args[0]) {
const yardım = new MessageEmbed()
.setColor("YELLOW")
.setTitle(`<:degnek:809142151770275921> Moldup Yardım Menüsü`)
.setDescription(`
\`\`\`                                                                                                         \`\`\`

<:degnek:809142151770275921> **${ayarlar.prefix}yardım kayıt**
<:kullanici:809143152858497095> **Kayıt Sistemi** menüsünde ki komutları gösterir.


<:degnek:809142151770275921> **${ayarlar.prefix}yardım karşılama**
<:jail:809139843287482379> **Karşılama** menüsünde ki komutları gösterir.


<:degnek:809142151770275921> **${ayarlar.prefix}yardım seviye**
<:levelup:832221710559870987> **Seviye** menüsünde ki komutları gösterir.


<:degnek:809142151770275921> **${ayarlar.prefix}yardım öneri**
<:kayit:809140124621078598> **Öneri** menüsünde ki komutları gösterir.


<:degnek:809142151770275921> **${ayarlar.prefix}yardım sistemler**
<:genel:809431920056205343> **Sistemler** menüsünde ki komutları gösterir.


<:degnek:809142151770275921> **${ayarlar.prefix}yardım çekiliş**
<a:cekilis:822029668294721566> **Çekiliş** menüsünde ki komutları gösterir.


<:degnek:809142151770275921> **${ayarlar.prefix}yardım moderasyon**
<:moderasyon:809140448286212118> **Moderasyon** menüsünde ki komutları gösterir.


<:degnek:809142151770275921> **${ayarlar.prefix}yardım eğlence**
<:eglence:809143990276456529> **Eğlence** menüsünde ki komutları gösterir.


<:degnek:809142151770275921> **${ayarlar.prefix}yardım bot**
<:bot:809432681192357940> **Bot** menüsünde ki komutları gösterir.


<:degnek:809142151770275921> **${ayarlar.prefix}yardım müzik**
<:muzik:803194953898655775> **Müzik** menüsünde bulunan komutları gösterir.


<:degnek:809142151770275921> **${ayarlar.prefix}yardım emoji**
<:hypesquad_events:766651060969930752> **Emoji** menüsünde bulunan komutları gösterir.


<a:linkler:816781887615008800> **Bağlantılarım**
**[<:youtube:816736321573879848> Alpu TV](https://www.youtube.com/AlpuTV)**
**[<:blobmail:819477083252195380> Moldup'ı Davet Et](https://bot.moldup.tk/davet.html)**
**[<:blobhunter:819477392924999691> Moldup Destek Sunucusu](https://bot.moldup.tk/destek.html)**
**[<:blobokey:796365500102737941> Moldup'a Oy Ver](https://bot.moldup.tk/oy.html)**
**[<a:blobwork:819477910113091585> Moldup'ın Durumunu Takip Et](https://bot.moldup.tk/durum.html)**


\`\`\`                                                                                                         \`\`\`
`)
message.channel.send(yardım)
} else {
  if(args[0].toLowerCase() === 'müzik' || args[0].toLowerCase() === 'music') {
const müzik = new MessageEmbed()
.setColor('BLUE')
.setTitle('<:muzik:803194953898655775> Moldup Müzik Menüsü')
.setDescription(`
\`\`\`                                                                                                          \`\`\`

<:degnek:809142151770275921> **Müziği Çalmak Veya Atlamak İçin:**
<:muzik:803194953898655775> \`${ayarlar.prefix}oynat [ şarkı ]\` **|** \`${ayarlar.prefix}atla\`


<:degnek:809142151770275921> **Şarkıyı Durdurmak Veya Devam Ettirmek İçin:**
<:muzik:803194953898655775> \`${ayarlar.prefix}duraklat\` **|** \`${ayarlar.prefix}devam\`


<:degnek:809142151770275921> **Şarkıyı Veya Kuyruğu Döngüye Almak İçin:**
<:muzik:803194953898655775> \`${ayarlar.prefix}şarkı-döngüsü [ aç & kapat ]\` **|** \`\`${ayarlar.prefix}kuyruk-döngüsü [ aç & kapat ]\`\`


<:degnek:809142151770275921> **Kuyrukta ki Şarkılara Bakmak İçin Veya Şarkı Sesi Ayarlamak İçin:**
<:muzik:803194953898655775> \`${ayarlar.prefix}kuyruk\` **|** \`${ayarlar.prefix}ses [ ses ]\`


<:degnek:809142151770275921> **Bir Önceki Şarkıya Geçmek Veya Şarkıyı Bitirmek İçin:**
<:muzik:803194953898655775> \`${ayarlar.prefix}geri\` **|** \`${ayarlar.prefix}ayrıl\`


<:degnek:809142151770275921> **Kuyrukta ki Şarkıları Karıştırmak İçin**
<:muzik:803194953898655775> \`${ayarlar.prefix}karıştır\`


 \`\`\`                                                                                                         \`\`\`
`)
message.channel.send(müzik)
   
  } else {
 if(args[0].toLowerCase() === 'emoji') {
 const emoji = new MessageEmbed()
.setColor('BLUE')
.setTitle('<:hypesquad_events:766651060969930752> Moldup Emoji Menüsü')
.setDescription(`
\`\`\`                                                                                                          \`\`\`

<:degnek:809142151770275921> **Sunucunuza Hızlı Yoldan Emoji Yüklemek İçin:**
<:hypesquad_events:766651060969930752> \`${ayarlar.prefix}emoji-yükle [ emoji ismi ] [ emoji , bağlantı , dosya ]\`


<:degnek:809142151770275921> **Bir Emoji Hakkında Bilgi Almak İçin:**
<:hypesquad_events:766651060969930752> \`${ayarlar.prefix}emoji-bilgi [ emoji ]\`


<:degnek:809142151770275921> **Bir Emojinin Büyük Versiyonunu Almak İçin:**
<:hypesquad_events:766651060969930752> \`${ayarlar.prefix}büyüt [ emoji ismi ]\`


<:degnek:809142151770275921> **Botun Sunucularından Emoji Bulmak İçin:**
<:hypesquad_events:766651060969930752> \`${ayarlar.prefix}emoji-bul [ emoji ismi ]\`


<:degnek:809142151770275921> **Botun Sunucularından Rastgele Emojiler Bulmak İçin:**
<:hypesquad_events:766651060969930752> \`${ayarlar.prefix}emoji-rastgele [ emoji sayısı ] { hareketli/hareketsiz }\`


<:degnek:809142151770275921> **Sunucudan Bir Emojiyi Silmek İçin:**
<:hypesquad_events:766651060969930752> \`${ayarlar.prefix}emoji-sil [ emoji ]\`


<:degnek:809142151770275921> **Sunucudaki Bir Emojiyi Belirli Bir Role Özel Yapmak İçin:**
<:hypesquad_events:766651060969930752> \`${ayarlar.prefix}emoji-rol [ emoji ismi ] [ @rol ]\`


<:degnek:809142151770275921> **Sunucuya Çok Hızlı Bir Şekilde Emoji Yüklemek İçin:**
<:hypesquad_events:766651060969930752> \`${ayarlar.prefix}emoji-hızlı [ emoji ]\`


<:degnek:809142151770275921> **Kanaldaki Son Atılan Mesaja Tepki Eklemek İçin:**
<:hypesquad_events:766651060969930752> \`${ayarlar.prefix}tepki [ emoji ]\`


 \`\`\`                                                                                                         \`\`\`
`)
message.channel.send(emoji)
 } else {
if(args[0].toLowerCase() === 'kayıt'||args[0].toLowerCase() === 'kayıtsistemi'||args[0].toLowerCase() === 'ks') {
 const kayıt = new MessageEmbed()
.setColor('BLUE')
.setTitle('<:kullanici:809143152858497095> Moldup Kayıt Sistemi Menüsü')
.setDescription(`
\`\`\`                                                                                                          \`\`\`

<:degnek:809142151770275921> **Kayıt Sistemini Ayarlamak Veya Sıfırlamak İçin:**
<:kullanici:809143152858497095> \`${ayarlar.prefix}kayıt-ayarlama\`


<:degnek:809142151770275921> **Bir Kullanıcının İsmini Değiştirmek İçin:**
<:kullanici:809143152858497095> \`${ayarlar.prefix}isim [ @kullanıcı ] [ isim ]\`


<:degnek:809142151770275921> **Kayıt Sistemi Ayarlarını Görmek İçin:**
<:kullanici:809143152858497095> \`${ayarlar.prefix}kayıt-bilgi\`


<:degnek:809142151770275921> **Otomatik İsim Sistemini Açmak Veya Kapatmak İçin:**
<:kullanici:809143152858497095> \`${ayarlar.prefix}oto-isim [ isim ]\` **|** \`${ayarlar.prefix}oto-isim-sil\`


<:degnek:809142151770275921> **Bir Kullanıcıyı \`Üye\` Rolü İle Kayıt Etmek İçin:**
<:kullanici:809143152858497095> \`${ayarlar.prefix}üye [ @kullanıcı ] [ isim ]\`


<:degnek:809142151770275921> **Bir Kullanıcıyı \`Erkek\` Rolü Veya Kadın Rolü İle Kayıt Etmek İçin:**
<:kullanici:809143152858497095> \`${ayarlar.prefix}erkek [ @kullanıcı ] [ isim ]\` **|** \`${ayarlar.prefix}kadın [ @kullanıcı ] [ isim ]\`


 \`\`\`                                                                                                         \`\`\`
`)
message.channel.send(kayıt)
 } else {
if(args[0].toLowerCase() === 'moderasyon'||args[0].toLowerCase() === 'mod') {
 const kayıt = new MessageEmbed()
.setColor('BLUE')
.setTitle('<:moderasyon:809140448286212118> Moldup Moderasyon Menüsü')
.setDescription(`
\`\`\`                                                                                                         \`\`\`

<:degnek:809142151770275921> **Birden Fazla Kullanıcıyı Aynı Susturmak İçin:**
<:moderasyon:809140448286212118> \`${ayarlar.prefix}supermute [ @kullanıcılar ] { sebep }\`


<:degnek:809142151770275921> **Birden Fazla Kullanıcının Susturmasını Aynı Anda Kaldırmak İçin:**
<:moderasyon:809140448286212118> \`${ayarlar.prefix}unmute [ @kullanıcılar ] { sebep }\`


 \`\`\`                                                                                                         \`\`\`
`)
message.channel.send(kayıt)
} else {
if(args[0].toLowerCase() === 'karşılama') {
const jail = new MessageEmbed()
.setColor('BLUE')
.setTitle('<:jail:809139843287482379> Moldup Karşılama Menüsü')
.setDescription(`
\`\`\`                                                                                                         \`\`\`

<:degnek:809142151770275921> **Oto Rol Ayarlamak Veya Sıfırlamak İçin:**
<:jail:809139843287482379> \`${ayarlar.prefix}oto-rol [ @rol ]\` **|** \`${ayarlar.prefix}oto-rol-sıfırla\`


<:degnek:809142151770275921> **Özel Mesaj Ayarlamak Veya Sıfırlamak İçin:**
<:jail:809139843287482379> \`${ayarlar.prefix}özel-mesaj <mesaj>\` **|** \`${ayarlar.prefix}özel-mesaj-sıfırla\`


<:degnek:809142151770275921> **Kanala Mesaj Ayarlamak Veya Sıfırlamak İçin:**
<:jail:809139843287482379> \`${ayarlar.prefix}kanal-mesaj [ #kanal ] <mesaj>\` **|** \`${ayarlar.prefix}kanal-mesaj-sıfırla\`


<:degnek:809142151770275921> **Resimli Hoş Geldin Kanalı Ayarlamak Veya Sıfırlamak İçin:**
<:jail:809139843287482379> \`${ayarlar.prefix}resimli-giriş-çıkış [ #kanal ]\` **|** \`${ayarlar.prefix}resimli-giriş-çıkış-kapat\`


<:degnek:809142151770275921> **Resimli Hoş Geldin Resmi Ayarlamak Veya Sıfırlamak İçin:**
<:jail:809139843287482379> \`${ayarlar.prefix}giriş-çıkış-resim [ giriş/çıkış ] [ resim linki ]\` **|** \`${ayarlar.prefix}giriş-çıkış-resim sıfırla\`


<:degnek:809142151770275921> **Ne İşe Yarar?**

<:jail:809139843287482379> **Oto Rol** : Sunucuya yeni katılan üyelere belirlenen rolü verir.
<:jail:809139843287482379> **Özel Mesaj** : Sunucuya yeni katılan üyelere belirlenen mesajı **özelden** gönderir.
<:jail:809139843287482379> **Kanala Mesaj** : Sunucuya yeni bir üye geldiğinde belirlenen kanala belirlenen mesajı gönderir.


\`\`\`                                                                                                         \`\`\`
`)
message.channel.send(jail)
} else {
if(args[0].toLowerCase() === 'çekiliş'||args[0].toLowerCase() === 'giveaways') {
    const cekilis = new MessageEmbed()
    .setColor('BLUE')
    .setTitle('<a:cekilis:822029668294721566> Moldup Çekiliş Menüsü')
    .setDescription(`
    \`\`\`                                                                                                         \`\`\`
    
<:degnek:809142151770275921> **Çekiliş Başlatmak İçin:**
<a:cekilis:822029668294721566> \`${ayarlar.prefix}gbaşlat [ #kanal ] [ süre ] [ kazanan sayısı ] [ ödül ]\`
    
    
<:degnek:809142151770275921> **Çekilişi Yeniden Çekmek İçin:**
<a:cekilis:822029668294721566> \`${ayarlar.prefix}greroll [ çekiliş mesaj ID ]\`
    
    
<:degnek:809142151770275921> **Çekilişi Bitirmek İçin:**
<a:cekilis:822029668294721566> \`${ayarlar.prefix}gbitir [ çekiliş mesaj ID ]\`
       

\`\`\`                                                                                                         \`\`\`
    `)
    message.channel.send(cekilis)
} else {
if(args[0].toLowerCase() === 'sistemler'||args[0].toLowerCase() === 'sistem') {
    const mod = new MessageEmbed()
    .setColor('BLUE')
    .setTitle('<:moderasyon:809140448286212118> Moldup Sistemler Menüsü')
    .setDescription(`
    \`\`\`                                                                                                         \`\`\`
    
<:degnek:809142151770275921> **Nitrosuz Emoji Sistemini Açmak Veya Kapatmak İçin:**
<:moderasyon:809140448286212118> \`${ayarlar.prefix}nitrosuz-emoji-aç\` **|** \`${ayarlar.prefix}nitrosuz-emoji-kapat\`


<:degnek:809142151770275921> **Sa As Sistemini Açmak Veya Kapatmak İçin:**
<:moderasyon:809140448286212118> \`${ayarlar.prefix}sa-as-aç\` **|** \`${ayarlar.prefix}sa-as-kapat\`
    
    
<:degnek:809142151770275921> **Fake Hesap Sistemini Açmak Veya Kapatmak İçin:**
<:moderasyon:809140448286212118> \`${ayarlar.prefix}fake-hesap-aç\` **|** \`${ayarlar.prefix}fake-hesap-kapat\`
    

<:degnek:809142151770275921> **Mesaj Log Sistemini Açmak Veya Kapatmak İçin:**
<:moderasyon:809140448286212118> \`${ayarlar.prefix}mesaj-log [ #kanal ]\` **|** \`${ayarlar.prefix}mesaj-log-kapat\`


\`\`\`                                                                                                         \`\`\`
    `)

    message.channel.send(mod)    
}else{
if(args[0].toLowerCase() === 'eğlence'||args[0].toLowerCase() === 'fun') {
    const fun = new MessageEmbed()
    .setColor('BLUE')
    .setTitle('<:eglence:809143990276456529> Moldup Eğlence Menüsü')
    .setDescription(`
    \`\`\`                                                                                                         \`\`\`    

<:degnek:809142151770275921> **Botla Sohbet Etmek Veya Sohbeti Kapatmak İçin:**
<:eglence:809143990276456529> \`${ayarlar.prefix}sohbet\` **|** \`${ayarlar.prefix}sohbet-kapat\`
    
    
<:degnek:809142151770275921> **İstediğniz Kişiye Triggered Efekti Eklemek İçin:**
<:eglence:809143990276456529> \`${ayarlar.prefix}triggered\` **|** \`${ayarlar.prefix}triggered [ @kullanıcı ]\`
    
    
<:degnek:809142151770275921> **İstediğniz Kişiye RIP Efekti Eklemek İçin:**
<:eglence:809143990276456529> \`${ayarlar.prefix}rip\` **|** \`${ayarlar.prefix}rip [ @kullanıcı ]\`
    

<:degnek:809142151770275921> **İstediğniz Kişiye Hapis Efekti Eklemek İçin:**
<:eglence:809143990276456529> \`${ayarlar.prefix}hapis\` **|** \`${ayarlar.prefix}hapis [ @kullanıcı ]\`                                                                                                


<:degnek:809142151770275921> **İstediğiniz Kişiye Stonks Efekti Eklemek İçin:**
<:eglence:809143990276456529> \`${ayarlar.prefix}stonks\` **|** \`${ayarlar.prefix}stonks [ @kullanıcı ]\`                                                                                                         


<:degnek:809142151770275921> **İstediğiniz Kişiye Eject Efekti Eklemek İçin:**
<:eglence:809143990276456529> \`${ayarlar.prefix}eject\` **|** \`${ayarlar.prefix}eject [ @kullanıcı ]\`                                                                                                         


<:degnek:809142151770275921> **Tweet Atmak (Veya Attırmak) İçin:**
<:eglence:809143990276456529> \`${ayarlar.prefix}tweet [ mesaj ]\` **|** \`${ayarlar.prefix}tweet { @kullanıcı } [ mesaj ]\`       


<:degnek:809142151770275921> **Etiketlediğiniz Kişiyle İsminizi Birleştirmek İçin:**
<:eglence:809143990276456529> \`${ayarlar.prefix}ship [ @kullanıcı ]\`


<:degnek:809142151770275921> **Change My Mind Meemi Atmak İçin:**
<:eglence:809143990276456529> \`${ayarlar.prefix}cmm [ yazı ]\`


<:degnek:809142151770275921> **YouTube Yorumu Atmak İçin:**
<:eglence:809143990276456529> \`${ayarlar.prefix}youtube [ yazı ]\`


\`\`\`                                                                                                         \`\`\`    `)    
  message.channel.send(fun)  
    }else{
if(args[0].toLowerCase() === 'bot'||args[0].toLowerCase() === 'robot') {
    const bot = new MessageEmbed()
    .setColor('BLUE')
    .setTitle('<:bot:809432681192357940> Moldup Bot Menüsü')
    .setDescription(`
    \`\`\`                                                                                                         \`\`\`
    
<:degnek:809142151770275921> **Botu Davet Etmek İçin:**
<:bot:809432681192357940> \`${ayarlar.prefix}davet\`
    
    
<:degnek:809142151770275921> **Botun İstatistiklerini Öğrenmek İçin:**
<:bot:809432681192357940> \`${ayarlar.prefix}istatistik\`
    
    
<:degnek:809142151770275921> **Botta Bulunan Toplam Komuta Bakmak İçin:**
<:bot:809432681192357940> \`${ayarlar.prefix}komutlar\`
    

<:degnek:809142151770275921> **Botun Sitesine Gitmek İçin:**
<:bot:809432681192357940> \`${ayarlar.prefix}site\`


<:degnek:809142151770275921> **Botun Durumunu Takip Etmek İçin:**
<:bot:809432681192357940> \`${ayarlar.prefix}durum-takip\`


<:degnek:809142151770275921> **Botun Dokümanlarına Gitmek İçin:**
<:bot:809432681192357940> \`${ayarlar.prefix}doküman\`


<:degnek:809142151770275921> **Sunucunuzun Bir Parçası Olduğu Shardın Bilgisini Almak İçin:**
<:bot:809432681192357940> \`${ayarlar.prefix}shard-bilgi\`


<:degnek:809142151770275921> **Botun Pingini Öğrenmek İçin:**
<:bot:809432681192357940> \`${ayarlar.prefix}ping\`


\`\`\`                                                                                                         \`\`\`
    `)    
  message.channel.send(bot)        
        
    } else {
        if(args[0].toLowerCase() === 'öneri'||args[0].toLowerCase() === 'suggest') {
            const öneri = new MessageEmbed()
            .setColor('BLUE')
            .setTitle('<:bot:809432681192357940> Moldup Öneri Menüsü')
            .setDescription(`
            \`\`\`                                                                                                         \`\`\`
            
<:degnek:809142151770275921> **Öneri Kanalını Ayarlamak Veya Sıfırlamak İçin:**
<:kayit:809140124621078598> \`${ayarlar.prefix}öneri-kanal [ #kanal ]\` **|** \`${ayarlar.prefix}öneri-kanal-sıfırla\`
            

<:degnek:809142151770275921> **Öneriyi Kabul Etmek Veya Reddetmek İçin:**
<:kayit:809140124621078598> \`${ayarlar.prefix}öneri-kabul <mesajID>\` **|** \`${ayarlar.prefix}öneri-reddet <mesajID> <sebep>\`


<:degnek:809142151770275921> **Öneri Yapmak İçin:**
<:kayit:809140124621078598> \`${ayarlar.prefix}öneri <öneri>\`
        

<:degnek:809142151770275921> **Anket Yapmak İçin:**
<:kayit:809140124621078598> \`${ayarlar.prefix}anket [ soru ]/[ seçenek ], { seçenek (en fazla 10) }\`


        \`\`\`                                                                                                         \`\`\`
            `)    
          message.channel.send(öneri)
        
        
        }     
    }
    }

    }}
}
}
}
}
} 

}
}
}
