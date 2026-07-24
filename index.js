const sayilar = require("./sayilar.js");
const pi = 3.14159;
/* Üstteki satırlarda global olarak tanımlanmış değişkenler bulunmaktadır, bunları silmeyin. Alttaki açıklamaları takip ederek görevleri tamamlayın. */

/* ÖRNEK GÖREV: kareninAlani fonksiyonunu kullanarak aşağıdakileri uygulayın:
	1. Karenin kenar uzunluğunu fonksiyonun tek parametresi olarak alacak
	2. Karenin alanını hesaplayacak (💡 İPUCU: karenin alanı = karenin kenar uzunluğunun karesi)
	3. Hesaplanan alanı döndürecek
*/

// Örneğin çözümü:
function kareninAlani(kenaruzunlugu) {
  return kenaruzunlugu * kenaruzunlugu;
}

/* (Oto test yok) Yukarıdaki kareninAlani fonksiyonunu kenar uzunluğu = 10 vererek aşağıda çalıştırıp, sonucu konsolda gözlemleyin (console.log)  */

console.log(kareninAlani(10));

/* GÖREV 1:
- cemberinCevresi fonksiyonunu kullanarak aşağıdaki yönergeleri uygulayın:
	1. cemberinCevresi fonksiyonu parametre olarak sadece çemberin yarıçapını alacaktır.
	2. Global değişken olarak verilmiş pi sayısı fonksiyon içinde kullanılacak (pi sayısı fonksiyonun parametresi olarak alınmayacaktır)
	3. Çemberin çevresi hesaplanacaktır (💡 İPUCU: Çemberin çevresi = 2 * pi * yarıçap)
	4. Hesaplanan çemberin çevresi döndürülecektir.
*/

function cemberinCevresi(cemberinYaricapi) {
  return 2 * pi * cemberinYaricapi;
}

/* (Oto test yok) Yukarıdaki cemberinCevresi fonksiyonunu yarıçap = 5 vererek aşağıda çalıştırıp, sonucu konsolda gözlemleyin (console.log)  */

console.log(cemberinCevresi(5));

/* GÖREV 2:
- cemberinAlani fonksiyonunu kullanarak aşağıdaki yönergeleri uygulayın:
	1. Argüman olarak çemberin yarıçapını BİRİNCİ parametre olacak alacaktır.
	2. Global değişken olarak verilmiş pi sayısını fonksiyonun İKİNCİ parametresi olacak alacaktır.
	3. Çemberin alanı hesaplanacaktır (💡 İPUCU: Çemberin alanı = pi * yarıçapın karesi, yarıçapın karesini bulmak için Javascript içinde tanımlı Math kütüphanesini kullanabilirsiniz. Math.pow(yaricap,2))
	4. Hesaplanan çemberin alanı döndürülecektir.
*/

function cemberinAlani(/* kodlar buraya */) {
  /* kodlar buraya */
}

/* (Oto test yok) Yukarıdaki cemberinAlani fonksiyonunu yarıçap = 15 vererek aşağıda çalıştırıp, sonucu konsolda gözlemleyin (console.log)  */

/* GÖREV 3:
	- Sayfanın en üstünde global değişken olarak tanımlanmış bir sayilar dizisi bulunmaktadır. Bu dizi içinde 0 ile 1000 arasında rasgele oluşturulmuş tam sayılar ve ondalıklı sayılar bulunmaktadır. Bu diziyi kullanarak aşağıdakileri uygulayın:
		3a. enbuyuk ve enkucuk isminde 2 adet değişken tanımlayın ve sayilar dizisindeki en küçük sayı ile en büyük sayıyı bu değişkenlere atayın. (for döngüsü kullanın)

		3b. `ucetambolunenler` adında bir dizi tanımlayın ve bu diziye sayilar dizisindeki 3'ün tam katı olan sayıları atayın (.forEach metodunu kullanın)

		3c. `ucetambolunenler` dizisindeki sayıların toplamını .reduce metoduyla bulup, sonucu `ucebolunenlerintoplami` değişkenine yazdırın (.reduce metodunu kullanın)

		3d. `besyuzdenkucuksayilar` adında bir dizi oluşturarak, sayilar dizisinin içindeki 500'den küçük sayıları bu diziye atayın (.filter metodunu kullanın)

		3e. besyuzdenkucuksayilar dizisindeki sayıları küçükten büyüğe sıralayıp `siralisayilar` adındaki bir diziye aktarın (.sort metodunu kullanın)

		3f. `tekraredensayilar` adında bir dizi oluşturun. sayilar dizisi içerisindeki bazı sayılar birden fazla kere yazılmış. sayilar dizisi içerisinde birden fazla kez yazılmış sayıları tespit ederek kaç kere tekrar edildiğini belirten bir string oluşturulup `tekraredensayilar` dizisine aktarılmasını istiyoruz. Örnek string: "{sayı} sayısı {tekrarSayisi} kere tekrar edilmiştir"
		ÖRNEK: sayilar dizisi içerisinde 45 sayısı 3 kere yazılmış. "45 sayısı 3 tekrar edilmiştir" stringini `tekraredensayilar` dizisine aktaracağız.
		💡 İPUCU: Tekrar edilen sayıları ve kaç kere tekrar edildiğini kaydetmek için bir nesne tanımlamalısınız, bu görevi yapabilmek için en az 2 kere döngü yazmalısınız. Birinci döngüde hangi sayının kaç kere tekrar edildiğini tespit edip, 2. döngüde stringi oluşturup verilen diziye aktarmalısınız.
*/

/* (oto test yok) sayilar dizisi içinde kaç adet sayı olduğunu konsola yazdırın */

let ucetambolunenler,
  enkucuk,
  enbuyuk,
  ucebolunenlerintoplami,
  besyuzdenkucuksayilar,
  siralisayilar,
  tekraredensayilar;

// 3a çözümü

/* kodlar buraya */

// 3b çözümü:

/* kodlar buraya */

// 3c çözümü:

/* kodlar buraya */

// 3d çözümü

/* kodlar buraya */

// 3e çözümü

/* kodlar buraya */

// 3f çözümü

/* kodlar buraya */

/*  Bu satırın aşağısındaki kodları lütfen değiştirmeyin  */
module.exports = {
  cemberinCevresi,
  cemberinAlani,
  ucetambolunenler,
  enbuyuk,
  enkucuk,
  ucebolunenlerintoplami,
  besyuzdenkucuksayilar,
  siralisayilar,
  tekraredensayilar,
};
