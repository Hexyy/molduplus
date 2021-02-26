const { Client , Message , MessageEmbed } = require('discord.js');
const { ayarlar } = require('../../settings/ayarlar')
module.exports = {
 name: 'yardım',
 aliases: ['help' , 'y'] ,
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
.setTitle(`Moldup Yardım Menüsü`)
.setDescription(`
\`\`\`                                                                                                         \`\`\`

<:degnek:809142151770275921> **${ayarlar.prefix}yardım kayıt**
<:kullanici:809143152858497095> **Kayıt Sistemi** menüsünde ki komutları gösterir.

<:degnek:809142151770275921> **${ayarlar.prefix}yardım karşılama**
<:jail:809139843287482379> **Karşılama** menüsünde ki komutları gösterir.


<:degnek:809142151770275921> **${ayarlar.prefix}yardım öneri**
<:kayit:809140124621078598> **Öneri** menüsünde ki komutları gösterir.


<:degnek:809142151770275921> **${ayarlar.prefix}yardım sistemler**
<:moderasyon:809140448286212118> **Sistemler** menüsünde ki komutları gösterir.


<:degnek:809142151770275921> **${ayarlar.prefix}yardım çekiliş**
<a:cekilis:798253124342513735> **Çekiliş** menüsünde ki komutları gösterir.

<:degnek:809142151770275921> **${ayarlar.prefix}yardım moderasyon**
<:menu:809432007766573107> **Moderasyon** menüsünde ki komutları gösterir.


<:degnek:809142151770275921> **${ayarlar.prefix}yardım eğlence**
<:eglence:809143990276456529> **Eğlence** menüsünde ki komutları gösterir.


<:degnek:809142151770275921> **${ayarlar.prefix}yardım bot**
<:bot:809432681192357940> **Bot** menüsünde ki komutları gösterir.


\`\`\`                                                                                                         \`\`\`
`)
.addField(
    `__Linkler__`,
`<a:dev:767649354940547072> **[Moldup Davet Linki](https://bot.moldup.tk/davet.html)\n<a:dev:767649354940547072> [Moldup Destek Sunucusu](https://bot.moldup.tk/destek.html)\n<a:dev:767649354940547072> [Moldup Oy Ver](https://bot.moldup.tk/oy.html)**`    )
message.channel.send(yardım)
} else {
if(args[0].toLowerCase() === 'kayıt'||args[0].toLowerCase() === 'kayıtsistemi') {
 const kayıt = new MessageEmbed()
.setColor('BLUE')
.setTitle('<:kullanici:809143152858497095> Moldup Kayıt Sistemi Menüsü')
.setDescription(`
\`\`\`                                                                                                          \`\`\`

<:degnek:809142151770275921> **Kayıt Sistemini Ayarlamak Veya Sıfırlamak İçin:**
<:kullanici:809143152858497095> \`${ayarlar.prefix}kayıt-ayarlama\`

<:degnek:809142151770275921> **Yeni Gelenlere Otomatik Olarak Bir İsim Vermek İçin:**
<:kullanici:809143152858497095> \`${ayarlar.prefix}oto-isim [ isim ]\`

<:degnek:809142151770275921> **Yeni Gelenlere Otomatik Olarak Bir İsim Vermeyi Kapatmak İçin:**
<:kullanici:809143152858497095> \`${ayarlar.prefix}oto-isim-sil\`

<:degnek:809142151770275921> **Bir Kullanıcının İsmini Değiştirmek İçin:**
<:kullanici:809143152858497095> \`${ayarlar.prefix}isim [ @kullanıcı ] [ isim ]\`

<:degnek:809142151770275921> **Kayıt Sistemi Ayarlarını Görmek İçin:**
<:kullanici:809143152858497095> \`${ayarlar.prefix}kayıt-bilgi\`

<:degnek:809142151770275921> **Bir Kullanıcıyı \`Üye\` Rolü İle Kayıt Etmek İçin:**
<:kullanici:809143152858497095> \`${ayarlar.prefix}üye [ @kullanıcı ] { isim }\`

<:degnek:809142151770275921> **Bir Kullanıcıyı \`Erkek\` Rolü İle Kayıt Etmek İçin:**
<:kullanici:809143152858497095> \`${ayarlar.prefix}erkek [ @kullanıcı ] { isim }\`

<:degnek:809142151770275921> **Bir Kullanıcıyı \`Kadın\` Rolü İle Kayıt Etmek İçin:**
<:kullanici:809143152858497095> \`${ayarlar.prefix}kadın [ @kullanıcı ] { isim }\`
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
    .setTitle('<:cekilis:798233545436561468> Moldup Çekiliş Menüsü')
    .setDescription(`
    \`\`\`                                                                                                         \`\`\`
    
<:degnek:809142151770275921> **Çekiliş Başlatmak İçin:**
<a:cekilis:798253124342513735> \`${ayarlar.prefix}gbaşlat [ #kanal ] [ süre ] [ kazanan sayısı ] [ ödül ]\`
    
    
<:degnek:809142151770275921> **Çekilişi Yeniden Çekmek İçin:**
<a:cekilis:798253124342513735> \`${ayarlar.prefix}greroll [ çekiliş mesaj ID ]\`
    
    
<:degnek:809142151770275921> **Çekilişi Bitirmek İçin:**
<a:cekilis:798253124342513735> \`${ayarlar.prefix}gbitir [ çekiliş mesaj ID ]\`
    
    
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

<:degnek:809142151770275921> **Emojiyi Büyütmek İçin:**
<:eglence:809143990276456529> \`${ayarlar.prefix}büyüt [ :emoji: ]\`
    
    
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
    

<:degnek:809142151770275921> **Bota Oy Vermek İçin:**
<:bot:809432681192357940> \`${ayarlar.prefix}oy\`


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
        
        
        \`\`\`                                                                                                         \`\`\`
            `)    
          message.channel.send(öneri)
        
        
        }     
    }


    }
}
}
}
}
} 


}
}
