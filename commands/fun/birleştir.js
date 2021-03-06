const Discord = require('discord.js');
module.exports = {
    name: 'ship',
    aliases: ['birleştir', 'sevgi'],
    description: 'Etiketlediğiniz kullanıcı ile isminizi birleştirirsiniz.',
    usage: ['ship [ @kullanıcı ]'],
    /** 
    * @param {Discord.Client} client
    * @param {Discord.Message} message
    * @param {String[]} args
    */
    run: async (client, message, args) => {
    
let member = message.mentions.members.first()

if (!member) return message.channel.send(nn.setColor('RED').setDescription(`<:moldup_hayir:783582180113907742> Bir kullanıcı etiketleyerek tekrar deneyiniz.`)).then(a => a.delete({timeout: 10000}));

function combinename(name1,name2){
	var count1=-1,count2=-1;
	var mid1 = Math.ceil(name1.length/2)-1;
	var mid2 = Math.ceil(name2.length/2)-1;
	var noVowel1=false,noVowel2=false;
	for(i=mid1;i>=0;i--){
		count1++;
		if(vowels.includes(name1.charAt(i).toLowerCase())){
			i = -1;
		}else if(i==0){
			noVowel1=true;
		}
	}
	for(i=mid2;i<name2.length;i++){
		count2++;
		if(vowels.includes(name2.charAt(i).toLowerCase())){
			i = name2.length;
		}else if(i==name2.length-1){
			noVowel2=true;
		}
	}

	var name = "";
	if(noVowel1&&noVowel2){
		name = name1.substring(0,mid1+1);
		name += name2.substring(mid2);
	}else if(count1<=count2){
		name = name1.substring(0,mid1-count1+1);
		name += name2.substring(mid2);
	}else{
		name = name1.substring(0,mid1+1);
		name += name2.substring(mid2+count2);
	}
	return name;
}



    var name1 = message.member.displayName
		var name2 = member.displayName
		var name = combinename(name1,name2);
		message.channel.send("**"+name1+"** 💞 **"+name2+"** = **" + name +"**");

}
}
